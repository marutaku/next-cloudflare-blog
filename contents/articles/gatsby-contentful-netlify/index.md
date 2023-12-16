---
title: "ブログを作った話"
date: "2019-02-11"
category: "tech"
description: "GatsbyJS+Contentful+Netlifyでブログを作りました。意外と簡単にできたのでまとめます。"
slug: "gatsby-contentful-netlify"
tags: ["JavaScript", "React", "CMS", "Blog"]
heroImage: ./hero.png
---

## はじめに

こんにちは、クソザコエンジニアのまるたくです。

今までは「はてなブログ」を使ってたまに情報発信をしていましたが、せっかくWebエンジニアなので自分でブログを一から作成したいと思っていました。
過去に同じような取り組みはやっていましたが、以下の理由で挫折しました。

#### Github Pages + Reactを使ったブログ作成

大学3年の夏休みを使ってReactを使ってブログを作成していました。
しかし当時の僕は初心者であり今回使っているContentfulのようなサービスがあることを知らなかったため、記事を書くたびにReactでページを追加していました。流石にしんどすぎて一瞬で挫折しました。HTML直書きはまじで大変だった。

#### Django+Bootstrap

成長した僕は次にDjangoとBootstrapを使ってブログを作成しようとしました。ここでReactやVueのようなフロントエンドのフレームワークを使わなかった理由は、自分一人の力でコンポーネントとかを書き出すとえらい目にあうことを学んだのと、そこまでオーバスペックにしなくていいだろうと思ったからです。前回の教訓を生かして、ブログの記事はデータベースに保存することにして、記事自体はDjangoの管理ページからマークダウン形式で書き込めるようにしました。

これはあと少しで公開するところまでこぎつけましたが、飽きてしまったのと卒研の中間発表が重なってモチベーションが下がってしまったためお蔵入りになりました。

以上の経験から僕のブログ作成には以下の要素が必要でした

1. **楽に作れる**
2. 記事をファイルで管理しなくていい
3. できればフロントエンドのフレームワークを使ってイキリたい

そんな時に出会ったのがGatsbyJSとContentfulでした

## GatsbyJSとContentfulについて

#### GatsbyJSについて

GatsbyJSは静的サイトジェネレータの一種で、JAMStackなサイトを作成する事ができるツールです。

<a href="https://www.gatsbyjs.org" class="embedly-card" data-card-width="100%" data-card-controls="0">Embedded content: https://www.gatsbyjs.org</a>

[JAMStack][2]とは、Jsvascript, API, Markupを使ったアプリケーションのことです(LAMPみたいな？)。JAMStackなアプリケーションはデプロイ時にページをビルドするため、パフォーマンスが上がります。多分SSRなんだと思います。
GatsbyJSではReactを使う必要があります。また、データ(画像、Markdownファイル等)の管理にGraphQLを使うため多少勉強する必要がありました。
しかし、ReactもGraphQLも比較的直感的に使えるツールだと思います。

今回のブログでは、[lumen][3]というブログ用のスターターを使っています。デザインを全く変更していないので流石に後で変更したいと思います。

#### Contentfulについて

[Contentful][4]とは、HeadlessCMSと呼ばれる類のサービスです。コンテンツをAPIを通じて配信するので、SPAなどのモダンなWebサイトにも使えます。

ContentfulはRESTful APIだけでなくGraphQLにも対応しているのでGatsbyJSで作ったWebサイトのバックエンドとしても使えます。

<a href="https://www.contentful.com" class="embedly-card" data-card-width="100%" data-card-controls="0">Embedded content: https://www.contentful.com</a>

## 詰まったところ

gatsby-source-contentfulが最新版ではなかったために起きたエラーに悩まされる事件がありました。具体的には

```
...

error Plugin gatsby-source-contentful returned an error

  TypeError: getNode is not a function

...
```

みたいなエラーが発生しました。
このissueに書いてあるように、この問題は過去に修正されています。
<a href="https://github.com/gatsbyjs/gatsby/issues/4906" class="embedly-card" data-card-width="100%" data-card-controls="0">Embedded content: https://github.com/gatsbyjs/gatsby/issues/4906</a>

あとは`gatsby-node.js`の仕様の理解に少し手間取りましたが、ちゃんとドキュメントを読めば多分大丈夫だと思います。

## デプロイの自動化について

ホスティングサービスにはNetlifyを使っています。Netlifyには、Githubに変更をプッシュすると最新版を自動的にデプロイしてくれる機能があります。しかし、Contentfulで行なった更新は検知してくれないため手動デプロイが必要になります。これは面倒なのでContentfulの変更も検知するように設定します。

Contentfulは、コンテンツの更新や削除などの動作ごとに外部APIにPOSTリクエストを送信する事ができます。Netlify では、リクエストを受信した時に勝手にデプロイを開始してくれる機能があります。この機能を組み合わせて自動デプロイの設定を行いました。

## まとめ

まだまだ改良の余地に満ち溢れていますが、とりあえず自作のブログを公開する事ができるようになりました。

サボらずにちゃんと更新していきたいな(願望)

[1]: https://www.gatsbyjs.org/
[2]: https://jamstack.org/
[3]: https://www.gatsbyjs.org/starters/alxshelepenok/gatsby-starter-lumen/
[4]: https://www.contentful.com/
