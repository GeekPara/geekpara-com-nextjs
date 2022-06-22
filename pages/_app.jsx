import { useEffect } from "react";

import AOS from "aos";
import Sticky from 'sticky-js';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // init AOS
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic'
    });

    // init sticky.js
    const sticky = new Sticky('[data-sticky]');
  }, []);

  // init pages
  return <Component {...pageProps} />
}

export default MyApp
