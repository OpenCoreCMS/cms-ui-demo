import { useRouter } from 'next/router'
import axios from "axios";

import AppTemplate from '../../../components/AppTemplate'
import ListOfResults from '../../../components/common/ListOfResults'
import JournalHeader from '../../../components/headers/JournalHeader'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemCurrentIssuePageRender({data}) {
  const router = useRouter();
  const { journalId } = router.query;

  const journalData = {
    id: journalId,
    name: journalId,
    description: ''
  }

  return (
    <AppTemplate title="Current issue - Journal Name - Publisher Name">
      <JournalHeader journalData={journalData}></JournalHeader>

      <main className={styles.main}>
        <div className={`maxWidthLimitedContainer ${styles.pageFlexContainer}`}>
          <div className={styles.pageAside}>Filters</div>
          <div className={styles.pageBody}>
            <strong>Current issue contains {data.length} articles.</strong>
            <ListOfResults data={data}></ListOfResults>
          </div>
        </div>
      </main>

    </AppTemplate>
  )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       '/journals/[journalId]/current-issue',
//     ],
//     fallback: true,
//   }
// }

export async function getInitialProps() {
  return {
    props: {
      data: [],
    },
  }
}

export async function getServerSideProps({ params }) {
  const journalId = params.journalId;

  const { data } = await axios.get(
    `http://localhost:3000/api/v1/journals/${journalId}/getArticles`
  );
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}
