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
          <nav className="navLeft">
            <span>
              <img src="/public/opp-logo-500px.png" alt="Open Publishing Platform logo" width="30" />
              OPP Demo
            </span>
            {' | '}
            <Link href="/">
              <a>Home</a>
            </Link>
            {' | '}
            <Link href="/subjects">
              <a>Browse by subject</a>
            </Link>
            {' | '}
            <Link href="/journals">
              <a>Journals</a>
            </Link>
            {' | '}
            <Link href="/books">
              <a>Books</a>
            </Link>
            {' | '}
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>

          <nav className="navRight">
            <Link href="/signin">
              <a>Sign in</a>
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className={styles.footer}>
        <div className="maxWidthLimitedContainer">

          <div className={styles.row}>
            <Link href="/legal/terms-of-use">
              <a>
              Terms of use
              </a>
            </Link>
            {' | '}
            <Link href="/legal/privacy-policy">
              <a>
              Privacy policy
              </a>
            </Link>
          </div>

          <div className={styles.row}>
            <a href="https://OpenPublishingPlatform.com" target="_blank">
              Powered by Open Publishing Platform
            </a>
          </div>

        </div>
      </footer>
    </div>
  )
}
