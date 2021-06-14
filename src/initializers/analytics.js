// Google Analytics 4

import GA4React from "ga-4-react";

const ga4react = new GA4React(process.env.REACT_APP_MEASUREMENT_ID);
ga4react.initialize().then(
  (ga4) => {
    ga4.pageview("path");
    ga4.gtag("event", "pageview", "path"); // or your custom gtag event
  },
  (err) => {
    console.error(err);
  }
);
