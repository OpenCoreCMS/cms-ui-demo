import axios from "axios";

import AppTemplate from '../../../../../components/AppTemplate/AppTemplate'
import GridLayoutThreeColumnsOdd from '../../../../../components/GridLayout/GridLayoutThreeColumnsOdd'
import GridLayoutThreeColumnsOddStyles from '../../../../../components/GridLayout/GridLayoutThreeColumnsOdd.module.css'
import LinkDOI from '../../../../../components/Link/LinkDOI'
import Panel from '../../../../../components/CommonElements/Panel'
import DisplayHTML from '../../../../../components/CommonElements/DisplayHTML'

export default function JournalArticlePageRender({ journalData = {}, articleData = {} }) {
  return (
    <AppTemplate title={`${articleData.title} - Open Core CMS Demo`} pageType="article" theme="default">

      <main>
        <GridLayoutThreeColumnsOdd>
          <div className={GridLayoutThreeColumnsOddStyles.gridAside}>
            <Panel style="blank">
              <div className="textCenter">
                <img className="coverImageMedium" src="https://dummyimage.com/240x320/aaa/fff.png&text=240x320" alt={`The issue of the "${journalData.name}" journal in which this article has been published`} />
                <br />
                <a href={`/journals/${journalData.id}/current-issue`}>
                  {journalData.name}, Sep 20
                </a>
              </div>
            </Panel>


            <Panel title="Article metadata" userSelectable={true} style="blank">
              <span>Published date: {articleData.published}</span><br />
              <span>Article ID: {articleData.id}</span><br />
              <span>Article version: {articleData.version}</span><br />
              <br />
              <span>Copyright: The Authors, 2020</span><br />
              <span>License: CC-BY</span><br />
              <span>Open Data: OD</span><br />
              <span>
                Formats: {articleData.pdf ? 'PDF' : ''}, {articleData.xml ? 'XML' : ''}
              </span>
              <br />
              <span>Time to read: 10 minutes</span>
            </Panel>


            <Panel title="Page navigation" style="blank">
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

            <h1><DisplayHTML>{articleData.title}</DisplayHTML></h1>

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
            <DisplayHTML className="block pinned">{articleData.impactStatement}</DisplayHTML>
            <br />
            <h2>Abstract</h2>
            <DisplayHTML className="block">{articleData.abstract.content[0].text}</DisplayHTML>
            <br />
          </div>

          <div className={GridLayoutThreeColumnsOddStyles.gridAside}>
            <Panel title="Metrics">
              Altmetrics<br />
              Abstract views <br />
              Full text views<br />
              Cited by<br />
              <a>View more metrics</a>
            </Panel>

            <Panel title="Article actions" collapsible={true}>
              Download PDF<br />
              Cite<br />
              Share<br />
              Add to list<br />
              Toggle annotations<br />
            </Panel>

            <Panel title="Linked content" collapsible={true}>
              <span>
                <strong>Keywords: </strong>
                {articleData.keywords.join(', ')}
              </span>

              <br />

              <span>
                <strong>Subjects: </strong>
                {articleData.subjects ? articleData.subjects.map(function(subject, index){
                  return <span key={`author-${index}`}>{subject.name} , </span>;
                }) : '...'}
              </span>

              <br />

              <span>
                <strong>In collections: </strong>
                ...
              </span>
            </Panel>

            <Panel title="Related publications" collapsible={true}></Panel>
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

  const articleUrl = `${apiBase}/api/v1/publications/journals/articles/${articleId}/getArticle`;
  const journalUrl = `${apiBase}/api/v1/publications/journals/${journalId}/getJournal`;
  const pageDataUrl = `${apiBase}/api/v1/pages/getPage/${encodeURIComponent(requestUrl)}`;

  return axios.all([
    axios.get(articleUrl),
    axios.get(journalUrl),
    axios.get(pageDataUrl),
  ])
  .then(responseArr => {
    // console.log(responseArr.map((x)=> x.data))

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
    return {
      props: {
        articleData: {
          authors: [],
          abstract: {
            content: [{ text: 'ERROR' }],
          },
          keywords: ['ERROR'],
        },
        journalData: {},
        error: 'Could not fetch data',
      }
    }

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
