import { useRouter } from 'next/router'
import axios from "axios";

import AppTemplate from '../../../components/AppTemplate'
import ListOfResults from '../../../components/common/ListOfResults'
import JournalHeader from '../../../components/headers/JournalHeader'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemCurrentIssuePageRender({data}) {
  const router = useRouter();
  const { journalId } = router.query;

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

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      '/journals/[journalId]/current-issue',
      // Object variant:
      { params: { journalId: 'test-journal' } },
    ],
    fallback: true,
  }
}

export async function getInitialProps() {
  return {
    props: {
      data: [],
    },
  }
}

export async function getStaticProps() {
  const { data } = await axios.get(
    `http://localhost:3000/api/v1/journals/getArticles`
  );
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

// import useSWR from 'swr'
// const fetcher = (url) => fetch(url).then((res) => res.json())
// let data = []
// const { data, error } = useSWR('/api/v1/journals/getArticles', fetcher)
