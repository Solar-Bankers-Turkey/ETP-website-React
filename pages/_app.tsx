import Head from 'next/head'
import '../styles/app.css'
import DashboardLayout from '../components/Layouts/Dashboard/DashboardLayout'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import AuthLayout from '../components/Layouts/Auth/AuthLayout'
import { LocalizationContextProvider } from '../context/LocalizationContext/LocalizationContext'
import { useLayoutEffect, useState } from 'react'

const DefaultLayout = ({ children }) => (
  <div className="default-container">
    <div className="main">{children}</div>
    <h1>LAYOUT NOT DEFINED</h1>
    <style jsx>{`
      .default-container {
        padding: 40px 20px;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
      }
    `}</style>
  </div>
)

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const page = router.pathname.split('/')[1]
  const [lng, setLng] = useState('en')

  let Layout = DashboardLayout
  if (page === 'dashboard') {
    Layout = DashboardLayout
  } else {
    Layout = AuthLayout
  }

  return (
    <>
      <Head>
        <title>Energy Trading Platform</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LocalizationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LocalizationContextProvider>
    </>
  )
}

export default MyApp
