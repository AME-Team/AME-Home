export const metadata = {
  title: 'AME',
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="refresh" content="0; url=/ja" />
      </head>
      <body>{children}</body>
    </html>
  )
}
