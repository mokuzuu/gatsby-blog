---
title: Clean Architectureで作るReact application
date: "2020-08-23"
---

## はじめに
これは著者がClean Architectureの学習のために作成したReactのアプリケーションの備忘録のようなものです。間違っている箇所もあるかもしれませんので、その場合はgithubにissueを立てて、お知らせ頂けたら幸いです。

## 初秋
夏も終わり、秋が近づいて来ましたね。著者はオーストラリアにいるので、逆に夏に向かっているですが、日本のことを思うと秋が恋しくなります。秋と言えば勉学の秋とも言いますが、先日このようなtweetを見つけました。

## とにかく
著者はフリーランスのエンジニアとして生計を立てているのですが、著者ほどの小規模なフリーランサーは多機能な会計アプリをお金を払ってまで使おうとはあまり思いません(他の方は違うかもしれません)。ですが、Google spreadsheetを使うのもだんだん辛くなって来ました。
なので、著者のユーズケースに合うアプリケーションを開発しようと思いました。

## アクター
出てくるアクターは全部で二つです。
- 会計士(家計簿をつけるので)
  - 家系簿アプリを使用し、出費を管理する
  - 税金を引いた収入から、設定してある貯金額をだし、口座にいれる。
  - 目標貯金額までの金額を更新。
  - 余った分で、固定費を割り出し、口座に入れる。``
  - 余った分を生活費、贅沢費に当てる。
- フリーランスエンジニア
  - 月々の収入を把握
  - 日本の収入をオーストラリアドルに変換し、税金を計算する。
  - 税金を口座に振り込み、残りを生活費

## ユーザーストーリ-
以下が粒度の大きいユーザーストーリです。
- 会計士として、月々の固定費、生活費、貯金額を設定したい、なぜならその額を毎月特定の口座に記帳したいから
- 会計士として、目標の貯金額を設定したい。なぜなら、貯金口座の額が目標貯金額にどれほど近づいているか知ることはモチベーションになり、貯金を捗らせるから。
- 会計士として、月々の出費を記録したい。なぜなら、生活費、固定費口座を更新したいから。(詳細はアプリで管理しているので必要ない)
- 会計士として、税金を引いた収入から自動的に各口座に記帳したい。なぜなら、
- フリーランスエンジニアとして、収入からの税金を計算し、口座に記帳したい。なぜなら、月々の税金を把握することで、税金の支払いをすることができるから。

## レイヤーの切り離し
以下のレイヤーで切り離しが可能だと考えます。
- UI
- アプリケーション特有のビジネスルール
- アプリケーションに依存しないビジネスルール

## 


