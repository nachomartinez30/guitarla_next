import Link from "next/link";
import Image from "next/image";
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
            <h2>{titulo}</h2>
            <Image
                layout="responsive"
                width={800}
                height={600}
                src={imagen[0]?.url}
                alt='Imagen articulo'
            />
            <p>{formatDate(published_at)}</p>
            <p>{resumen}</p>
            <Link href={`/blog/${id}`}>
                Leer
            </Link>
        </article>
    );
}

export default Entrada;