import Link from 'next/link'

import styles from './DataFeed.module.css'

export default function FeaturedItemsComponent({ items = [{id: 'X', title: 'Lorem ipsum', description: 'Lorem ipsum', url: 'https://example.com/blog/1' }] }) {
  const markup = items.map((item) => (
    <span className={styles.item} key={item.id}>
      <img className="avatarSquare" src={`https://dummyimage.com/80x80/aaa/fff.png&text=${item.id}`} />
      <Link href={item.url}>
        <a target="_blank" rel="noopener">{item.title}</a>
      </Link>
      <p>{item.description}</p>
      </span>
  ));

  return <ul className={styles.featuredItems}>{markup}</ul>;
}
