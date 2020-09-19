import axios from 'axios'
// import Link from 'next/link'
import AppTemplate from '../../components/AppTemplate/AppTemplate'

export default function SignInPageRender({ currentUserData = {} }) {
  return (
    <AppTemplate title="Sign in - OPP UI Demo">
      <div className="mastheadContainer" role="banner">
        <div className="maxWidthLimitedContainer">
          <h1>Hello {currentUserData ? currentUserData.email : 'unauthenticated'}</h1>
        </div>
      </div>
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
  return {
    props: {
      currentUserData: data || {}
    },
  };
}
