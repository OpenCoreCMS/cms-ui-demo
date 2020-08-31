import Head from 'next/head'

import AppHeaderForPrint from './AppHeaderForPrint'
import AppHeaderForScreen from './AppHeaderForScreen'
import AppFooterForScreen from './AppFooterForScreen'
import AppBreadcrumbs from './AppBreadcrumbs'

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

      <AppHeaderForPrint></AppHeaderForPrint>
      <AppHeaderForScreen></AppHeaderForScreen>

      <AppBreadcrumbs></AppBreadcrumbs>

      {children}

      <AppFooterForScreen></AppFooterForScreen>
    </div>
  )
}
