const site = {
  nav: [
    ['index.html', 'Início'],
    ['quem-somos.html', 'Quem Somos'],
    ['projetos.html', 'Projetos'],
    ['biblioteca.html', 'Biblioteca'],
    ['podcasts.html', 'Podcasts'],
    ['voluntariado.html', 'Voluntariado'],
    ['contato.html', 'Contato']
  ],
  footerGroups: {
    Institucional: [['Quem Somos','quem-somos.html'], ['Projetos','projetos.html'], ['Voluntariado','voluntariado.html'], ['Contato','contato.html']],
    Conteúdos: [['Biblioteca','biblioteca.html'], ['Podcasts','podcasts.html'], ['FAQ','faq.html'], ['Mapa do Site','sitemap.xml']],
    Acesso: [['Login','login.html'], ['Cadastro','cadastro.html'], ['Área do candidato','painel-voluntario.html'], ['Perfil','perfil.html']],
    Legal: [['Privacidade','politica-privacidade.html'], ['Termos','termos.html']]
  }
};

function currentFile() {
  const file = location.pathname.split('/').pop() || 'index.html';
  return file === '' ? 'index.html' : file;
}

function icon(name, label = '') {
  return `<i data-lucide="${name}" aria-hidden="${label ? 'false' : 'true'}"></i>${label ? `<span>${label}</span>` : ''}`;
}

function renderHeader() {
  const target = document.querySelector('[data-component="header"]');
  if (!target) return;
  const active = currentFile();
  target.innerHTML = `
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header class="site-header" role="banner">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Início">
          <img class="brand-logo" src="assets/images/logo.svg" alt="Logo Comunidade do Reino" />
        </a>
        <nav class="nav" id="siteNav" aria-label="Navegação principal">
          <ul class="nav-list">
            ${site.nav.map(([href, label]) => `<li><a class="nav-link" href="${href}" ${active === href ? 'aria-current="page"' : ''}>${label}</a></li>`).join('')}
          </ul>
        </nav>
        <div class="header-actions">
          <a class="btn btn-outline" href="voluntariado.html">Quero Participar</a>
          <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="siteNav" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
}

function renderFooter() {
  const target = document.querySelector('[data-component="footer"]');
  if (!target) return;
  const groups = Object.entries(site.footerGroups).map(([title, links]) => `
    <div><p class="footer-title">${title}</p><ul class="footer-links">${links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></div>`).join('');
  target.innerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html"><img class="brand-logo" src="assets/images/logo.svg" alt="Logo Comunidade do Reino" /></a>
            <p class="footer-about">Portal institucional de informação, cuidado, biblioteca, projetos, voluntariado e comunicação da Comunidade do Reino.</p>
            <div class="socials footer-socials" aria-label="Redes sociais">
              <a href="https://instagram.com" aria-label="Instagram">${icon('instagram')}</a>
              <a href="https://facebook.com" aria-label="Facebook">${icon('facebook')}</a>
              <a href="https://youtube.com" aria-label="YouTube">${icon('youtube')}</a>
              <a href="https://spotify.com" aria-label="Spotify">${icon('music')}</a>
            </div>
          </div>${groups}
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} Comunidade do Reino. Todos os direitos reservados.</span><span>Portal institucional da Comunidade do Reino.</span></div>
      </div>
    </footer>`;
}

function setupMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.getElementById('siteNav');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    button.classList.toggle('is-open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('is-locked', isOpen);
  });
  nav.addEventListener('click', event => {
    if (!event.target.closest('a')) return;
    nav.classList.remove('is-open');
    button.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('is-locked');
  });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal, .card');
  if (!('IntersectionObserver' in window)) return items.forEach(item => item.classList.add('is-visible'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  items.forEach(item => observer.observe(item));
}

function setupFilters() {
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const buttons = group.querySelectorAll('[data-filter]');
    const scope = document.querySelector(group.dataset.filterGroup || 'body');
    buttons.forEach(button => button.addEventListener('click', () => {
      buttons.forEach(item => item.classList.toggle('is-active', item === button));
      const value = button.dataset.filter;
      scope?.querySelectorAll('[data-category]').forEach(card => {
        card.hidden = value !== 'todos' && card.dataset.category !== value;
      });
    }));
  });
  document.querySelectorAll('[data-search]').forEach(input => {
    const scope = document.querySelector(input.dataset.search || 'body');
    input.addEventListener('input', () => {
      const term = input.value.toLowerCase().trim();
      scope?.querySelectorAll('[data-search-item]').forEach(item => {
        item.hidden = term && !item.textContent.toLowerCase().includes(term);
      });
    });
  });
}

function setupForms() {
  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      toast('Recebemos suas informações. Este fluxo está pronto para conectar ao backend.');
      form.reset();
    });
  });
}

function setupBackToTop() {
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.type = 'button';
  button.setAttribute('aria-label', 'Voltar ao topo');
  button.innerHTML = icon('arrow-up');
  document.body.appendChild(button);
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => button.classList.toggle('is-visible', scrollY > 520), { passive: true });
}

function toast(message) {
  let region = document.querySelector('.toast');
  if (!region) {
    region = document.createElement('div');
    region.className = 'toast';
    region.setAttribute('aria-live', 'polite');
    document.body.appendChild(region);
  }
  const item = document.createElement('div');
  item.className = 'toast-item';
  item.textContent = message;
  region.appendChild(item);
  setTimeout(() => item.remove(), 4200);
}

function setupNewsletter() {
  document.querySelectorAll('[data-newsletter]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      toast('Inscrição confirmada. Em produção, este contato será salvo no CRM.');
      form.reset();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  setupMenu();
  setupReveal();
  setupFilters();
  setupForms();
  setupNewsletter();
  setupBackToTop();
  if (window.lucide) window.lucide.createIcons();
});
