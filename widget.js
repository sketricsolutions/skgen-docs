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
  s.setAttribute('data-agent-id', 'asst_Bt6bWUSVpoXnzPA5N9VhB3l4');

  // append as early as possible
  document.head.appendChild(s);
})();
