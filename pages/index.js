import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h1 className="heading">
        Cabezera
      </h1>
      <Link href='/nosotros'>Nosotros</Link>
    </Layout>
  )
}
