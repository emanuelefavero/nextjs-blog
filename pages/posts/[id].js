import Head from 'next/head'
import Layout from '@/components/Layout'

import Date from '@/components/Date'

import { getAllPostIds, getPostData } from '@/lib/posts'

// -< Post >--------------------------------
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {/* Post Title */}
      <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

      <div className='text-gray-500 font-medium mb-5'>
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className='text-gray-600'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      {/* 

      dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
      Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)

       */}
    </Layout>
  )
}

// * -< Fetch Data >-------------------------------
export async function getStaticPaths() {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}
