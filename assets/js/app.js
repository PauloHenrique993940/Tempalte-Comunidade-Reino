const site = {
  nav: [
    ["index.html", "Início", "home"],
    ["quem-somos.html", "Quem Somos", "landmark"],
    ["projetos.html", "Projetos", "heart-handshake"],
    ["biblioteca.html", "Biblioteca", "book-open"],
    ["podcasts.html", "Podcasts", "headphones"],
    ["contato.html", "Contato", "send"],
  ],
  footerGroups: {
    Institucional: [
      ["Quem Somos", "quem-somos.html"],
      ["Projetos", "projetos.html"],
      ["Contato", "contato.html"],
    ],
    Conteúdos: [
      ["Biblioteca", "biblioteca.html"],
      ["Podcasts", "podcasts.html"],
      ["FAQ", "faq.html"],
      ["Mapa do Site", "sitemap.xml"],
    ],
    Acesso: [
      ["Login do voluntário", "login.html"],
      ["Painel administrativo", "admin.html"],
      ["Cadastro", "cadastro.html"],
      ["Perfil", "perfil.html"],
    ],
    Legal: [
      ["Privacidade", "politica-privacidade.html"],
      ["Termos", "termos.html"],
    ],
  },
};

function currentFile() {
  const file = location.pathname.split("/").pop() || "index.html";
  return file === "" ? "index.html" : file;
}

function icon(name, label = "") {
  return `<i data-lucide="${name}" aria-hidden="${label ? "false" : "true"}"></i>${label ? `<span>${label}</span>` : ""}`;
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
            ${site.nav.map(([href, label, iconName]) => `<li><a class="nav-link" href="${href}" ${active === href ? 'aria-current="page"' : ""}>${icon(iconName, label)}</a></li>`).join("")}
          </ul>
        </nav>
        <div class="header-actions">
          <div class="access-select" data-access-menu>
            <button class="access-select__button" type="button" aria-label="Selecionar área de acesso" aria-expanded="false" data-access-toggle>
              ${icon("key-round", "Acesso")}
              <span class="access-select__chevron" aria-hidden="true"></span>
            </button>
            <div class="access-select__menu" hidden>
              <a href="login.html">${icon("user-round", "Candidato")}</a>
              <a href="admin.html">${icon("shield-check", "Admin")}</a>
            </div>
          </div>
          <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="siteNav" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
}

function setupAccessSelect() {
  document.querySelectorAll("[data-access-menu]").forEach((menu) => {
    const button = menu.querySelector("[data-access-toggle]");
    const dropdown = menu.querySelector(".access-select__menu");
    if (!button || !dropdown) return;

    const close = () => {
      menu.classList.remove("is-open");
      dropdown.hidden = true;
      button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", () => {
      const isOpen = dropdown.hidden;
      document.querySelectorAll(".access-select__menu").forEach((item) => {
        if (item !== dropdown) item.hidden = true;
      });
      document.querySelectorAll("[data-access-menu]").forEach((item) => {
        if (item !== menu) item.classList.remove("is-open");
      });
      menu.classList.toggle("is-open", isOpen);
      dropdown.hidden = !isOpen;
      button.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
      if (!menu.contains(event.target)) close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  });
}

function setupLoginRedirect() {
  document.querySelectorAll("[data-login-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      toast("Login validado. Redirecionando para a área do voluntário.");
      window.setTimeout(() => {
        window.location.href = form.dataset.loginRedirect || "painel-voluntario.html";
      }, 900);
    });
  });
}

function renderFooter() {
  const target = document.querySelector('[data-component="footer"]');
  if (!target) return;
  const groups = Object.entries(site.footerGroups)
    .map(
      ([title, links]) => `
    <div><p class="footer-title">${title}</p><ul class="footer-links">${links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul></div>`,
    )
    .join("");
  target.innerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html"><img class="brand-logo" src="assets/images/logo.svg" alt="Logo Comunidade do Reino" /></a>
            <p class="footer-about">Portal institucional de informação, cuidado, biblioteca, projetos, voluntariado e comunicação da Comunidade do Reino.</p>
            <div class="socials footer-socials" aria-label="Redes sociais">
              <a href="https://instagram.com/comunidadedoreino001" aria-label="Instagram">
              <img src="assets/icons/instagram.svg" alt="Instagram"></a>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
              <img src="assets/icons/facebook.svg" alt="Facebook"></a>
              <a href="https://youtube.com" aria-label="YouTube"> <img src="assets/icons/youtube.svg" alt="Youtube"></a></a>
              <a href="https://spotify.com" aria-label="Spotify"> <img src="assets/icons/spotify.svg" alt="Spotify"></a></a>
            </div>
          </div>${groups}
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} Comunidade do Reino. Todos os direitos reservados.</span><span>Portal institucional da Comunidade do Reino.</span></div>
      </div>
    </footer>`;
}

function setupMenu() {
  const button = document.querySelector("[data-menu-toggle]");
  const nav = document.getElementById("siteNav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("is-locked", isOpen);
  });
  nav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    nav.classList.remove("is-open");
    button.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-locked");
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal, .card");
  if (!("IntersectionObserver" in window))
    return items.forEach((item) => item.classList.add("is-visible"));
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  items.forEach((item) => observer.observe(item));
}

function setupFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const buttons = group.querySelectorAll("[data-filter]");
    const scope = document.querySelector(group.dataset.filterGroup || "body");
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        buttons.forEach((item) =>
          item.classList.toggle("is-active", item === button),
        );
        const value = button.dataset.filter;
        scope?.querySelectorAll("[data-category]").forEach((card) => {
          card.hidden = value !== "todos" && card.dataset.category !== value;
        });
      }),
    );
  });
  document.querySelectorAll("[data-search]").forEach((input) => {
    const scope = document.querySelector(input.dataset.search || "body");
    input.addEventListener("input", () => {
      const term = input.value.toLowerCase().trim();
      scope?.querySelectorAll("[data-search-item]").forEach((item) => {
        item.hidden = term && !item.textContent.toLowerCase().includes(term);
      });
    });
  });
}

function setupForms() {
  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      toast(
        "Recebemos suas informações. Este fluxo está pronto para conectar ao backend.",
      );
      form.reset();
    });
  });
}

function setupAdminLogin() {
  const form = document.querySelector("[data-admin-login]");
  const adminArea = document.querySelector("[data-admin-area]");
  const loginScreen = document.querySelector("[data-admin-login-screen]");
  const logoutButton = document.querySelector("[data-admin-logout]");
  if (!form || !adminArea) return;

  const unlockAdminArea = ({ shouldScroll = false } = {}) => {
    adminArea.hidden = false;
    if (loginScreen) loginScreen.hidden = true;
    document.body.classList.add("admin-is-authenticated");
    form.querySelector("button")?.setAttribute("disabled", "");

    if (shouldScroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const lockAdminArea = () => {
    adminArea.hidden = true;
    if (loginScreen) loginScreen.hidden = false;
    document.body.classList.remove("admin-is-authenticated");
    form.querySelector("button")?.removeAttribute("disabled");
    sessionStorage.removeItem("adminDemoAuthenticated");
    history.replaceState(null, "", location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sessionStorage.getItem("adminDemoAuthenticated") === "true") {
    unlockAdminArea();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    sessionStorage.setItem("adminDemoAuthenticated", "true");
    unlockAdminArea({ shouldScroll: true });
    window.dispatchEvent(
      new CustomEvent("admin:activity", {
        detail: "Login administrativo demonstrativo liberado.",
      }),
    );
    toast("Acesso administrativo demonstrativo liberado.");
  });

  logoutButton?.addEventListener("click", () => {
    lockAdminArea();
    toast("Sessão administrativa encerrada.");
  });
}

function setupAdminPanels() {
  const shell = document.querySelector(".admin-shell");
  if (!shell) return;

  const links = Array.from(shell.querySelectorAll('.admin-sidebar a[href^="#"]'));
  const panels = Array.from(shell.querySelectorAll(".admin-section"));
  if (!links.length || !panels.length) return;

  const panelIds = new Set(panels.map((panel) => panel.id));

  const activatePanel = (panelId) => {
    const targetId = panelIds.has(panelId) ? panelId : panels[0].id;

    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });

    links.forEach((link) => {
      const isActive = link.hash === `#${targetId}`;
      link.classList.toggle("active", isActive);
      link.toggleAttribute("aria-current", isActive);
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const panelId = link.hash.slice(1);
      activatePanel(panelId);
      history.pushState(null, "", `#${panelId}`);
    });
  });

  window.addEventListener("hashchange", () => {
    activatePanel(location.hash.slice(1));
  });

  activatePanel(location.hash.slice(1));
}

function setupAdminSimulation() {
  const shell = document.querySelector(".admin-shell");
  if (!shell) return;

  const updateKpi = (key, amount = 1) => {
    const value = document.querySelector(`[data-kpi="${key}"]`);
    const note = document.querySelector(`[data-kpi-note="${key}"]`);
    if (!value) return;
    value.textContent = String((Number(value.textContent) || 0) + amount);
    if (note) note.textContent = `${amount > 0 ? "+" : ""}${amount} nesta sessão`;
  };

  const addLog = (message) => {
    const list = document.querySelector("[data-admin-logs]");
    if (!list) return;
    const item = document.createElement("li");
    const time = document.createElement("time");
    const text = document.createElement("span");
    time.textContent = "Agora";
    text.textContent = message;
    item.append(time, text);
    list.prepend(item);
  };

  const createBadge = (text) => {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = text;
    return badge;
  };

  const createBoardArticle = (badgeText, titleText, descriptionText) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    title.textContent = titleText;
    description.textContent = descriptionText;
    article.append(createBadge(badgeText), title, description);
    return article;
  };

  const statusClass = (status) => {
    const normalized = status.toLowerCase();
    if (normalized.includes("pendente") || normalized.includes("treinamento")) {
      return "status-pill status-pill--warning";
    }
    if (normalized.includes("inativo") || normalized.includes("desligado")) {
      return "status-pill status-pill--danger";
    }
    return "status-pill";
  };

  const formatEventDate = (dateValue) => {
    const date = new Date(`${dateValue}T12:00:00`);
    const parts = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
    }).formatToParts(date);
    const day = parts.find((part) => part.type === "day")?.value || "--";
    const month = parts.find((part) => part.type === "month")?.value.replace(".", "") || "mês";
    return `${day} ${month}`;
  };

  shell.querySelectorAll("[data-admin-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.dataset.adminOpen;
      shell.querySelector(`.admin-sidebar a[href="#${panelId}"]`)?.click();
      window.setTimeout(() => {
        document.getElementById(panelId)?.querySelector("input, select, textarea, button")?.focus();
      }, 120);
    });
  });

  const userFilter = document.querySelector("[data-admin-user-filter]");
  userFilter?.addEventListener("change", () => {
    const role = userFilter.value;
    document.querySelectorAll("#usuariosAdmin tbody tr").forEach((row) => {
      row.hidden = role !== "Todos os perfis" && row.dataset.role !== role;
    });
  });

  const userForm = document.querySelector("[data-admin-user-form]");
  userForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!userForm.checkValidity()) {
      userForm.reportValidity();
      return;
    }

    const name = userForm.querySelector("#nomeUsuario").value.trim();
    const profile = userForm.querySelector("#perfilUsuario").value;
    const department = userForm.querySelector("#departamentoUsuario").value;
    const status = userForm.querySelector("#statusUsuario").value;
    const tableBody = document.querySelector("#usuariosAdmin tbody");
    const row = document.createElement("tr");
    row.dataset.searchItem = "";
    row.dataset.role = profile;

    [name, profile, department].forEach((text) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      row.appendChild(cell);
    });

    const statusCell = document.createElement("td");
    const statusPill = document.createElement("span");
    statusPill.className = statusClass(status);
    statusPill.textContent = status;
    statusCell.appendChild(statusPill);
    row.appendChild(statusCell);

    const accessCell = document.createElement("td");
    accessCell.textContent = "Criado agora";
    row.appendChild(accessCell);
    tableBody?.prepend(row);

    updateKpi("users");
    addLog(`Usuário ${name} cadastrado como ${profile}.`);
    toast("Usuário adicionado ao painel administrativo.");
    userForm.reset();
  });

  const departmentForm = document.querySelector("[data-admin-department-form]");
  departmentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!departmentForm.checkValidity()) {
      departmentForm.reportValidity();
      return;
    }

    const name = departmentForm.querySelector("#departamentoNome").value.trim();
    const leader = departmentForm.querySelector("#departamentoLider").value.trim();
    const members = departmentForm.querySelector("#departamentoMembros").value;
    const role = departmentForm.querySelector("#departamentoFuncao").value.trim();
    document
      .querySelector("[data-admin-departments]")
      ?.prepend(createBoardArticle(name, `${members} membros`, `Líder: ${leader}. Responsável por ${role}.`));
    addLog(`Núcleo institucional ${name} criado.`);
    toast("Núcleo institucional adicionado.");
    departmentForm.reset();
  });

  const volunteerForm = document.querySelector("[data-admin-volunteer-form]");
  volunteerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!volunteerForm.checkValidity()) {
      volunteerForm.reportValidity();
      return;
    }

    const name = volunteerForm.querySelector("#voluntarioNome").value.trim();
    const department = volunteerForm.querySelector("#voluntarioDepartamento").value;
    const status = volunteerForm.querySelector("#voluntarioStatus").value;
    const role = volunteerForm.querySelector("#voluntarioFuncao").value.trim() || "Função a definir";
    document
      .querySelector("[data-admin-volunteers]")
      ?.prepend(createBoardArticle(status, name, `${department} • ${role}`));
    if (status === "Ativo" || status === "Aprovado") updateKpi("volunteers");
    addLog(`Voluntário ${name} registrado em ${department}.`);
    toast("Voluntário registrado no painel.");
    volunteerForm.reset();
  });

  const candidateStatusClass = (status) => {
    if (status === "Aprovada") return "badge status-pill";
    return "badge status-pill status-pill--warning";
  };

  document.querySelectorAll("[data-admin-candidate-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.dataset.adminCandidateAction;
      const card = button.closest("[data-admin-candidate-card]");
      const statusBadge = card?.querySelector("[data-admin-candidate-status]");
      const candidateName = card?.querySelector("h3")?.textContent || "Candidato";
      if (!status || !statusBadge) return;

      statusBadge.textContent = status;
      statusBadge.className = candidateStatusClass(status);
      button.closest(".admin-candidate-actions")?.querySelectorAll("button").forEach((item) => {
        item.disabled = status === "Aprovada";
      });

      if (status === "Aprovada") updateKpi("volunteers");
      addLog(`${candidateName}: candidatura atualizada para ${status}.`);
      toast(`Candidatura de ${candidateName} atualizada para ${status}.`);
    });
  });

  const contentForm = document.querySelector("[data-admin-content-form]");
  contentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contentForm.checkValidity()) {
      contentForm.reportValidity();
      return;
    }

    const title = contentForm.querySelector("#conteudoTitulo").value.trim();
    const type = contentForm.querySelector("#conteudoTipo").value;
    const status = contentForm.querySelector("#conteudoStatus").value;
    const summary = contentForm.querySelector("#conteudoResumo").value.trim();
    document
      .querySelector("[data-admin-contents]")
      ?.prepend(createBoardArticle(status, title, `${type} • ${summary}`));
    updateKpi("contents");
    addLog(`Conteúdo ${title} salvo como ${status}.`);
    toast("Conteúdo salvo na simulação administrativa.");
    contentForm.reset();
  });

  const eventForm = document.querySelector("[data-admin-event-form]");
  eventForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!eventForm.checkValidity()) {
      eventForm.reportValidity();
      return;
    }

    const title = eventForm.querySelector("#eventoTitulo").value.trim();
    const date = eventForm.querySelector("#eventoData").value;
    const hour = eventForm.querySelector("#eventoHora").value;
    const area = eventForm.querySelector("#eventoArea").value;
    const article = document.createElement("article");
    const time = document.createElement("time");
    const content = document.createElement("div");
    const heading = document.createElement("h3");
    const description = document.createElement("p");
    time.dateTime = date;
    time.textContent = formatEventDate(date);
    heading.textContent = title;
    description.textContent = `${area} • ${hour} • Local a definir`;
    content.append(heading, description);
    article.append(time, content);
    document.querySelector("[data-admin-events]")?.prepend(article);
    updateKpi("events");
    addLog(`Evento ${title} agendado para ${formatEventDate(date)}.`);
    toast("Evento adicionado à agenda.");
    eventForm.reset();
  });

  const configForm = document.querySelector("[data-admin-config-form]");
  configForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!configForm.checkValidity()) {
      configForm.reportValidity();
      return;
    }

    const name = configForm.querySelector("#instituicaoNome").value.trim();
    sessionStorage.setItem("adminInstitutionName", name);
    addLog(`Configurações institucionais de ${name} atualizadas.`);
    toast("Configurações institucionais salvas nesta sessão.");
  });

  window.addEventListener("admin:activity", (event) => {
    addLog(event.detail || "Atividade administrativa registrada.");
  });
}

function setupCandidatePortal() {
  const shell = document.querySelector(".candidate-shell");
  if (!shell) return;

  const links = Array.from(shell.querySelectorAll('.candidate-sidebar a[href^="#"]'));
  const panels = Array.from(shell.querySelectorAll(".candidate-section"));
  const panelIds = new Set(panels.map((panel) => panel.id));

  const activatePanel = (panelId) => {
    const targetId = panelIds.has(panelId) ? panelId : panels[0]?.id;
    if (!targetId) return;

    panels.forEach((panel) => {
      panel.hidden = panel.id !== targetId;
    });

    links.forEach((link) => {
      const isActive = link.hash === `#${targetId}`;
      link.classList.toggle("active", isActive);
      link.toggleAttribute("aria-current", isActive);
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const panelId = link.hash.slice(1);
      activatePanel(panelId);
      history.pushState(null, "", `#${panelId}`);
    });
  });

  window.addEventListener("hashchange", () => {
    activatePanel(location.hash.slice(1));
  });

  const statusData = {
    "Documentos pendentes": {
      className: "badge status-pill status-pill--warning",
      description: "A coordenação solicitou revisão ou envio de documentos complementares.",
      timelineTitle: "Documentos pendentes",
      timelineText: "Verifique a aba Documentos e envie os arquivos solicitados.",
    },
    "Entrevista agendada": {
      className: "badge status-pill status-pill--warning",
      description: "Sua candidatura avançou para conversa com a coordenação.",
      timelineTitle: "Entrevista agendada",
      timelineText: "Acompanhe a agenda para confirmar data, horário e formato.",
    },
    Aprovada: {
      className: "badge status-pill",
      description: "Parabéns. Sua candidatura foi aprovada para início do voluntariado.",
      timelineTitle: "Candidatura aprovada",
      timelineText: "A equipe entrará em contato para orientar a integração.",
    },
  };

  const addTimelineItem = (title, text) => {
    const timeline = document.querySelector("[data-candidate-timeline]");
    if (!timeline) return;
    const item = document.createElement("li");
    item.className = "is-active";
    const time = document.createElement("time");
    const content = document.createElement("div");
    const heading = document.createElement("h3");
    const description = document.createElement("p");
    time.textContent = "Agora";
    heading.textContent = title;
    description.textContent = text;
    content.append(heading, description);
    item.append(time, content);
    timeline.prepend(item);
  };

  shell.querySelectorAll("[data-candidate-status-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.dataset.candidateStatusAction;
      const data = statusData[status];
      const statusBadges = document.querySelectorAll(
        "[data-candidate-status], [data-candidate-status-card]",
      );
      const statusDescriptions = document.querySelectorAll(
        "[data-candidate-status-description], [data-candidate-status-card-description]",
      );
      const topbarStatus = document.querySelector("[data-candidate-status-topbar]");
      if (!data || !statusBadges.length || !statusDescriptions.length) return;

      statusBadges.forEach((badge) => {
        badge.textContent = status;
        badge.className = data.className;
      });
      statusDescriptions.forEach((description) => {
        description.textContent = data.description;
      });
      if (topbarStatus) topbarStatus.textContent = status;
      addTimelineItem(data.timelineTitle, data.timelineText);
      toast(`Status atualizado para: ${status}.`);
    });
  });

  const profileForm = document.querySelector("[data-candidate-profile-form]");
  profileForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!profileForm.checkValidity()) {
      profileForm.reportValidity();
      return;
    }

    const name = profileForm.querySelector("#candidateName").value.trim();
    document.querySelectorAll("[data-candidate-name-display]").forEach((item) => {
      item.textContent = name;
    });
    toast("Dados do candidato salvos nesta sessão.");
  });

  const updateCounter = (selector) => {
    const target = document.querySelector(selector);
    if (!target) return;
    target.textContent = String((Number(target.textContent) || 0) + 1);
  };

  const documentForm = document.querySelector("[data-candidate-doc-form]");
  documentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!documentForm.checkValidity()) {
      documentForm.reportValidity();
      return;
    }

    const name = documentForm.querySelector("#docName").value.trim();
    const list = document.querySelector("[data-candidate-docs]");
    const article = document.createElement("article");
    article.innerHTML = `<i data-lucide="file-check-2"></i><div><h3></h3><p>Enviado agora • Aguardando revisão</p></div><span class="status-pill status-pill--warning">Revisão</span>`;
    article.querySelector("h3").textContent = name;
    list?.prepend(article);
    updateCounter("[data-candidate-doc-count]");
    documentForm.reset();
    if (window.lucide) window.lucide.createIcons();
    toast("Documento enviado para revisão.");
  });

  const messageForm = document.querySelector("[data-candidate-message-form]");
  messageForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!messageForm.checkValidity()) {
      messageForm.reportValidity();
      return;
    }

    const message = messageForm.querySelector("#candidateMessage").value.trim();
    const list = document.querySelector("[data-candidate-messages]");
    const article = document.createElement("article");
    const author = document.createElement("span");
    const text = document.createElement("p");
    const time = document.createElement("time");
    author.textContent = "Você";
    text.textContent = message;
    time.textContent = "Agora";
    article.append(author, text, time);
    list?.prepend(article);
    updateCounter("[data-candidate-message-count]");
    messageForm.reset();
    toast("Mensagem enviada para a coordenação.");
  });

  activatePanel(location.hash.slice(1));
}

function setupBackToTop() {
  const button = document.createElement("button");
  button.className = "back-to-top";
  button.type = "button";
  button.setAttribute("aria-label", "Voltar ao topo");
  button.innerHTML = icon("arrow-up");
  document.body.appendChild(button);
  button.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  window.addEventListener(
    "scroll",
    () => button.classList.toggle("is-visible", scrollY > 520),
    { passive: true },
  );
}

function toast(message) {
  let region = document.querySelector(".toast");
  if (!region) {
    region = document.createElement("div");
    region.className = "toast";
    region.setAttribute("aria-live", "polite");
    document.body.appendChild(region);
  }
  const item = document.createElement("div");
  item.className = "toast-item";
  item.textContent = message;
  region.appendChild(item);
  setTimeout(() => item.remove(), 4200);
}

function setupNewsletter() {
  document.querySelectorAll("[data-newsletter]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      toast(
        "Inscrição confirmada. Em produção, este contato será salvo no CRM.",
      );
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  setupMenu();
  setupAccessSelect();
  setupLoginRedirect();
  setupReveal();
  setupFilters();
  setupForms();
  setupAdminLogin();
  setupAdminPanels();
  setupAdminSimulation();
  setupCandidatePortal();
  setupNewsletter();
  setupBackToTop();
  setupProjectCarousel();
  setupVideoPlayButtons();
  setupBookModal();
  if (window.lucide) window.lucide.createIcons();
});

function setupBookModal() {
  const modal = document.getElementById("bookModal");
  if (!modal) return;
  //array de informações

  let currentBook = null;
  //refs aos livros
  const titleEl = modal.querySelector("[data-book-title]");
  const authorEl = modal.querySelector(".detail-author");
  const coverImg = modal.querySelector(".detail-cover img");
  const descEl = modal.querySelector("[data-book-description]");
  const extraEl = modal.querySelector("[data-book-extra]");
  const testimonialBox = modal.querySelector("[data-book-testimonial]");
  const testimonialButton = modal.querySelector("[data-toggle-testimonial]");
  const fullTextEl = modal.querySelector("[data-book-fulltext]");
  const testimonialTextEl = modal.querySelector("[data-book-testimonial-text]");
  const testimonialAuthorEl = modal.querySelector(
    "[data-book-testimonial-author]",
  );
  const moreButton = modal.querySelector("[data-toggle-description]");
  const ratingValueEl = modal.querySelector(".detail-rating-value");
  const pdfModalTitleEl = document.getElementById("pdfModalTitle");

  const populateModal = (book) => {
    currentBook = book;
    pdfDoc = null; //
    currentPage = 1; //
    currentScale = 1;
    if (titleEl) titleEl.textContent = book.title;
    if (authorEl) authorEl.textContent = book.author;
    if (coverImg) {
      coverImg.src = book.cover;
      coverImg.alt = `Capa de ${book.title}`;
    }
    if (descEl) descEl.textContent = book.description;
    if (ratingValueEl) ratingValueEl.textContent = book.rating;
    if (pdfModalTitleEl) pdfModalTitleEl.textContent = book.title;
    if (extraEl) extraEl.hidden = true;
    if (testimonialBox) testimonialBox.hidden = true;
    if (moreButton) moreButton.textContent = "Ver mais";
    if (testimonialButton) testimonialButton.textContent = "Ver depoimento";
    if (fullTextEl) fullTextEl.textContent = book.fullDescription;
    if (testimonialTextEl)
      testimonialTextEl.textContent = book.testimonial.quote;
    if (testimonialAuthorEl)
      testimonialAuthorEl.textContent = book.testimonial.author;
  };

  const openButtons = Array.from(document.querySelectorAll("[data-open-book]"));
  const closeButtons = Array.from(
    modal.querySelectorAll("[data-close-pdf-modal]"),
  );
  const overlay = modal;
  const readButton = modal.querySelector("[data-read-book]");
  const previewButton = modal.querySelector("[data-preview-book]");
  const pdfModal = document.getElementById("pdfModal");
  const pdfCloseButtons = pdfModal
    ? Array.from(pdfModal.querySelectorAll("[data-close-pdf-modal]"))
    : [];
  const pdfOverlay = pdfModal;

  const openModal = () => {
    modal.removeAttribute("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  };

  const closeModal = () => {
    modal.setAttribute("hidden", "");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  };

  let pdfDoc = null;
  let currentPage = 1;
  let pageCount = 0;
  let currentScale = 1.0;
  const pdfViewer = pdfModal ? pdfModal.querySelector(".pdf-viewer") : null;
  const pageNumberLabel = pdfModal
    ? pdfModal.querySelector("[data-pdf-page-number]")
    : null;
  const pageCountLabel = pdfModal
    ? pdfModal.querySelector("[data-pdf-page-count]")
    : null;
  const prevPageButton = pdfModal
    ? pdfModal.querySelector("[data-prev-pdf-page]")
    : null;
  const nextPageButton = pdfModal
    ? pdfModal.querySelector("[data-next-pdf-page]")
    : null;
  const zoomInButton = pdfModal
    ? pdfModal.querySelector("[data-pdf-zoom-in]")
    : null;
  const zoomOutButton = pdfModal
    ? pdfModal.querySelector("[data-pdf-zoom-out]")
    : null;
  let wheelScrollTimeout = 0;
  let touchStartY = null;
  let renderToken = 0;

  const isSinglePageView = () =>
    window.matchMedia("(max-width: 768px)").matches || currentScale > 1.2;

  const getSpreadPages = (pageNum) => {
    if (isSinglePageView() || pageNum <= 1) return [pageNum];
    const firstPage = pageNum % 2 === 0 ? pageNum : pageNum - 1;
    const pages = [firstPage];
    if (firstPage + 1 <= pageCount) pages.push(firstPage + 1);
    return pages;
  };

  const updatePageLabel = (pages) => {
    if (!pageNumberLabel) return;
    pageNumberLabel.textContent =
      pages.length > 1 ? `${pages[0]}-${pages[pages.length - 1]}` : pages[0];
  };

  const turnSpread = (direction) => {
    if (!pdfDoc || !pageCount) return;
    const pages = getSpreadPages(currentPage);
    if (direction > 0 && pages[pages.length - 1] >= pageCount) return;
    if (direction < 0 && pages[0] <= 1) return;
    const nextPage =
      direction > 0
        ? Math.min(pages[pages.length - 1] + 1, pageCount)
        : Math.max(pages[0] - 2, 1);
    if (nextPage === currentPage) return;
    currentPage = nextPage;
    renderPage(currentPage);
    if (pdfViewer) {
      pdfViewer.scrollLeft = 0;
      pdfViewer.scrollTop = 0;
    }
  };

  const renderPage = (pageNum) => {
    if (!pdfViewer || !pdfDoc) return;
    const pages = getSpreadPages(pageNum);
    const activeRender = ++renderToken;
    Promise.all(pages.map((page) => pdfDoc.getPage(page))).then((pdfPages) => {
      if (activeRender !== renderToken) return;
      const containerWidth = pdfViewer.clientWidth - 40;
      const containerHeight = pdfViewer.clientHeight - 40;
      const page = pdfPages[0];
      const viewport = page.getViewport({ scale: 1 });
      const scaleX = containerWidth / (viewport.width * pdfPages.length);
      const scaleY = containerHeight / viewport.height;
      const fitScale = Math.min(scaleX, scaleY);
      const scale = fitScale * currentScale;
      const spread = document.createElement("div");
      spread.className = `pdf-book-spread pdf-book-spread--${pdfPages.length}`;

      pdfViewer.innerHTML = "";
      pdfViewer.appendChild(spread);
      updatePageLabel(pages);

      pdfPages.forEach((page, index) => {
        const adjustedViewport = page.getViewport({ scale });
        const pageShell = document.createElement("div");
        pageShell.className = `pdf-book-page ${index === 0 ? "is-left" : "is-right"}`;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = adjustedViewport.height;
        canvas.width = adjustedViewport.width;
        canvas.style.width = adjustedViewport.width + "px";
        canvas.style.height = adjustedViewport.height + "px";
        pageShell.appendChild(canvas);
        spread.appendChild(pageShell);
        page.render({
          canvasContext: context,
          viewport: adjustedViewport,
        });
      });
    });
  };

  const loadPdf = () => {
    if (!pdfModal || !pdfViewer || !currentBook) return;
    const pdfUrl = currentBook.pdf;
    if (!pdfUrl) {
      pdfViewer.innerHTML =
        '<div class="pdf-error">PDF não disponível para este livro.</div>';
      return;
    }
    if (pdfDoc) {
      currentScale = 1;
      renderPage(currentPage);
      return;
    }
    if (!window.pdfjsLib) {
      console.error(
        "PDF.js não encontrado. Verifique se o script pdf.min.js foi carregado.",
      );
      pdfViewer.innerHTML =
        '<div class="pdf-error">Leitor indisponível. O visualizador de PDF não foi carregado.</div>';
      return;
    }
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";
    window.pdfjsLib
      .getDocument(pdfUrl)
      .promise.then((doc) => {
        pdfDoc = doc;
        pageCount = doc.numPages;
        if (pageCountLabel) pageCountLabel.textContent = pageCount;
        currentPage = 1;
        renderPage(currentPage);
      })
      .catch((error) => {
        console.error("PDF.js erro ao carregar:", error);
        pdfViewer.innerHTML =
          '<div class="pdf-error">Não foi possível carregar o PDF. Verifique o caminho ou o arquivo.</div>';
      });
  };

  const openPdfModal = () => {
    if (!pdfModal) return;
    pdfModal.removeAttribute("hidden");
    pdfModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    loadPdf();
  };

  const closePdfModal = () => {
    if (!pdfModal) return;
    pdfModal.setAttribute("hidden", "");
    pdfModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (pdfViewer) pdfViewer.innerHTML = "";
    pdfDoc = null;
  };
  const updateZoomState = () => {
    if (!pdfViewer) return;
    pdfViewer.classList.toggle("is-zoomed", currentScale > 1);
  };

  if (zoomInButton) {
    zoomInButton.addEventListener("click", () => {
      currentScale = Math.min(currentScale + 0.2, 3);
      updateZoomState();
      renderPage(currentPage);
    });
  }

  if (zoomOutButton) {
    zoomOutButton.addEventListener("click", () => {
      currentScale = Math.max(currentScale - 0.2, 0.5);
      updateZoomState();
      renderPage(currentPage);
    });
  }
  openButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const bookId = button.dataset.openBook;
      const book = booksData[bookId];
      if (!book) {
        console.warn("Livro não encontrado para o id:", bookId);
        return;
      }
      populateModal(book);
      openModal();
    });
  });

  closeButtons.forEach((button) =>
    button.addEventListener("click", closeModal),
  );
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  if (pdfModal) {
    pdfCloseButtons.forEach((button) =>
      button.addEventListener("click", closePdfModal),
    );
    pdfOverlay.addEventListener("click", (event) => {
      if (event.target === pdfOverlay) closePdfModal();
    });
  }
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modal.getAttribute("aria-hidden") === "false") closeModal();
      if (pdfModal && pdfModal.getAttribute("aria-hidden") === "false")
        closePdfModal();
    }
  });

  if (previewButton && pdfModal) {
    previewButton.addEventListener("click", () => {
      closeModal();
      openPdfModal();
    });
  }
  if (moreButton && extraEl) {
    moreButton.addEventListener("click", () => {
      const isHidden = extraEl.hidden;
      extraEl.hidden = !isHidden;
      moreButton.textContent = isHidden ? "Ver menos" : "Ver mais";
    });
  }
  if (testimonialButton && testimonialBox) {
    testimonialButton.addEventListener("click", () => {
      const isHidden = testimonialBox.hidden;
      testimonialBox.hidden = !isHidden;

      testimonialButton.textContent = isHidden
        ? "Ocultar depoimento"
        : "Ver depoimento";
    });
  }
  if (readButton && pdfModal) {
    readButton.addEventListener("click", () => {
      closeModal();
      openPdfModal();
    });
  }

  if (prevPageButton) {
    prevPageButton.addEventListener("click", () => {
      turnSpread(-1);
    });
  }
  if (nextPageButton) {
    nextPageButton.addEventListener("click", () => {
      turnSpread(1);
    });
  }
  if (pdfViewer) {
    pdfViewer.addEventListener(
      "wheel",
      (event) => {
        if (currentScale > 1) return;
        event.preventDefault();
        clearTimeout(wheelScrollTimeout);
        wheelScrollTimeout = window.setTimeout(() => {
          if (event.deltaY > 0) turnSpread(1);
          if (event.deltaY < 0) turnSpread(-1);
        }, 50);
      },
      { passive: false },
    );

    pdfViewer.addEventListener("touchstart", (event) => {
      if (currentScale > 1) return;
      touchStartY = event.touches[0]?.clientY ?? null;
    });

    pdfViewer.addEventListener("touchend", (event) => {
      const touchEndY = event.changedTouches[0]?.clientY ?? null;
      if (touchStartY === null || touchEndY === null) return;
      const delta = touchStartY - touchEndY;
      if (Math.abs(delta) < 40) return;
      if (delta > 0) turnSpread(1);
      if (delta < 0) turnSpread(-1);
      touchStartY = null;
    });
  }
}

function setupProjectCarousel() {
  const carousel = document.querySelector("[data-carousel]");
  if (!carousel) return;
  const track = carousel.querySelector(".project-carousel__track");
  const dotsContainer = carousel.querySelector(".project-carousel__dots");
  const cards = Array.from(track.children);
  let isDragging = false;
  let startX = 0;
  let startTrackX = 0;
  let trackX = 0;
  let maxScroll = track.scrollWidth - carousel.clientWidth;
  let cardWidth =
    cards[0]?.getBoundingClientRect().width || carousel.clientWidth;
  let activeIndex = 0;

  const updatePosition = (x) => {
    trackX = Math.max(0, Math.min(x, maxScroll));
    track.style.transform = `translateX(${-trackX}px)`;
  };

  const snapToCard = (index) => {
    activeIndex = Math.max(0, Math.min(index, cards.length - 1));
    const targetX =
      cards[activeIndex].offsetLeft -
      (carousel.clientWidth - cards[activeIndex].clientWidth) / 2;
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
    dotsContainer.innerHTML = "";
    cards.forEach((_, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "project-carousel__dot";
      button.addEventListener("click", () => snapToCard(index));
      dotsContainer.appendChild(button);
    });
    highlightDot(activeIndex);
  };

  const highlightDot = (index) => {
    if (!dotsContainer) return;
    dotsContainer
      .querySelectorAll(".project-carousel__dot")
      .forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === index);
      });
  };

  createDots();

  carousel.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startTrackX = trackX;
    carousel.setPointerCapture(event.pointerId);
    carousel.classList.add("is-dragging");
  });

  carousel.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const delta = startX - event.clientX;
    updatePosition(startTrackX + delta);
  });

  const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    carousel.classList.remove("is-dragging");
    const index = Math.round(trackX / cardWidth);
    snapToCard(index);
  };

  carousel.addEventListener("pointerup", stopDrag);
  carousel.addEventListener("pointercancel", stopDrag);
  carousel.addEventListener("pointerleave", stopDrag);

  window.addEventListener("resize", refreshDimensions);
  const resizeObserver = new ResizeObserver(refreshDimensions);
  resizeObserver.observe(carousel);
  resizeObserver.observe(track);
}

function setupVideoPlayButtons() {
  document
    .querySelectorAll(".feature-panel--video .media-card")
    .forEach((card) => {
      const video = card.querySelector("video");
      if (!video) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "video-play-overlay";
      button.setAttribute("aria-label", "Tocar vídeo");
      card.appendChild(button);

      const updateOverlay = () => {
        button.classList.toggle("hidden", !video.paused && !video.ended);
      };

      button.addEventListener("click", () => {
        if (video.paused || video.ended) {
          video.play();
        } else {
          video.pause();
        }
      });

      video.addEventListener("play", updateOverlay);
      video.addEventListener("pause", updateOverlay);
      video.addEventListener("ended", updateOverlay);
      updateOverlay();
    });
}
