import { useRouter } from 'next/router'
import Link from 'next/link'

import AppCommonStyles from './AppCommon.module.css'
import SearchInputSmall from '../SearchInput/SearchInputSmall'

function parseBreadcrumbs(pathname) {
  const breadcrumbSegments = pathname.split('/');
  const newBreadcrumbSegments = [];

  if (breadcrumbSegments[0] !== '/') {
    newBreadcrumbSegments.push({ name: 'Home', segment: '/', path: '/' });
  }

  function mergePathSegmentsReducer(total, newSeg) {
    const newVal = `${total}/${newSeg}`;
    newBreadcrumbSegments.push({ name: newSeg, segment: newSeg, path: newVal });
    return newVal;
  }

  if (breadcrumbSegments.length !== 1) {
    breadcrumbSegments.reduce(mergePathSegmentsReducer);
  }

  newBreadcrumbSegments[0].first = true;

  return newBreadcrumbSegments.map((seg) => {
    return seg.name ? <span key={seg.path} className={AppCommonStyles.breadcrumbItemContainer}>
      {seg.first ? '' : <span className={AppCommonStyles.breadcrumbItemSeparator}></span>}
      <Link href={`${seg.path}`}>
        <a className={AppCommonStyles.navItem}>{seg.name ? seg.name : seg.segment}</a>
      </Link>

    </span> : null;
  });
}

export default function AppBreadcrumbsComponent() {
  const router = useRouter();
  const pathname = router.asPath;
  const breadcrumbData = parseBreadcrumbs(pathname);

  return <header className={AppCommonStyles.header}>
    <div className="maxWidthLimitedContainer">
      <div className="flexContainer">
        <nav className={AppCommonStyles.navLeft}>
          {breadcrumbData}
        </nav>


        <nav className={AppCommonStyles.navRight}>
          <SearchInputSmall></SearchInputSmall>
        </nav>
      </div>
    </div>
  </header>
}
