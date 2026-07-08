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
  setupProjectCarousel();
  setupVideoPlayButtons();
  setupBookModal();
  if (window.lucide) window.lucide.createIcons();
});

function setupBookModal() {
  const modal = document.getElementById('bookModal');
  if (!modal) return;

  const openButtons = Array.from(document.querySelectorAll('[data-open-book]'));
  const closeButtons = Array.from(modal.querySelectorAll('[data-close-modal]'));
  const overlay = modal;
  const readButton = modal.querySelector('[data-read-book]');
  const previewButton = modal.querySelector('[data-preview-book]');
  const pdfModal = document.getElementById('pdfModal');
  const pdfCloseButtons = pdfModal ? Array.from(pdfModal.querySelectorAll('[data-close-pdf-modal]')) : [];
  const pdfOverlay = pdfModal;
  const pdfUrl = 'assets/biblioteca/EbookEspanhol.pdf';

  const openModal = () => {
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  };

  const closeModal = () => {
    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
  };

  let pdfDoc = null;
  let currentPage = 1;
  let pageCount = 0;
  let currentScale = 1.0;
  const pdfViewer = pdfModal ? pdfModal.querySelector('.pdf-viewer') : null;
  const pageNumberLabel = pdfModal ? pdfModal.querySelector('[data-pdf-page-number]') : null;
  const pageCountLabel = pdfModal ? pdfModal.querySelector('[data-pdf-page-count]') : null;
  const prevPageButton = pdfModal ? pdfModal.querySelector('[data-prev-pdf-page]') : null;
  const nextPageButton = pdfModal ? pdfModal.querySelector('[data-next-pdf-page]') : null;
  const zoomInButton = pdfModal ? pdfModal.querySelector('[data-pdf-zoom-in]') : null;
  const zoomOutButton = pdfModal ? pdfModal.querySelector('[data-pdf-zoom-out]') : null;
  let wheelScrollTimeout = 0;
  let touchStartY = null;

  const renderPage = pageNum => {
    if (!pdfViewer || !pdfDoc) return;
    pdfDoc.getPage(pageNum).then(page => {
      const containerWidth = pdfViewer.clientWidth - 24;
      const viewport = page.getViewport({ scale: currentScale });
      const scale = Math.min(currentScale, containerWidth / viewport.width);
      const adjustedViewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = adjustedViewport.height;
      canvas.width = adjustedViewport.width;
      const renderContext = {
        canvasContext: context,
        viewport: adjustedViewport
      };
      pdfViewer.innerHTML = '';
      pdfViewer.appendChild(canvas);
      page.render(renderContext);
      if (pageNumberLabel) pageNumberLabel.textContent = pageNum;
    });
  };

  const loadPdf = () => {
    if (!pdfModal || !pdfViewer) return;
    if (pdfDoc) {
      renderPage(currentPage);
      return;
    }
    if (!window.pdfjsLib) {
      console.error('PDF.js não encontrado. Verifique se o script pdf.min.js foi carregado.');
      if (pdfViewer) {
        pdfViewer.innerHTML = '<div class="pdf-error">Leitor indisponível. O visualizador de PDF não foi carregado.</div>';
      }
      return;
    }

    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js';
    window.pdfjsLib.getDocument(pdfUrl).promise.then(doc => {
      pdfDoc = doc;
      pageCount = doc.numPages;
      if (pageCountLabel) pageCountLabel.textContent = pageCount;
      currentPage = 1;
      renderPage(currentPage);
    }).catch(error => {
      console.error('PDF.js erro ao carregar:', error);
      if (pdfViewer) {
        pdfViewer.innerHTML = '<div class="pdf-error">Não foi possível carregar o PDF. Verifique o caminho ou o arquivo.</div>';
      }
    });
  };

  const openPdfModal = () => {
    if (!pdfModal) return;
    pdfModal.removeAttribute('hidden');
    pdfModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    loadPdf();
  };

  const closePdfModal = () => {
    if (!pdfModal) return;
    pdfModal.setAttribute('hidden', '');
    pdfModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
    if (pdfViewer) pdfViewer.innerHTML = '';
    pdfDoc = null;
  };

  openButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      openModal();
    });
  });

  closeButtons.forEach(button => button.addEventListener('click', closeModal));
  overlay.addEventListener('click', event => {
    if (event.target === overlay) closeModal();
  });

  if (pdfModal) {
    pdfCloseButtons.forEach(button => button.addEventListener('click', closePdfModal));
    pdfOverlay.addEventListener('click', event => {
      if (event.target === pdfOverlay) closePdfModal();
    });
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (modal.getAttribute('aria-hidden') === 'false') closeModal();
      if (pdfModal && pdfModal.getAttribute('aria-hidden') === 'false') closePdfModal();
    }
  });

  if (previewButton && pdfModal) {
    previewButton.addEventListener('click', () => {
      closeModal();
      openPdfModal();
    });
  }

  if (readButton && pdfModal) {
    readButton.addEventListener('click', () => {
      closeModal();
      openPdfModal();
    });
  }

  if (prevPageButton) {
    prevPageButton.addEventListener('click', () => {
      if (currentPage <= 1) return;
      currentPage -= 1;
      renderPage(currentPage);
    });
  }

  if (nextPageButton) {
    nextPageButton.addEventListener('click', () => {
      if (!pdfDoc || currentPage >= pageCount) return;
      currentPage += 1;
      renderPage(currentPage);
    });
  }

  if (zoomInButton) {
    zoomInButton.addEventListener('click', () => {
      currentScale = Math.min(currentScale + 0.2, 3.0);
      renderPage(currentPage);
    });
  }

  if (zoomOutButton) {
    zoomOutButton.addEventListener('click', () => {
      currentScale = Math.max(currentScale - 0.2, 0.6);
      renderPage(currentPage);
    });
  }

  if (pdfViewer) {
    pdfViewer.addEventListener('wheel', event => {
      event.preventDefault();
      clearTimeout(wheelScrollTimeout);
      wheelScrollTimeout = window.setTimeout(() => {
        if (event.deltaY > 0 && currentPage < pageCount) {
          currentPage += 1;
          renderPage(currentPage);
        } else if (event.deltaY < 0 && currentPage > 1) {
          currentPage -= 1;
          renderPage(currentPage);
        }
      }, 50);
    }, { passive: false });

    pdfViewer.addEventListener('touchstart', event => {
      touchStartY = event.touches[0]?.clientY ?? null;
    });

    pdfViewer.addEventListener('touchend', event => {
      const touchEndY = event.changedTouches[0]?.clientY ?? null;
      if (touchStartY === null || touchEndY === null) return;
      const delta = touchStartY - touchEndY;
      if (Math.abs(delta) < 40) return;
      if (delta > 0 && currentPage < pageCount) {
        currentPage += 1;
        renderPage(currentPage);
      } else if (delta < 0 && currentPage > 1) {
        currentPage -= 1;
        renderPage(currentPage);
      }
      touchStartY = null;
    });
  }
}

function setupProjectCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  const track = carousel.querySelector('.project-carousel__track');
  const dotsContainer = carousel.querySelector('.project-carousel__dots');
  const cards = Array.from(track.children);
  let isDragging = false;
  let startX = 0;
  let startTrackX = 0;
  let trackX = 0;
  let maxScroll = track.scrollWidth - carousel.clientWidth;
  let cardWidth = cards[0]?.getBoundingClientRect().width || carousel.clientWidth;
  let activeIndex = 0;

  const updatePosition = x => {
    trackX = Math.max(0, Math.min(x, maxScroll));
    track.style.transform = `translateX(${-trackX}px)`;
  };

  const snapToCard = index => {
    activeIndex = Math.max(0, Math.min(index, cards.length - 1));
    const targetX = cards[activeIndex].offsetLeft - (carousel.clientWidth - cards[activeIndex].clientWidth) / 2;
    updatePosition(targetX);
    highlightDot(activeIndex);
  };

  const refreshDimensions = () => {
    cardWidth = cards[0]?.getBoundingClientRect().width || carousel.clientWidth;
    maxScroll = Math.max(0, track.scrollWidth - carousel.clientWidth);
    snapToCard(activeIndex);
  };

  const createDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    cards.forEach((_, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'project-carousel__dot';
      button.addEventListener('click', () => snapToCard(index));
      dotsContainer.appendChild(button);
    });
    highlightDot(activeIndex);
  };

  const highlightDot = index => {
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.project-carousel__dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);
    });
  };

  createDots();

  carousel.addEventListener('pointerdown', event => {
    isDragging = true;
    startX = event.clientX;
    startTrackX = trackX;
    carousel.setPointerCapture(event.pointerId);
    carousel.classList.add('is-dragging');
  });

  carousel.addEventListener('pointermove', event => {
    if (!isDragging) return;
    const delta = startX - event.clientX;
    updatePosition(startTrackX + delta);
  });

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove('is-dragging');
    const index = Math.round(trackX / cardWidth);
    snapToCard(index);
  };

  carousel.addEventListener('pointerup', stopDrag);
  carousel.addEventListener('pointercancel', stopDrag);
  carousel.addEventListener('pointerleave', stopDrag);

  window.addEventListener('resize', refreshDimensions);
  const resizeObserver = new ResizeObserver(refreshDimensions);
  resizeObserver.observe(carousel);
  resizeObserver.observe(track);
}

function setupVideoPlayButtons() {
  document.querySelectorAll('.feature-panel--video .media-card').forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'video-play-overlay';
    button.setAttribute('aria-label', 'Tocar vídeo');
    card.appendChild(button);

    const updateOverlay = () => {
      button.classList.toggle('hidden', !video.paused && !video.ended);
    };

    button.addEventListener('click', () => {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    });

    video.addEventListener('play', updateOverlay);
    video.addEventListener('pause', updateOverlay);
    video.addEventListener('ended', updateOverlay);
    updateOverlay();
  });
}

