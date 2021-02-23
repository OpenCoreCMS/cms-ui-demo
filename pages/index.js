import AppTemplate from '../components/AppTemplate/AppTemplate'
import SearchInputJumbotron from '../components/SearchInput/SearchInputJumbotron'
import styles from '../styles/Home.module.css'

export default function HomePageRender() {
  return (
    <AppTemplate title="Home - Open Core CMS Demo" pageType="homepage" theme="default">
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer textCenter">
          <h1 className={styles.title}>
            <img src="/public/OpenCoreCMSIcon-500.png" height="120" alt="Open Core CMS logo" />
            <br />
            <span className={styles.brandName}>Open Core CMS Demo</span>
          </h1>

          <SearchInputJumbotron></SearchInputJumbotron>

          <br /><br />

          <div className={styles.grid}>
            <a href="/journals" className={styles.card}>
              <h2>Browse Journals &rsaquo;</h2>
              <p>Discover the journals published on this demo site</p>
            </a>

            <a href="/subjects" className={styles.card}>
              <h2>Browse subjects &rsaquo;</h2>
              <p>Explore the range of subjects published on this demo site</p>
            </a>

            <a href="/help/about" className={styles.card}>
              <h2>Learn more &rsaquo;</h2>
              <p>
                Open Core CMS can be a great fit for&nbsp;
                <a href="#">publishers</a> and <a href="#">content creators</a>
              </p>
            </a>

          </div>
        </div>
      </main>
    </AppTemplate>
  )
}
