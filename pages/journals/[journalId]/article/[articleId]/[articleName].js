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
              <strong>Article info</strong>
              <br />
              <span>Volume: {articleData.volume}</span><br />
              <span>Date: {articleData.published}</span><br />
              <span>Keywords: {articleData.keywords.join(', ')}</span><br />
              <span>Version: {articleData.version}</span><br />
              <span>ID: {articleData.id}</span><br />

              <span>
                Formats:
                {articleData.pdf ? 'PDF' : ''},
                {articleData.xml ? 'XML' : ''}
              </span><br />


              <span className="subjects">
                <strong>Subjects: </strong>
                {articleData.subjects ? articleData.subjects.map(function(subject, index){
                  return <span key={`author-${index}`}>{subject.name} , </span>;
                }) : ''}
              </span><br />

              In collections...

            </div>
            <br />
            <div className="panel">
              On this page
            </div>
          </div>

          <div className={GridLayoutThreeColumnsOddStyles.gridBody}>
            {articleData.type ?
              <span className="contentTypePill">{articleData.type}</span> : ''}

            &nbsp; &nbsp;

            {articleData.titlePrefix ?
              <span className="contentTypePill">${articleData.titlePrefix}</span> : ''}

            &nbsp; &nbsp;

            <span><LinkDOI doi={articleData.doi}></LinkDOI></span><br />

            <h1>{articleData.title}</h1>

            <span className="authors">
              {articleData.authors.map(function(person, index){
                return <span key={`author-${index}`}>{person.name.preferred} , </span>;
              })}
            </span>
            <br />

            <span className="reviewers">
              <strong>Reviewed by: </strong>
              {articleData.reviewers ? articleData.reviewers.map(function(person, index){
                return <span key={`reviewer-${index}`}>{person.name.preferred} , </span>;
              }) : ''}
            </span><br />




            <br />
            <h2>Impact statement</h2>
            <p className="pinned">{articleData.impactStatement}</p>
            <br />
            <h2>Abstract</h2>
            <p>{articleData.abstract.content[0].text}</p>
            <br />
          </div>

          <div className={GridLayoutThreeColumnsOddStyles.gridAside}>
            <div className="panel">
              Journal info
            </div>
            <div className="panel">
              Metrics
            </div>
            <div className="panel">
              Related publications
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
