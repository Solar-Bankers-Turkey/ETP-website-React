import Head from 'next/head'
import '../styles/app.css'
import { useRouter } from 'next/router'
import DashboardLayout from '../components/layouts/Dashboard/DashboardLayout'

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
function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  // const page = router.pathname.split('/')[1]
  // if (page !== 'dashboard') {
  //   Layout = DefaultLayout
  // }
  let Layout = DashboardLayout
  return (
    <>
      <Head>
        <title>Energy Trading Platform</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
