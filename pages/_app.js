import "styles/globals.scss";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { Inter, Libre_Caslon_Display, BIZ_UDGothic } from 'next/font/google'

dayjs.locale('ja')
const inter = Inter({ subsets: ['latin'] })
const LibreCaslonDisplay = Libre_Caslon_Display({ 
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-libre-caslon-display',
})
const bizUdGothic = BIZ_UDGothic({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-biz-ud-gothic',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style global jsx>{`
        html {
          --font-LibreCaslon: ${LibreCaslonDisplay.style.fontFamily};
          --font-Inter: ${inter.style.fontFamily};
          --font-BizUdGothic: ${bizUdGothic.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
