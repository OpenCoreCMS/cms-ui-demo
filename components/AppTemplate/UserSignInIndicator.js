import getCurrentUser from '../_hooks/getCurrentUser'

import AppLink from '../Link/AppLink'
import AppCommonStyles from './AppCommon.module.css'

export default function UserSignInIndicator() {
  const { data, loading, error } = getCurrentUser();

  const markupNotSignedIn = <AppLink href="/user/signin" className={AppCommonStyles.navItem}>
    <span>Sign in</span>
  </AppLink>;

  if (loading) return markupNotSignedIn;
  if (error) return "[Error]";

  const markupSignedIn = <AppLink href="/user" className={AppCommonStyles.navItem}>
    <span>Signed in as {data.firstname} {data.lastname}</span>
  </AppLink>;

  return data.authenticated ? markupSignedIn : markupNotSignedIn;
}
