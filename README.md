# 飴屋MUSASHI LP/HP

React + Vite で実装した飴屋MUSASHIのLP/ブログページです。

## ページ

- `/` : LPトップ
- `/blog` : ブログ一覧

## Cloudflare Pages

Cloudflare Pagesでは以下の設定でデプロイできます。

- Framework preset: `Vite`
- Build command: `bun run build`
- Build output directory: `dist`
- Root directory: このプロジェクト直下

`public/_redirects` にSPA向けのリダイレクトを入れているため、`/blog` へ直接アクセスしても表示できます。

## ローカル確認

```bash
bun install
bun run build
```

プロジェクト指示により、こちらでは開発サーバーは起動していません。
