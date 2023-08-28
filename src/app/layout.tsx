'use client'

import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { useState } from 'react'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Website Color Viewer',
  description: 'See in real time the color palettes in a pre-builded website and use your creativity to create amazings wesite designs',
}

const changeLang = () => {
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // interface StateApp {
  //   lang: string,
  //   color1: string,
  //   color2: string,
  //   color3: string,
  //   color4: string,
  // }

  // const [state, setState] = useState<Array<StateApp>>([]);

  return (
    <html lang="en">
      <body className={nunito.className}>
        {children}
        </body>
    </html>
  )
}
