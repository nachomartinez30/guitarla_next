import Entrada from '../components/Entrada';
import Layout from '../components/Layout';




const Blog = ({ posts }) => {

    console.log(posts);
    return (
        <Layout pagina='Blog'>
            <h1>
                <main className='contenedor'>
                    <h2 className='heading'>Blog</h2>
                    <div>
                        {posts.map(post => <Entrada key={post.id} data={post} />)}
                    </div>
                </main>
            </h1>
        </Layout>
    );
}

export async function getStaticProps() {
    const api_url = 'http://localhost:1337/blogs';
    const respuesta = await fetch(api_url);
    const posts = await respuesta.json()

    return {
        props: {
            posts
        }
    }
}

export default Blog;