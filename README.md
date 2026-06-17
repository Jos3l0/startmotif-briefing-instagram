# Startmotif — Briefing Estratégico Instagram

Herramienta web estática (HTML+CSS+JS) para que clientes de Startmotif completen un briefing estratégico de 22 preguntas sobre su negocio, producto, cliente ideal y metas en Instagram.

---

## ¿Qué hace esta herramienta?

1. El **dueño del negocio** responde 22 preguntas organizadas en 10 bloques estratégicos
2. Al finalizar, **descarga un PDF profesional** (o .TXT) con toda la información
3. **Envía el documento a Startmotif** por WhatsApp o email
4. El equipo de Startmotif usa este briefing para diseñar la estrategia de Instagram personalizada

---

## Tecnología

- **HTML5** + **CSS3** + **JavaScript vanilla** (sin frameworks)
- **html2pdf.js** vía CDN para generación de PDF
- **Cero backend**, **cero base de datos**, **cero dependencias** externas
- Compatible con cualquier servidor web estático (Apache, Nginx, WordPress, etc.)

---

## Estructura de archivos

```
estratega-instagram/
├── index.html              # Aplicación completa (SPA)
├── css/
│   └── styles.css          # Estilos dark mode Startmotif
├── js/
│   └── app.js              # Lógica del wizard, validación, PDF, TXT
├── assets/
│   ├── logo-header.png     # Logo blanco (header de la app)
│   ├── logo-pdf.png        # Logo para portada del PDF
│   ├── logo-footer.png     # Logo pequeño (footer)
│   └── favicon.png         # Favicon del sitio
└── README.md               # Este archivo
```

---

## Cómo probarlo localmente

### Opción 1: Servidor Python (más simple)

```bash
cd estratega-instagram
python3 -m http.server 8080
```

Luego abre en tu navegador: `http://localhost:8080`

### Opción 2: Servidor Node.js

```bash
cd estratega-instagram
npx serve -s . -l 8080
```

Luego abre: `http://localhost:8080`

### Opción 3: VS Code + Live Server

1. Abre la carpeta `estratega-instagram/` en VS Code
2. Instala la extensión **"Live Server"**
3. Haz clic derecho en `index.html` → "Open with Live Server"

---

## Cómo desplegar en producción

### Opción A: Hosting compartido / cPanel / WordPress

1. Comprime la carpeta `estratega-instagram/` en un archivo `.zip`
2. Súbelo a tu hosting vía FTP, File Manager de cPanel, o plugin de WordPress
3. Descomprímelo en la ruta deseada, por ejemplo:
   - `/public_html/estratega/`
   - `/public_html/briefing/`
4. El link para tus clientes será: `https://tudominio.com/estratega/index.html`

### Opción B: Netlify (gratuito, muy rápido)

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `estratega-instagram/` al panel de deploy
3. Obtienes una URL tipo: `https://startmotif-briefing.netlify.app`

### Opción C: Vercel (gratuito)

1. Instala Vercel CLI: `npm i -g vercel`
2. Desde la carpeta: `vercel --prod`

### Opción D: GitHub Pages (gratuito)

1. Sube la carpeta a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona "Deploy from a branch" → `main` → `/ (root)`
4. Tu URL será: `https://tuusuario.github.io/estratega-instagram/`

---

## Personalización rápida

### Número de WhatsApp configurado

El botón de WhatsApp ya apunta al número de Startmotif:

```
+54 9 261 278-8674
```

Si necesitas cambiarlo, edita `js/app.js`:

```javascript
document.getElementById('whatsapp-link').href = `https://wa.me/5492612788674?text=${msg}`;
```

### Cambiar colores o tipografía

Edita `css/styles.css`, las variables CSS al inicio:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent: #22d3ee;
  /* ... */
}
```

### Cambiar logos

Reemplaza los archivos en `assets/` manteniendo los mismos nombres de archivo.

---

## Campos del formulario (22 preguntas)

| # | Pregunta | Obligatorio |
|---|---|---|
| 1 | Nombre del responsable | Sí |
| 2 | Correo electrónico | No |
| 3 | Descripción del negocio | Sí |
| 4 | Producto/servicio detallado | Sí |
| 5 | Perfil del cliente ideal | Sí |
| 6 | Problema que resuelves | Sí |
| 7 | Barreras del cliente | Sí |
| 8 | Resultado que busca el cliente | Sí |
| 9 | Objetivo del negocio en Instagram | Sí |
| 10 | Errores previos del cliente | Sí |
| 11 | Mitos que frenan la compra | Sí |
| 12 | Diferenciadores de la marca | Sí |
| 13 | Testimonios y casos | No |
| 14 | Usuario de Instagram | No |
| 15 | Seguidores aproximados | No |
| 16 | Frecuencia de publicación | Sí |
| 17 | Tipo de contenido actual | Sí |
| 18 | Contenido que funciona/no funciona | Sí |
| 19 | Métricas aproximadas | No |
| 20 | Mensajes y consultas recibidas | Sí |
| 21 | Mayor problema con Instagram | Sí |
| 22 | Capacidad de producción de contenido | Sí |
| 23 | Herramientas digitales disponibles | No (checkbox) |
| 24 | Tono y personalidad deseada | Sí |
| 25 | Acción esperada de la audiencia | Sí |
| 26 | CTA o llamado a la acción | Sí |
| 27 | Inversión en anuncios | Sí |
| 28 | Presupuesto mensual estimado | No |
| 29 | Objetivo de publicidad pagada | Condicional |
| 30 | Herramientas de seguimiento | No (checkbox) |
| 31 | Métrica más importante | Sí |

---

## Licencia

© Startmotif — Uso exclusivo para el negocio.
