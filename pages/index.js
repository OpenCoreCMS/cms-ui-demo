import AppTemplate from '../components/AppTemplate'
import styles from '../styles/Home.module.css'

export default function HomePageRender() {
  return (
    <AppTemplate title="Home - OPP Demo">
      <main className={styles.main}>
        <div className="maxWidthLimitedContainer textCenter">
          <img src="/public/opp-symbol-800px.png" width="300" />
          <h1 className={styles.title}>
            OPP Demo Platform
          </h1>

          <form action="/search">
            <div className={styles.grid}>
              <input className={styles.jumbotronSearchInput} type="search" name="query" placeholder="Search Open Access content" />
              <input className={styles.jumbotronSearchSubmit} type="submit" value="Run search" />
            </div>
          </form>

          <br /><br />

          <div className={styles.grid}>
            <a href="/journals" className={styles.card}>
              <h3>Published Journals &rsaquo;</h3>
              <p>See example journals published with Open Publishing Platform.</p>
            </a>

            <a href="/about" className={styles.card}>
              <h3>Learn more &rsaquo;</h3>
              <p>Learn more about Open Publishing Platform</p>
            </a>

          </div>
        </div>
      </main>
    </AppTemplate>
  )
}
