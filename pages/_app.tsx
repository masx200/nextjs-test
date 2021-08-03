import "../styles/globals.css";
import "../styles/styles.64e1a1f300e049d9a965.css";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import "../src/polyfill";
const app = function MyApp({ Component, pageProps }: AppProps) {
    // console.log(Component, pageProps)
    if (pageProps.statusCode) {
        return <Component {...pageProps} />;
    }
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default app;
