export default function hello({ data }) {
  return <h1 className='text-indigo-500'>{data.text}</h1>
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
