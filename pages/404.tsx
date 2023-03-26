import { useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from './404.module.scss'

const NotFound: NextPage = () => {
  useEffect(() => {
    document.title = 'Page Not Found | My Website'
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.description}>
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className={styles.link}>Go back to the homepage</a>
      </Link>
    </div>
  )
}

export default NotFound