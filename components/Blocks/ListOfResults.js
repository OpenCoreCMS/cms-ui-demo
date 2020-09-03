import Link from 'next/link'

import LinkDOI from '../Link/LinkDOI'
import styles from './ListOfResults.module.css'

export default function ListOfResultsComponent({ data = [] }) {
  const x = data.map((item) => (
    <li className={styles.result} key={item.id}>
      {item.img ? <img className="coverImageMedium" src={item.img} /> : ''}

      <h3>
        <input type="checkbox" /> &nbsp;
        <Link href={item.url}>
          <a>{item.title}</a>
        </Link>
      </h3>

      <p>
        {item.type ? <span className="contentTypePill">{item.type}</span> : ''}
        &nbsp; &nbsp;
        {item.doi ? <LinkDOI doi={item.doi}></LinkDOI> : ''}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span>{item.authorLine}</span>
      </p>

      <p className="pinned">{item.impactStatement}</p>

    </li>
  ))

  return <ul className={styles.lor}>{x}</ul>;
}
