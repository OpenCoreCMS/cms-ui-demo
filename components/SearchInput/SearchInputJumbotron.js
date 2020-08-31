import SearchInputStyles from './SearchInput.module.css'

export default function SearchInputJumbotronComponent() {
  return <form action="/search">
    <div className={SearchInputStyles.jumbotronSearchContainer}>
      <input className={SearchInputStyles.jumbotronSearchInput} type="search" name="phrase" placeholder="Search Open Access content" />
      <input className={SearchInputStyles.jumbotronSearchSubmit} type="submit" value="Run search" />
    </div>
  </form>;
}
