import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Layout.module.scss'
import utilStyles from '@/styles/utils.module.scss'
import Link from 'next/link'

const name = 'Emanuele Favero'
export const siteTitle = 'Next.js Sample Website'

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* HEAD */}
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <title>Create Next App</title>
      </Head>

      {/* HEADER */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=''
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* MAIN */}
      <main>{children}</main>

      {/* FOOTER */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  )
}

export default Layout
