import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../helpers";
import styles from '../styles/Entrada.module.css'


const Entrada = ({ data }) => {
    const {
        id,
        titulo,
        resumen,
        published_at,
        imagen
    } = data
    return (
        <article>
            <Image
                priority="true"
                layout="responsive"
                width={800}
                height={600}
                src={imagen[0]?.url}
                alt='Imagen articulo'
            />
            <div className={styles.contenido}>
                <h3>
                    {titulo}
                </h3>
                <p className={styles.fecha}>
                    {formatDate(published_at)}
                </p>
                <p className={styles.resumen}>
                    {resumen}
                </p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.enlace}>
                        Leer Entrada
                    </a>
                </Link>
            </div>
        </article>
    );
}

export default Entrada;