import Entrada from '../components/Entrada';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css'

const Blog = ({ posts }) => {

    return (
        <Layout pagina='Blog'>
            <main className='contenedor'>
                <h2 className='heading'>Blog</h2>
                <div className={styles.blog}>
                    {posts.map(post => <Entrada key={post.id} data={post} />)}
                </div>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    const api_url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(api_url);
    const posts = await respuesta.json()

    return {
        props: {
            posts
        }
    }
}

export default Blog;