import { useRouter } from 'next/router'
import AppTemplate from '../components/AppTemplate'

import findPage from '../lib/findPage'

// dynamic route handler is used to locate pages in CMS
// or bounce to an error page
export default function DynamicRouteHandler(req, res) {
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

  const page = findPage(fullPath)
  console.log('page', page);

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
