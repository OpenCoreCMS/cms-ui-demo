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
    <AppTemplate title={`${journalData.name} - Current issue - Open Core CMS Demo`}>
      <JournalMasthead journalData={journalData}></JournalMasthead>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>
            <h2>Current issue</h2>
            <strong>There are {searchResults.total} articles in the {journalData.currentIssue} issue of {journalData.name}.</strong>
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
    `${process.env.OCC_UI_URL}/api/v1/publications/journals/${journalId}/getCurrentIssue`
  );
  // console.log(data);
  return {
    props: {
      journalData: {},
      searchResults: data,
    },
  };
}
