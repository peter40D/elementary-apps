---
---
// Lazy loading
$(document).ready(function() {
  $("img").unveil();
});
// Table sort
$(function(){
  $(".tablesorter").tablesorter();
});
// Redirect https
if (window.location.protocol !== 'https:') {
  window.location = 'https://' + window.location.hostname + window.location.pathname + window.location.hash;
}
{% if site.piwik_analytics %}
  // Piwik
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//quassy.rasalhague.uberspace.de/piwik/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 13]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
{% endif %}

// if site.pwa:
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('{{ site.baseurl }}/sw.js', { scope: '{{ site.baseurl }}/' }).then(function(reg) {
    console.log('Service worker registered. Scope: ' + reg.scope);
  }).catch(function(error) {
    console.log('Service worker failed to register with error: ' + error);
  });
};
