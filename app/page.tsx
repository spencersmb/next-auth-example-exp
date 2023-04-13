import Image from 'next/image'
import Header from '../components/headerClient'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
