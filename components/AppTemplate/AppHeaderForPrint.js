import { useRouter } from 'next/router'

import AppCommonStyles from './AppCommon.module.css'

export default function AppFooterPrintComponent() {
  const router = useRouter();
  const pathname = router.asPath;

  return <header className={AppCommonStyles.printHeader}>
    <div className="pinned">
      <p><img className={AppCommonStyles.brandLogo} src="/public/oppdp-full-logo-grey.png" alt="OPP Demo Platform logo" /></p>
      <p><strong>This page has been retrieved on:</strong> {(new Date).toLocaleString()}.</p>
      <p><strong>Page URL:</strong> https://localhost:3000{pathname}</p>
    </div>
  </header>
}
