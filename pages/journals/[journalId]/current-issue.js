import { useRouter } from 'next/router'
import axios from "axios";

import AppTemplate from '../../../components/AppTemplate/AppTemplate'
import GridLayoutTwoColumnsOdd from '../../../components/GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../../../components/GridLayout/GridLayoutTwoColumnsOdd.module.css'
import ListOfResults from '../../../components/Blocks/ListOfResults'
import ListOfResultsAsideFilters from '../../../components/Blocks/ListOfResultsAsideFilters'
import JournalMasthead from '../../../components/Journals/JournalMasthead'

export default function JournalItemCurrentIssuePageRender({searchResults}) {
  const router = useRouter();
  const { journalId } = router.query;

  const journalData = {
    id: journalId,
    name: journalId,
    description: ''
  }

  return (
    <AppTemplate title={`${journalData.name} - Current issue - OPP Demo`}>
      <JournalMasthead journalData={journalData}></JournalMasthead>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>
            <strong>Current issue contains {searchResults.total} articles.</strong>
            <ListOfResults data={searchResults.results}></ListOfResults>
          </div>

          <div className={GridLayoutTwoColumnsOddStyles.gridAside}>
            <ListOfResultsAsideFilters></ListOfResultsAsideFilters>
          </div>
        </GridLayoutTwoColumnsOdd>
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
    `http://localhost:3000/api/v1/journals/${journalId}/getCurrentIssue`
  );
  // console.log(data);
  return {
    props: {
      journalData: {},
      searchResults: data,
    },
  };
}
