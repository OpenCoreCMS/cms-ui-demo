import axios from 'axios'
import AppTemplate from '../../../components/AppTemplate'
import JournalHeader from '../../../components/headers/JournalHeader'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemPageRender({ journalData }) {
  return (
    <AppTemplate title={`${journalData.name} - Journal home - OPP Demo`}>
      <JournalHeader journalData={journalData}></JournalHeader>

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
