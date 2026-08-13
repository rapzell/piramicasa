var fs = require('fs');

// Read the original index.html to get the head section
var c = fs.readFileSync('index.html', 'utf8');

// Read the head
var headStart = c.indexOf('<head>');
var headEnd = c.indexOf('</head>') + 7;
var head = c.substring(headStart, headEnd);

// Read the CSS links
var cssLinks = '';
var cssMatches = c.match(/<link[^>]*rel="stylesheet"[^>]*>/g);
if (cssMatches) cssMatches.forEach(function(m) { cssLinks += m + '\n'; });

// Read the asset scripts
var assetScripts = '<script src="/piramicasa/assets/mobile-menu.js" defer></script>\n<script src="/piramicasa/assets/chatbot.js" defer></script>\n<script src="/piramicasa/assets/sacred-grid.js" defer></script>';

// Create a static HTML page with the full content
// We'll use the content from the 9547 chunk but as static HTML
var html = '<!DOCTYPE html>\n<html lang="es">\n' + head + '\n<body>\n';

// Google Tag Manager
html += '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MPS65G9X" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n';

// Add a message while we figure out the content
html += '<div id="root">\n';
html += '<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;background:linear-gradient(135deg,#3D4A30,#5A6B4A);color:#f7f4f0;font-family:sans-serif">\n';
html += '<div style="text-align:center">\n';
html += '<div style="font-size:3rem;margin-bottom:16px">△</div>\n';
html += '<p>Cargando Piramicasa...</p>\n';
html += '</div></div>\n';
html += '</div>\n';

// Add scripts to load React and render
html += '<script src="/piramicasa/_next/static/chunks/webpack-675bd502956fde6d.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/4bd1b696-f785427dddbba9fb.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/1255-2fdaab4d1115e5a5.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/main-app-2384c1250b22a905.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/app/layout-6ab3fd84bfd4d543.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/c15bf2b0-bfa95b308e62c6cc.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/1462-dd50189e811660a4.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/7962-a62aac6482e58e5e.js" async=""></script>\n';
html += '<script src="/piramicasa/_next/static/chunks/app/page-221e7bed060c6ec9.js" async=""></script>\n';

// Add RSC payload
var rscStart = c.indexOf('(self.__next_f=self.__next_f');
var rscEnd = c.indexOf('</body>');
var rscSection = c.substring(c.indexOf('<script>(self.__next_f'), rscEnd);
html += rscSection;

html += '\n' + assetScripts + '\n';
html += '</body>\n</html>';

fs.writeFileSync('index.html', html, 'utf8');
console.log('Created static index.html with length: ' + html.length);
