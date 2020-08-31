import Link from 'next/link'

import AppCommonStyles from './AppCommon.module.css'

export default function AppHeaderComponent() {
  return <header className={AppCommonStyles.header} style={{background: '#f7f7f7'}}>
    <div className="maxWidthLimitedContainer">
      <div className="flexContainer">
        <nav className={AppCommonStyles.navLeft}>
          <Link href="/">
            <a className={AppCommonStyles.navItem}>
              <img className={AppCommonStyles.brandLogo} src="/public/oppdp-full-logo-blue.png" />
            </a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="/journals">
            <a className={AppCommonStyles.navItem}>Journals</a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="">
            <a className={`wip ${AppCommonStyles.navItem}`}>Books</a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="">
            <a className={`wip ${AppCommonStyles.navItem}`}>Subjects</a>
          </Link>
        </nav>

        <nav className={AppCommonStyles.navRight}>
          <Link href="">
            <a className={`wip ${AppCommonStyles.navItem}`}>Language</a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="">
            <a className={`wip ${AppCommonStyles.navItem}`}>(0) Cart</a>
          </Link>

          <span className={AppCommonStyles.pipe}></span>

          <Link href="">
            <a className={`wip ${AppCommonStyles.navItem}`}>Sign in</a>
          </Link>
        </nav>
      </div>
    </div>
  </header>
}
