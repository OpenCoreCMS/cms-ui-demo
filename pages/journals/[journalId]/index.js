import axios from 'axios'
import AppTemplate from '../../../components/AppTemplate/AppTemplate'
import JournalHeader from '../../../components/headers/JournalHeader'
import FeaturedItems from '../../../components/common/FeaturedItems'
import GridLayoutTwoColumnsEven from '../../../components/GridLayout/GridLayoutTwoColumnsEven'
import GridLayoutTwoColumnsOdd from '../../../components/GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../../../components/GridLayout/GridLayoutTwoColumnsOdd.module.css'
import JournalQuickInfoPane from '../../../components/common/JournalQuickInfoPane'
import Feed from '../../../components/common/Feed'

export default function JournalItemPageRender({ journalData }) {
  return (
    <AppTemplate title={`${journalData.name} - Journal home - OPP Demo`}>
      <JournalHeader journalData={journalData}></JournalHeader>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>

            <h2>About this journal</h2>
            <p>{journalData.description}</p>
            <p><a href="#">More information about this journal</a></p>

            <br /><br />

            <div>
              <h2>Recent articles</h2>
              <GridLayoutTwoColumnsEven>
                <div><FeaturedItems></FeaturedItems></div>
                <div><FeaturedItems></FeaturedItems></div>

              </GridLayoutTwoColumnsEven>
            </div>


            <br /><br />


            <GridLayoutTwoColumnsEven>
              <div>
                <h2>Most read</h2>
                <FeaturedItems></FeaturedItems>
              </div>

              <div>
                <h2>Most cited</h2>
                <FeaturedItems></FeaturedItems>
              </div>
            </GridLayoutTwoColumnsEven>

            <br /><br />

            <GridLayoutTwoColumnsEven>
              <div>
                <h2>Subject Blog</h2>
                <Feed></Feed>
              </div>

              <div>
                <h2>Journal tweets</h2>
                <Feed></Feed>
              </div>
            </GridLayoutTwoColumnsEven>
          </div>

          <div className={GridLayoutTwoColumnsOddStyles.gridAside}>
            <div className="panel">
              <JournalQuickInfoPane journalData={journalData}></JournalQuickInfoPane>
            </div>
          </div>
        </GridLayoutTwoColumnsOdd>
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
