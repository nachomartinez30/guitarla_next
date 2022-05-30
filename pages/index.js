import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'

export default function Home({ guitarras, cursos }) {
  return (
    <Layout>
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        {/* TIENDA */}
        <Listado
          data={guitarras}
        />
      </main>
      {/* APRENDE A TOCAR GUITARRA */}
      <Curso data={cursos} />

    </Layout>
  )
}


/* SERVER SIDE */

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`

  const [respuestaGuitarras, respuestaCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
  ])

  const [resultadoGuitarras, resultadoCursos] = await Promise.all([
    respuestaGuitarras.json(),
    respuestaCursos.json(),
  ]);

  return {
    props: {
      guitarras: resultadoGuitarras,
      cursos: resultadoCursos,
    }
  }
}
