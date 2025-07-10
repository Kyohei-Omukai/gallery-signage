import "styles/globals.scss";
import dayjs from 'dayjs'
import 'dayjs/locale/ja'

dayjs.locale('ja')

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
