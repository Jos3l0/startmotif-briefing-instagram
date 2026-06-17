# Startmotif — Briefing Estrategico Instagram

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Activo-success?logo=github)](https://jos3l0.github.io/startmotif-briefing-instagram/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)]()

Herramienta web estatica (HTML+CSS+JS) para que clientes de Startmotif completen un briefing estrategico de 22 preguntas sobre su negocio, producto, cliente ideal y metas en Instagram.

---

## Link para tus clientes

### **https://jos3l0.github.io/startmotif-briefing-instagram/**

---

## Contacto Startmotif

- **WhatsApp:** [+54 9 261 278-8674](https://wa.me/5492612788674)
- **Email:** [olivajose@gmail.com](mailto:olivajose@gmail.com)
- **GitHub:** [https://github.com/Jos3l0](https://github.com/Jos3l0)

---

## Que hace esta herramienta?

1. El **dueno del negocio** responde 22 preguntas organizadas en 10 bloques estrategicos
2. Al finalizar, **descarga un PDF profesional** (o .TXT) con toda la informacion
3. **Envia el documento a Startmotif** por WhatsApp o email
4. El equipo de Startmotif usa este briefing para disenar la estrategia de Instagram personalizada

---

## Tecnologia

- **HTML5** + **CSS3** + **JavaScript vanilla** (sin frameworks)
- **html2pdf.js** via CDN para generacion de PDF
- **Cero backend**, **cero base de datos**, **cero dependencias** externas
- Compatible con cualquier servidor web estatico (Apache, Nginx, WordPress, etc.)

---

## Estructura de archivos

```
estratega-instagram/
├── index.html              # Aplicacion completa (SPA)
├── css/
│   └── styles.css          # Estilos dark mode Startmotif
├── js/
│   └── app.js              # Logica del wizard, validacion, PDF, TXT
├── assets/
│   ├── logo-header.png     # Logo blanco (header de la app)
│   ├── logo-pdf.png        # Logo para portada del PDF
│   ├── logo-footer.png     # Logo pequeno (footer)
│   └── favicon.png         # Favicon del sitio
└── README.md               # Este archivo
```

---

## Como probarlo localmente

```bash
cd estratega-instagram
python3 -m http.server 8080
# Abre: http://localhost:8080
```

---

## Como desplegar en produccion

### Opcion A: GitHub Pages (ya activo)

La app ya esta online en:

**https://jos3l0.github.io/startmotif-briefing-instagram/**

Si haces cambios, solo haz push a `master` y se actualiza automaticamente:

```bash
git add .
git commit -m "descripcion del cambio"
git push origin master
```

### Opcion B: Hosting propio (cPanel / WordPress / FTP)

1. Descarga el archivo `startmotif-briefing-despliegue.zip` de la ultima release
2. Sube el ZIP a tu hosting via FTP o cPanel File Manager
3. Descomprimelo en `/public_html/briefing/` (o la carpeta que prefieras)
4. Tu link: `https://tudominio.com/briefing/index.html`

### Opcion C: Netlify / Vercel

Arrastra la carpeta `estratega-instagram/` al panel de deploy de cualquiera de estas plataformas.

---

## Personalizacion rapida

### Cambiar el numero de WhatsApp

Edita `js/app.js`, busca:

```javascript
document.getElementById('whatsapp-link').href = `https://wa.me/5492612788674?text=${msg}`;
```

### Cambiar colores o tipografia

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
| 1 | Nombre del responsable | Si |
| 2 | Correo electronico | No |
| 3 | Descripcion del negocio | Si |
| 4 | Producto/servicio detallado | Si |
| 5 | Perfil del cliente ideal | Si |
| 6 | Problema que resuelves | Si |
| 7 | Barreras del cliente | Si |
| 8 | Resultado que busca el cliente | Si |
| 9 | Objetivo del negocio en Instagram | Si |
| 10 | Errores previos del cliente | Si |
| 11 | Mitos que frenan la compra | Si |
| 12 | Diferenciadores de la marca | Si |
| 13 | Testimonios y casos | No |
| 14 | Usuario de Instagram | No |
| 15 | Seguidores aproximados | No |
| 16 | Frecuencia de publicacion | Si |
| 17 | Tipo de contenido actual | Si |
| 18 | Contenido que funciona/no funciona | Si |
| 19 | Metricas aproximadas | No |
| 20 | Mensajes y consultas recibidas | Si |
| 21 | Mayor problema con Instagram | Si |
| 22 | Capacidad de produccion de contenido | Si |
| 23 | Herramientas digitales disponibles | No (checkbox) |
| 24 | Tono y personalidad deseada | Si |
| 25 | Accion esperada de la audiencia | Si |
| 26 | CTA o llamado a la accion | Si |
| 27 | Inversion en anuncios | Si |
| 28 | Presupuesto mensual estimado | No |
| 29 | Objetivo de publicidad pagada | Condicional |
| 30 | Herramientas de seguimiento | No (checkbox) |
| 31 | Metrica mas importante | Si |

---

## Licencia

(c) Startmotif — Uso exclusivo para el negocio.

---

## Repositorio

- **GitHub:** https://github.com/Jos3l0/startmotif-briefing-instagram
- **Autor:** Jose Oliva (olivajose@gmail.com)
- **Empresa:** Startmotif
