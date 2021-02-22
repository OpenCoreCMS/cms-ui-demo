import _ from 'lodash'
import axios from 'axios'
import AppTemplate from '../../components/AppTemplate/AppTemplate'

export default function SignInPageRender({ currentUserData = {} }) {
  return (
    <AppTemplate title="Sign in - Open Core CMS UI Demo">
      <div className="mastheadContainer" role="banner">
        <div className="maxWidthLimitedContainer">
          <h1>User page</h1>
        </div>
      </div>
      <main>
        <div className="maxWidthLimitedContainer">
        { currentUserData.email ?
          <p>
            Signed in as <strong>{currentUserData.email}</strong>.
            <br />
            <a href="/api/user/signout">Sign out</a>
          </p> :
          <p>
            You are not signed in.
            <br />
            <a href="/user/signin">Sign in</a>
          </p>
         }
        </div>
      </main>
    </AppTemplate>
  )
}

export async function getServerSideProps(ctx) {
  const targetUrl = `${process.env.OCC_UI_URL}/api/v1/users/getCurrentUser`;
  const currentCookie = _.get(ctx, 'req.headers.cookie');
  const headers = currentCookie ? { cookie: currentCookie } : undefined;

  const axiosProxyConfig = {
    method: 'get',
    url: targetUrl,
    headers: headers
  };

  const { data } = await axios(axiosProxyConfig);

  return {
    props: {
      currentUserData: data
    },
  };
}
