import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withAuth from "../HOC/withAuth"
import withRedux from "../HOC/withRedux";

function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />
}

const MyAppWithAuth = withAuth(MyApp)
const MyAppWithRedux = withRedux(MyAppWithAuth)
export default MyAppWithRedux;
