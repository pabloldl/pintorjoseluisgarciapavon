'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.hidden = false;
function closeMenu(restoreFocus = false) {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = 'Menú <span aria-hidden="true">＋</span>';
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) closeMenu();
  else {
    navigation.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.innerHTML = 'Cerrar <span aria-hidden="true">−</span>';
  }
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 621px)').addEventListener('change', () => closeMenu());

const copyButton = document.querySelector('.copy-phone');
const copyStatus = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText('615012626');
    } else {
      const field = document.createElement('textarea');
      field.value = '615012626';
      field.setAttribute('aria-label', 'Número de teléfono');
      field.style.cssText = 'position:fixed;top:0;left:0;opacity:0;pointer-events:none';
      document.body.append(field);
      field.select();
      let success;
      try { success = document.execCommand('copy'); }
      finally { field.remove(); copyButton.focus(); }
      if (!success) throw new Error('Clipboard unavailable');
    }
    copyStatus.textContent = 'Teléfono copiado: 615 012 626';
  } catch {
    copyStatus.textContent = 'No se pudo copiar. Selecciona el número: 615012626';
  }
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('waiting');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('waiting');
    revealObserver.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      document.querySelectorAll('.waiting').forEach(element => element.classList.remove('waiting'));
      revealObserver.disconnect();
    }
  });
}
if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) sectionObserver.observe(section);
  });
}
