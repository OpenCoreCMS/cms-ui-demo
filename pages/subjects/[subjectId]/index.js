import axios from 'axios'
import AppTemplate from '../../../components/AppTemplate/AppTemplate'
import DisplayHTML from '../../../components/CommonElements/DisplayHTML'
import GridLayoutTwoColumnsOdd from '../../../components/GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../../../components/GridLayout/GridLayoutTwoColumnsOdd.module.css'

import AppLink from '../../../components/Link/AppLink'

export default function SubjectsIndexPageRender({ subjectData }) {
  return (
    <AppTemplate title={`Subject - ${subjectData.name} - OPP UI Demo`}>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>
            <h1>{subjectData.name}</h1>
            <p className="pinned"><DisplayHTML>{subjectData.description}</DisplayHTML></p>

            <AppLink href={`/subjects/${subjectData.id}/listing`}>
              <span>Content listing</span>
            </AppLink>

            <br /><hr /><br />

            <h3>Published content types</h3>
            <span className="contentTypePill">Digests</span>

            <br /><hr /><br />

          </div>

          <div className={GridLayoutTwoColumnsOddStyles.gridAside}>
            Lorem ipsum
          </div>
        </GridLayoutTwoColumnsOdd>
      </main>
    </AppTemplate>
  )
}

export async function getServerSideProps({ params }) {
  const subjectId = params.subjectId;

  const { data } = await axios.get(
    `http://localhost:3000/api/v1/publications/subjects/${subjectId}/getOneSubject`
  );
  // console.log(data);
  return {
    props: {
      subjectData: data,
    },
  };
}
