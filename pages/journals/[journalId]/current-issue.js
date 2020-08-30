import { useRouter } from 'next/router'
import useSWR from 'swr'

import AppTemplate from '../../../components/AppTemplate'
import ListOfResults from '../../../components/ListOfResults'
import styles from '../../../styles/Journal.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function JournalItemCurrentIssuePageRender() {
  const router = useRouter();
  const { journalId } = router.query;

  const { data, error } = useSWR('/api/v1/getArticles', fetcher)

  return (
    <AppTemplate>
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer">
          <h1 className={styles.title}>
            Current issue of journal
          </h1>
          <p>Journal ID: {journalId} </p>

          <hr />

          <ListOfResults data={data}></ListOfResults>

        </div>
      </main>
    </AppTemplate>
  )
}
