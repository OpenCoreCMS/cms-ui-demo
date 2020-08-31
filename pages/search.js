import axios from 'axios'
import { useRouter } from 'next/router'
import AppTemplate from '../components/AppTemplate'
import ListOfResults from '../components/common/ListOfResults'

export default function SearchPageRender({ searchResults }) {
  const router = useRouter();
  const { phrase } = router.query;

  return (
    <AppTemplate title="Search results: &quot;{query}&quot; - OPP Demo">
      <div className="mastheadContainer">
        <div className="maxWidthLimitedContainer">
          <h1>
            Search results
          </h1>
          <p>Found {searchResults.length} hits for phrase "{phrase}"</p>
        </div>
      </div>

      <main>
        <div className="maxWidthLimitedContainer">
          <ListOfResults data={searchResults}></ListOfResults>
        </div>
      </main>
    </AppTemplate>
  )
}

export async function getInitialProps() {
  return {
    props: {
      data: [],
    },
  }
}

export async function getServerSideProps({ query }) {
  const phrase = query.phrase;
  // const phrase = 'test';

  const { data } = await axios.get(
    `http://localhost:3000/api/v1/search?phrase=${phrase}`
  );
  // console.log(data);
  return {
    props: {
      searchResults: data,
    },
  };
}
