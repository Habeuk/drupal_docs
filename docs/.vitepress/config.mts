import { defineConfig } from "vitepress";
// import { useData } from "vitepress";

// /**
//  * Get the current language of the site.
//  * @returns {string} The current language.
//  */
// function getCurrentLang() {
//   const { site } = useData();
//   return site.value.lang;
// }

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/e-commerce/",
  lang: "en-US",
  title: "Documentation theme",
  description: "Provides all the documentation needed to use the Drupal theme",
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/en",
    },
    "/en/": {
      lang: "en",
      title: "Drupal Documentation",
      description: "English documentation",
      label: "English",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en" },
          { text: "Examples", link: "/en/markdown-examples" },
        ],
        sidebar: [
          {
            text: "Examples",
            items: [
              { text: "Markdown Examples", link: "/en/markdown-examples" },
              { text: "Runtime API Examples", link: "/en/api-examples" },
            ],
          },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/habeuk/" },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>',
            },
            link: "https://habeuk.com",
          },
        ],
      },
    },
    "/fr/": {
      lang: "fr",
      title: "Documentation de Drupal",
      description: "Documentation en français",
      label: "Français",
      link: "/fr",
      themeConfig: {
        nav: [
          { text: "Accuiel2", link: "/fr" },
          { text: "Installation", link: "/fr/installation" },
        ],
        sidebar: [
          {
            text: "Examples",
            items: [
              { text: "Markdown Examples", link: "/fr/markdown-examples" },
              { text: "Runtime API Examples", link: "/fr/api-examples" },
              { text: "Runtime API Examples2", link: "/fr/api-examples2" },
            ],
          },
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Presentation", link: "/fr/docs" },
      { text: "Installation", link: "/fr/docs/installation-new" },
      { text: "Layouts", link: "/fr/docs/layouts" },
    ],
    sidebar: [
      {
        text: "Support et licence du theme",
        link: "/fr/docs/support-licence",
      },
      {
        text: "Installation",
        items: [
          { text: "Nouvelle installation", link: "/fr/docs/installation-new" },
          { text: "Ancienne installation", link: "/fr/docs/installation-old" },
        ],
      },
      {
        text: "Commerce",
        items: [
          { text: "Gestion des magazins", link: "/fr/docs/commerce/manage-store" },
          { text: "Gestion des produits", link: "/fr/docs/add-styles" },
          { text: "Gestion des livraisons", link: "/fr/docs/add-styles" },
          { text: "Gestion des commandes", link: "/fr/docs/add-styles" },
          { text: "Gestion des methodes de paiements", link: "/fr/docs/add-styles" },
          { text: "Gestions des promotions", link: "/fr/docs/add-styles" },
        ],
      },
      {
        text: "Configuration du theme",
        link: "/fr/docs/configuration-theme",
        collapsed: true,
        items: [
          { text: "Configuration avancée", link: "/fr/docs/configuration-theme-advance" },
          { text: "Ajout des styles (css/js)", link: "/fr/docs/add-styles" },
        ],
      },
      {
        text: "Gestion du contenu",
      },

      {
        text: "Mise à jour",
      },
      {
        text: "Astuces et cas pratiques",
      },
    ],
    i18nRouting: true,
    logo: "/assets/logo-habeuk.png",
    // locales: {
    //   "/fr/": {
    //     nav: [
    //       { text: "Accueil", link: "/fr/" },
    //       { text: "Guide", link: "/fr/guide/" },
    //     ],
    //   },
    //   "/en/": {
    //     nav: [
    //       { text: "Home", link: "/en/" },
    //       { text: "Guide", link: "/en/guide/" },
    //     ],
    //   },
    // },
    socialLinks: [
      { icon: "github", link: "https://github.com/habeuk/" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>',
        },
        link: "https://habeuk.com",
      },
    ],
  },
  vue: {
    // @vitejs/plugin-vue options
  },
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", rel: "stylesheet" }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=TAG_ID" }],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`,
    ],
  ],
  rewrites: {
    //"source/:page": "destination/:page",
    // "/": "/en/",
  },
  ignoreDeadLinks: false,
  assetsDir: "assets",
});
