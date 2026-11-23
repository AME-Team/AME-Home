/**
 * ルートは ja へ送るだけのページ。
 * `output: 'export'` では redirect() がエラーページになるため、meta refresh を使う。
 * basePath（GitHub Pages の /AME-Home）でも解決できるよう相対 URL にしている。
 * このルートグループは globals.css を読み込まないため、クラスは付けない。
 */
export default function RootPage(): React.ReactNode {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=./ja" />
      <main style={{ fontFamily: 'sans-serif', padding: '64px 24px', lineHeight: 1.7 }}>
        <p>
          <a href="./ja">日本語</a> / <a href="./en">English</a>
        </p>
      </main>
    </>
  )
}
