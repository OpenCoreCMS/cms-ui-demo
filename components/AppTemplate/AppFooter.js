import Link from 'next/link'

import GridLayoutTwoColumnsOdd from '../GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../GridLayout/GridLayoutTwoColumnsOdd.module.css'
import styles from './AppTemplate.module.css'

export default function AppFooterComponent() {
  return <footer className={styles.footer}>
    <div className="maxWidthLimitedContainer">
      <GridLayoutTwoColumnsOdd>
        <div className={GridLayoutTwoColumnsOddStyles.gridBody}>
          <Link href="/about">
            <a>About</a>
          </Link>
          &nbsp; {' | '} &nbsp;
          <Link href="/contact-us">
            <a>
              Contact us
            </a>
          </Link>
          &nbsp; {' | '} &nbsp;
          <Link href="/legal/accessibility">
            <a>
              Accessibility
            </a>
          </Link>
          &nbsp; {' | '} &nbsp;
          <Link href="/legal/terms-of-use">
            <a className="wip">
              Terms of use
            </a>
          </Link>
          &nbsp; {' | '} &nbsp;
          <Link href="/legal/privacy-policy">
            <a className="wip">
              Privacy policy
            </a>
          </Link>
        </div>

        <div className={GridLayoutTwoColumnsOddStyles.gridAside}>
          <a href="https://OpenPublishingPlatform.com" target="_blank" rel="noopener" title="Open Publishing Platform">
            Powered by OPP
          </a>
        </div>
      </GridLayoutTwoColumnsOdd>

    </div>
  </footer>
}
