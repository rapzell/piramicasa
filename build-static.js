var fs = require('fs');

var c = fs.readFileSync('_next/static/chunks/9547-dc2ddb0c5eae8482.js', 'utf8');

// Extract product data
var products = [];
var productRegex = /name:"([^"]+)",desc:"([^"]+)",img:"([^"]+)",features:\[([^\]]+)\]/g;
var m;
while (m = productRegex.exec(c)) {
  var features = m[4].match(/"([^"]+)"/g);
  products.push({
    name: m[1].replace(/\\xe9/g,'é').replace(/\\xed/g,'í').replace(/\\xf3/g,'ó').replace(/\\xf1/g,'ñ').replace(/\\xe1/g,'á'),
    desc: m[2].replace(/\\xe9/g,'é').replace(/\\xed/g,'í').replace(/\\xf3/g,'ó').replace(/\\xf1/g,'ñ').replace(/\\xe1/g,'á').replace(/\\xfa/g,'ú').replace(/\\xdc/g,'Ü'),
    img: m[3],
    features: features ? features.map(function(f) { return f.replace(/"/g,'').replace(/\\xe9/g,'é').replace(/\\xed/g,'í').replace(/\\xf3/g,'ó').replace(/\\xf1/g,'ñ').replace(/\\xe1/g,'á'); }) : []
  });
}

// Extract moreInfo for each product
var moreInfoRegex = /moreInfo:\[([^\]]+)\]/g;
var moreInfos = [];
while (m = moreInfoRegex.exec(c)) {
  var infos = [];
  var titleRegex = /title:"([^"]+)",text:"([^"]+)"/g;
  var m2;
  while (m2 = titleRegex.exec(m[1])) {
    infos.push({
      title: m2[1].replace(/\\xe9/g,'é').replace(/\\xed/g,'í').replace(/\\xf3/g,'ó').replace(/\\xf1/g,'ñ').replace(/\\xe1/g,'á').replace(/\\xfa/g,'ú'),
      text: m2[2].replace(/\\xe9/g,'é').replace(/\\xed/g,'í').replace(/\\xf3/g,'ó').replace(/\\xf1/g,'ñ').replace(/\\xe1/g,'á').replace(/\\xfa/g,'ú').replace(/\\xdc/g,'Ü').replace(/\\xf3/g,'ó')
    });
  }
  moreInfos.push(infos);
}

// Build static HTML
var html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Piramicasa | Ciencia y Técnica de las Pirámides</title>
<meta name="description" content="Descubre cómo las pirámides terapéuticas mejoran la salud: sueño, energía, sistema inmune y más. Evidencia científica y testimonios reales.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpolygon points='50,10 90,85 10,85' fill='%233D4A30'/%3E%3Cpolygon points='50,25 75,75 25,75' fill='%23C69C6D'/%3E%3C/svg%3E">
<link rel="stylesheet" href="/piramicasa/_next/static/css/b1c84f528cf3d505.css">
<link rel="stylesheet" href="/piramicasa/_next/static/css/591bfc4a40e67df4.css">
<link rel="stylesheet" href="/piramicasa/assets/mobile-fix.css">
<link rel="stylesheet" href="/piramicasa/assets/sacred-grid.css">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui,-apple-system,sans-serif;background:#f7f4f0;color:#2a2a2a;line-height:1.6}
.pm-header{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(247,244,240,0.95);backdrop-filter:blur(10px);border-bottom:1px solid #e0d9d0;padding:12px 20px;display:flex;align-items:center;justify-content:space-between}
.pm-header h2{font-size:1.3rem;color:#3D4A30;font-weight:700}
.pm-header h2 span{color:#C69C6D}
.pm-nav{display:flex;gap:20px;flex-wrap:wrap}
.pm-nav a{color:#3D4A30;text-decoration:none;font-size:.9rem;font-weight:500;transition:color .2s}
.pm-nav a:hover{color:#C69C6D}
.pm-hero{min-height:90vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 20px 40px;background:linear-gradient(135deg,#3D4A30,#5A6B4A);color:#f7f4f0}
.pm-hero-label{font-size:.85rem;letter-spacing:2px;text-transform:uppercase;opacity:.8;margin-bottom:16px;color:#C69C6D}
.pm-hero h1{font-size:3rem;font-weight:700;margin-bottom:20px;line-height:1.2}
.pm-hero h1 em{color:#C69C6D;font-style:italic}
.pm-hero p{font-size:1.2rem;max-width:600px;opacity:.9;margin-bottom:30px}
.pm-hero .pm-btn{display:inline-block;padding:14px 32px;background:#C69C6D;color:#fff;border-radius:10px;text-decoration:none;font-weight:600;font-size:1rem;transition:transform .2s}
.pm-hero .pm-btn:hover{transform:scale(1.05)}
.pm-section{padding:60px 20px;max-width:1200px;margin:0 auto}
.pm-section h2{font-size:2rem;color:#3D4A30;margin-bottom:30px;text-align:center}
.pm-products{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:30px}
.pm-card{background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);transition:transform .2s,box-shadow .2s}
.pm-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(0,0,0,0.12)}
.pm-card img{width:100%;height:240px;object-fit:cover}
.pm-card-body{padding:20px}
.pm-card h3{font-size:1.3rem;color:#3D4A30;margin-bottom:10px}
.pm-card p{font-size:.9rem;color:#5a5a5a;margin-bottom:15px}
.pm-features{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:15px}
.pm-feature{background:#e8e8e0;padding:4px 12px;border-radius:20px;font-size:.75rem;color:#3D4A30;font-weight:500}
.pm-more-info{margin-top:15px;border-top:1px solid #e0d9d0;padding-top:15px}
.pm-more-info h4{font-size:.95rem;color:#3D4A30;margin-bottom:6px}
.pm-more-info p{font-size:.85rem;color:#6a6a6a;margin-bottom:12px}
.pm-contact{background:#3D4A30;color:#f7f4f0;padding:60px 20px}
.pm-contact h2{color:#f7f4f0;margin-bottom:20px}
.pm-contact form{max-width:500px;margin:0 auto;display:flex;flex-direction:column;gap:14px}
.pm-contact input,.pm-contact select,.pm-contact textarea{padding:10px 14px;border:1px solid #5A6B4A;border-radius:8px;font-size:14px;background:#f7f4f0;color:#2a2a2a}
.pm-contact button{padding:14px 32px;background:#C69C6D;color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:600;cursor:pointer}
.pm-footer{background:#2a3520;color:#a0a090;padding:30px 20px;text-align:center;font-size:.85rem}
.pm-legal{padding:15px 20px;background:#f0ede5;font-size:.75rem;color:#8A817A;text-align:center}
@media(max-width:768px){
.pm-nav{display:none}
.pm-hero h1{font-size:2rem}
.pm-products{grid-template-columns:1fr}
}
</style>
</head>
<body>
<header class="pm-header">
<h2>Pirami<span>casa</span></h2>
<nav class="pm-nav">
<a href="#inicio">Inicio</a>
<a href="#productos">Productos</a>
<a href="#beneficios">Beneficios</a>
<a href="#contacto">Contacto</a>
</nav>
</header>

<section class="pm-hero" id="inicio">
<div class="pm-hero-label">Desde 1972 · Investigación piramidal</div>
<h1>Duerme en una <em>pirámide</em><br>y recupera tu energía</h1>
<p>Descubre el poder del Efecto Piramidal. Ciencia y bienestar en un solo lugar. Fabricamos pirámides terapéuticas con precisión técnica y materiales de la más alta pureza.</p>
<a href="#productos" class="pm-btn">Ver Productos</a>
</section>

<section class="pm-section" id="productos">
<h2>Nuestros Productos</h2>
<div class="pm-products">
`;

products.forEach(function(p, i) {
  html += '<div class="pm-card">\n';
  html += '  <img src="' + p.img + '" alt="' + p.name + '" loading="lazy">\n';
  html += '  <div class="pm-card-body">\n';
  html += '    <h3>' + p.name + '</h3>\n';
  html += '    <p>' + p.desc + '</p>\n';
  html += '    <div class="pm-features">\n';
  p.features.forEach(function(f) {
    html += '      <span class="pm-feature">' + f + '</span>\n';
  });
  html += '    </div>\n';
  if (moreInfos[i]) {
    html += '    <div class="pm-more-info">\n';
    moreInfos[i].forEach(function(info) {
      html += '      <h4>' + info.title + '</h4>\n';
      html += '      <p>' + info.text + '</p>\n';
    });
    html += '    </div>\n';
  }
  html += '  </div>\n</div>\n';
});

html += `</div>
</section>

<section class="pm-section" id="beneficios">
<h2>Beneficios del Efecto Piramidal</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;margin-top:30px">
<div style="background:#fff;padding:25px;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,0.05)">
<h3 style="color:#3D4A30;margin-bottom:10px">Mejor sueño</h3>
<p style="font-size:.9rem;color:#5a5a5a">Recuperación física y mental durante el descanso dentro de la pirámide.</p>
</div>
<div style="background:#fff;padding:25px;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,0.05)">
<h3 style="color:#3D4A30;margin-bottom:10px">Más energía</h3>
<p style="font-size:.9rem;color:#5a5a5a">Aumento de vitalidad y reducción de la fatiga cotidiana.</p>
</div>
<div style="background:#fff;padding:25px;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,0.05)">
<h3 style="color:#3D4A30;margin-bottom:10px">Sistema inmune</h3>
<p style="font-size:.9rem;color:#5a5a5a">Refuerzo natural de las defensas del organismo.</p>
</div>
<div style="background:#fff;padding:25px;border-radius:12px;box-shadow:0 2px 10px rgba(0,0,0,0.05)">
<h3 style="color:#3D4A30;margin-bottom:10px">Antioxidante</h3>
<p style="font-size:.9rem;color:#5a5a5a">Reducción de radicales libres y envejecimiento celular.</p>
</div>
</div>
</section>

<section class="pm-contact" id="contacto">
<h2>Solicita Información</h2>
<p style="text-align:center;margin-bottom:30px;opacity:.8">Te responderemos en menos de 24 horas. Sin compromiso.</p>
<form name="contacto" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/piramicasa/gracias" style="max-width:500px;margin:0 auto;display:flex;flex-direction:column;gap:14px">
<input type="hidden" name="form-name" value="contacto" />
<p style="display:none"><label>No llenar: <input name="bot-field" /></label></p>
<input type="text" name="nombre" placeholder="Nombre *" required style="padding:10px 14px;border:1px solid #5A6B4A;border-radius:8px;font-size:14px;background:#f7f4f0">
<input type="tel" name="telefono" placeholder="Teléfono" style="padding:10px 14px;border:1px solid #5A6B4A;border-radius:8px;font-size:14px;background:#f7f4f0">
<input type="email" name="email" placeholder="Email *" required style="padding:10px 14px;border:1px solid #5A6B4A;border-radius:8px;font-size:14px;background:#f7f4f0">
<select name="producto" style="padding:10px 14px;border:1px solid #5A6B4A;border-radius:8px;font-size:14px;background:#f7f4f0">
<option value="">Selecciona un producto...</option>
<option value="Piramicama">Piramicama</option>
<option value="Hygia">Pirámide Hygia</option>
<option value="Hercules">Pirámide Hércules</option>
<option value="Pirajardin">Pirajardín</option>
<option value="Vital">Piramicasa Vital</option>
<option value="Piramascotas">Piramascotas</option>
<option value="Otro">Otro</option>
</select>
<textarea name="mensaje" placeholder="Mensaje *" required rows="4" style="padding:10px 14px;border:1px solid #5A6B4A;border-radius:8px;font-size:14px;background:#f7f4f0;resize:vertical"></textarea>
<button type="submit">Enviar Solicitud ➤</button>
</form>
<p style="text-align:center;font-size:.75rem;opacity:.6;margin-top:16px">Al enviar este formulario aceptas nuestra política de privacidad. No compartimos tus datos.</p>
</section>

<div class="pm-legal">
<strong>Aviso legal:</strong> Las pirámides terapéuticas Piramicasa son productos de bienestar y complemento de salud. No sustituyen ningún tratamiento médico. La información de esta web es divulgativa y no prescribe tratamientos. Consulta siempre con tu médico.
</div>

<footer class="pm-footer">
<p>Piramicasa · Investigación piramidal desde 1972</p>
<p style="margin-top:8px;opacity:.6">© 2024 Piramicasa. Todos los derechos reservados.</p>
</footer>

<script src="/piramicasa/assets/mobile-menu.js" defer></script>
<script src="/piramicasa/assets/sacred-grid.js" defer></script>
</body>
</html>`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Static HTML created. Length:', html.length);
console.log('Products:', products.length);
