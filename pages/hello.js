const { server } = require('@/config/server')

export default function hello({ data }) {
  return <h1 className='text-indigo-500'>{data.text}</h1>
}

// ? if data is changing often, we should use getServerSideProps
export async function getStaticProps() {
  const res = await fetch(`${server}/api/hello`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

// ? use this snippet to test app without api data
// export default function hello() {
//   return <h1 className='text-indigo-500'>Hello</h1>
// }
