if(/sv\.co/.test(window.location.hostname)) {
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', 'UA-65573888-1', 'auto');

  // Replace the following lines with the plugins you want to use.
  ga('require', 'eventTracker');
  ga('require', 'outboundLinkTracker');
  ga('require', 'urlChangeTracker');
  ga('require', 'pageVisibilityTracker');

  ga('send', 'pageview');
}
