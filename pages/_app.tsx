import '../styles/globals.css'
import Layout from '../components/layout'
import { AppProps } from 'next/app'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

    useEffect(() => {
        AOS.init()
    }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
