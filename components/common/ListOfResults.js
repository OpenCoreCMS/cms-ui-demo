import Link from 'next/link'

import styles from './ListOfResults.module.css'

export default function AppTemplate({
  children,
  data = [],
}) {
  const x = data.map((item) => (
    <li className={styles.result} key={item.id}>
      <Link href="/journals/journalId/article/[itemId]" as={`/journals/journalId/article/${item.id}`}>
        <a>{item.title}</a>
      </Link>
      <br />
      <span>Authors: {item.authorLine}</span><br />
      <span>Type: {item.titlePrefix}</span><br />
      <br />
      <span>DOI: {item.doi}</span><br />
      <span>{item.impactStatement}</span><br />
    </li>
  ))

  return <ul className={styles.lor}>{x}</ul>;
}
