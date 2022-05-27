const EntradaBlog = ({ data }) => {
    console.log(data);
    return (
        <div>EntradaBlog </div>
    )
}

export async function getStaticPaths() {
    /* necesario para pasar props a render */
    /* crea los paths de las rutas que se van a consultar */
    const url = "http://localhost:1337/blogs"
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    const paths = entradas.map(entrada => ({
        /* necesita ser string */
        params: { id: entrada.id + '' }
    }))

    console.log(paths);

    return {
        paths,
        /* true para gran cantidad de datos */
        fallback: false
    }
}

export async function getStaticProps({ params: { id } }) {
    const respuesta = await fetch(`http://localhost:1337/blogs/${id}`)
    const resultado = await respuesta.json();

    return ({
        props: {
            data: resultado
        }
    })

}

export default EntradaBlog