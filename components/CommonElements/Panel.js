import PanelStyles from '../CommonElements/Panel.module.css'

export default function Panel({ children, collapsible = false, collapsed = false, userSelectable = false, title, style }) {
  return <div className={`${PanelStyles.panel} ${PanelStyles[style]} ${userSelectable ? '' : 'noUserSelect'}`}>
    {title ? <div className={PanelStyles.panelTitle}>
      {collapsible ? <span>&nabla; &Delta; </span> : <span></span>}
      <strong>{title}</strong>
    </div> : ''}

    <div className={PanelStyles.panelBody}>
      {children}
    </div>

  </div>;
}
