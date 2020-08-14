import 'antd/dist/antd.css';
import '../styles/globals.css';
import { Layout } from '../components';

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <Layout.Container>
      <Component {...pageProps} />
    </Layout.Container>
  );
}

export default MyApp;
