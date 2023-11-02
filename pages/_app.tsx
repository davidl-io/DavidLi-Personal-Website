import '../styles/globals.css'
import '../styles/fonts.css';

import Navbar from './components/navbar';
import Social from './components/social';

import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider className="bg-custom-blue hover:bg-blend-exclusion">
      {/* Navbar */}
      <Navbar />
      <Social />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
