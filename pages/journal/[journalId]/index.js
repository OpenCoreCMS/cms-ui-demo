import Link from 'next/link'
import { useRouter } from 'next/router'
import AppTemplate from '../../../components/AppTemplate'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemPageRender() {
  const router = useRouter();
  const { journalId } = router.query;

  return (
    <AppTemplate>
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer">
          <h1 className={styles.title}>
            Journal page
          </h1>
          <p>JournalID: {journalId} </p>

          <hr />

          <Link href="/journal/[jouralId]" as={`/journal/${journalId}`}>
            <a>Journal home</a>
          </Link>
          {' | '}
          <Link href="/journal/[jouralId]/current-issue" as={`/journal/${journalId}/current-issue`}>
            <a>Current issue</a>
          </Link>
          {' | '}
          <Link href="/journal/[jouralId]/all-issues" as={`/journal/${journalId}/all-issues`}>
            <a>All issues</a>
          </Link>
          {' | '}
          <Link href="/journal/[jouralId]/most-read" as={`/journal/${journalId}/most-read`}>
            <a>Most read</a>
          </Link>


          <hr />

          <p>Journal info here - editor, etc</p>
        </div>
      </main>
    </AppTemplate>
  )
}
