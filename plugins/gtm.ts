export default defineNuxtPlugin((_nuxtApp) => {
  if (import.meta.client) {
    // Cookiebot Script
    const cookiebotScript = document.createElement('script');
    cookiebotScript.src
      = 'https://consent.cookiebot.com/f9cf272b-30ae-40a4-b72e-7dc360a28384/cd.js';
    cookiebotScript.type = 'text/javascript';
    cookiebotScript.id = 'CookieDeclaration';
    document.head.appendChild(cookiebotScript);

    // Additional field for gtag
    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = 'window[\'gtag_enable_tcf_support\'] = true;';
    document.head.appendChild(gtagScript);

    // Google Tag Manager main script
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WDDR4SJJ');`;
    document.head.appendChild(script);

    // Google Tag Manager no-script
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-WDDR4SJJ';
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);
  }
});
