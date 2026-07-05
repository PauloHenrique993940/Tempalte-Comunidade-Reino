# Componentes compartilhados

Os componentes visuais reutilizáveis da plataforma são renderizados por `assets/js/app.js` nos marcadores:

- `<div data-component="header"></div>`
- `<div data-component="footer"></div>`

Isso mantém Header, Navbar, Footer, menu mobile, dark mode e links consistentes em todas as páginas estáticas, com estrutura pronta para migrar para templates server-side ou framework futuramente.
