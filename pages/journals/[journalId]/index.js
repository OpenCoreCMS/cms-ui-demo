import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AppTemplate from '../../../components/AppTemplate'
import JournalHeader from '../../../components/headers/JournalHeader'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemPageRender({ journalData }) {
  const router = useRouter();
  const { journalId } = router.query;

  return (
    <AppTemplate>
      <JournalHeader
        journalName={journalData.name}
        journalId={journalData.id}>
      </JournalHeader>

      <main className={styles.main}>
        <div className="maxWidthLimitedContainer">
          <strong>Journal page</strong><br />
          <p>Journal info here - editor, etc</p>
        </div>
      </main>

    </AppTemplate>
  )
}


export async function getServerSideProps({ params }) {
  const journalId = params.journalId;

  const { data } = await axios.get(
    `http://localhost:3000/api/v1/journals/${journalId}/getJournal`
  );
  // console.log(data);
  return {
    props: {
      journalData: data,
    },
  };
}
