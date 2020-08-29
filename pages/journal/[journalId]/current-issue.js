import { useRouter } from 'next/router'
import AppTemplate from '../../../components/AppTemplate'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemCurrentIssuePageRender() {
  const router = useRouter();
  const { journalId } = router.query;

  return (
    <AppTemplate>
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer">
          <h1 className={styles.title}>
            Current issue of journal
          </h1>
          <p>JournalID: {journalId} </p>

          <hr />

          <p>Article list here</p>
        </div>
      </main>
    </AppTemplate>
  )
}
