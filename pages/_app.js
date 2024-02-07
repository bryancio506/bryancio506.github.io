import '../styles/globals.css'
import MesureMetrics from '../components/Common/MesureMetrics'

import ReactGA from 'react-ga';
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  useEffect(() => {
    ReactGA.initialize('G-0QD8PNG4RM');
    // Track initial pageview
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Track pageview on route change
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
