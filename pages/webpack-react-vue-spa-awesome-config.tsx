import Home, {
    markurl,
} from "../components/home-react-webpack-react-vue-spa-awesome-config";
import { GetStaticProps } from "next";
import { getrenderedmarkdown } from "../components/markdown-react/getrenderedmarkdown";
const reacthome = ({ markdown }: { markdown: string }) => {
    return <Home markdown={markdown}></Home>;
};
export default reacthome;

export const getStaticProps: GetStaticProps = async (context) => {
    // console.log(context);
    const markdown = await getrenderedmarkdown(markurl);
    return { revalidate: false, props: { markdown } };
};