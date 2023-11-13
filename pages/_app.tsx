import '../styles/globals.css'
import '../styles/fonts.css';

import Navbar from './components/navbar';

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
