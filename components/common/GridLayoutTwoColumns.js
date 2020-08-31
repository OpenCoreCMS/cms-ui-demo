import styles from './GridLayoutTwoColumns.module.css'

export default function GridTwoColumnsComponent({ children = [] }) {
  return <ul className={styles.gridRow}>{children}</ul>;
}
