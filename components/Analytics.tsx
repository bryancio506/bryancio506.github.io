import Script from 'next/script';

// Google Analytics 4. The measurement ID is public (it ships in the page anyway); the tag only
// loads on the production host, so localhost visits aren't counted.
// Outbound clicks, scrolls and the résumé download come from GA's enhanced measurement.
const GA_ID = 'G-6Z88E1KH2V';
const PROD_HOST = 'bryancio506.github.io';

const loader = `
(function(){
  if (location.hostname !== '${PROD_HOST}') return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
})();
`;

export default function Analytics() {
  return (
    <Script id="ga-loader" strategy="afterInteractive">
      {loader}
    </Script>
  );
}
