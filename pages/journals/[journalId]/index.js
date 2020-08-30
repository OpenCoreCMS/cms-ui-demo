import Link from 'next/link'
import { useRouter } from 'next/router'
import AppTemplate from '../../../components/AppTemplate'
import JournalHeader from '../../../components/headers/JournalHeader'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemPageRender() {
  const router = useRouter();
  const { journalId } = router.query;

  return (
    <AppTemplate>
      <JournalHeader journalId={journalId}></JournalHeader>

      <main className={styles.main}>
        <div className="maxWidthLimitedContainer">
          <strong>Journal page</strong><br />
          <p>Journal info here - editor, etc</p>
        </div>
      </main>

    </AppTemplate>
  )
}
