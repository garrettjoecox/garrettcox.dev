import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Garrett Cox</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="google-site-verification" content="QKaBf-q9jtSoWsWHrzudNrFiJ70f3xbvvpbASCjtNdQ" />
          <meta name="author" content="Garrett Cox" />
          <meta name="description" content="Garrett Cox's Personal Website" />
          <meta name="keywords" content="Garrett Joe Cox personal website github linkedin" />
          <meta property="og:title" content="Garrett Cox" />
          <meta property="og:description" content="Garrett Cox's Personal Website" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://garrettcox.dev/" />
          <meta property="og:image" content="http://garrettcox.dev/og.png" />
          <link href="/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
