import {useEffect} from 'react';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({Component, pageProps}){
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.js')
    }, []);

    return <Component {...pageProps} />;
}