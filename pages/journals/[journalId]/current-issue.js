import { useRouter } from 'next/router'
import useSWR from 'swr'

import AppTemplate from '../../../components/AppTemplate'
import ListOfResults from '../../../components/common/ListOfResults'
import JournalHeader from '../../../components/headers/JournalHeader'
import styles from '../../../styles/Journal.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function JournalItemCurrentIssuePageRender() {
  const router = useRouter();
  const { journalId } = router.query;

  const { data, error } = useSWR('/api/v1/journals/getArticles', fetcher)

  return (
    <AppTemplate title="Current issue - Journal Name - Publisher Name">
      <JournalHeader journalId={journalId}></JournalHeader>

      <main className={styles.main}>
        <div className={`maxWidthLimitedContainer ${styles.pageFlexContainer}`}>
          <div className={styles.pageAside}>Filters</div>
          <div className={styles.pageBody}>
            <strong>Current issue contains X articles.</strong>
            <ListOfResults data={data}></ListOfResults>
          </div>
        </div>
      </main>

    </AppTemplate>
  )
}
