/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "be0661af9140fa2321a2e6eab058ab4e"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "b366056472231fc20c2f42fe072b728f"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "2d087b6c0211e16b8407f2247e2ab7cb"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "07ca6a0f82e6f6f328c7e0cd136325e0"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "1d7fcafe2c7834051d8459cb0053c582"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "85a8e1fe745d64f1901f37adc3ce72b0"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "c5a77df5c92b63b3b284e897d99e2e4b"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "dcf4dc749a7d4a76a28c0ba2e36fc9bc"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "c361ce414675fb5512274bf3bc1a3b68"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "e0921c98f8f9dc32d31b694daaf41476"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "f9308c8e0a38242ffefeb36e59bc93ad"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "ed31271d6d1850c079adc9053b825702"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "a45894dea391974175d067a0eed0d6f8"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "325979d7425d5b72561ea411bf36d276"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "fbec15ddf59142cad89891351815605f"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "0eac6ec75fa5375771e6f31f222be3f4"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "6712665e9f7cb453c21d6bc8b860ac56"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "c09f7f413cb329bcf7211e4955ddcfa1"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "668b7da83ba79d703e347ae3219cb37f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f1de0b026c0e6181dac0d2e76324d0d8"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "715b38ca78c3c22e4bfb96b2907df4a8"
  },
  {
    "url": "14-79cff7e372426abe0d05.js"
  },
  {
    "url": "17757bf87520686e179ce312b80d666e25b65c83-78a635f61dee766ab7ea.js"
  },
  {
    "url": "app-5bdf7f192973edaa6203.js"
  },
  {
    "url": "bab4896a-d8475246d2589c0910da.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d2f6372de0f9d26c322c.js"
  },
  {
    "url": "component---src-pages-404-js-d1cdef6aff43b3d771ec.js"
  },
  {
    "url": "component---src-pages-pages-js-babe653dcdb24733bc0e.js"
  },
  {
    "url": "component---src-pages-settings-tsx-9dc062c2837dfaface01.js"
  },
  {
    "url": "component---src-pages-tags-js-5461fadbb0f3a135b37e.js"
  },
  {
    "url": "component---src-templates-doc-js-4fee20a9144072a1343d.js"
  },
  {
    "url": "component---src-templates-tags-js-8ec0d1f23532242c563f.js"
  },
  {
    "url": "ec9ecababc84b653bd1e09c41f348f65e406fded-1efea168cb4d9ed039d3.js"
  },
  {
    "url": "framework-9fe058f4359556db0d38.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-503b3015a8b38c118cb7.js"
  },
  {
    "url": "webpack-runtime-a9af7e924608a1852679.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0f3f90c80c9a283b1a66049a5f84be85"
  },
  {
    "url": "styles.206e68b0c97b4c527066.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "920d5d81bf1596e85320887dc175bb57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-5bdf7f192973edaa6203.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
