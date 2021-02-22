import _ from 'lodash'
import axios from 'axios'
import AppTemplate from '../../components/AppTemplate/AppTemplate'

export default function SignInPageRender() {
  return (
    <AppTemplate title="Sign in - Open Core CMS UI Demo">
      <div className="mastheadContainer" role="banner">
        <div className="maxWidthLimitedContainer">
          <h1>Sign in</h1>
        </div>
      </div>
      <main>
        <div className="maxWidthLimitedContainer">
          <form action="/api/user/signin" method="POST">

            <label>
              <span>Email</span>
              <input type="text" name="email" />
            </label>

            <br />

            <label>
              <span>Password</span>
              <input type="password" name="password" />
            </label>

            <br />
            <br />

            <button type="submit">Sign in</button>
          </form>
        </div>
      </main>
    </AppTemplate>
  )
}

export async function getServerSideProps(ctx) {
  const targetUrl = `http://localhost:3000/api/v1/users/getCurrentUser`;
  const currentCookie = _.get(ctx, 'req.headers.cookie');
  const headers = currentCookie ? { cookie: currentCookie } : undefined;

  const axiosProxyConfig = {
    method: 'get',
    url: targetUrl,
    headers: headers
  }

  const { data } = await axios(axiosProxyConfig);

  // if signed in redirect to /user
  if (data && data.authenticated) {
    console.log('User authenticated, should redirect.');
    // ctx.res.writeHead(302, { Location: '/user' });
  } else {
    console.log('User not authenticated, showing sign in form.');
  }

  return {
    props: {
      currentUserData: {},
    },
  };
}
