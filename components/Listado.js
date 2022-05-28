import Guitarra from './Guitarra'
import styles from '../styles/Listado.module.css'

const Listado = ({ data }) => {


    return (
        <div className={styles.listado}>
            {
                data.map(item => <Guitarra key={item.nombre} data={item} />)
            }
        </div>
    );
}

export default Listado;