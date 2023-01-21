import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '@/components/Layout'
import utilStyles from '@/styles/utils.module.scss'

import { getSortedPostsData } from '@/lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <b>Emanuele</b>. I'm a software engineer in love with front
          end development. You can contact me on{' '}
          <a href='https://www.linkedin.com/in/emanuele-favero/'>Linkedin</a>.
        </p>
        <p>
          <i>
            Check out my projects on{' '}
            <a target='_blank' href='https://github.com/emanuelefavero'>
              GitHub
            </a>{' '}
          </i>
        </p>
        <p>(This is a Next.js sample website)</p>
        <h3>Posts</h3>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
