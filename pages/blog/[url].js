import Image from "next/image";
import Layout from "../../components/Layout";
import { formatDate } from "../../helpers";
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({ data }) => {
    const {
        titulo,
        imagen,
        published_at,
        contenido
    } = data[0];
    return (
        <Layout pagina={titulo}>

            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image
                        layout="responsive"
                        width={800}
                        height={600}
                        src={imagen[0].url}
                        alt={titulo}
                    />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatDate(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

/* SERVER SIDE */

export async function getStaticPaths() {
    /* necesario para pasar props a render */
    /* crea los paths de las rutas que se van a consultar */
    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    const paths = entradas.map(entrada => ({
        /* necesita ser string */
        params: { url: entrada.url }
    }))


    return {
        paths,
        /* true para gran cantidad de datos */
        fallback: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const respuesta = await fetch(`${process.env.API_URL}/blogs?url=${url}`)
    const resultado = await respuesta.json();

    return ({
        props: {
            data: resultado
        }
    })

}

export default EntradaBlog