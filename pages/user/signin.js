// import Router from 'next/router'
import {useRouter}  from 'next/router';
import axios from 'axios'
// import Link from 'next/link'
import AppTemplate from '../../components/AppTemplate/AppTemplate'

export default function SignInPageRender({ currentUserData = {} }) {
  return (
    <AppTemplate title="Sign in - OPP UI Demo">
      <div className="mastheadContainer" role="banner">
        <div className="maxWidthLimitedContainer">
          <h1>Sign in</h1>
        </div>
      </div>
      <main>
        <div className="maxWidthLimitedContainer">
        { currentUserData.email ?
          `Signed in as ${currentUserData.email}.` :
          <form action="/api/user/signin" method="POST">
            <input type="text" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <button type="submit">Sign in</button>
          </form>
         }
        </div>
      </main>
    </AppTemplate>
  )
}

export async function getServerSideProps(ctx) {
  // get user session status - if authed redirect
  let targetUrl = `http://localhost:3000/api/v1/users/getCurrentUser`;

  const axiosProxyConfig = {
    method: 'get',
    url: targetUrl,
    headers: ctx && ctx.req && ctx.req.headers ? { cookie: ctx.req.headers.cookie } : undefined
  }

  const { data } = await axios(axiosProxyConfig);
  console.log(data);

  return {
    props: {
      currentUserData: data || {},
      // currentUserData: {},
    },
  };
}


export async function componentDidMount ({ currentUserData }) {
  const router = useRouter()

  // const { phrase } = router.query;
  // const {pathname} = Router
  if (currentUserData.email) {
    router.push('/user')
  }
}
