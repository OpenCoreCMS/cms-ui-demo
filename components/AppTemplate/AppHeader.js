import Link from 'next/link'

import AppCommonStyles from './AppCommon.module.css'

export default function AppFooterComponent() {
  return <header className={AppCommonStyles.header}>
    <div className="maxWidthLimitedContainer">
      <div className="flexContainer">
        <nav className={AppCommonStyles.navLeft}>
          <Link href="/">
            <a className={AppCommonStyles.navItem}>
              <img className={AppCommonStyles.brandLogo} src="/public/oppdp-logo-blue.png" />
            </a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="/journals">
            <a className={AppCommonStyles.navItem}>Journals</a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="/books">
            <a className={`wip ${AppCommonStyles.navItem}`}>Books</a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="/subjects">
            <a className={`wip ${AppCommonStyles.navItem}`}>Subjects</a>
          </Link>
        </nav>

        <nav className={AppCommonStyles.navRight}>
          <span className={AppCommonStyles.pipe}></span>

          <Link href="/signin">
            <a className={`wip ${AppCommonStyles.navItem}`}>Sign in</a>
          </Link>
        </nav>
      </div>
    </div>
  </header>
}
