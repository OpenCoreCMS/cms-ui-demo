import axios from 'axios'
import AppTemplate from '../../../components/AppTemplate/AppTemplate'
import JournalMasthead from '../../../components/Journals/JournalMasthead'
import FeaturedItems from '../../../components/Blocks/FeaturedItems'
import DisplayHTML from '../../../components/CommonElements/DisplayHTML'
import GridLayoutTwoColumnsEven from '../../../components/GridLayout/GridLayoutTwoColumnsEven'
import GridLayoutTwoColumnsOdd from '../../../components/GridLayout/GridLayoutTwoColumnsOdd'
import GridLayoutTwoColumnsOddStyles from '../../../components/GridLayout/GridLayoutTwoColumnsOdd.module.css'
import JournalQuickInfoPane from '../../../components/Journals/JournalQuickInfoPane'
import DataFeed from '../../../components/Blocks/DataFeed'

export default function JournalItemPageRender({ journalData }) {
  return (
    <AppTemplate title={`${journalData.name} - Journal home - Open Core CMS Demo`}>
      <JournalMasthead journalData={journalData}></JournalMasthead>

      <main>
        <GridLayoutTwoColumnsOdd>
          <div className={GridLayoutTwoColumnsOddStyles.gridBody}>

            <h2>About this journal</h2>
            <p className="pinned"><DisplayHTML>{journalData.description}</DisplayHTML></p>
            <p><a className="wip" href="#">More information about this journal</a></p>

            <br /><hr /><br />

            <h3>Published content type</h3>
            <span className="contentTypePill">Editorials</span>
            <span className="contentTypePill">Insights</span>
            <span className="contentTypePill">Feature Articles</span>
            <span className="contentTypePill">Podcasts</span>
            <span className="contentTypePill">Collections</span>
            <span className="contentTypePill">Community</span>
            <span className="contentTypePill">Digests</span>

            <br /><hr /><br />

            <div>
              <h3>Recent articles</h3>
              <GridLayoutTwoColumnsEven>
                <div><FeaturedItems items={[{id: '123'}]} /></div>
                <div><FeaturedItems items={[{id: '123'}]} /></div>

              </GridLayoutTwoColumnsEven>
            </div>


            <br /><hr /><br />

            <GridLayoutTwoColumnsEven>
              <div>
                <h3>Most read</h3>
                <div><FeaturedItems items={[{id: '123'}]} /></div>
              </div>

              <div>
                <h3>Most cited</h3>
                <div><FeaturedItems items={[{id: '123'}]} /></div>
              </div>
            </GridLayoutTwoColumnsEven>

            <br /><hr /><br />

            <GridLayoutTwoColumnsEven>
              <div>
                <h3>Subject Blog</h3>
                <DataFeed></DataFeed>
              </div>

              <div>
                <h3>Journal tweets</h3>
                <DataFeed></DataFeed>
              </div>
            </GridLayoutTwoColumnsEven>
          </div>

          <div className={GridLayoutTwoColumnsOddStyles.gridAside}>
            <JournalQuickInfoPane journalData={journalData}></JournalQuickInfoPane>
          </div>
        </GridLayoutTwoColumnsOdd>
      </main>
    </AppTemplate>
  )
}

export async function getServerSideProps({ params }) {
  const journalId = params.journalId;

  const { data } = await axios.get(
    `${process.env.OCC_UI_URL}/api/v1/publications/journals/${journalId}/getJournal`
  );
  // console.log(data);
  return {
    props: {
      journalData: data,
    },
  };
}
