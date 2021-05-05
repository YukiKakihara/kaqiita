import '../styles/globals.css';
import { useGoogleAdsense } from 'hooks/useGoogleAdsense';
import { Layout } from 'components/layout';

const MyApp = ({ Component, pageProps }) => {
  useGoogleAdsense();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
