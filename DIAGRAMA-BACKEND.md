# Diagrama do Backend - Comunidade do Reino

Data: 2026-07-16
Status: Proposta de arquitetura futura
Projeto: Portal institucional, area administrativa e plataforma digital da Comunidade do Reino

## 1. Objetivo

Este documento mostra, em formato de diagrama, como o backend podera funcionar quando o projeto deixar de ser apenas um site estatico/MVP demonstrativo e passar a ter autenticacao real, banco de dados, permissoes, formularios conectados, biblioteca digital e area administrativa funcional.

Tambem foi criado um diagrama visual geral em formato Draw.io: `DIAGRAMA-SISTEMA-GERAL.drawio`. Esse arquivo serve para abrir no diagrams.net/Draw.io e visualizar o funcionamento completo do sistema em blocos.

## 2. Visao geral da arquitetura

```mermaid
flowchart TB
  usuario[Usuario publico]
  voluntario[Voluntario]
  lider[Lider ou coordenador]
  admin[Administrador]

  site[Site publico HTML CSS JS]
  areaVoluntario[Area do voluntario]
  painelAdmin[Painel administrativo]

  api[Backend API]
  auth[Autenticacao e sessoes]
  regras[Regras de permissao]
  banco[(Banco de dados)]
  storage[(Storage de arquivos PDF imagens certificados)]
  email[Servico de e-mail ou notificacoes]
  logs[(Logs e auditoria)]

  usuario --> site
  voluntario --> areaVoluntario
  lider --> painelAdmin
  admin --> painelAdmin

  site --> api
  areaVoluntario --> api
  painelAdmin --> api

  api --> auth
  api --> regras
  api --> banco
  api --> storage
  api --> email
  api --> logs

  auth --> banco
  regras --> banco
```

## 3. Como cada area se conecta ao backend

```mermaid
flowchart LR
  formularios[Formularios publicos]
  biblioteca[Biblioteca digital]
  login[Login e cadastro]
  voluntariado[Inscricao de voluntarios]
  admin[Gestao administrativa]

  api[API do backend]

  usuarios[(Usuarios)]
  perfis[(Perfis e permissoes)]
  voluntarios[(Voluntarios)]
  respostas[(Respostas de formularios)]
  arquivos[(Arquivos e documentos)]
  eventos[(Eventos e treinamentos)]
  certificados[(Certificados e declaracoes)]

  formularios --> api --> respostas
  biblioteca --> api --> arquivos
  login --> api --> usuarios
  api --> perfis
  voluntariado --> api --> voluntarios
  admin --> api
  api --> eventos
  api --> certificados
```

## 4. Fluxo de cadastro de voluntario

```mermaid
sequenceDiagram
  actor Usuario
  participant Site as Site publico
  participant API as Backend API
  participant DB as Banco de dados
  participant Admin as Painel administrativo
  participant Email as Notificacoes

  Usuario->>Site: Preenche formulario de voluntariado
  Site->>API: Envia dados do formulario
  API->>API: Valida campos obrigatorios e consentimento LGPD
  API->>DB: Salva candidatura com status Em analise
  API->>Email: Envia confirmacao para o usuario
  API->>Admin: Disponibiliza candidatura no painel
  Admin->>API: Analisa, aprova ou solicita informacoes
  API->>DB: Atualiza status do voluntario
  API->>Email: Notifica o usuario sobre a decisao
```

## 5. Fluxo de login e permissao

```mermaid
sequenceDiagram
  actor Usuario
  participant Front as Login ou painel
  participant API as Backend API
  participant Auth as Autenticacao
  participant DB as Banco de dados

  Usuario->>Front: Informa e-mail e senha
  Front->>API: Solicita login
  API->>Auth: Valida credenciais
  Auth->>DB: Consulta usuario, senha criptografada e perfil
  DB-->>Auth: Retorna dados validos ou erro
  Auth-->>API: Gera sessao/token
  API-->>Front: Retorna acesso e permissoes
  Front->>Front: Exibe apenas os modulos permitidos
```

## 6. Modelo inicial de dados

```mermaid
erDiagram
  USUARIOS ||--o{ FORMULARIOS_RESPOSTAS : envia
  USUARIOS ||--o{ VOLUNTARIOS : pode_ser
  PERFIS ||--o{ USUARIOS : define
  DEPARTAMENTOS ||--o{ VOLUNTARIOS : organiza
  DEPARTAMENTOS ||--o{ EVENTOS : promove
  BIBLIOTECA_DOCUMENTOS ||--o{ ARQUIVOS : possui
  USUARIOS ||--o{ CERTIFICADOS : recebe
  USUARIOS ||--o{ LOGS_AUDITORIA : gera

  USUARIOS {
    int id
    string nome
    string email
    string telefone
    string senha_hash
    int perfil_id
    string status
    datetime criado_em
  }

  PERFIS {
    int id
    string nome
    string descricao
  }

  VOLUNTARIOS {
    int id
    int usuario_id
    int departamento_id
    string area_interesse
    string disponibilidade
    string status
    datetime criado_em
  }

  DEPARTAMENTOS {
    int id
    string nome
    string lider_responsavel
    string descricao
  }

  FORMULARIOS_RESPOSTAS {
    int id
    int usuario_id
    string tipo_formulario
    string dados_json
    string consentimento_lgpd
    datetime enviado_em
  }

  BIBLIOTECA_DOCUMENTOS {
    int id
    string titulo
    string categoria
    string autor
    string acesso
    datetime publicado_em
  }

  ARQUIVOS {
    int id
    string nome
    string tipo
    string caminho_storage
    int tamanho_bytes
    datetime criado_em
  }

  EVENTOS {
    int id
    string titulo
    datetime data_evento
    string local
    int departamento_id
  }

  CERTIFICADOS {
    int id
    int usuario_id
    string titulo
    string codigo_validacao
    datetime emitido_em
  }

  LOGS_AUDITORIA {
    int id
    int usuario_id
    string acao
    string modulo
    datetime criado_em
  }
```

## 7. Modulos principais do backend

| Modulo | Funcao |
| --- | --- |
| Autenticacao | Login, logout, recuperacao de senha, sessoes e tokens. |
| Usuarios | Cadastro, edicao, status e dados de acesso. |
| Perfis e permissoes | Controle do que cada perfil pode visualizar, criar, editar ou excluir. |
| Voluntarios | Inscricoes, analise, aprovacao, acompanhamento e historico. |
| Formularios | Recebimento, validacao e consulta das respostas enviadas. |
| Biblioteca | Cadastro de materiais, categorias, PDFs, capas e regras de acesso. |
| Arquivos | Upload, armazenamento, validacao de tamanho e tipo de arquivo. |
| Agenda | Eventos, treinamentos, reunioes e presencas. |
| Certificados | Geracao futura de certificados e declaracoes. |
| Logs e auditoria | Registro de acessos e acoes administrativas importantes. |

## 8. Regras importantes

- O site publico continuara exibindo conteudo institucional.
- Formularios publicos deverao enviar dados para a API.
- A area administrativa so devera abrir para usuarios autenticados.
- Cada perfil devera acessar apenas os dados autorizados.
- Arquivos enviados deverao passar por validacao de tipo e tamanho.
- Dados pessoais deverao seguir regras de LGPD.
- Acoes administrativas importantes deverao gerar logs.
- Certificados e declaracoes poderao ser gerados automaticamente em uma fase futura.

## 9. Tecnologias possiveis

O backend ainda precisa ser definido. Opcoes viaveis para a proxima etapa:

- Supabase: banco PostgreSQL, autenticacao, storage e API integrada.
- Firebase: autenticacao, banco NoSQL, storage e funcoes serverless.
- Node.js com banco relacional: API propria com maior controle tecnico.

Para o MVP, Supabase pode ser uma boa opcao por reunir autenticacao, banco, storage e regras de acesso em uma plataforma unica.

## 10. Resumo do funcionamento futuro

O usuario acessa o site, preenche formularios ou entra na area restrita. O frontend envia as informacoes para a API. A API valida os dados, verifica permissoes, grava no banco, salva arquivos no storage quando necessario, registra logs e retorna respostas para o site ou painel administrativo.

Assim, o projeto evolui de um site estatico demonstrativo para uma plataforma real, com dados persistentes, seguranca, controle de acesso e possibilidade de crescimento por modulos.
