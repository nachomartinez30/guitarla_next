import Curso from '../components/Curso'
import Entrada from '../components/Entrada'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlogs from '../components/ListadoBlogs'

export default function Home({ guitarras, cursos, posts }) {
  return (
    <Layout
      destacado={guitarras[1]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        {/* TIENDA */}
        <Listado
          data={guitarras}
        />
      </main>
      {/* APRENDE A TOCAR GUITARRA */}
      <Curso data={cursos} />
      {/* BLOG */}
      <section className='contenedor'>
        <ListadoBlogs posts={posts} />
      </section>
    </Layout>
  )
}


/* SERVER SIDE */

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_sort=created_at:desc&_limit=3`;

  const [respuestaGuitarras, respuestaCursos, respuestaBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ])

  const [resultadoGuitarras, resultadoCursos, resultadoBlog] = await Promise.all([
    respuestaGuitarras.json(),
    respuestaCursos.json(),
    respuestaBlog.json(),
  ]);

  return {
    props: {
      guitarras: resultadoGuitarras,
      cursos: resultadoCursos,
      posts: resultadoBlog
    }
  }
}
