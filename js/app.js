/**
 * STARTMOTIF — Estratega Instagram Pro
 * Wizard interactivo: navegación, validación, PDF, TXT, WhatsApp
 */

// ============================================
// CONFIGURACIÓN
// ============================================
const TOTAL_STEPS = 12; // 0 welcome + 11 bloques + summary + success

// Mapeo de pasos a IDs de pantallas
const SCREENS = [
  'screen-welcome',     // 0
  'screen-step-1',      // 1
  'screen-step-2',      // 2
  'screen-step-3',      // 3
  'screen-step-4',      // 4
  'screen-step-5',      // 5
  'screen-step-6',      // 6
  'screen-step-7',      // 7
  'screen-step-8',      // 8
  'screen-step-9',      // 9
  'screen-step-geo',    // 10 - NUEVO: Geolocalización
  'screen-step-10',     // 11
  'screen-step-11',     // 12
  'screen-summary',     // 13
  'screen-success'      // 14
];

// Definición de bloques para el resumen
const BLOCKS = [
  {
    title: 'Datos de Contacto',
    step: 1,
    fields: [
      { id: 'client-name', label: 'Nombre del responsable' },
      { id: 'client-email', label: 'Correo electrónico' }
    ]
  },
  {
    title: 'Bloque 1: Tu Negocio',
    step: 2,
    fields: [
      { id: 'p1', label: 'Descripción del negocio' },
      { id: 'p2', label: 'Producto o servicio' }
    ]
  },
  {
    title: 'Bloque 2: Tu Cliente Ideal',
    step: 3,
    fields: [
      { id: 'p3', label: 'Perfil del cliente ideal' },
      { id: 'p4', label: 'Problema que resuelves' },
      { id: 'p5', label: 'Barreras y miedos del cliente' }
    ]
  },
  {
    title: 'Bloque 3: Metas y Transformación',
    step: 4,
    fields: [
      { id: 'p6', label: 'Resultado que busca el cliente' },
      { id: 'p7', label: 'Objetivo del negocio en Instagram' }
    ]
  },
  {
    title: 'Bloque 4: Dudas y Objeciones',
    step: 5,
    fields: [
      { id: 'p8', label: 'Errores previos del cliente' },
      { id: 'p9', label: 'Mitos y creencias que frenan la compra' }
    ]
  },
  {
    title: 'Bloque 5: Tu Marca',
    step: 6,
    fields: [
      { id: 'p10', label: 'Diferenciadores y ventajas' },
      { id: 'p11', label: 'Testimonios y casos de éxito' }
    ]
  },
  {
    title: 'Bloque 6: Instagram Actual',
    step: 7,
    fields: [
      { id: 'p12a', label: 'Usuario de Instagram' },
      { id: 'p12b', label: 'Seguidores aproximados' },
      { id: 'p12c', label: 'Frecuencia de publicación' },
      { id: 'p12d', label: 'Tipo de contenido actual' },
      { id: 'p12e', label: 'Contenido que funciona / no funciona' },
      { id: 'p12f', label: 'Métricas aproximadas' },
      { id: 'p12g', label: 'Mensajes y consultas recibidas' },
      { id: 'p13', label: 'Mayor problema con Instagram', other: 'p13-other' }
    ]
  },
  {
    title: 'Bloque 7: Recursos y Capacidad',
    step: 8,
    fields: [
      { id: 'p14', label: 'Capacidad de producción de contenido' },
      { id: 'p15', label: 'Herramientas y recursos digitales', type: 'checkbox', name: 'p15' }
    ]
  },
  {
    title: 'Bloque 8: Personalidad de Marca',
    step: 9,
    fields: [
      { id: 'p16', label: 'Tono y personalidad deseada' },
      { id: 'p17', label: 'Acción esperada de la audiencia' },
      { id: 'p18', label: 'CTA o llamado a la acción' }
    ]
  },
  {
    title: 'Bloque 9: Ubicación y Cobertura',
    step: 10,
    fields: [
      { id: 'p19a-tipo-negocio', label: 'Tipo de operación (físico/online/ambas)' },
      { id: 'p19b-local-fisico', label: 'Local físico' },
      { id: 'p19c-direccion', label: 'Dirección específica' },
      { id: 'p19d-cp', label: 'Código postal' },
      { id: 'p19e-sucursales', label: 'Sucursales adicionales' },
      { id: 'p19f-radio', label: 'Radio de alcance' },
      { id: 'p19h-envios', label: 'Envíos' },
      { id: 'p19g-zonas-ads', label: 'Zonas geográficas para anuncios' }
    ]
  },
  {
    title: 'Bloque 10: Publicidad y Presupuesto',
    step: 11,
    fields: [
      { id: 'p19', label: 'Inversión en anuncios' },
      { id: 'p19-budget', label: 'Presupuesto mensual estimado' },
      { id: 'p20', label: 'Objetivo de la publicidad pagada' }
    ]
  },
  {
    title: 'Bloque 11: Medición y Éxito',
    step: 12,
    fields: [
      { id: 'p21', label: 'Herramientas de seguimiento', type: 'checkbox', name: 'p21' },
      { id: 'p22', label: 'Métrica más importante', other: 'p22-other' }
    ]
  }
];

// ============================================
// NAVEGACIÓN
// ============================================
function goToStep(step) {
  // Validar paso actual antes de avanzar
  if (step > currentStep && step !== 0) {
    if (!validateStep(currentStep)) {
      return;
    }
  }

  // Ocultar pantalla actual
  document.getElementById(SCREENS[currentStep]).classList.remove('active');

  // Mostrar nueva pantalla
  currentStep = step;
  document.getElementById(SCREENS[currentStep]).classList.add('active');

  // Scroll arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Actualizar header y progreso
  updateHeader();
  updateProgress();
}

function updateHeader() {
  const header = document.getElementById('main-header');
  if (currentStep === 0 || currentStep >= 13) {
    header.style.display = 'none';
  } else {
    header.style.display = 'flex';
  }
}

function updateProgress() {
  if (currentStep >= 1 && currentStep <= 12) {
    const pct = Math.round(((currentStep - 1) / 11) * 100);
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('progress-text').textContent = pct + '% completado';
  }
}

// ============================================
// VALIDACIÓN
// ============================================
function validateStep(step) {
  let valid = true;
  const screen = document.getElementById(SCREENS[step]);
  const fields = screen.querySelectorAll('[data-required="true"]');

  fields.forEach(field => {
    // Ignorar campos ocultos (condicionales)
    if (field.closest('.hidden') || field.offsetParent === null) {
      field.classList.remove('error');
      const err = field.parentElement.querySelector('.error-msg');
      if (err) err.classList.remove('show');
      return;
    }

    const val = field.value.trim();
    const errorEl = field.parentElement.querySelector('.error-msg');

    if (!val) {
      field.classList.add('error');
      if (errorEl) errorEl.classList.add('show');
      valid = false;
    } else {
      field.classList.remove('error');
      if (errorEl) errorEl.classList.remove('show');
    }
  });

  if (!valid) {
    const firstError = screen.querySelector('.error');
    if (firstError) {
      setTimeout(() => {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstError.focus();
      }, 100);
    }
  }

  return valid;
}

// Remover error al escribir
function attachInputListeners() {
  document.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        this.classList.remove('error');
        const err = this.parentElement.querySelector('.error-msg');
        if (err) err.classList.remove('show');
      }
    });
  });
}

// ============================================
// LÓGICA CONDICIONAL
// ============================================
function toggleAdsFields() {
  const p19 = document.getElementById('p19');
  const p20Wrapper = document.getElementById('p20-wrapper');
  const p20Req = document.getElementById('p20-req');
  const p20 = document.getElementById('p20');

  if (p19.value === 'No por ahora, solo orgánico' || p19.value === 'No estoy seguro' || p19.value === '') {
    p20Wrapper.classList.add('hidden');
    p20.removeAttribute('data-required');
    p20Req.style.display = 'none';
    p20.value = '';
  } else {
    p20Wrapper.classList.remove('hidden');
    p20.setAttribute('data-required', 'true');
    p20Req.style.display = 'inline';
  }
}

function toggleOther(selectId, otherId) {
  const select = document.getElementById(selectId);
  const other = document.getElementById(otherId);
  if (select.value === 'Otro') {
    other.classList.remove('hidden');
  } else {
    other.classList.add('hidden');
    other.value = '';
  }
}

function toggleGeoFields() {
  const tipo = document.getElementById('p19a-tipo-negocio').value;
  const localWrapper = document.getElementById('geo-local-wrapper');
  const dirWrapper = document.getElementById('geo-direccion-wrapper');
  const cpWrapper = document.getElementById('geo-cp-wrapper');
  const sucWrapper = document.getElementById('geo-sucursales-wrapper');
  const radioWrapper = document.getElementById('geo-radio-wrapper');
  const enviosWrapper = document.getElementById('geo-envios-wrapper');
  const localField = document.getElementById('p19b-local-fisico');
  const radioField = document.getElementById('p19f-radio');

  if (tipo === 'Local físico con atención presencial') {
    // Mostrar campos físicos, ocultar envíos
    localWrapper.classList.remove('hidden');
    dirWrapper.classList.remove('hidden');
    cpWrapper.classList.remove('hidden');
    sucWrapper.classList.remove('hidden');
    radioWrapper.classList.remove('hidden');
    enviosWrapper.classList.add('hidden');
    localField.setAttribute('data-required', 'true');
    radioField.setAttribute('data-required', 'true');
  } else if (tipo === 'Solo online (servicios/envíos virtuales)') {
    // Ocultar campos físicos, mostrar envíos
    localWrapper.classList.add('hidden');
    dirWrapper.classList.add('hidden');
    cpWrapper.classList.add('hidden');
    sucWrapper.classList.add('hidden');
    radioWrapper.classList.add('hidden');
    enviosWrapper.classList.remove('hidden');
    localField.removeAttribute('data-required');
    radioField.removeAttribute('data-required');
    // Limpiar campos ocultos
    localField.value = '';
    radioField.value = '';
    document.getElementById('p19c-direccion').value = '';
    document.getElementById('p19d-cp').value = '';
    document.getElementById('p19e-sucursales').value = '';
  } else if (tipo === 'Ambas (local físico + online)') {
    // Mostrar todos
    localWrapper.classList.remove('hidden');
    dirWrapper.classList.remove('hidden');
    cpWrapper.classList.remove('hidden');
    sucWrapper.classList.remove('hidden');
    radioWrapper.classList.remove('hidden');
    enviosWrapper.classList.remove('hidden');
    localField.setAttribute('data-required', 'true');
    radioField.setAttribute('data-required', 'true');
  } else {
    // Sin selección: ocultar todos los condicionales
    localWrapper.classList.add('hidden');
    dirWrapper.classList.add('hidden');
    cpWrapper.classList.add('hidden');
    sucWrapper.classList.add('hidden');
    radioWrapper.classList.add('hidden');
    enviosWrapper.classList.add('hidden');
    localField.removeAttribute('data-required');
    radioField.removeAttribute('data-required');
  }
}

// ============================================
// RESUMEN
// ============================================
function goToSummary() {
  // Validar el paso actual (Medición, índice 12 en SCREENS)
  if (!validateStep(12)) return;

  // Construir resumen
  const container = document.getElementById('summary-content');
  let html = '';

  BLOCKS.forEach((block, idx) => {
    html += `<div class="summary-section" id="summary-block-${idx}">`;
    html += `<div class="summary-header" onclick="toggleSummary(${idx})">`;
    html += `<h3>${block.title}</h3>`;
    html += `<span class="summary-toggle">&#9662;</span>`;
    html += `<button class="btn-edit" onclick="event.stopPropagation(); goToStep(${block.step})">Editar</button>`;
    html += `</div>`;
    html += `<div class="summary-body">`;

    block.fields.forEach(field => {
      let value = '';

      if (field.type === 'checkbox') {
        const checked = document.querySelectorAll(`input[name="${field.name}"]:checked`);
        value = Array.from(checked).map(cb => cb.value).join(', ') || 'No seleccionado';
      } else {
        const el = document.getElementById(field.id);
        value = el ? el.value.trim() : '';
        // Si es select "Otro", mostrar el valor del campo other
        if (field.other && value === 'Otro') {
          const otherEl = document.getElementById(field.other);
          value = otherEl && otherEl.value.trim() ? `Otro: ${otherEl.value.trim()}` : 'Otro (sin especificar)';
        }
      }

      if (value) {
        html += `<div class="summary-item">`;
        html += `<div class="summary-question">${field.label}</div>`;
        html += `<div class="summary-answer">${escapeHtml(value)}</div>`;
        html += `</div>`;
      }
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;

  // Abrir el primer bloque por defecto
  setTimeout(() => {
    const first = document.querySelector('.summary-section');
    if (first) first.classList.add('open');
  }, 50);

  goToStep(13);
}

function toggleSummary(idx) {
  const block = document.getElementById(`summary-block-${idx}`);
  block.classList.toggle('open');
}

// ============================================
// GENERAR PDF
// ============================================
function downloadPDF() {
  const clientName = document.getElementById('client-name').value.trim() || 'Cliente';
  const dateStr = new Date().toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  // Construir contenido PDF
  document.getElementById('pdf-date').textContent = `Cliente: ${clientName} | Fecha: ${dateStr}`;

  let bodyHtml = '';
  BLOCKS.forEach(block => {
    bodyHtml += `<div class="pdf-block">`;
    bodyHtml += `<h2>${block.title}</h2>`;
    block.fields.forEach(field => {
      let value = '';
      if (field.type === 'checkbox') {
        const checked = document.querySelectorAll(`input[name="${field.name}"]:checked`);
        value = Array.from(checked).map(cb => cb.value).join(', ') || 'No seleccionado';
      } else {
        const el = document.getElementById(field.id);
        value = el ? el.value.trim() : '';
        if (field.other && value === 'Otro') {
          const otherEl = document.getElementById(field.other);
          value = otherEl && otherEl.value.trim() ? `Otro: ${otherEl.value.trim()}` : 'Otro (sin especificar)';
        }
      }
      if (value) {
        bodyHtml += `<div class="pdf-item">`;
        bodyHtml += `<strong>${field.label}</strong>`;
        bodyHtml += `<p>${escapeHtml(value)}</p>`;
        bodyHtml += `</div>`;
      }
    });
    bodyHtml += `</div>`;
  });

  document.getElementById('pdf-body').innerHTML = bodyHtml;

  const element = document.getElementById('pdf-content');
  element.style.display = 'block';

  const opt = {
    margin: [15, 15, 15, 15],
    filename: `startmotif-briefing-${clientName.toLowerCase().replace(/\s+/g, '-')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    element.style.display = 'none';
    goToSuccess(clientName);
  }).catch(err => {
    console.error('Error PDF:', err);
    element.style.display = 'none';
    alert('Hubo un error generando el PDF. Intenta descargar el archivo .TXT como respaldo.');
  });
}

// ============================================
// GENERAR TXT
// ============================================
function downloadTXT() {
  const clientName = document.getElementById('client-name').value.trim() || 'Cliente';
  const dateStr = new Date().toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  let txt = `# BRIEFING ESTRATÉGICO INSTAGRAM — STARTMOTIF\n`;
  txt += `# ============================================\n`;
  txt += `# Cliente: ${clientName}\n`;
  txt += `# Fecha: ${dateStr}\n`;
  txt += `# ============================================\n\n`;

  BLOCKS.forEach(block => {
    txt += `## ${block.title.toUpperCase()}\n\n`;
    block.fields.forEach(field => {
      let value = '';
      if (field.type === 'checkbox') {
        const checked = document.querySelectorAll(`input[name="${field.name}"]:checked`);
        value = Array.from(checked).map(cb => cb.value).join(', ') || 'No seleccionado';
      } else {
        const el = document.getElementById(field.id);
        value = el ? el.value.trim() : '';
        if (field.other && value === 'Otro') {
          const otherEl = document.getElementById(field.other);
          value = otherEl && otherEl.value.trim() ? `Otro: ${otherEl.value.trim()}` : 'Otro (sin especificar)';
        }
      }
      if (value) {
        txt += `${field.label}:\n${value}\n\n`;
      }
    });
    txt += `---\n\n`;
  });

  txt += `Generado por Startmotif — Estrategia Instagram Pro\n`;

  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `startmotif-briefing-${clientName.toLowerCase().replace(/\s+/g, '-')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

}

// ============================================
// PANTALLA DE ÉXITO + WHATSAPP
// ============================================
function goToSuccess(clientName) {
  const msg = encodeURIComponent(
    `Hola equipo de Startmotif, les comparto el briefing estratégico de mi negocio para que diseñen la estrategia de Instagram.\n\n` +
    `Negocio: ${clientName}\n` +
    `Documento adjunto en el siguiente mensaje.`
  );
  document.getElementById('whatsapp-link').href = `https://wa.me/5492612788674?text=${msg}`;
  goToStep(13);
}

// ============================================
// UTILIDADES
// ============================================
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  attachInputListeners();
  updateHeader();
});
