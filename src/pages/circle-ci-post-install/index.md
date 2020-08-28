---
title: postinstallでcircle ciが失敗した件
date: "2020-08-28"
---

## Circle ci のテストが失敗する

先日あるブランチで Circle Ci のテストが急に落ちました。私は全然 circle ci の経験がなく、今まで落ちたことがないのでとても焦りました。とりあえず落ち着いて、エラーメッセージを読んでみました。落ちたテストは、Circle CI は`yarn install && lerna bootstrap`して各パッケージの依存関係を解決するテストでした。

```shell
Module not Found: Error: Cannot resolve
'hogehoge/new-package' in '/home/circleci/workspace/packages/old-package/src'
```

"old-package"が依存先の"new-package"を解決できてないみたいですね。このプロジェクトはモノレポで構成されており、このブランチは新しい package (new-package)を追加し、それを他の package (old-package)が参照するコミットが含まれていたので、エラーには心当たりはありました。

"じゃあローカルで全体をビルドしてそこからデバッグしたろ"と思い、project の root で
`lerna bootstrap`
を実行してみたら、普通に成功しました。なんでだろう。

よくよくエラーメッセージを読んでみたら、以下のコマンドが実行されていました。

```shell
yarn build
```

依存をインストールするテストであるのに、なぜか`yarn build`が走っていました。

不自然に思いながら、各 package の`package.json`を読んでいると、`old-package`の package.json で`yarn build`が`postinstall`という script で実行されていました。

## postinstall

`postinstall`コマンドは聴き馴染みのないコマンドなので、ググってみると、npm scripts に以下のような説明がありました。

`postinstall: Run AFTER the package is installed.`

postinstall は install が実行された後に、自動的に実行される script のようです。
つまり今回の circle ci のテストが失敗した原因は依存をインストールした後、`postinstall: yarn build`が実行され、他の package の依存が解決される前に`new-package`を参照している`old-package`がビルドされ、`new-package`を参照できずにエラーになったというわけでした。

##解決策
解決策として、yarn と lerna で`postinstall`を回避すればよかったです。

`yarn install --ignore-scripts && lerna bootstrap -- --ignore-scripts`

`yarn install --ignore-scripts`は npm lifecycle の scripts を無視します(yarn install の場合、preinstall, postinstall, prepublish は無視されます)。`lerna bootstrap`でも postinstall が走るので、ここも`-- --ignore-scripts`で無視する必要があります。

解決してよかったです。
