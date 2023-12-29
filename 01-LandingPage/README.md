# ポートフォリオ ランディングページ

このプロジェクトは私のポートフォリオをオンラインでアピールするためのランディングページです。以下は、プロジェクトの概要と主な特徴です。

## 概要

ランディングページは、私のスキルやプロジェクトを簡潔かつ魅力的に紹介することを目的としています。

## 主な特徴

### 全般的な特徴

* **型安全な開発**: TypeScriptを採用し、フロントエンドとバックエンドの双方で堅牢な型安全性を確保しています。
* **総合的な技術スタック**:  Next.js、React、Nest.js、およびTypeORMなどの包括的な技術スタックを利用し、シームレスで効率的な開発を実現しています。

### フロントエンド

* **Next.jsの活用**: Reactの最新機能を統合したApp Routerを用いて、高度なフロントエンドアプリケーションを構築しています。

### バックエンド

* **Nest.jsを採用**: 堅牢で拡張可能なバックエンドAPIを実現し、効果的な開発をサポートしています。
* **TypeORMの活用**: TypeScriptでORMを組み合わせ、データベースとの効果的なやり取りを実現しています。
* **SQLiteの採用**: 軽量なデータ操作のためにSQLiteを選び、データベースサーバーを導入せずに利用しています。

### テスト

* **Jest & Supertest & vitestによる品質保証**: ユニットテストとAPIエンドポイントの自動化されたテストにより、堅牢なコード品質を確保しています。

### デプロイ

* **自動化されたCI/CDパイプライン**: GitHub Actionsを利用して、効率的かつ信頼性の高いデプロイが実現されています。
* **AWSサービスの統合**: AWS ECR、ECS、およびALBを組み合わせて、スケーラブルで安定した本番環境を構築しています。

### その他

* **Pythonの活用**:  YAMLファイルをJSONとMDに変換するためにPythonを使用しています。
* **Swaggerを活用したAPI管理**: Swagger Codegenから自動生成された型を基に開発を行い、APIの効率的な管理を実現しています。

これらの特徴により、プロジェクトは高い品質と柔軟性を兼ね備え、効率的かつ堅牢な開発を提供しています。

## インストールと実行

### 1. リポジトリをクローンします。

```bash
git init .
git config core.sparsecheckout true
echo 01-LandingPage > .git/info/sparse-checkout
git remote add origin git@github.com:cdq73700/portfolios.git
git pull origin main
```

### 2. プロジェクトのディレクトリに移動します。

```bash
cd 01-LandingPage
```

### 3. 実行手順

プロジェクトのセットアップについての詳細な手順は、 [SETUP](/01-LandingPage/Document/01-SETUP.md) を参照してください。

## 技術スタック

### フロントエンド

* TypeScript
* Next.Js
* React
* vitest

### バックエンド

* TypeScript
* Nest.Js
* TypeORM
* Jest
* supertest
* SQLite

### デプロイ

* Git hub
* git hub Actions
* AWS ECR
* AWS ECS
* AWS ALB

### その他

* Python
* swagger editer
* swagger codegen

## ライセンス

本プロジェクトは、MIT ライセンスの下で提供されています。ライセンス全文はリポジトリ内の [LICENSE](/01-LandingPage/LICENSE) ファイルで確認できます。

また、本プロジェクトで使用されたサードパーティのパッケージやツールには、それぞれのライセンスが適用されています。これらのライセンスについての詳細は、[license](/01-LandingPage/license/md) ディレクトリ内の各ファイルを参照してください。

このプロジェクトを利用する際には、本ライセンスおよびサードパーティのライセンスに同意したものと見なされます。詳細なライセンス情報に関して疑問がある場合は、各ライセンスの該当文書を参照するか、開発者にお問い合わせください。

これにより、MIT ライセンスに基づく使用条件がクリアになり、サードパーティのライセンスに対する利用者への明示的な案内も提供されます。
