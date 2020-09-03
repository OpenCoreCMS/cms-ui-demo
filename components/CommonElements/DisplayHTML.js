export default function DisplayHTML({ children, className }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: children }}></span>;
}
