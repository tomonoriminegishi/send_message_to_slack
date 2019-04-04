# send_message_to_slack

AWS Iot Buttonに反応してSlackへメッセージを送るLambdaを作成しました。

実物は、これです。↓

https://twitter.com/iijima_wataru/status/1113712460437966848

（※twitterの動画は、会社の別の人が作成してくれました。）

## 準備

特に難しいことはないかと思います。
インストールするものはないので、AWSコンソール上で直接書いてしまっても良いかもしれません。

### Lambdaの作成

* ランタイム：Node.js 8.10
* アクセス権限：基本的なLambdaアクセス権限で新しいロールを作成

### 環境変数を2つ作成する

| 環境変数名 | 説明 |
|:-----------|------------:|
| TEXT       | Slackへ送るメッセージ |
| WEB_HOOK_URL     | SlackのWebhook URL |

