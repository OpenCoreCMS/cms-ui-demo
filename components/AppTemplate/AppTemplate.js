import Head from 'next/head'

import AppHeaderForPrint from './AppHeaderForPrint'
import AppHeaderForScreen from './AppHeaderForScreen'
import AppFooterForScreen from './AppFooterForScreen'
import AppBreadcrumbs from './AppBreadcrumbs'

export default function AppTemplateComponent({
  children,
  title = 'OPP Demo',
  theme = 'default',
  pageType = ''
}) {
  return (
    <div className={`appRootContainer appTheme-${theme} appPageType-${pageType}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <AppHeaderForPrint></AppHeaderForPrint>
      <AppHeaderForScreen></AppHeaderForScreen>

      {pageType !== 'homepage' ? <AppBreadcrumbs></AppBreadcrumbs> : ''}

      {children}

      <AppFooterForScreen></AppFooterForScreen>
    </div>
  )
}
