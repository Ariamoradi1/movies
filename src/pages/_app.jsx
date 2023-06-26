import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '../styles/globals.css'
import store from '../Redux/Store/Store'
export default function App({ Component, pageProps }) {
  return(
    <>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </>
  ) 
}
