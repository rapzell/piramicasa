var fs = require('fs');

var c = fs.readFileSync('index.html', 'utf8');

// Add error handling script right after <body>
var errorScript = `<script>
window.addEventListener('error', function(e) {
  document.body.innerHTML += '<div style="position:fixed;bottom:0;left:0;right:0;background:red;color:white;padding:10px;font-size:12px;z-index:9999">ERROR: ' + e.message + ' | ' + (e.filename||'') + ':' + (e.lineno||'') + '</div>';
});
window.addEventListener('unhandledrejection', function(e) {
  document.body.innerHTML += '<div style="position:fixed;bottom:0;left:0;right:0;background:darkred;color:white;padding:10px;font-size:12px;z-index:9999">REJECTION: ' + (e.reason && e.reason.message || e.reason) + '</div>';
});
</script>`;

c = c.replace('<body>', '<body>\n' + errorScript);

fs.writeFileSync('index.html', c, 'utf8');
console.log('Added error catching script');
