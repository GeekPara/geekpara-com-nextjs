import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-cmn-hans" className="scroll-smooth">

      {/* custom head */}
      <Head>

        {/* favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />

        {/* font optimization */}
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=fallback"
            rel="stylesheet"
          />

      </Head>

      <body className="font-inter antialiased bg-white text-gray-900 tracking-tight">

        <Main />
        <NextScript />
        
      </body>

    </Html>
  )
}
