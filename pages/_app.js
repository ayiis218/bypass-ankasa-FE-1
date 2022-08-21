import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store, persistor } from '../redux/app/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
import AppWrapper from "../components/layout/AppWrapper"

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <AppWrapper>
               <Component {...pageProps} />
            </AppWrapper>
         </PersistGate>
      </Provider>
   );
}

export default MyApp;
