# AME-Home (雨宮 泰斗 ポートフォリオ)

雨宮 泰斗（Taito Amemiya）のポートフォリオサイトです。
「ITエンジニア × 音楽家」という2つの専門性を表現し、「論理（IT/Code）」と「感性（Music/Score）」を対比させたモダンなデザインをコンセプトにしています。

## 技術スタック

- **Framework:** Next.js (App Router)
- **Deployment:** GitHub Pages (Static Export / 完全静的サイト)
- **Styling:** Tailwind CSS
- **Icons:** Lucide-react

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発用サーバーの起動 (localhost:3000)
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

## デプロイ（GitHub Pages）

このプロジェクトは GitHub Pages へのデプロイを前提としており、`next.config.ts` にて `output: 'export'` が設定されています。
`.github/workflows/deploy.yml` により、GitHub の `main` ブランチにプッシュされた際、GitHub Actions を通じて自動的に静的サイトとしてビルドされデプロイが行われます。

手動で静的ファイルをビルドする場合は、以下のコマンドを実行します。

```bash
npm run build
```

ビルドされた静的ファイルは `out/` ディレクトリに出力されます。

## 主要ディレクトリ構成

- `src/app/page.tsx`: ポートフォリオのメインページ
- `src/components/`: サイトを構成する各コンポーネント
  - `layout/`: Header, Footer など
  - `sections/`: Hero, About, IT, Music, Works, Contact などの各セクション
- `.github/workflows/deploy.yml`: GitHub Actions のデプロイ設定
