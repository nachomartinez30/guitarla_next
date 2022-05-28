import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pagina = '' }) => {
    return (
        <div>
            <Head>
                <title>GuitarLA - {pagina}</title>
                <meta
                    name="guitarsLA"
                    content="Venta de guitarras"
                />
                <link
                    rel='icon'
                    href="/favicon.ico"
                />
                <div>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap" rel="stylesheet" />
                </div>

            </Head>

            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;