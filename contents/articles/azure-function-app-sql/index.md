---
title: "Azure function AppからSQLデータベースへの接続で詰まった"
date: "2019-07-01"
category: "tech"
description: "Function AppとSQLデータベースが連携しない。ドライバのバージョンの問題だった"
slug: "azure-function-app-sql"
tags: ["Azure", "Function App"]
heroImage: ./hero.png
---

## 経緯

学生でもクレカを登録せずに気軽に使えるということで、Azureで最近遊んでいます。　　<br>
arxivの論文を適当に取得してきてアブストを翻訳してSlackに投げつけるシステムが作りたかったので、Azure Function Appを使って作っています。その過程でDBが必要になったので学生が無料で使えるSQLデータベースを借りてDBサーバを立てました。<br>
秒速でサーバができてテクノロジーすげーってなりました(小並感)。<br>

## 問題

ここでAzure Function AppとSQLServerを接続できない問題が発生しました。MySQLと勝手が違って全くわからない。 <br>  
Microsoftのページには、

> SQLデータベースのコンソールから取得できる接続文字列を環境変数に入れればできるよ(超意訳)

<a href="https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-scenario-database-table-cleanup" class="embedly-card" data-card-width="100%" data-card-controls="0">Embedded content: https://docs.microsoft.com/ja-jp/azure/azure-functions/functions-scenario-database-table-cleanup</a>

って書いてあるので環境変数に突っ込むも動かず…。<br>
ドキュメントにもそれ以上のことが書いていないので3日間くらい困りました。

## 解決

<a href="https://github.com/Azure/azure-functions-python-worker/issues/249#issuecomment-500167555" class="embedly-card" data-card-width="100%" data-card-controls="0">Embedded content: https://github.com/Azure/azure-functions-python-worker/issues/249#issuecomment-500167555</a>
上記のリンクに書いてある通り、接続文字列の中の

```
ODBC Driver 13 for SQL Server
```

を

```
ODBC Driver 17 for SQL Server
```

に変更すれば解決します。ドライバのバーションが変わってたみたいです。

## 終わりに

就活でのアピールがてら記事を書いてみました。<br>
次は今作っているシステムの完成系が見せれられたらいいなと思っています。
