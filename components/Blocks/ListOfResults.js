import Link from 'next/link'

import LinkDOI from '../Link/LinkDOI'
import DisplayHTML from '../CommonElements/DisplayHTML'
import styles from './ListOfResults.module.css'

export default function ListOfResultsComponent({ data = [] }) {
  const x = data.map((item) => (
    <li className={styles.result} key={item.id}>
      {item.img ? <img className="articleImage" src={item.img} /> : ''}

      <h3>
        <input type="checkbox" /> &nbsp;
        <Link href={item.url}>

          <a><DisplayHTML>{item.title}</DisplayHTML></a>
        </Link>
      </h3>

      <p>
        {item.type ? <span className="contentTypePill">{item.type}</span> : ''}
        &nbsp; &nbsp;
        {item.doi ? <LinkDOI doi={item.doi}></LinkDOI> : ''}
        &nbsp; &nbsp; &nbsp; &nbsp;
        <span>{item.authorLine}</span>
      </p>

      <DisplayHTML className="pinned">{item.impactStatement}</DisplayHTML>

    </li>
  ))

  return <ul className={styles.lor}>{x}</ul>;
}
