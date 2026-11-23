export const metadata = {
  title: 'AME',
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
