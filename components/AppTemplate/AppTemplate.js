import Head from 'next/head'

import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

export default function AppTemplateComponent({
  children,
  title = 'OPP Demo',
}) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <AppHeader></AppHeader>

      {children}

      <AppFooter></AppFooter>
    </div>
  )
}
