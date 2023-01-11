import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {Kanit} from "@next/font/google";
import Header from "../src/components/Header";

const kanit = Kanit({
  weight: ["300", "400", "500"],
  subsets: ['latin'],
})

export default function App({Component, pageProps}: AppProps) {
    return (

            <div className={kanit.className}>
                <Header/>
                <Component  {...pageProps} />
            </div>

)
}
