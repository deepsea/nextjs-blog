import Page from '../components/Page'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps}></Component>
        </Page>
    )
}
