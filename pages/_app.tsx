import '../styles/style.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Hi I'm Adil 👋</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
