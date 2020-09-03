import PanelStyles from '../CommonElements/Panel.module.css'

export default function Panel({ children, collapsible = false, collapsed = false, title }) {
  return <div className={PanelStyles.panel}>
    {title ? <div className={PanelStyles.panelTitle}>
      {collapsible ? <span>&nabla; &Delta; </span> : <span></span>}
      <strong>{title}</strong>
    </div> : ''}

    <div className={PanelStyles.panelBody}>
      {children}
    </div>

  </div>;
}
