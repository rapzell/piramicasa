var fs = require('fs');

var c = fs.readFileSync('index.html', 'utf8');

// Add cache-busting comment with timestamp
var timestamp = Date.now();
c = c.replace('</head>', '<!-- v' + timestamp + ' -->\n</head>');

// Also add meta tags to prevent caching
c = c.replace('<head>', '<head>\n<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">\n<meta http-equiv="Pragma" content="no-cache">\n<meta http-equiv="Expires" content="0">');

fs.writeFileSync('index.html', c, 'utf8');
console.log('Added cache busting v' + timestamp);
