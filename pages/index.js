import AppTemplate from '../components/AppTemplate/AppTemplate'
import SearchInputJumbotron from '../components/SearchInput/SearchInputJumbotron'
import styles from '../styles/Home.module.css'

export default function HomePageRender() {
  return (
    <AppTemplate title="Home - OPP Demo" pageType="homepage" theme="default">
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer textCenter">
          <img src="/public/oppdp-icon-white-500.png" height="180" alt="OPP Demo Platform logo" />
          <br />
          <h1 className={styles.title}>
            OPP Demo Platform
          </h1>

          <SearchInputJumbotron></SearchInputJumbotron>

          <br /><br />

          <div className={styles.grid}>
            <a href="/journals" className={styles.card}>
              <h2>Published Journals &rsaquo;</h2>
              <p>See example journals published with Open Publishing Platform.</p>
            </a>

            <a href="/help/about" className={styles.card}>
              <h2>Learn more &rsaquo;</h2>
              <p>Learn more about Open Publishing Platform</p>
            </a>

          </div>
        </div>
      </main>
    </AppTemplate>
  )
}
