// .vitepress/config.mts
// https://vitepress.dev/reference/default-theme-config
import { defineConfig, type DefaultTheme } from "vitepress";

function getSidebarByLang(lang: string = "fr") {
  const isFrench = lang === "fr";

  // Configuration des chemins (noms de fichiers réels)
  const filePaths = {
    support: "support-licence",
    installationNew: "installation-new",
    installationOld: "installation-old",
    contentManagement: "gestion-contenu",
    commerce: {
      stores: "commerce/manage-store",
      products: "commerce/products",
      shipping: "commerce/livraison",
      orders: "commerce/commandes",
      payments: "commerce/paiements",
      promotions: "commerce/promotions",
      coupons: "commerce/coupons",
    },
    themeConfig: {
      main: "configuration-theme",
      advanced: "configuration-theme-advance",
      styles: "add-styles",
    },
  };

  // Dictionnaire de traduction
  const translations = {
    support: isFrench ? "Support et licence du thème" : "Theme support and license",
    installation: isFrench ? "Installation" : "Installation",
    newInstall: isFrench ? "Nouvelle installation" : "New installation",
    oldInstall: isFrench ? "Ancienne installation" : "Upgrade existing",
    content: isFrench ? "Gestion du contenu" : "Content management",
    commerce: isFrench ? "Commerce" : "E-commerce",
    stores: isFrench ? "Gestion des magasins" : "Manage stores",
    products: isFrench ? "Produits" : "Products",
    shipping: isFrench ? "Livraisons" : "Shipping",
    orders: isFrench ? "Commandes" : "Orders",
    payments: isFrench ? "Paiements" : "Payments",
    promotions: isFrench ? "Promotions" : "Promotions",
    coupons: isFrench ? "Coupons" : "Coupons",
    theme: isFrench ? "Configuration du thème" : "Theme configuration",
    advancedConfig: isFrench ? "Configuration avancée" : "Advanced configuration",
    styles: isFrench ? "Ajout de styles (css/js)" : "Custom styles and scripts",
  };

  return [
    {
      text: translations.support,
      link: `/${lang}/docs/${filePaths.support}`,
    },
    {
      text: translations.installation,
      collapsed: false,
      items: [
        {
          text: translations.newInstall,
          link: `/${lang}/docs/${filePaths.installationNew}`,
        },
        {
          text: translations.oldInstall,
          link: `/${lang}/docs/${filePaths.installationOld}`,
        },
      ],
    },
    {
      text: translations.content,
      link: `/${lang}/docs/${filePaths.contentManagement}`,
    },
    {
      text: translations.commerce,
      collapsed: false,
      items: [
        {
          text: translations.stores,
          link: `/${lang}/docs/${filePaths.commerce.stores}`,
        },
        {
          text: translations.products,
          link: `/${lang}/docs/${filePaths.commerce.products}`,
        },
        {
          text: translations.shipping,
          link: `/${lang}/docs/${filePaths.commerce.shipping}`,
        },
        {
          text: translations.orders,
          link: `/${lang}/docs/${filePaths.commerce.orders}`,
        },
        {
          text: translations.payments,
          link: `/${lang}/docs/${filePaths.commerce.payments}`,
        },
        {
          text: translations.promotions,
          link: `/${lang}/docs/${filePaths.commerce.promotions}`,
        },
        {
          text: translations.coupons,
          link: `/${lang}/docs/${filePaths.commerce.coupons}`,
        },
      ],
    },
    {
      text: translations.theme,
      link: `/${lang}/docs/${filePaths.themeConfig.main}`,
      collapsed: false,
      items: [
        {
          text: translations.advancedConfig,
          link: `/${lang}/docs/${filePaths.themeConfig.advanced}`,
        },
        {
          text: translations.styles,
          link: `/${lang}/docs/${filePaths.themeConfig.styles}`,
        },
      ],
    },
  ];
}
// Configuration anglaise
const enConfig: DefaultTheme.LocaleConfig = {
  lang: "en-US",
  label: "English",
  link: "/en/",
  themeConfig: {
    siteTitle: "Documentation theme",
    sidebar: getSidebarByLang("en"),
  },
};

// Configuration française
const frConfig: DefaultTheme.LocaleConfig = {
  lang: "fr-FR",
  label: "Français",
  link: "/fr/",
  themeConfig: {
    siteTitle: "Ma Boutique",
    sidebar: getSidebarByLang("fr"),
  },
};

export default defineConfig({
  base: "/e-commerce/",
  // base: "./", // pour permettre l'ouverture via le protocole file://
  lang: "en-US",
  title: "Documentation theme",
  description: "Provides all the documentation needed to use the Drupal theme",
  locales: {
    root: {
      lang: "en-US",
      label: "English",
      title: "Documentation theme",
      description: "Description in English",
      link: "/en",
    },
    "/en/": enConfig,
    "/fr/": frConfig,
  },

  // Configuration globale
  themeConfig: {
    // Activation du routage i18n
    i18nRouting: true,
    logo: "/assets/logo-habeuk.png",
    // Solution alternative si les sidebars persistent à ne pas s'afficher
    sidebar: {
      "/en/": enConfig.themeConfig!.sidebar as DefaultTheme.Sidebar,
      "/fr/": frConfig.themeConfig!.sidebar as DefaultTheme.Sidebar,
    },
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
  outDir: "../public_html",
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
  // Activation du debug Vite
  // vite: {
  //   server: {
  //     host: true,
  //     port: 5173,
  //     strictPort: true,
  //   },
  //   clearScreen: false,
  // },
});
