import axios from 'axios'
import Link from 'next/link'
import AppTemplate from '../../components/AppTemplate/AppTemplate'

export default function SubjectsIndexPageRender({ allSubjectsData }) {
  return (
    <AppTemplate title="Subjects - Open Core CMS UI Demo">
      <div className="mastheadContainer" role="banner">
        <div className="maxWidthLimitedContainer">
          <h1>Subjects</h1>
          <p>In the Open Core CMS Demo site we have indexed the following subjects.</p>
        </div>
      </div>

      <main>
        <div className="maxWidthLimitedContainer">
          <ul>
            {allSubjectsData.map((subject) => {
              return <li key={subject.id}>
                <Link href="/subjects/[subjectId]/listing" as={`/subjects/${subject.id}/listing`}>
                  <a>{subject.name}</a>
                </Link>
              </li>
            })}

          </ul>
        </div>
      </main>
    </AppTemplate>
  )
}


export async function getServerSideProps() {
  let targetUrl = `http://localhost:3000/api/v1/publications/subjects/getAllSubjects`;

  const { data } = await axios.get(targetUrl);
  // console.log(data);
  return {
    props: {
      allSubjectsData: data,
    },
  };
}
