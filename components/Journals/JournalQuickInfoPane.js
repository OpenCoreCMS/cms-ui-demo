export default function JournalQuickInfoPaneComponent({ journalData = {} }) {
  return <div>
    <div className="textCenter">
      <img src={`https://dummyimage.com/240x320/aaa/fff.png&text=${journalData.id}`} alt="Current issue of journal" />
      <a href={`/journals/${journalData.id}/current-issue`}>
        Current issue (Sep 20):<br /><i>Dummy content in publishing</i>
      </a>
    </div>

    <br /><br />

    <hr />

    <div>
      <h3>Bibliographic info</h3>
      <strong>Journal name: </strong> {journalData.name}
      <br />
      <strong>Journal mnemonic: </strong> {journalData.identifiers.mnemonic}
      <br />
      <strong>ISSN (Print): </strong> {journalData.identifiers.issnPrint}
      <br />
      <strong>ISSN (Online): </strong> {journalData.identifiers.issnOnline}
      <br />
      <strong>DOI:</strong> {journalData.identifiers.doi}
      <br />
      <br />
      <strong>Frequency:</strong> 4 issues per year
      <br />
      <strong>Publishing dates:</strong> 2004-present
      <br />
      <strong>Publisher:</strong> <a className="linkExternal" target="_blank" rel="noopener" href={journalData.publisher.url}>{journalData.publisher.name}</a>
    </div>

    <hr />

    <div>
      <h3>Information</h3>
      <p>
        <strong>Chief Editor: </strong> Professor John Doe, Institute of Science
      </p>
      <p>
        <a className="wip" href="#">Editorial board</a>
      </p>
      <p>
        <a className="wip" href="#">Author guidelines</a>
      </p>

      <hr />
      <h3>Journal title history</h3>
      <p>
        This journal has been published under other titles in the past.
        <br />
        <br />
        <a className="wip" href="#">View this journal's title history</a>
      </p>
    </div>

    <hr />

    <div>
      <h3>Metrics</h3>
      <p>
        <strong>Impact Factor:</strong> 3.11
      </p>
      <p>
        <strong>Monthly article views:</strong> 93,234
      </p>
    </div>
  </div>;
}
