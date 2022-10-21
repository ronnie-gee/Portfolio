import { useEffect } from 'react'
import '../styles/globals.css'
import Layout from './components/Layout';
import NavBar from './components/NavBar'

const logo = "#254A7B, 11A2E1";

function MyApp({ Component, pageProps }) {

  /**
   * Get system theme if no theme found in local storage. Use toggleTheme to switch theme
   */
  const setTheme = ()=>{
    if(localStorage.getItem('ronnie-portfolio-theme')===undefined){
      if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        document.documentElement.setAttribute('theme-selector', 'dark');
        localStorage.setItem('ronnie-portfolio-theme', 'dark')
      } else {
        document.documentElement.setAttribute('theme-selector', 'light');
        localStorage.setItem('ronnie-portfolio-theme', 'light')
      }
    } else {
      document.documentElement.setAttribute('theme-selector', localStorage.getItem('ronnie-portfolio-theme'));
    }
  }

  const toggleTheme = ()=>{
    if(localStorage.getItem('ronnie-portfolio-theme')==='dark'){
      document.documentElement.setAttribute('theme-selector', 'light');
      localStorage.setItem('ronnie-portfolio-theme', 'light')
    } else {
      document.documentElement.setAttribute('theme-selector', 'dark');
      localStorage.setItem('ronnie-portfolio-theme', 'dark')
    }
  }

  useEffect(() => {
    setTheme();
    return () => {}
  }, [])
  
  return (
  <>
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
     
  </>
  )
}

export default MyApp
