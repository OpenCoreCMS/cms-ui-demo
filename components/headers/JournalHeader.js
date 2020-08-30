import Link from 'next/link'
import styles from './JournalHeader.module.css'

export default function JournalHeader({
  children,
  journalId
}) {
  return <div className="mastheadContainer">
    <div className="maxWidthLimitedContainer">
      <h1 className={styles.title}>
        {journalId}
      </h1>
      <br />
      <nav>
        <Link href="/journals/[jouralId]" as={`/journals/${journalId}`}>
          <a>Journal home</a>
        </Link>
        {' | '}
        <Link href="/journals/[jouralId]/current-issue" as={`/journals/${journalId}/current-issue`}>
          <a>Current issue</a>
        </Link>
        {' | '}
        <Link href="/journals/[jouralId]/all-issues" as={`/journals/${journalId}/all-issues`}>
          <a>All issues</a>
        </Link>
        {' | '}
        <Link href="/journals/[jouralId]/most-read" as={`/journals/${journalId}/most-read`}>
          <a>Most read</a>
        </Link>
      </nav>
    </div>
  </div>
}
