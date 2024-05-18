import ReactGA from 'react-ga';

const MesureMetrics = () => {
    // replace this with your google analytics id
    const GA_ID = 'G-0QD8PNG4RM'; 

    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default MesureMetrics;

