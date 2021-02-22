import { useRouter } from 'next/router'

import AppCommonStyles from './AppCommon.module.css'

export default function AppFooterPrintComponent() {
  const router = useRouter();
  const pathname = router.asPath;

  return <header className={AppCommonStyles.printHeader}>
    <div className="pinned">
      <p><img className={AppCommonStyles.brandLogo} src="/public/OpenCoreCMSIcon-64.png" alt="Open Core CMS logo" /></p>
      <p><strong>This page has been retrieved on:</strong> {(new Date).toLocaleString()}.</p>
      <p><strong>Page URL:</strong> https://localhost:3000{pathname}</p>
    </div>
  </header>
}
