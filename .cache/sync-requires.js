const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/win/reno/renoconventions/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/page-2.js"))),
  "component---src-pages-attractions-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/attractions.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/contact.js"))),
  "component---src-pages-conventions-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/conventions.js"))),
  "component---src-pages-golf-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/golf.js"))),
  "component---src-pages-restaurants-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/restaurants.js"))),
  "component---src-pages-sports-js": hot(preferDefault(require("/Users/win/reno/renoconventions/src/pages/sports.js")))
}
