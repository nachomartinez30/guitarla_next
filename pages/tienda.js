import Layout from '../components/Layout';
import Listado from '../components/Listado';

const Tienda = ({ guitarras }) => {
    return (
        <Layout pagina='Tienda'>
            <main className='contenedor'>
                <h1 className='heading'>
                    Nuestra colección
                </h1>
                <div>
                    <Listado data={guitarras} />
                </div>
            </main>
        </Layout>
    );
}

/* SERVER SIDE */

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/guitarras?_sort=created_at:desc`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    return {
        props: {
            guitarras: resultado
        }
    }
}

export default Tienda;