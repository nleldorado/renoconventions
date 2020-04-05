// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-article-js": () => import("./../src/templates/article.js" /* webpackChunkName: "component---src-templates-article-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-attractions-js": () => import("./../src/pages/attractions.js" /* webpackChunkName: "component---src-pages-attractions-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-conventions-js": () => import("./../src/pages/conventions.js" /* webpackChunkName: "component---src-pages-conventions-js" */),
  "component---src-pages-gallery-js": () => import("./../src/pages/gallery.js" /* webpackChunkName: "component---src-pages-gallery-js" */),
  "component---src-pages-golf-js": () => import("./../src/pages/golf.js" /* webpackChunkName: "component---src-pages-golf-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-restaurants-js": () => import("./../src/pages/restaurants.js" /* webpackChunkName: "component---src-pages-restaurants-js" */),
  "component---src-pages-sports-js": () => import("./../src/pages/sports.js" /* webpackChunkName: "component---src-pages-sports-js" */),
  "component---src-pages-team-js": () => import("./../src/pages/team.js" /* webpackChunkName: "component---src-pages-team-js" */)
}

