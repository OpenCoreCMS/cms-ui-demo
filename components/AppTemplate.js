import Link from 'next/link'
import Head from 'next/head'

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

      <header>
        <div className="maxWidthLimitedContainer">
          <nav>
            <span>
              <img src="/public/opp-logo-500px.png" alt="Open Publishing Platform logo" width="30" />
              Open Publishing Platform
            </span>
            {' | '}
            <Link href="/">
              <a>Home</a>
            </Link>
            {' | '}
            <Link href="/journal">
              <a>Journals</a>
            </Link>
            {' | '}
            <Link href="/about">
              <a>About</a>
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="maxWidthLimitedContainer">
          <a href="https://OpenPublishingPlatform.com" target="_blank">
            Powered by Open Publishing Platform
          </a>

          <a href="/legal/terms-of-use">
            Terms of use
          </a>

          <a href="/legal/privacy-policy">
            Privacy policy
          </a>
        </div>
      </footer>
    </div>
  )
}
