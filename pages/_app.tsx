import Head from 'next/head'
import '../styles/app.css'
import DashboardLayout from '../components/Layouts/Dashboard/DashboardLayout'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import AuthLayout from '../components/Layouts/Auth/AuthLayout'
import { LocalizationContextProvider } from '../context/LocalizationContext/LocalizationContext'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const DefaultLayout = ({ children }) => {
  return <>{children}</>
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const page = router.pathname

  let Layout = DashboardLayout
  if (page.includes('dashboard')) {
    Layout = DashboardLayout
  } else if (page.includes('sign')) {
    Layout = AuthLayout
  } else {
    Layout = DefaultLayout
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
