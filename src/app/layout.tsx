import './globals.css'
import ChakraProvider from './components/ChakraWrapper'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'
import { ColorModeScript } from 'nextjs-color-mode'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
          <Header/>
            {children}
          <Footer/>
        </ChakraProvider>
        </body>
    </html>
  )
}
