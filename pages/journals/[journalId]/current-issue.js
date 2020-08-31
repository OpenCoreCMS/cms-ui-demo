import { useRouter } from 'next/router'
import axios from "axios";

import AppTemplate from '../../../components/AppTemplate/AppTemplate'
import GridLayoutTwoColumnsOdd from '../../../components/GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../../../components/GridLayout/GridLayoutTwoColumnsOdd.module.css'
import ListOfResults from '../../../components/Blocks/ListOfResults'
import SearchResultsFilters from '../../../components/Blocks/SearchResultsFilters'
import JournalMasthead from '../../../components/Journals/JournalMasthead'

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
      <JournalMasthead journalData={journalData}></JournalMasthead>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>
            <strong>Current issue contains {data.length} articles.</strong>
            <ListOfResults data={data}></ListOfResults>
          </div>

          <div className={GridLayoutTwoColumnsOddStyles.gridAside}>
            <div className="panel">
              <SearchResultsFilters></SearchResultsFilters>
            </div>
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
    `http://localhost:3000/api/v1/journals/${journalId}/getArticles`
  );
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}
