import Head from 'next/head'

import AppHeaderForPrint from './AppHeaderForPrint'
import AppHeaderForScreen from './AppHeaderForScreen'
import AppFooterForScreen from './AppFooterForScreen'
import AppBreadcrumbs from './AppBreadcrumbs'

export default function AppTemplateComponent({
  children,
  title = 'Open Core CMS Demo',
  theme = 'default',
  pageType = '',
  url = ''
}) {
  return (
    <div className={`appRootContainer appTheme-${theme} appPageType-${pageType}`}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/public/OpenCoreCMSIcon-64.png" />
      </Head>

      <AppHeaderForPrint></AppHeaderForPrint>
      <AppHeaderForScreen></AppHeaderForScreen>

      {pageType !== 'homepage' ? <AppBreadcrumbs path={url}></AppBreadcrumbs> : ''}

      {children}

      <AppFooterForScreen></AppFooterForScreen>
    </div>
  )
}
