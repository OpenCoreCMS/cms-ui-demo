import axios from "axios";

import AppTemplate from '../../../../../components/AppTemplate/AppTemplate'
import GridLayoutThreeColumnsOdd from '../../../../../components/GridLayout/GridLayoutThreeColumnsOdd'
import GridLayoutThreeColumnsOddStyles from '../../../../../components/GridLayout/GridLayoutThreeColumnsOdd.module.css'
// import JournalMasthead from '../../../../../components/Journals/JournalMasthead'
import LinkDOI from '../../../../../components/Link/LinkDOI'
import Panel from '../../../../../components/CommonElements/Panel'

// http://localhost:3000/journals/bbs:elife-science/article/58807/test
export default function JournalArticlePageRender({ journalData = {}, articleData }) {
  return (
    <AppTemplate title={`${articleData.title} - OPP Demo`} pageType="article" theme="default">

      <main>
        <GridLayoutThreeColumnsOdd>
          <div className={GridLayoutThreeColumnsOddStyles.gridAside}>
            <Panel>
              <strong>Article navigation</strong><br />

              <div className="textCenter">
                <img className="coverImageMedium" src="https://dummyimage.com/240x320/aaa/fff.png&text=240x320" alt={`The issue of the "${journalData.name}" journal in which this article has been published`} />
                <br />
                <a href={`/journals/${journalData.id}/current-issue`}>
                  {journalData.name}, Sep 20
                </a>
              </div>

              <br />
              <span>Volume: {articleData.volume}</span><br />
              <span>Date: {articleData.published}</span><br />

            </Panel>

            <br />

            <Panel>
              On this page...

              [progress bar / scroll spy]
            </Panel>
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
            <Panel>
              <strong>Article metadata</strong><br />

              <span>Version: {articleData.version}</span><br />
              <span>ID: {articleData.id}</span><br />

              <span>
                Formats:
                {articleData.pdf ? 'PDF' : ''},
                {articleData.xml ? 'XML' : ''}
              </span><br />

              <span>Keywords: {articleData.keywords.join(', ')}</span><br />

              <span className="subjects">
                <strong>Subjects: </strong>
                {articleData.subjects ? articleData.subjects.map(function(subject, index){
                  return <span key={`author-${index}`}>{subject.name} , </span>;
                }) : ''}
              </span><br />

              In collections...
            </Panel>
            <Panel>
              Metrics
            </Panel>
            <Panel>
              Related publications
            </Panel>
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

export async function getServerSideProps(ctx) {
  const apiBase = 'http://localhost:3000';
  const articleId = ctx.params.articleId;
  const journalId = ctx.params.journalId;
  const requestUrl = ctx.req.url;
  // const reqHeaders = ctx.req.headers;

  const articleUrl = `${apiBase}/api/v1/articles/getArticle/${articleId}`;
  const journalUrl = `${apiBase}/api/v1/journals/getJournal/${journalId}`;
  const pageUrl = `${apiBase}/v1/pages/getPage/${encodeURIComponent(requestUrl)}`;

  return axios.all([
    axios.get(articleUrl),
    axios.get(journalUrl),
    axios.get(pageUrl),
  ])
  .then(responseArr => {
    console.log(responseArr.map((x)=> x.data))

    return {
      props: {
        articleData: responseArr[0].data,
        journalData: responseArr[1].data,
        pageData: responseArr[2].data,
      },
    }
  })
  .catch(function (error) {
    console.log(error);
    return { error: 'Could not fetch data' }
  });

  // const { data } = await axios.get(articleUrl);
  // // console.log(data);
  // return {
  //   props: {
  //     journalData: {},
  //     articleData: data,
  //   },
  // };
}
