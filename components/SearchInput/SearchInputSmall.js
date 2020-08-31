import SearchInputStyles from './SearchInput.module.css'

export default function SearchInputSmallComponent() {
  return <form className={SearchInputStyles.smallSearchForm} action="/search">
    <div className={SearchInputStyles.smallSearchContainer}>
      <input className={SearchInputStyles.smallSearchInput} type="search" name="phrase" placeholder="Search" />
      <input className={SearchInputStyles.smallSearchSubmit} type="submit" value="Run" />
    </div>
  </form>;
}
