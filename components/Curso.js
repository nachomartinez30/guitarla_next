import styles from '../styles/Cursos.module.css'

const Curso = ({ data }) => {
    const {
        contenido,
        titulo,
        imagen
    } = data
    return (
        <section>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={styles.texto}>{contenido}</p>
                    <a href="#" className={styles.enlace}>Mas Información</a>
                </div>
            </div>
            <style jsx>{`
           section {
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.8),
                rgb(0 0 0 / 0.7)
                ),
                url(${imagen.url});
                background-size: cover;
                background-position: 50%;
            }
            `}</style>
        </section>
    );
}

export default Curso;