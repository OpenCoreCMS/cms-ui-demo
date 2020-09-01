export default function LinkDOIComponent({ doi }) {
  const finalDOILink = `https://doi.org/${doi}`;
  const finalDOIDisplayString = doi;
  return <a href={finalDOILink} target="_blank" rel="noopener" className="linkDOI">{finalDOIDisplayString}</a>;
}
