import Link from 'next/link'

import styles from './Feed.module.css'

export default function FeaturedItemsComponent({ items = [{id: 'X', title: 'Lorem ipsum', description: 'Lorem ipsum' }] }) {
  const markup = items.map((item) => (
    <span className={styles.item} key={item.id}>
      <img src={`https://dummyimage.com/80x80/aaa/fff.png&text=${item.id}`} />
      <Link href="/journals/journalId/article/[itemId]" as={`/journals/journalId/article/${item.id}`}>
        <a>{item.title}</a>
      </Link>
      <p>{item.description}</p>
      </span>
  ));

  return <ul className={styles.featuredItems}>{markup}</ul>;
}
