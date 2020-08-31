import Link from 'next/link'
import Head from 'next/head'

import styles from './AppTemplate.module.css'

export default function AppTemplate({
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

      <header className={styles.header}>
        <div className="maxWidthLimitedContainer">
          <div className="flexContainer">
            <nav className={styles.navLeft}>
              <Link href="/">
                <a>Home</a>
              </Link>
              {' | '}
              <Link href="/subjects">
                <a className="hide">Browse by subject</a>
              </Link>

              <Link href="/journals">
                <a>Journals</a>
              </Link>
              {' | '}
              <Link href="/books">
                <a className="hide">Books</a>
              </Link>

              <Link href="/about">
                <a>About</a>
              </Link>
            </nav>

            <span className={styles.navRight}>
              <Link href="/signin">
                <a className="hide">Sign in</a>
              </Link>
            </span>
          </div>
        </div>
      </header>

      {children}

      <footer className={styles.footer}>
        <div className="maxWidthLimitedContainer">

          <div className={styles.row}>
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
              <a>
                Terms of use
              </a>
            </Link>
            &nbsp; {' | '} &nbsp;
            <Link href="/legal/privacy-policy">
              <a>
                Privacy policy
              </a>
            </Link>
          </div>

          <div className={styles.row}>
            <a href="https://OpenPublishingPlatform.com" target="_blank" title="Open Publishing Platform">
              Powered by OPP
            </a>
          </div>

        </div>
      </footer>
    </div>
  )
}
