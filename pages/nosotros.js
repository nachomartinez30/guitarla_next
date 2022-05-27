import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout pagina='nosotros'>
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                        <Image layout='responsive' width={600} height={450} alt='imagen sobre nosotros' src='/img/nosotros.jpg' />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id laoreet magna, id maximus odio. 
                        </p>
                        <p>
                            Sed tortor justo, sodales ut venenatis non, tincidunt quis est.Vestibulum sed libero neque.Cras porta lobortis suscipit.Sed sodales condimentum augue nec mollis.Quisque maximus rutrum ex sed sagittis.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed iaculis dolor sit amet nunc vulputate, eu placerat nunc porta.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Nosotros;