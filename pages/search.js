import { useRouter } from 'next/router'
import AppTemplate from '../components/AppTemplate'

export default function SearchPageRender() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <AppTemplate title="Search results: &quot;{query}&quot; - OPP Demo">
      <div className="mastheadContainer">
        <div className="maxWidthLimitedContainer">
          <h1>
            Search results
          </h1>
          <p>Found 79 hits for "{query}"</p>
        </div>
      </div>

      <main>
        <div className="maxWidthLimitedContainer">
          List of results here
        </div>
      </main>
    </AppTemplate>
  )
}
