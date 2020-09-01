import axios from "axios";

import AppTemplate from '../../../../../components/AppTemplate/AppTemplate'
import GridLayoutThreeColumnsOdd from '../../../../../components/GridLayout/GridLayoutThreeColumnsOdd'
import GridLayoutThreeColumnsOddStyles from '../../../../../components/GridLayout/GridLayoutThreeColumnsOdd.module.css'
// import JournalMasthead from '../../../../../components/Journals/JournalMasthead'
import LinkDOI from '../../../../../components/Link/LinkDOI'

// http://localhost:3000/journals/bbs:elife-science/article/58807/test
export default function JournalArticlePageRender({ journalData, articleData }) {
  return (
    <AppTemplate title={`${articleData.title} - OPP Demo`} pageType="article" theme="default">

      <main>
        <GridLayoutThreeColumnsOdd>
          <div className={GridLayoutThreeColumnsOddStyles.gridAside}>
            <div className="panel">
              Journal information
            </div>
            <br />
            <div className="panel">
              On this page
            </div>
          </div>

          <div className={GridLayoutThreeColumnsOddStyles.gridBody}>
            <span><LinkDOI doi={articleData.doi}></LinkDOI></span><br />
            <h1>{articleData.title}</h1>
            <span className="authors">{articleData.authorLine}</span><br />
            <span className="contentTypePill">{articleData.titlePrefix}</span><br />
            <br />
            <h2>Abstract</h2>
            <p className="pinned">{articleData.impactStatement}</p>
            <br />
          </div>

          <div className={GridLayoutThreeColumnsOddStyles.gridAside}>
            <div className="panel">
              Article info
            </div>
          </div>
        </GridLayoutThreeColumnsOdd>

        <div className="debugViewer hide">
          <pre>{JSON.stringify(articleData, null, 2)}</pre>
        </div>
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
  const articleId = params.articleId;

  const { data } = await axios.get(
    `http://localhost:3000/api/v1/articles/getArticle/${articleId}`
  );
  // console.log(data);
  return {
    props: {
      journalData: {},
      articleData: data,
    },
  };
}
