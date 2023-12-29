# 1. ローカルSSL証明書の発行手順

ローカルのSSL証明書を発行するために、以下の手順を実行してください。

### 1.1 Docker Composeを使用してOpenSSLコンテナを起動

```bash
docker compose up openssl -d --build
```

これにより、OpenSSL用のDockerコンテナがビルドを行った後バックグラウンドで起動します。

### 1.2 OpenSSLコンテナ内で証明書の発行スクリプトを実行

```bash
docker compose run --rm openssl ./setup-nginx.sh
```

このスクリプトは、Nginxで使用するローカルSSL証明書を生成し、必要なファイルを作成します。

### 1.3 Docker Composeを使用してOpenSSLコンテナを停止

```bash
docker compose stop openssl
```

これにより、OpenSSL用のDockerコンテナが停止します。

# 2. Nginx、Frontend、Backendの起動手順

Nginx、Frontend、Backendを含む全体のシステムを起動する手順は以下の通りです。

```bash
docker compose up -d --build
```

これにより、各サービスがビルドを行った後バックグラウンドで実行されます。

# 3. SQLiteのデータベース作成と初期化

Backendに必要なSQLiteデータベースを作成し、マイグレーションとシードデータの適用を行います。

```bash
docker compose run --rm backend sh -c ' \
    npm run typeorm migration:run -- -d ./data-source-cli.ts && \
    npm run seed:run -- -d ./data-source-cli.ts'
```

このコマンドは、TypeORMを使用してマイグレーションを実行し、データベースに初期データを挿入します。


# 4. Backendの実行

Backendサービスを実行します。

```bash
docker compose exec backend bash -c 'npm start'
```

これにより、Backendが起動し、APIやサービスが利用可能になります。

# 5. Frontendの実行

Frontendサービスを実行します。

```bash
docker compose exec frontend bash -c 'npm run dev'
```

このコマンドは、Frontend開発サーバーを起動し、プロジェクトを開発モードで実行します。

これで、全体のシステムが稼働しています。必要に応じて各サービスのログやデバッグ情報を確認してください。

# 6. 画面の表示

ランディングページの表示方法は下記のURLをブラウザーで表示する。

https://localhost:8000

# 7. Nginx、Frontend、Backendの停止

```bash
docker compose stop
```

これにより、各サービスが停止されます。