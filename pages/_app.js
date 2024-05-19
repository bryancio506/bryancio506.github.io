import '../styles/globals.css'
import MesureMetrics from '../components/Common/MesureMetrics'

import ReactGA from 'react-ga';
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRouter } from 'next/router'; 

const queryClient = new QueryClient();
const GA_TRACKING_ID = 'G-0QD8PNG4RM'; // Replace with your actual Tracking ID

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GA_TRACKING_ID);

    // Track initial pageview
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Track pageview on route change
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
