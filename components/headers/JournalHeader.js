import Link from 'next/link'
import styles from './JournalHeader.module.css'

export default function JournalHeader({ journalData }) {
  return <div className={`mastheadContainer ${styles.mastheadContainer}`}>
    <div className="maxWidthLimitedContainer">
      <h1 className={styles.title}>
        {journalData.name}
      </h1>
      <br />
      <nav className={styles.tabs}>
        <Link href="/journals/[jouralId]" as={`/journals/${journalData.id}`}>
          <a className={`${styles.tab} ${styles.selected}`}>Journal home</a>
        </Link>
        <Link href="/journals/[jouralId]/current-issue" as={`/journals/${journalData.id}/current-issue`}>
          <a className={styles.tab}>Current issue</a>
        </Link>
        <Link href="/journals/[jouralId]/all-issues" as={`/journals/${journalData.id}/all-issues`}>
          <a className={`${styles.tab} wip`}>All issues</a>
        </Link>
        <Link href="/journals/[jouralId]/metrics" as={`/journals/${journalData.id}/metrics`}>
          <a className={`${styles.tab} wip`}>Metrics</a>
        </Link>
      </nav>
    </div>
  </div>
}
