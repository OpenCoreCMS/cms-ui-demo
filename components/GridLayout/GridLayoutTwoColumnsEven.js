import styles from './GridLayoutTwoColumnsEven.module.css'

export default function GridTwoColumnsEvenComponent({ children = [] }) {
  return <div className={`maxWidthLimitedContainer ${styles.gridRow}`}>{children}</div>;
}
