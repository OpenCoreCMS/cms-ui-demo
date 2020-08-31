import Link from 'next/link'

import AppCommonStyles from './AppCommon.module.css'

export default function AppFooterComponent() {
  return <footer className={AppCommonStyles.footer}>
    <div className="maxWidthLimitedContainer">
      <div className="flexContainer">
        <nav className={AppCommonStyles.navLeft}>
          <Link href="/help/about">
            <a className={AppCommonStyles.navItem}>About</a>
          </Link>
          <span className={AppCommonStyles.pipe}></span>
          <Link href="/help/contact-us">
            <a className={AppCommonStyles.navItem}>
              Contact us
            </a>
          </Link>
          <span className={AppCommonStyles.pipe}></span>
          <Link href="/legal/accessibility">
            <a className={AppCommonStyles.navItem}>
              Accessibility
            </a>
          </Link>
          <span className={AppCommonStyles.pipe}></span>
          <Link href="/legal/terms-of-use">
            <a className={AppCommonStyles.navItem}>
              Terms of use
            </a>
          </Link>
          <span className={AppCommonStyles.pipe}></span>
          <Link href="/legal/privacy-policy">
            <a className={AppCommonStyles.navItem}>
              Privacy policy
            </a>
          </Link>
        </nav>

        <nav className={AppCommonStyles.navRight}>
          <span className={AppCommonStyles.pipe}></span>
          <a className={AppCommonStyles.navItem} href="https://OpenPublishingPlatform.com" target="_blank" rel="noopener" title="Open Publishing Platform">
            Powered by OPP
          </a>
        </nav>
      </div>

    </div>
  </footer>
}