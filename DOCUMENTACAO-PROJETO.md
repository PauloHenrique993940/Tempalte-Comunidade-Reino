# Documentacao do Projeto - Comunidade do Reino

Data: 2026-07-16
Projeto: Portal institucional, area administrativa e plataforma digital da Comunidade do Reino
Responsavel: Equipe Comunidade do Reino - Projetos Editoriais e Voluntariado

## 1. Apresentacao

Este documento registra a visao geral do projeto, como ele funciona no estado atual, quais requisitos precisam ser definidos antes da proxima etapa de desenvolvimento e qual e a visao de longo prazo para a plataforma digital da Comunidade do Reino.

O objetivo e criar uma base clara para orientar desenvolvimento, validacao com a equipe, priorizacao de funcionalidades, protecao de dados e evolucao tecnica do site.

## 2. Contexto do projeto

A Comunidade do Reino precisa de um ambiente digital que reuna comunicacao institucional, projetos, voluntariado, biblioteca digital, podcasts, formularios, area restrita e gestao administrativa.

No momento, o projeto possui um portal institucional estatico com paginas publicas e uma primeira versao visual da area administrativa. Essa estrutura permite validar navegacao, conteudo, identidade visual e modulos planejados, mas ainda nao representa um sistema completo com banco de dados, autenticacao real ou armazenamento permanente de informacoes.

## 3. Como o projeto funciona atualmente

### 3.1 Portal publico

O portal publico apresenta a Comunidade do Reino e organiza os principais caminhos de navegacao:

- Inicio;
- Quem Somos;
- Projetos;
- Biblioteca;
- Podcasts;
- Voluntariado;
- Contato;
- FAQ;
- Politica de Privacidade;
- Termos de Uso.

As paginas sao arquivos HTML estaticos, com estilos centralizados em `assets/css/styles.css` e funcionalidades compartilhadas em `assets/js/app.js`.

### 3.2 Componentes compartilhados

O cabecalho e o rodape sao renderizados por JavaScript nos marcadores:

```html
<div data-component="header"></div>
<div data-component="footer"></div>
```

Essa abordagem reduz repeticao entre paginas e prepara o projeto para futura migracao para templates server-side, gerador estatico ou framework.

### 3.3 Biblioteca digital

A biblioteca ja possui estrutura para exibir livros, categorias, busca, filtros, capas e leitor de PDF. No estado atual, parte dos materiais ainda depende de arquivos reais, revisao de nomes, organizacao de PDFs e definicao de regras de disponibilizacao.

### 3.4 Formularios

Existem formularios para contato, voluntariado, cadastro, login e outros fluxos demonstrativos. Atualmente, eles podem exibir mensagens de confirmacao ou simular interacoes, mas ainda nao salvam dados em banco, nao enviam informacoes para uma API e nao possuem fluxo administrativo real de resposta.

### 3.5 Area administrativa

A area administrativa atual e um MVP visual/demonstrativo. Ela apresenta modulos planejados, dashboard, usuarios, voluntarios, departamentos, conteudos, agenda, configuracoes, seguranca, logs e LGPD.

Ainda falta implementar:

- Login real;
- Banco de dados;
- API/backend;
- Permissoes por perfil;
- Persistencia de formularios;
- Logs reais;
- Backup;
- Regras completas de seguranca e LGPD.

## 4. Objetivo geral

Construir uma plataforma digital institucional e administrativa que apoie a comunicacao, a organizacao de projetos, a gestao de voluntarios, a distribuicao de conteudos e o relacionamento com a comunidade, com seguranca, clareza e conformidade com a LGPD.

## 5. Objetivos especificos

- Divulgar a identidade, missao, visao, valores e projetos da Comunidade do Reino.
- Facilitar inscricoes, contatos, pesquisas, questionarios e participacao em projetos.
- Organizar biblioteca digital com e-books, apostilas, manuais, certificados e materiais institucionais.
- Criar area restrita para voluntarios, lideres e administradores.
- Permitir gestao administrativa de usuarios, departamentos, voluntarios, eventos, conteudos e relatorios.
- Proteger dados pessoais coletados, respeitando a LGPD.
- Preparar o projeto para crescimento tecnico e institucional nos proximos anos.

## 6. Levantamento inicial de requisitos funcionais

### 6.1 Dados dos usuarios

O sistema devera coletar apenas os dados necessarios para cada finalidade. A coleta deve ser proporcional ao servico solicitado e acompanhada de informacao clara sobre uso, armazenamento e acesso aos dados.

Exemplos de dados que poderao ser coletados conforme o formulario:

- Nome completo;
- E-mail;
- Telefone;
- Cidade e estado;
- Area de interesse;
- Disponibilidade de horario;
- Experiencia previa;
- Historico de participacao;
- Respostas de questionarios;
- Arquivos enviados quando necessario.

A lista final de campos devera ser validada com a equipe antes do desenvolvimento do backend.

### 6.2 Formularios e questionarios

O projeto podera conter diferentes formularios, cada um com finalidade especifica:

- Cadastro de voluntarios;
- Inscricoes em treinamentos;
- Contato institucional;
- Pesquisas e questionarios;
- Inscricao em projetos;
- Cadastro de usuarios;
- Atualizacao de perfil;
- Solicitacao de certificado ou declaracao;
- Outros formularios definidos durante o projeto.

Cada formulario devera indicar:

- Finalidade da coleta;
- Campos obrigatorios e opcionais;
- Quem podera acessar as respostas;
- Prazo estimado de retorno;
- Forma de armazenamento;
- Politica de exclusao ou correcao dos dados.

### 6.3 Arquivos PDF e biblioteca digital

O site podera disponibilizar documentos como:

- E-books;
- Apostilas;
- Manuais;
- Materiais institucionais;
- Certificados;
- Declaracoes;
- Guias de treinamento;
- Outros documentos de interesse da comunidade.

Os arquivos deverao ser organizados por categoria, titulo, autor/responsavel, data, versao, descricao e permissao de acesso.

### 6.4 Upload e tamanho de arquivos

O limite de tamanho dos arquivos ainda precisa ser definido em conjunto com a equipe. Essa decisao deve considerar:

- Desempenho do site;
- Custo de armazenamento;
- Velocidade de internet dos usuarios;
- Tipo de arquivo permitido;
- Necessidade de compressao;
- Politicas de seguranca;
- Experiencia do usuario em celulares.

Recomendacao inicial: definir limites diferentes para imagens, PDFs, videos e documentos administrativos.

### 6.5 Geracao automatica de documentos

Sera necessario avaliar quais documentos serao enviados prontos e quais poderao ser gerados automaticamente pelo sistema.

Possiveis documentos automatizados:

- Certificados de participacao;
- Declaracoes;
- Comprovantes de inscricao;
- Relatorios administrativos;
- Listas de presenca;
- Historico de voluntariado.

Para certificados e declaracoes, deverao ser definidos modelo visual, regras de emissao, dados obrigatorios, assinatura/responsavel e forma de validacao.

## 7. Perfis de acesso previstos

O sistema devera trabalhar com niveis de permissao. A definicao final sera feita durante a etapa de requisitos, mas a estrutura inicial prevista e:

| Perfil | Acesso previsto |
| --- | --- |
| Administrador geral | Acesso completo ao sistema, configuracoes, usuarios, permissoes, relatorios e logs. |
| Coordenador | Gestao de projetos, equipes, eventos, formularios e acompanhamento de voluntarios. |
| Lider de departamento | Acesso aos dados e atividades do departamento sob sua responsabilidade. |
| Voluntario | Area restrita com perfil, inscricoes, atividades, treinamentos e certificados. |
| Usuario da comunidade | Acesso publico, formularios, biblioteca aberta e conteudos institucionais. |

Cada permissao devera ser documentada antes da implementacao para evitar exposicao indevida de informacoes.

## 8. Requisitos funcionais prioritarios

Para a primeira versao real do sistema, recomenda-se priorizar:

1. Autenticacao real para administradores e voluntarios.
2. Cadastro e gestao de usuarios.
3. Perfis de acesso e permissoes.
4. Cadastro de voluntarios com persistencia de dados.
5. Area administrativa com listagem, busca e edicao de registros.
6. Formularios conectados a backend ou servico de envio confiavel.
7. Biblioteca digital com PDFs reais e categorias.
8. Controle de arquivos permitidos e limites de upload.
9. Politica de privacidade e consentimento LGPD nos formularios.
10. Logs administrativos basicos.

## 9. Requisitos nao funcionais

### 9.1 Seguranca

- Usar autenticacao segura;
- Armazenar senhas com criptografia adequada;
- Aplicar controle de permissao por perfil;
- Registrar acoes administrativas relevantes;
- Proteger rotas privadas;
- Validar uploads;
- Evitar exposicao publica de dados sensiveis;
- Manter backups periodicos.

### 9.2 LGPD

- Coletar apenas dados necessarios;
- Informar finalidade da coleta;
- Solicitar consentimento quando aplicavel;
- Permitir correcao ou exclusao de dados quando cabivel;
- Restringir acesso aos dados conforme funcao;
- Manter registro de operacoes importantes;
- Definir tempo de retencao das informacoes.

### 9.3 Performance

- Otimizar imagens, PDFs e videos;
- Usar carregamento sob demanda quando possivel;
- Evitar arquivos desnecessariamente grandes;
- Reduzir recursos quebrados;
- Buscar boa pontuacao em Core Web Vitals e Lighthouse.

### 9.4 Acessibilidade

- Manter navegacao por teclado;
- Usar textos alternativos em imagens;
- Garantir contraste adequado;
- Usar estrutura semantica correta;
- Nomear botoes e controles interativos;
- Seguir boas praticas WCAG sempre que possivel.

### 9.5 Manutenibilidade

- Separar responsabilidades entre HTML, CSS, JS, dados e backend;
- Evitar duplicacao de codigo;
- Documentar padroes de componentes;
- Criar rotina de validacao antes da publicacao;
- Evoluir para arquitetura modular.

## 10. Escopo sugerido para o MVP real

O MVP real deve conter o minimo necessario para transformar o prototipo atual em um sistema utilizavel com seguranca.

### Dentro do MVP

- Portal institucional revisado;
- Formularios principais funcionando;
- Login real;
- Cadastro de usuarios e voluntarios;
- Area administrativa com permissoes basicas;
- Biblioteca digital inicial;
- Politica LGPD aplicada nos formularios;
- Painel simples de acompanhamento;
- Backup e logs basicos.

### Fora do MVP inicial

- Aplicativo mobile;
- Automacoes complexas;
- Emissao avancada de certificados;
- Integracoes externas multiplas;
- Cursos completos com trilhas, provas e notas;
- Relatorios analiticos avancados;
- Sistema financeiro ou doacoes, salvo decisao posterior.

## 11. Roadmap de evolucao

### Fase 1 - Organizacao e requisitos

- Validar este documento com a equipe;
- Definir todos os formularios;
- Definir dados coletados por finalidade;
- Definir perfis e permissoes;
- Definir tipos e limites de arquivos;
- Definir documentos gerados automaticamente;
- Definir tecnologia de backend e banco de dados.

### Fase 2 - MVP funcional

- Implementar autenticacao;
- Criar banco de dados;
- Conectar formularios;
- Criar painel administrativo real;
- Implementar cadastro de voluntarios;
- Implementar biblioteca digital inicial;
- Criar logs administrativos basicos.

### Fase 3 - Conteudo, automacao e relatorios

- Gerenciar eventos e treinamentos;
- Gerar certificados e declaracoes;
- Criar relatorios de participacao;
- Melhorar area do voluntario;
- Ampliar biblioteca;
- Criar dashboard com indicadores reais.

### Fase 4 - Escala e integracoes

- Integrar com ferramentas externas quando necessario;
- Criar trilhas de capacitacao;
- Melhorar comunicacao segmentada;
- Avaliar aplicativo mobile;
- Implantar automacoes administrativas;
- Criar indicadores de impacto institucional.

## 12. Visao de longo prazo

A visao de longo prazo e transformar o site em uma plataforma integrada de comunicacao, cuidado, formacao, voluntariado e gestao comunitaria.

Nos proximos anos, a plataforma podera se tornar o principal ambiente digital da Comunidade do Reino, conectando pessoas, projetos, conteudos e liderancas em um unico ecossistema.

Funcionalidades desejadas para o futuro:

- Area completa de voluntarios;
- Area exclusiva para lideres;
- Area administrativa robusta;
- Biblioteca digital ampliada;
- Cursos e treinamentos online;
- Emissao automatica de certificados;
- Gestao de eventos e presencas;
- Historico de participacao dos voluntarios;
- Comunicacao segmentada por projeto, departamento ou perfil;
- Relatorios de impacto social e institucional;
- Integracao com e-mail, WhatsApp, CRM ou outras ferramentas;
- Aplicativo mobile;
- Painel publico com indicadores de impacto.

Essa evolucao deve ocorrer por fases, sempre preservando seguranca, clareza, boa experiencia do usuario e responsabilidade no uso de dados pessoais.

## 13. Questoes em aberto para definicao com a equipe

- Quais dados serao coletados em cada formulario?
- Quais formularios existirao na primeira versao?
- Quem podera acessar cada tipo de informacao?
- Quais arquivos poderao ser enviados por usuarios?
- Quais arquivos serao disponibilizados para download ou leitura online?
- Qual sera o limite de tamanho para PDFs, imagens e videos?
- Havera geracao automatica de certificados?
- Os certificados precisarao de codigo de validacao?
- Havera biblioteca digital publica e privada?
- Havera area restrita para voluntarios, lideres e administradores?
- Qual sera a tecnologia escolhida para backend e banco de dados?
- Qual sera o processo de backup e recuperacao?
- Quem sera responsavel pela revisao LGPD?
- Quais funcionalidades sao obrigatorias para publicar a primeira versao real?

## 14. Recomendacao tecnica inicial

Antes de iniciar o desenvolvimento do backend, recomenda-se aprovar um documento de requisitos funcionais e nao funcionais com as respostas das questoes em aberto.

Depois da aprovacao, o projeto pode seguir por uma arquitetura incremental. Opcoes tecnicas possiveis ja mapeadas incluem Supabase, Firebase ou Node.js com banco de dados relacional. A escolha deve considerar custo, facilidade de manutencao, seguranca, escalabilidade e conhecimento da equipe.

## 15. Proxima etapa recomendada

A proxima etapa e transformar este documento em um levantamento validado com a equipe, contendo:

- Lista final de formularios;
- Campos de cada formulario;
- Regras de acesso;
- Regras de LGPD;
- Tipos e limites de arquivos;
- Fluxos administrativos;
- Escopo fechado do MVP;
- Cronograma por fase;
- Responsaveis por decisao, conteudo, revisao e desenvolvimento.

Com esse levantamento aprovado, a equipe podera desenvolver com mais clareza, reduzir retrabalho e construir uma plataforma preparada para crescer junto com a Comunidade do Reino.
