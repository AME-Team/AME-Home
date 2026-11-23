import { redirect } from 'next/navigation'

export default function RootPage(): never {
  // 静的エクスポートでは redirect() が meta refresh を出力する。
  redirect('/ja')
}
