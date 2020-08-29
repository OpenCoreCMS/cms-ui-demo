import AppTemplate from '../../components/AppTemplate'
import styles from '../../styles/Journal.module.css'

export default function JournalIndexPageRender() {
  return (
    <AppTemplate title="Our journals - OPP Demo">
      <div className="mastheadContainer">
        <div className="readingWidthLimitedContainer">
          <h1>
            Our journals
          </h1>
          <p>At ExamplePubHouse we publish content from over 50 journals.</p>
        </div>
      </div>

      <main>
        <div className="readingWidthLimitedContainer">
          <ul>
            <li>
              <a href="/journal/american-journal-of-countless-examples">American Journal of Countless Examples</a>
            </li>
            <li>
              <a href="/journal/british-journal-of-practical-puns">British Journal of Practical Puns</a>
            </li>
            <li>
              <a href="/journal/journal-of-believable-research">Journal of Believable Research</a>
            </li>
          </ul>
        </div>
      </main>
    </AppTemplate>
  )
}
