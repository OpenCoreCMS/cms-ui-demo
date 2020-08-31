import styles from './GridLayoutTwoColumnsOdd.module.css'

export default function GridTwoColumnsOddComponent({ children = [] }) {
  return <div className={`maxWidthLimitedContainer ${styles.gridRow}`}>{children}</div>;
}
