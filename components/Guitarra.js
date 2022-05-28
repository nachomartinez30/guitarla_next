import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({ data }) => {
    const {
        nombre,
        imagen,
        precio,
        descripcion,
        url
    } = data
    return (
        <div className={styles.guitarra}>
            <Image
                layout="responsive"
                width={180}
                height={350}
                src={imagen.url}
                alt={nombre}
            />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className={styles.enlace}>Ver producto</a>
                </Link>
            </div>
        </div>
    );
}

export default Guitarra;