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
          <p>Journal ID: {journalId} </p>

          <hr />

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


          <hr />

          <p>Journal info here - editor, etc</p>
        </div>
      </main>
    </AppTemplate>
  )
}
