// import AppLink from '../Link/AppLink'
// import styles from './JournalMasthead.module.css'

export default function JournalIssueCoverComponents({
  journalIssueId,
  size = 'small',
  text = ''
}) {
  const className = "coverImageMediumSmall";

  return <div>
    <img
      src={`https://dummyimage.com/240x320/aaa/fff.png&text=${journalIssueId}`}
      className={className}
      alt={text}
    />
  </div>
}
