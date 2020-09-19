import axios from "axios";

import AppTemplate from '../../../components/AppTemplate/AppTemplate'
import GridLayoutTwoColumnsOdd from '../../../components/GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../../../components/GridLayout/GridLayoutTwoColumnsOdd.module.css'
import ListOfResults from '../../../components/Blocks/ListOfResults'
import ListOfResultsAsideFilters from '../../../components/Blocks/ListOfResultsAsideFilters'
// import JournalMasthead from '../../../components/Journals/JournalMasthead'

export default function SubjectListingPageRender({searchResults, subjectData}) {
  return (
    <AppTemplate title={`${subjectData.name} - Current issue - OPP Demo`}>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>
            <h2>{subjectData.name} Subject listing</h2>
            <strong>There are {searchResults.total} articles in {subjectData.name} subject.</strong>
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

export async function getServerSideProps({ params }) {
  const subjectId = params.subjectId;

  const { data } = await axios.get(
    `http://localhost:3000/api/v1/publications/search?type=article&subjectId=${subjectId}`
  );
  // console.log(data);
  return {
    props: {
      subjectData: {
        id: 'test',
        name: 'test',
      },
      searchResults: data,
    },
  };
}
