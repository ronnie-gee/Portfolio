
import { useEffect } from 'react'
import styles from '../styles/Home.module.css';
import { Box, Typography } from '@mui/material';
import AnimatedLetters from './components/Animatedletters'
import Animatedletters from './components/Animatedletters';

export default function Home() {

  return (
    <div>
      <main className={styles.main}>
        <Animatedletters word="Ronnie Alfonso" variant="h2"></Animatedletters>
      </main>

      <footer className={styles.footer}>
          <span className={styles.logo}>
            
          </span>

      </footer>
    </div>
  )
}
