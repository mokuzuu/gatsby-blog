---
title: Clearn Architectureの原本読んでみた　チャプター2
date: "2018-08-23"
featuredImage: './clean-architecture.jpeg'
---
## Clean Architecture チャプター2
### 概要
チャプター2ではアーキテクチャに触れる前に、そもそものソフトウェア開発で重要な、ステークホルダーと開発者（ビジネスと開発）について説明し、そこから見えてくる本質的に求められるアーキテクチャについて語っています。

### ステークホルダーにとってのソフトウェアの価値
ステークホルダーにとって、エンジニアはソフトウェアの重要な二つの価値を提供するために働いています。
- 挙動(behavior)
  - ステークホルダーが思った通りの動作をするよう実装すること。
- アーキテクチャ(Architecture)
  - ソフトウェアに簡単に変更を加えられるように設計すること. (Soft: 変更が容易な ware: 製品　hardwareは逆で変更が加えづらい)

ステークホルダーが考える”ソフトウェアへの変更”の観点は、もし彼らにとって一貫性のある似たような変更であったとしても、エンジニアにとってその変更を実装することはバラバラのジグソーパスルを無理やり形にするようなものに近いです。（そしてそのパズルはどんどん複雑性が増し、作りにくく、壊れやすくなります..)

このようなことが起こる原因は、アーキテクチャです。良いアーキテクチャは、変化に対応します。もしあなたの作っているソフトウェアがある特定の機能を実装することに優れていたとしても、もし要望が変わり、機能が変わった時にもたつく場合、良いアーキテクチャとは言えないでしょう。

### Behavior vs Architecture
機能かアーキテクチャか、どっちが重要という問題は、"システムが動くようにすることか、システムに変更を加えやすくすること、どちらが大事？"　という質問をすることで明らかにすることができます。

もし、ビジネスのマネージャーにこの質問をすれば、きっと"システムが動くこと"と答えるでしょう。そして、多くのエンジニアも、同じようにこたえるはずです。しかしこれは間違いでしょう。

例えば、"ある特定の機能は完璧にこなすが、二度と変更が加えられないシステム"と"機能が完璧ではないが、変更が簡単に加えられるシステム"だとどちらがいいでしょう？おそらく後者です。なぜならステークホルダーの要望が変わった時に、前者は使い物にならなくなり、後者はそれに素早く対応できるからです。

実務で、全く変更が加えられないソフトウェアというものは存在しませんが、プロダクトに変更を加えるための予算が、見返りに見合わないといったケースは存在します。ソフトウェアエンジニアは、このようなことを回避するため、ビジネスマネージャーと議論し、できるだけ早い段階でアーキテクチャを改善することをしましょう。