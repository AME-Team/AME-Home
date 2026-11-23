# AME-Home

AME の活動をまとめた静的サイトです。楽譜（Piascore / YouTube）、ソフトウェア（GitHub）、記事（Note / Qiita）への導線と、最新の公開物を一か所に集めています。

デザインは [AME-Design-Skills](https://github.com/AME-Team/AME-Design-Skills) の `ame-ui-philosophy` / `ame-ui-typography` に準拠しています。

## 技術スタック

- **Framework:** Next.js（App Router / Static Export）
- **Deployment:** GitHub Pages
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react

## 開発

```bash
npm install
npm run dev # http://localhost:3000/ja
```

## 検証

```bash
npm run typecheck
npm run lint:strict
npm run format:check
npm run build
```

`npm run build` は `out/` に静的ファイルを出力します。プレビューは `npx serve out` で確認できます。

## デプロイ

`.github/workflows/deploy.yml` が `main` への push で GitHub Pages に配信します。`next.config.ts` の `basePath` は GitHub Actions 上でリポジトリ名から自動設定されます。

## 構成

- `src/app/(i18n)/[lang]/`: ページ本体（`ja` / `en`）
- `src/components/layout/`: Header / Footer / Section / Logo
- `src/components/sections/`: Hero / Music / Software / AtCoderStatus / Writing / About
- `src/components/theme/`: ライト・ダーク・システムのテーマ切替
- `src/data/site.ts`: 楽譜・リポジトリ・記事・外部リンクの一覧（更新はここ）
- `src/dictionaries/`: 日本語・英語の文言

## コンテンツ更新

楽譜を追加したときは `src/data/site.ts` の `SCORES` に、記事を追加したときは `POSTS` に追記します。日付は `YYYY-MM-DD` 形式で、表示はロケールに合わせて `Intl` で整形されます。掲載内容はビルド時点の情報です。
