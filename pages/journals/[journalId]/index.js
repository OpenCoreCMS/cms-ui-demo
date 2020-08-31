import axios from 'axios'
import AppTemplate from '../../../components/AppTemplate'
import JournalHeader from '../../../components/headers/JournalHeader'
import FeaturedItems from '../../../components/common/FeaturedItems'
import GridLayoutTwoColumns from '../../../components/common/GridLayoutTwoColumns'
import Feed from '../../../components/common/Feed'
import styles from '../../../styles/Journal.module.css'

export default function JournalItemPageRender({ journalData }) {
  return (
    <AppTemplate title={`${journalData.name} - Journal home - OPP Demo`}>
      <JournalHeader journalData={journalData}></JournalHeader>

      <main className={styles.main}>
        <div className={`maxWidthLimitedContainer ${styles.pageFlexContainer}`}>
          <div className={styles.pageBody}>

            <h2>About this journal</h2>
            <p>{journalData.profile}</p>
            <p><a href="#">More information about this journal</a></p>

            <br /><br />

            <GridLayoutTwoColumns>
              <div>
                <h2>Most read</h2>
                <FeaturedItems></FeaturedItems>
              </div>

              <div>
                <h2>Most cited</h2>
                <FeaturedItems></FeaturedItems>
              </div>
            </GridLayoutTwoColumns>

            <br /><br />

            <div>
              <h2>Recent articles</h2>
              <GridLayoutTwoColumns>
                <div><FeaturedItems></FeaturedItems></div>
                <div><FeaturedItems></FeaturedItems></div>

              </GridLayoutTwoColumns>
            </div>

            <br /><br />

            <GridLayoutTwoColumns>
              <div>
                <h2>Subject Blog</h2>
                <Feed></Feed>
              </div>

              <div>
                <h2>Journal tweets</h2>
                <Feed></Feed>
              </div>
            </GridLayoutTwoColumns>

            <pre className="hide">{JSON.stringify(journalData, null, 2)}</pre>

          </div>
          <div className={styles.pageAside}>
            <div className="textCenter">
              <img src={`https://dummyimage.com/240x320/aaa/fff.png&text=${journalData.id}`} alt="Current issue of journal" />
              <a href="#">Current issue (Sep 20):<br /><i>Dummy content in publishing</i></a>
            </div>

            <br /><br />

            <p>
              <strong>Journal name:</strong>
              {journalData.name}
            </p>
            <p>
              <strong>Journal mnemonic:</strong>
              {journalData.id}
            </p>
            <p>
              <strong>Published by:</strong>
              <a href={journalData.publisher.url} target="_blank" rel="noopener nofollow">
                {journalData.publisher.name}
              </a>
            </p>
            <p>
              <strong>ISSN:</strong>
              0000-0000 (Print)
              <br />
              <strong>ISSN:</strong>
              0000-0000 (Online)
              <br />
              <strong>DOI:</strong>
              10.0000/0000
            </p>
            <p>
              <strong>Chief Editor:</strong> Professor John Doe, Institute of Science
            </p>
            <p>
              <a href="#">Editorial board</a>
            </p>
            <p>
              <strong>Impact Factor:</strong> N/A
            </p>
            <p>
              <strong>Frequency:</strong> 4 issues per year
            </p>
            <p>
              <a href="#">Author guidelines</a>
            </p>
            <p>
              <strong>Publishing dates:</strong> 2004-present
            </p>
            <p>
              This journal has been published under other titles in the past.
              <br />
              <a href="#">View this journal's title history</a>
            </p>
          </div>
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
