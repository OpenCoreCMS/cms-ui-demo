import styles from './BlockRenderer.module.css'

function renderHtmlBlock(block) {
  return <div dangerouslySetInnerHTML={{ __html: block.value }}></div>
}

function renderFeedBlock(block) {
  return <div>
    <pre>{JSON.stringify(block, null, 2)}</pre>
  </div>
}

export default function BlockRendererComponent({ blocks = [], debug = false }) {
  const markup = blocks.map((block) => (
    <div className={styles.block} key={block.id}>

      { block.type === 'html' ? renderHtmlBlock(block) : '' }
      { block.type === 'feed' ? renderFeedBlock(block) : '' }


      { debug ? <pre>{JSON.stringify(block, null, 2)}</pre> : '' }
    </div>
  ));

  return <div className={styles.blocksContainer}>{markup}</div>;
}
