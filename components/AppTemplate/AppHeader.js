import Link from 'next/link'

// import GridLayoutTwoColumnsEven from './GridLayout/GridLayoutTwoColumnsEven'
import styles from './AppTemplate.module.css'

export default function AppFooterComponent() {
  return <header className={styles.header}>
    <div className="maxWidthLimitedContainer">
      <div className="flexContainer">
        <nav className={styles.navLeft}>
          <Link href="/">
            <a>Home</a>
          </Link>
          {' | '}
          <Link href="/journals">
            <a>Journals</a>
          </Link>
          {' | '}
          <Link href="/books">
            <a className="wip">Books</a>
          </Link>
          {' | '}
          <Link href="/subjects">
          <a className="wip">Subjects</a>
          </Link>
        </nav>

        <span className={styles.navRight}>
          <Link href="/signin">
            <a className="wip">Sign in</a>
          </Link>
        </span>
      </div>
    </div>
  </header>
}
