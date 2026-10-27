const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const serviceDropdown = document.querySelector('.nav-dropdown');
const serviceToggle = document.querySelector('.nav-dropdown-toggle');

function closeServiceDropdown(returnFocus = false) {
  if (!serviceDropdown || !serviceToggle) return;
  serviceDropdown.classList.remove('is-open');
  serviceToggle.setAttribute('aria-expanded', 'false');
  if (returnFocus) serviceToggle.focus();
}

if (serviceDropdown && serviceToggle) {
  serviceToggle.addEventListener('click', () => {
    const open = serviceToggle.getAttribute('aria-expanded') === 'true';
    serviceToggle.setAttribute('aria-expanded', String(!open));
    serviceDropdown.classList.toggle('is-open', !open);
  });

  serviceDropdown.addEventListener('focusout', (event) => {
    if (!serviceDropdown.contains(event.relatedTarget)) closeServiceDropdown();
  });

  document.addEventListener('click', (event) => {
    if (!serviceDropdown.contains(event.target)) closeServiceDropdown();
  });
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    navigation.classList.toggle('is-open', !open);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeServiceDropdown();
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const dropdownWasOpen = serviceToggle?.getAttribute('aria-expanded') === 'true';
      closeServiceDropdown(dropdownWasOpen);
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      navigation.classList.remove('is-open');
      if (!dropdownWasOpen) menuButton.focus();
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#enquiry-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = 'Website enquiry: ' + data.get('service');
    const body = [
      'Name: ' + data.get('name'),
      'Email: ' + data.get('email'),
      'Service: ' + data.get('service'),
      '',
      'Details:',
      data.get('message') || '(No additional details provided)'
    ].join('\n');

    document.querySelector('#form-status').textContent =
      'Your email application should open with a draft. If it does not, use the direct email link below.';
    window.location.href = 'mailto:philchapman321@gmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}
