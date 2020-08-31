import Link from 'next/link'

import styles from './FeaturedItems.module.css'

export default function FeaturedItemsComponent({ items = [{id: '57162', title: 'Lorem ipsum'}] }) {
  const markup = items.map((item) => (
    <span className={styles.item} key={item.id}>
      <span className={styles.image}>
        <img src={`https://dummyimage.com/120x160/aaa/fff.png&text=${item.id}`} />
      </span>
      <span className={styles.description}>
        <h3>
          <Link href="/journals/journalId/article/[itemId]" as={`/journals/journalId/article/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </h3>
        <span>{item.authorLine}</span><br />
        <span>{item.titlePrefix}</span><br />
      </span>
    </span>
  ));

  return <ul className={styles.featuredItems}>{markup}</ul>;
}
