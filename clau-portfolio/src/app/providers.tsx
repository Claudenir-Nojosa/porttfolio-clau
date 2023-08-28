'use client'

import { ThemeProvider } from 'next-themes'

type Props = {
  children: any
}

export default function Providers({ children }:Props) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}