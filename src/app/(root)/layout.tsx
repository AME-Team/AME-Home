export const metadata = {
  title: 'Taito Amemiya',
}

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/ja" />
      </head>
      <body>{children}</body>
    </html>
  )
}
