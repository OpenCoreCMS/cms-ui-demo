import Link from 'next/link'
import styles from './JournalHeader.module.css'

export default function JournalHeader({ journalId }) {
  return <div className="mastheadContainer">
    <div className="maxWidthLimitedContainer">
      <h1 className={styles.title}>
        {journalId}
      </h1>
      <br />
      <nav className={styles.tabs}>
        <Link href="/journals/[jouralId]" as={`/journals/${journalId}`}>
          <a className={`${styles.tab} ${styles.selected}`}>Journal home</a>
        </Link>
        <Link href="/journals/[jouralId]/current-issue" as={`/journals/${journalId}/current-issue`}>
          <a className={styles.tab}>Current issue</a>
        </Link>
        <Link href="/journals/[jouralId]/all-issues" as={`/journals/${journalId}/all-issues`}>
          <a className={styles.tab}>All issues</a>
        </Link>
        <Link href="/journals/[jouralId]/most-read" as={`/journals/${journalId}/most-read`}>
          <a className={styles.tab}>Most read</a>
        </Link>
      </nav>
    </div>
  </div>
}
