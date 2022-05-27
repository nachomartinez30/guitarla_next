import Entrada from '../components/Entrada';
import Layout from '../components/Layout';
import styles from '../styles/Blog.module.css'

const Blog = ({ posts }) => {

    console.log(posts);
    return (
        <Layout pagina='Blog'>
            <h1>
                <main className='contenedor'>
                    <h2 className='heading'>Blog</h2>
                    <div className={styles.blog}>
                        {posts.map(post => <Entrada key={post.id} data={post} />)}
                    </div>
                </main>
            </h1>
        </Layout>
    );
}

export async function getStaticProps() {
    const api_url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(api_url);
    const posts = await respuesta.json()

    return {
        props: {
            posts
        }
    }
}

export default Blog;