import siteConfig from '@data/siteconfig.json'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang={siteConfig.locale}>
        <Head>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Nunito&display=swap'
            rel='stylesheet'
          />
          <meta property='og:title' content={siteConfig.title} />
          <meta property='og:url' content={siteConfig.url} />
          <meta property='og:type' content='website' />
          <meta name='description' content={siteConfig.description} />
          <meta property='og:image' content={siteConfig.assets.avatar} />
          <meta property='og:locale' content={siteConfig.locale} />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={siteConfig.title} />
          <meta name='twitter:description' content={siteConfig.description} />
          <meta name='twitter:url' content={siteConfig.url} />
          <meta name='twitter:image' content={siteConfig.assets.avatar} />
          <link rel='shortcut icon' href={siteConfig.assets.favicon} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
