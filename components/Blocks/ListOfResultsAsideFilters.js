import Panel from '../CommonElements/Panel'

export default function ListOfResultsAsideFiltersComponent() {
  return <div>
  <Panel title="Sort results" collapsible={true}>
    Results are sorted by:
    <br />
    <select>
      <optgroup label="Default">
        <option>Relevance (highest to lowest)</option>
      </optgroup>
      <optgroup label="Date">
        <option>Date (newest to oldest)</option>
        <option>Date (oldest to newest)</option>
      </optgroup>
      <optgroup label="Title">
        <option>Title (A to Z)</option>
        <option>Title (Z to A)</option>
      </optgroup>
      <optgroup label="Publication model">
        <option>Fixed issues</option>
        <option>Continuous publication</option>
      </optgroup>
    </select>
  </Panel>
  <Panel title="Filter results" collapsible={true}>
    <strong>Filter results by:</strong>
    <br />
    - Content type<br />
    - Publication date<br />
    - Subject<br />
    - Journals<br />
  </Panel>
  </div>;
}
