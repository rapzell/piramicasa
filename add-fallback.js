var fs = require('fs');
var c = fs.readFileSync('index.html', 'utf8');

// Add a fallback script that renders content if React hydration fails
// This script will check if content appeared after 3 seconds, and if not,
// it will try to manually render the page

var fallbackScript = `
<script>
// Fallback: if React doesn't hydrate after 5 seconds, show error and try to reload
setTimeout(function() {
  var hiddenDiv = document.querySelector('div[hidden], div#__next-loading');
  var body = document.body;
  var hasContent = body.innerHTML.indexOf('pm-hero') > -1 || body.innerHTML.indexOf('pm-header') > -1;
  
  if (!hasContent) {
    console.error('React hydration failed - content not rendered after 5s');
    // Try to force reload without cache
    if (!window.location.hash || window.location.hash !== '#reloaded') {
      window.location.hash = 'reloaded';
      window.location.reload();
    }
  }
}, 5000);
</script>
`;

// Insert before </body>
c = c.replace('</body>', fallbackScript + '\n</body>');
fs.writeFileSync('index.html', c, 'utf8');
console.log('Added fallback script to index.html');
