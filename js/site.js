/* ===========================================================
 * Mavan Services — site bootstrapping & contact data binding
 *
 * To change contact details, edit the MAVAN object below.
 * Any element with data-mavan="key" gets its text from MAVAN[key].
 * Empty values are hidden automatically.
 * =========================================================== */

const MAVAN = {
  name:        "Mavan Services Ltd",
  shortName:   "Mavan Services",

  email:       "info@mavanservices.co.uk",

  // Leave empty until confirmed. Anything depending on these
  // will be hidden from the UI automatically.
  phone:       "01784 618019",
  phoneHref:   "+441784618019",

  addressLine1: "The Willows, Stroude Road",
  addressLine2: "Egham, TW20 9UW",
  addressLine3: "United Kingdom",
  addressFull:  "",                // single-line; auto-derived below if blank

  hours:       "Mon–Fri, 9am–6pm UK time",
  established: "UK-based · Built for UK service businesses",
  companyNo:   "—",                // Companies House number once registered
  domain:      "mavanservices.co.uk"
};

// Derive a single-line address if not explicitly set
if (!MAVAN.addressFull) {
  MAVAN.addressFull = [MAVAN.addressLine1, MAVAN.addressLine2, MAVAN.addressLine3]
    .filter(Boolean).join(", ");
}

document.addEventListener('DOMContentLoaded', () => {
  // --- mobile nav toggle ---
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // --- footer year ---
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // --- populate any [data-mavan="key"] element from MAVAN ---
  document.querySelectorAll('[data-mavan]').forEach(el => {
    const key = el.getAttribute('data-mavan');

    if (key === 'addressBlock') {
      const parts = [MAVAN.addressLine1, MAVAN.addressLine2, MAVAN.addressLine3].filter(Boolean);
      if (parts.length) {
        el.innerHTML = parts.join('<br>');
      } else {
        hide(el);
      }
      return;
    }

    const val = MAVAN[key];
    if (val) {
      el.textContent = val;
    } else {
      hide(el);
    }
  });

  // --- populate href on [data-mavan-href="email|phone"] ---
  document.querySelectorAll('[data-mavan-href]').forEach(el => {
    const key = el.getAttribute('data-mavan-href');
    if (key === 'email' && MAVAN.email) {
      el.href = `mailto:${MAVAN.email}`;
    } else if (key === 'phone' && MAVAN.phoneHref) {
      el.href = `tel:${MAVAN.phoneHref}`;
    } else {
      hide(el);
    }
  });
});

function hide(el) {
  // hide the element AND its closest .contact-row / <li> wrapper if any
  el.hidden = true;
  const wrapRow = el.closest('.contact-row, li, .topbar .links > *');
  if (wrapRow && wrapRow !== el) wrapRow.hidden = true;
}
