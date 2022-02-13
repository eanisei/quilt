import React from "react";
// Root Include
const Root = React.lazy(() => import("./pages/Home/indexRoot"));

//Special
const PageError = React.lazy(() => import("./pages/Pages/Special/PageError"));
const PageThankYou = React.lazy(() =>
import("./pages/Pages/Special/PageThankYou")
);
const PageMaintenance = React.lazy(() =>
  import("./pages/Pages/Special/PageMaintenance")
);


//Utility
const PagePrivacy = React.lazy(() =>
  import("./pages/Pages/Utility/PagePrivacy")
);
const PageTerms = React.lazy(() => import("./pages/Pages/Utility/PageTerms"));

//Help Center
const HelpCenterOverview = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterOverview")
);
const HelpCenterFaqs = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterFaqs")
);
const HelpCenterGuides = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterGuides")
);
const HelpCenterSupportRequest = React.lazy(() =>
  import("./pages/Pages/HelpCenter/HelpCenterSupportRequest")
);


const routes = [
  //routes without Layout

  //Special Pages
  { path: "/page-error", component: PageError, isWithoutLayout: true },
  { path: "/page-thankyou", component: PageThankYou, isWithoutLayout: true },
  {
    path: "/page-maintenance",
    component: PageMaintenance,
    isWithoutLayout: true,
  },


  //Help Center
  { path: "/helpcenter-overview", component: HelpCenterOverview, isTopbarDark: true },
  { path: "/helpcenter-faqs", component: HelpCenterFaqs, isTopbarDark: true },
  { path: "/helpcenter-guides", component: HelpCenterGuides, isTopbarDark: true },
  { path: "/helpcenter-support-request", component: HelpCenterSupportRequest, isTopbarDark: true },

  //Index root

  { path: "/", component: Root, isWithoutLayout: true, exact: true },
  { component: PageError, isWithoutLayout: true, exact: false },
];

export default routes;
