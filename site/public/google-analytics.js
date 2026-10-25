(function () {
  'use strict';

  var script = document.currentScript;
  var measurementId = script && script.getAttribute('data-ga-id');

  if (!measurementId) return;

  // Owner opt-out, per browser. Visiting any page with ?notrack stores a flag
  // and this browser stops reporting to GA4; ?track clears it. The query
  // parameter is removed from the address bar either way, so a copied link
  // never carries it to someone else. Without this, the owner's own checking
  // lands in GA4 as direct traffic, indistinguishable from readers.
  var KEY = 'brianhliou-notrack';
  var optedOut = false;
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.has('notrack') || params.has('track')) {
      if (params.has('notrack')) window.localStorage.setItem(KEY, '1');
      else window.localStorage.removeItem(KEY);
      params.delete('notrack');
      params.delete('track');
      var query = params.toString();
      window.history.replaceState(null, '',
        window.location.pathname + (query ? '?' + query : '') + window.location.hash);
    }
    optedOut = window.localStorage.getItem(KEY) === '1';
  } catch (e) {
    // Storage blocked (private mode, disabled site data): track as normal.
  }

  if (optedOut) {
    // Google's documented kill switch, in case gtag is defined elsewhere.
    window['ga-disable-' + measurementId] = true;
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
})();
