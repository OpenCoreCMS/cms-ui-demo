import AppLink from '../Link/AppLink'
import styles from './JournalMasthead.module.css'

export default function JournalMastheadComponent({ journalData }) {
  return <div className={`mastheadContainer ${styles.mastheadContainer}`}>
    <div className="maxWidthLimitedContainer">
      <h1 className={styles.title}>
        {journalData.name}
      </h1>
      <br />
      <nav className={styles.tabs}>
        <AppLink className={`${styles.tab} navTab`} href={`/journals/${journalData.id}`}>
          <span>Journal home</span>
        </AppLink>
        <AppLink className={`${styles.tab} navTab`} href={`/journals/${journalData.id}/current-issue`}>
          <span>Current issue</span>
        </AppLink>
        <AppLink className={`${styles.tab} navTab wip`} href={`/journals/${journalData.id}/all-issues`}>
          <span>All issues</span>
        </AppLink>
        <AppLink className={`${styles.tab} navTab wip`} href={`/journals/${journalData.id}/metrics`}>
          <span>Metrics</span>
        </AppLink>
      </nav>
    </div>
  </div>
}
