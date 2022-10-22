import { useEffect } from 'react'
import '../styles/globals.css'
import Layout from './components/Layout';
import NavBar from './components/NavBar'

const logo = "#254A7B, 11A2E1";

function MyApp({ Component, pageProps }) {
  
  return (
  <>
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
     
  </>
  )
}

export default MyApp
