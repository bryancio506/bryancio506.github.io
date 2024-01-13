import '../styles/globals.css'
import MesureMetrics from '../components/Common/MesureMetrics'

import ReactGA from 'react-ga';
import Layout from './layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  useEffect(() => {
    MesureMetrics();
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
