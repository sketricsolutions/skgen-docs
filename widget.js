// content/sketricgen-widget.js
(function () {
  // prevent duplicate inserts during SPA route changes
  const MARKER_ID = 'sketricgen-embed-loader';
  if (document.getElementById(MARKER_ID)) return;

  const marker = document.createElement('meta');
  marker.id = MARKER_ID;
  document.head.appendChild(marker);

  const s = document.createElement('script');
  s.src = 'https://jswidget.sketricgen.ai/widget-embed.js';
  s.async = true;
  // set your data-* attributes
  s.setAttribute('data-agent-id', 'skflow_233f626b-7761-4a8e-86ca-6bb54c92500b');

  // append as early as possible
  document.head.appendChild(s);
})();
