import axios from 'axios'
import { useRouter } from 'next/router'
import AppTemplate from '../components/AppTemplate'
import ListOfResults from '../components/common/ListOfResults'
import SearchResultsFilters from '../components/common/SearchResultsFilters'
import styles from '../styles/Journal.module.css'

export default function SearchPageRender({ searchResults }) {
  const router = useRouter();
  const { phrase } = router.query;

  return (
    <AppTemplate title={`Search results for "${phrase}" - OPP Demo`}>
      <div className="mastheadContainer">
        <div className="maxWidthLimitedContainer">
          <h1>Search results</h1>
          <p className="hide">Found {searchResults.total} hits for phrase &quot;{phrase}&quot;</p>
        </div>
      </div>

      <main className={styles.main}>
        <div className={`maxWidthLimitedContainer ${styles.pageFlexContainer}`}>
          <div className={styles.pageBody}>
            <strong>Found {searchResults.total} hits for phrase &quot;{phrase}&quot;</strong>
            <ListOfResults data={searchResults.results}></ListOfResults>
          </div>

          <div className={styles.pageAside}>
            <SearchResultsFilters aggs={searchResults.aggs}></SearchResultsFilters>
          </div>
        </div>
      </main>
    </AppTemplate>
  )
}

export async function getInitialProps() {
  return {
    props: {
      searchResults: {
        total: 0,
        results: [],
      },
    },
  }
}

export async function getServerSideProps({ query }) {
  const phrase = query.phrase;
  const targetUrl = `http://localhost:3000/api/v1/search?phrase=${phrase}`;

  const { data } = await axios.get(targetUrl);
  return {
    props: {
      searchResults: {
        total: data.total,
        results: data.results,
      }
    },
  };
}
