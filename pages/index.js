import AppTemplate from '../components/AppTemplate/AppTemplate'
import SearchInputJumbotron from '../components/SearchInput/SearchInputJumbotron'
import styles from '../styles/Home.module.css'

export default function HomePageRender() {
  return (
    <AppTemplate title="Home - Open Core CMS Demo" pageType="homepage" theme="default">
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer textCenter">
          <img src="/public/OpenCoreCMSIcon-500.png" height="180" alt="Open Core CMS logo" />
          <br />
          <h1 className={styles.title}>
            Open Core CMS Demo
          </h1>

          <SearchInputJumbotron></SearchInputJumbotron>

          <br /><br />

          <div className={styles.grid}>
            <a href="/journals" className={styles.card}>
              <h2>Published Journals &rsaquo;</h2>
              <p>See example journals published on this demo site.</p>
            </a>

            <a href="/help/about" className={styles.card}>
              <h2>Learn more &rsaquo;</h2>
              <p>Learn more about Open Core CMS</p>
            </a>

          </div>
        </div>
      </main>
    </AppTemplate>
  )
}
