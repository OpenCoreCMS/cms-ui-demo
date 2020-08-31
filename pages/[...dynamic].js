import axios from 'axios'
import { useRouter } from 'next/router'
import AppTemplate from '../components/AppTemplate'
import BlockRenderer from '../components/BlockRenderer'

// dynamic route handler is used to locate pages in CMS
// or bounce to an error page
export default function DynamicRouteHandler({pageData}) {
  const router = useRouter();
  const { dynamic } = router.query;
  const urlSegments = dynamic;

  if (!Array.isArray(urlSegments) || !urlSegments.length) {
    return <AppTemplate>
      <main>
        <div className="readingWidthLimitedContainer textCenter">
          <h1>500</h1>
          <h2>Server error encountered</h2>
          <br />
          <p>This is weird for me too.<br />(sad computer noises)</p>
        </div>
      </main>
    </AppTemplate>
  }

  const fullPath = urlSegments.join('/');

  if (!pageData || !pageData.url) {
    return <AppTemplate>
      <main>
        <div className="readingWidthLimitedContainer textCenter">
          <h1>404</h1>
          <h2>The requested page could not be found.</h2>
          <br />
          <p>Full request path:<br /><br /><code>{fullPath}</code></p>
        </div>
      </main>
    </AppTemplate>
  }

  if (!pageData.title || !pageData.content || !pageData.description) {
    return <AppTemplate>
      <main>
        <div className="readingWidthLimitedContainer textCenter">
          <h1>Maintenance</h1>
          <h2>The requested page is currently unavailable.</h2>
          <br />
          <p>Full request path:<br /><br /><code>{fullPath}</code></p>
          <p>Please contact the administrator.</p>
        </div>
      </main>
    </AppTemplate>
  }

  return <AppTemplate title={pageData.title}>
    <div className="mastheadContainer">
      <div className="readingWidthLimitedContainer">
        <h1>{pageData.title}</h1>
        <p>{pageData.description}</p>
      </div>
    </div>

    <main>
      <div className="readingWidthLimitedContainer">
        <BlockRenderer blocks={pageData.content} debug={false}></BlockRenderer>
      </div>
    </main>
  </AppTemplate>

}



export async function getInitialProps() {
  return {
    props: {
      data: [],
    },
  }
}

export async function getServerSideProps({ params }) {
  const urlSegments = params.dynamic;
  const fullPath = urlSegments.join('/');
  const escapedFullPath = encodeURIComponent(fullPath);

  if (fullPath.includes('favicon')) {
    return { props: {pageData: {}}};
  }

  const targetUrl = `http://localhost:3000/api/v1/pages/getPage/${escapedFullPath}`;
  // console.log('targetUrl', targetUrl);

  const { data } = await axios.get(targetUrl);
  // console.log(data);
  if (data.isAxiosError) {
    return {
      props: {
        pageData: {},
      },
    };
  }
  return {
    props: {
      pageData: data,
    },
  };
}
