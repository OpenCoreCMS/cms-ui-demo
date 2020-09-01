import styles from './GridLayoutThreeColumnsOdd.module.css'

export default function GridThreeColumnsOddComponent({ children = [] }) {
  return <div className={`maxWidthLimitedContainer ${styles.gridRow}`}>{children}</div>;
}
