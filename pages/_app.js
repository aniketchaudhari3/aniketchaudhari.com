import Head from 'next/head'
import main from '../styles/main.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aniket Chaudhari - Full-Stack Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
        <link href={main} rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://use.fontawesome.com/23f43657a5.js"></script>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-SRY2B654Q4"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || []
            function gtag() { dataLayer.push(arguments) }
            gtag('js', new Date())
            gtag('config', 'G-SRY2B654Q4')
        `,
          }}
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
