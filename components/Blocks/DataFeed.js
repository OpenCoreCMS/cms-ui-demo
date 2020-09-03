import ExternalLink from '../Link/ExternalLink'

import styles from './DataFeed.module.css'

export default function FeaturedItemsComponent({ items = [{id: 'X', title: 'Lorem ipsum', description: 'Lorem ipsum', url: 'https://example.com/blog/1' }] }) {
  const markup = items.map((item) => (
    <span className={styles.item} key={item.id}>
      <img className="avatarSquare" src={`https://dummyimage.com/80x80/aaa/fff.png&text=${item.id}`} />
      <ExternalLink href={item.url}>
        <span>{item.title}</span>
      </ExternalLink>
      <p>{item.description}</p>
      </span>
  ));

  return <ul className={styles.featuredItems}>{markup}</ul>;
}
