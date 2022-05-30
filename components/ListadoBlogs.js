import Entrada from "./Entrada";
import styles from '../styles/Blog.module.css'

const ListadoBlogs = ({ posts }) => {
    return (
        <>
            <h2 className='heading'>Blog</h2>
            <div className={styles.blog}>
                {posts.map(post => <Entrada key={post.id} data={post} />)}
            </div>
        </>
    );
}

export default ListadoBlogs;