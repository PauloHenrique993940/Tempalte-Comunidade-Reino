# Auditoria Visual e Direção Fotográfica

## Escopo e diagnóstico

### Leitura institucional

A Comunidade do Reino se apresenta como uma rede cristã de formação, serviço, publicação de histórias e impacto social. O público combina pessoas que buscam pertencimento e desenvolvimento, voluntários, autores, parceiros e famílias atendidas. A fotografia deve provar a ação descrita no texto: gente real aprendendo, sendo ouvida, criando, servindo e celebrando resultados. Não deve parecer banco de imagens corporativo nem comunicação religiosa performática.

**Posicionamento visual:** uma organização contemporânea, organizada e humana, que une fé, educação e cuidado comunitário. A referência é a clareza editorial de Notion e Stripe, a hospitalidade de Airbnb e a presença humana/documental de Hillsong, Elevation e Life.Church, sem copiar seus códigos visuais.

### Experiência, hierarquia e identidade atuais

| Aspecto | O que funciona | Risco atual | Direção recomendada |
|---|---|---|---|
| Navegação | Caminhos públicos claros para projetos, biblioteca, podcasts, voluntariado e contato. | A jornada começa abstrata, sem prova visual de pessoas e impacto. | Usar a Home para mostrar acolhimento, ação, formação e resultado em sequência. |
| Hierarquia | Tipografia forte, CTAs visíveis e sistema de cards consistente. | Muitos cards e sombras tornam a navegação repetitiva; fotos parecem ilustrações intercambiáveis. | Alternar blocos editoriais de imagem ampla, retrato, evidência documental e números de impacto. |
| Identidade | Azul-marinho, dourado e fundos claros transmitem sobriedade e esperança. | Fotos externas do Unsplash e imagens sem padrão rompem autoria e confiança. | Criar acervo próprio com correção tonal única e substituir todas as fotos externas. |
| Confiança | Missão, valores, canais e projetos estão explicitados. | Várias páginas são demonstrativas, há heróis sem imagem e galerias com textos como "Capa" e "Mentoria". | Mostrar equipe, bastidores, autores, ambientes e resultados verificáveis; não ilustrar funcionalidades simuladas como se fossem entregues. |
| Acessibilidade/SEO | Há ALT em grande parte das imagens e metadados básicos. | Alguns ALTs são genéricos e imagens-chave não têm OG image própria. | ALT descritivo e contextual; criar OG 1200x630 para Home, projetos, biblioteca e podcast. |

### Propósito por página e necessidade visual

| Página | Propósito | Prioridade UX/visual |
|---|---|---|
| `index.html` | Converter descoberta em participação, apoio ou navegação por áreas. | Hero e prova social autorais; é a principal porta de confiança. |
| `quem-somos.html` | Explicar origem, cultura, lideranças e valores. | História, fundador/equipe e linha do tempo precisam de evidência humana. |
| `projetos.html` | Apresentar publicações e direcionar participação. | Diferenciar livros de projetos sociais e mostrar pessoas, não apenas capas. |
| `projeto-mulheres-que-transformam.html` | Convidar mulheres/autoras para mentoria e publicação. | Galeria hoje vazia; requer retratos e processo editorial. |
| `projeto-escola-de-talentos.html` | Explicar formação prática e adesão de voluntários. | Galeria hoje vazia; precisa mostrar ensino e entrega prática. |
| `projeto-cuidado-em-movimento.html` | Demonstrar cuidado comunitário e mobilizar apoio. | Galeria hoje vazia; requer registro ético de atendimento e ações. |
| `biblioteca.html` | Descobrir e acessar publicações. | Capas são o produto; falta hero contextual e thumbnails informativas. |
| `podcasts.html` | Ouvir e conhecer entrevistas/conteúdo audiovisual. | Trocar imagens genéricas por estúdio, apresentadores e convidados; criar posters dos vídeos. |
| `voluntariado.html` | Reduzir incerteza e conduzir inscrição. | Precisa humanizar a jornada com equipe recebendo, treinando e servindo. |
| `contato.html` | Facilitar conversa e reforçar presença institucional. | Mostrar recepção/equipe/local real, sem foto decorativa. |
| `faq.html`, termos e privacidade | Remover dúvidas e dar segurança. | Não exigem fotos; manter gráficos/ícones discretos e boa leitura. |
| Login, cadastro, recuperação, perfil, painel e admin | Executar tarefas privadas. | Não usar fotografia de fundo; preservar foco, privacidade e desempenho. |

## Direção Criativa Única

**Ideia central: "propósito em movimento".** O acervo deve registrar relações e trabalho em andamento, não poses. A câmera observa a comunidade de perto: acolhimento na chegada, conversa em roda, mãos preparando material, uma mentoria, aula, gravação, visita e celebração. Em cada sequência, há uma imagem ampla que situa o ambiente, uma média que mostra colaboração e uma de detalhe que humaniza o gesto.

| Critério | Padrão obrigatório |
|---|---|
| Temperatura | Neutra-quente, $5000$ a $5600\,K$; dourado como reflexo de luz, não filtro amarelo. |
| Contraste e cor | Contraste médio, pretos azul-marinho preservados, pele natural; saturação levemente reduzida, com azul e amarelo/dourado presentes apenas no cenário ou identidade. |
| Luz | Natural lateral e difusa como padrão; complementar com softbox grande em interiores. Evitar flash frontal, luz verde e mistura de temperaturas. |
| Lentes e profundidade | 24--35 mm para contexto; 50--85 mm para relações/retratos. Fundo suavemente desfocado, mas informação de ambiente legível. |
| Edição | Editorial, limpa e atemporal; sem presets pesados, HDR, vinheta, pele plastificada, grão excessivo ou texto embutido. |
| Pessoas | Diversidade real de idade, gênero, tons de pele, corpos e perfis; consentimento documentado, com atenção reforçada a crianças e pessoas atendidas. |
| Expressão e corpo | Escuta, colaboração, concentração e alegria espontânea. Olhar direto para a câmera somente em retratos institucionais e até 20% do acervo. |
| Vestimenta | Casual contemporânea, limpa e discreta; azul, branco, areia, verde suave e pontos dourados. Evitar logos concorrentes, camisetas com mensagens e roupas excessivamente formais. |
| Composição | Regra dos terços, linhas arquitetônicas limpas e área negativa de 35--45% quando houver texto. Não cortar mãos, rostos ou dispositivos de modo acidental. |

### Entrega técnica

* Capture em RAW, 4:3 ou 3:2, com arquivo-mestre de no mínimo 6000 px no lado maior; exporte WebP/AVIF em sRGB.
* Hero desktop: 2560x1440 px; hero mobile alternativo: 1440x1800 px. Cards 1200x900 px; retratos 1200x1500 px; OG social 1200x630 px.
* Otimização de publicação: hero até 350 KB, cards até 180 KB e thumbnails até 80 KB, com `srcset`, `width`, `height` e `loading="lazy"` fora da dobra.
* Nomenclatura: `aaaa-mm-area-assunto-enquadramento-01.webp`, por exemplo `2026-07-voluntariado-acolhimento-horizontal-01.webp`.

## Mapeamento por seção

| Seção | Imagem, objetivo e emoção | Estilo, enquadramento e luz | Formato e mídia |
|---|---|---|---|
| Home: hero | Pessoas chegando e se cumprimentando em encontro real; pertencimento e possibilidade. | Documental premium, plano amplo horizontal, pessoas no terço direito e área negativa à esquerda; luz natural de fim de tarde. | 16:9, 2560x1440, fotografia real. |
| Home: comunidade em ação | Trabalho voluntário, inclusão digital e podcast; evidenciar os três eixos. | Tríptico de ação, planos médio/detalhe, ambiente autêntico, luz de janela. | 4:3, 1600x1200 por imagem, fotografia real. |
| Home: missão/visão/valores | Círculo de diálogo, planejamento e colaboração prática; clareza e credibilidade. | Editorial documental, sem aperto de mãos encenado; 35 mm, luz suave. | 4:3, 1600x1200, fotografia real. |
| Home: contribuição e áreas | Revisão de texto, mentoria e apoio de projeto; competência a serviço. | Close médio de mãos, caderno e conversa; paleta azul, creme e madeira clara. | 4:3, 1600x1200, fotografia real. |
| Home: CTA apoio/contato | Parceiro em conversa e atendimento acolhedor; segurança para iniciar contato. | Retrato ambiental e plano médio; luz lateral suave. | 3:2, 1800x1200, fotografia real. |
| Quem somos: história | Equipe/fundador em ambiente de trabalho e arquivo de origem; legado e coerência. | Retrato editorial + detalhe documental de documentos/livro; luz natural. | 3:2, 1800x1200, fotografia real. |
| Quem somos: liderança e cultura | Retratos de liderança e equipe em interação; proximidade responsável. | Retrato ambiental, olhar direto opcional; fundo institucional discreto. | 4:5, 1600x2000, fotografia real. |
| Projetos: listagem | Autores, capas e momento de mentoria/publicação; tornar resultado tangível. | Still life de livros + retrato do autor em ação; luz de janela. | 4:3, 1600x1200, fotografia real e mockup apenas para capa. |
| Mulheres que Transformam | Escuta, escrita, revisão e lançamento; voz, dignidade e autoria. | Sequência documental íntima, 50 mm, mesa com caderno/livro, luz suave. | Hero 16:9 e galeria 4:3, fotografia real. |
| Escola de Talentos | Aula em roda, mentoria e entrega em projeto; progresso e energia. | Ação observacional, 24--35 mm, sala clara, quadro/tela legíveis sem dados pessoais. | Hero 16:9; galeria 4:3, fotografia real. |
| Cuidado em Movimento | Preparação de kits, visita com consentimento e equipe em triagem; respeito e cuidado. | Documental discreto, nunca expor vulnerabilidade; mãos/atividade quando necessário. | Hero 16:9; galeria 4:3, fotografia real. |
| Biblioteca | Pessoa lendo, pesquisando e usando notebook/tablet, além de capas padronizadas; descoberta. | Editorial silencioso, luz de janela, mesa organizada. | Hero 16:9; card de capa 2:3; foto 4:3, real + design editorial. |
| Podcasts | Host, convidado, microfones e bastidor; conversa confiável e viva. | Retrato editorial com estúdio real, contraste moderado e luz lateral controlada. | Hero 16:9; capas 1:1; posters 16:9, fotografia real. |
| Voluntariado | Recepção, treinamento e serviço; confiança para se candidatar. | Fotografia observacional, gestos e interação; luz clara. | Hero 16:9 e cards 4:3, fotografia real. |
| Contato | Recepção, atendimento e fachada/contexto do local; disponibilidade. | Plano médio acolhedor e arquitetura limpa; luz diurna. | 16:9 e 4:3, fotografia real. |

## Banco de Imagens Prioritário

| Arquivo | Categoria / local | Prioridade | Descrição e ALT | SEO |
|---|---|---|---|---|
| `2026-07-home-acolhimento-hero-01.webp` | Institucional / Home hero | P0 | Chegada de participantes sendo recebidos em um encontro. ALT: "Participantes são recebidos em encontro da Comunidade do Reino". | comunidade cristã acolhedora, voluntariado em Porto Velho |
| `2026-07-home-voluntariado-acao-01.webp` | Impacto / Home | P0 | Voluntários planejando atividade em mesa de trabalho. ALT: "Voluntários planejam uma ação comunitária". | voluntariado comunitário |
| `2026-07-home-inclusao-digital-01.webp` | Formação / Home e MAB | P0 | Orientação de uso de computador para adulto/idoso. ALT: "Voluntária orienta participante em atividade de inclusão digital". | inclusão digital comunitária |
| `2026-07-home-podcast-bastidor-01.webp` | Conteúdo / Home e Podcast | P0 | Dois participantes gravando conversa em microfones. ALT: "Entrevista sendo gravada para o podcast da Comunidade do Reino". | podcast cristão comunitário |
| `2026-07-institucional-equipe-historia-01.webp` | Quem somos | P0 | Equipe reunida em conversa de planejamento. ALT: "Equipe da Comunidade do Reino reunida para planejar ações". | história Comunidade do Reino |
| `2026-07-institucional-fundador-retrato-01.webp` | Quem somos | P1 | Retrato ambiental do fundador/liderança em local de trabalho. ALT: "Liderança da Comunidade do Reino em espaço de trabalho". | liderança comunitária |
| `2026-07-projetos-autoria-mentoria-01.webp` | Projetos | P0 | Autora e mentora revisando páginas impressas. ALT: "Autora revisa texto com mentora voluntária". | mentoria de escrita |
| `2026-07-mulheres-escrita-hero-01.webp` | Mulheres que Transformam | P0 | Mulher escrevendo sua história em caderno. ALT: "Participante escreve sua história durante mentoria literária". | mulheres que transformam em palavras |
| `2026-07-mulheres-revisao-01.webp` | Mulheres que Transformam | P0 | Duas pessoas revisando manuscrito. ALT: "Mentora e autora revisam manuscrito em encontro editorial". | revisão voluntária de livros |
| `2026-07-mulheres-lancamento-01.webp` | Mulheres que Transformam | P1 | Autoras celebrando livro finalizado. ALT: "Autoras celebram a publicação de suas histórias". | publicação de histórias reais |
| `2026-07-talentos-aula-hero-01.webp` | Escola de Talentos | P0 | Aula colaborativa com facilitador e participantes. ALT: "Participantes da Escola de Talentos em atividade de formação". | formação de voluntários |
| `2026-07-talentos-mentoria-01.webp` | Escola de Talentos | P0 | Mentoria individual sobre projeto prático. ALT: "Participante recebe mentoria para aplicar uma habilidade em projeto". | mentoria de voluntariado |
| `2026-07-talentos-entrega-01.webp` | Escola de Talentos | P1 | Grupo apresentando projeto desenvolvido na trilha. ALT: "Grupo apresenta entrega prática na Escola de Talentos". | curso de formação comunitária |
| `2026-07-cuidado-kits-hero-01.webp` | Cuidado em Movimento | P0 | Equipe organiza kits e lista de distribuição. ALT: "Equipe organiza kits para ação de cuidado comunitário". | ação social comunitária |
| `2026-07-cuidado-visita-01.webp` | Cuidado em Movimento | P0 | Conversa respeitosa durante acompanhamento, sem expor pessoas vulneráveis. ALT: "Voluntária realiza acompanhamento comunitário com respeito e escuta". | atendimento comunitário |
| `2026-07-cuidado-equipe-01.webp` | Cuidado em Movimento | P1 | Equipe conversa antes de iniciar ação. ALT: "Voluntários alinham uma ação de cuidado comunitário". | voluntários ação social |
| `2026-07-biblioteca-leitura-hero-01.webp` | Biblioteca | P1 | Leitora consulta livro e notebook em mesa clara. ALT: "Pessoa pesquisa materiais na Biblioteca Digital da Comunidade do Reino". | biblioteca digital cristã |
| `2026-07-biblioteca-estudo-grupo-01.webp` | Biblioteca / estudos | P2 | Pequeno grupo estudando com livros e tablet. ALT: "Grupo realiza estudo com livros e materiais digitais". | estudos bíblicos online |
| `2026-07-podcast-servir-excelencia-01.webp` | Podcast destaque | P0 | Host e convidado em conversa no estúdio. ALT: "Gravação do episódio Servir com excelência". | podcast servir com excelência |
| `2026-07-podcast-lideranca-01.webp` | Podcast episódio | P1 | Entrevista sobre liderança em estúdio. ALT: "Entrevista sobre liderança que serve em estúdio de podcast". | liderança que serve podcast |
| `2026-07-podcast-cuidado-01.webp` | Podcast episódio | P1 | Conversa gravada sobre acolhimento. ALT: "Conversa gravada sobre presença e acolhimento". | podcast cuidado comunitário |
| `2026-07-voluntariado-recepcao-hero-01.webp` | Voluntariado | P0 | Voluntária acolhe novo participante. ALT: "Voluntária acolhe novo participante da Comunidade do Reino". | seja voluntário |
| `2026-07-voluntariado-treinamento-01.webp` | Voluntariado | P1 | Grupo em treinamento prático. ALT: "Voluntários participam de treinamento prático". | treinamento de voluntários |
| `2026-07-contato-recepcao-01.webp` | Contato | P1 | Atendimento em recepção/ambiente da instituição. ALT: "Pessoa da equipe atende visitante na Comunidade do Reino". | contato Comunidade do Reino |
| `2026-07-local-fachada-01.webp` | Contato / institucional | P2 | Fachada ou entrada do espaço, sem endereço privado quando necessário. ALT: "Entrada do espaço de encontro da Comunidade do Reino". | endereço Comunidade do Reino |
| `2026-07-lideranca-retrato-01.webp` | Institucional / imprensa | P1 | Retrato oficial de liderança, fundo discreto. ALT: "Retrato de integrante da liderança da Comunidade do Reino". | liderança Comunidade do Reino |
| `2026-07-equipe-comunicacao-01.webp` | Ministério / voluntariado | P2 | Produção de conteúdo em equipe. ALT: "Equipe de comunicação prepara conteúdo institucional". | comunicação voluntária |
| `2026-07-equipe-tecnologia-01.webp` | Ministério / voluntariado | P2 | Pessoas colaborando em notebooks. ALT: "Voluntários da tecnologia colaboram em projeto digital". | tecnologia voluntariado |
| `2026-07-equipe-intercessao-01.webp` | Ministério / institucional | P2 | Pequeno grupo em oração, captado com discrição. ALT: "Grupo participa de momento de oração comunitária". | intercessão comunidade cristã |
| `2026-07-acao-familias-01.webp` | Impacto social | P1 | Família e equipe em atividade consentida, digna e não assistencialista. ALT: "Família participa de atividade apoiada pela Comunidade do Reino". | apoio a famílias |

**P0** é indispensável para lançamento visual profissional; **P1** completa a narrativa em até 60 dias; **P2** amplia acervo editorial, ministérios e campanhas.

### Cobertura adicional de ministérios

Produzir uma fotografia exclusiva para cada frente quando ela for publicada: infantil, jovens, casais, mulheres, homens, música/louvor, evangelismo, recepção, comunicação, intercessão, tecnologia, mídia, social e administração. Cada foto deve mostrar a atividade real, não uma pessoa genérica representando a área. Para infantil, aplicar autorização de imagem e preferir planos abertos ou mãos/atividades quando o consentimento não cobrir divulgação ampla.

## Melhorias de conteúdo e estrutura

1. Transformar a Home em narrativa de evidência: hero acolhedor, números de impacto reais, projetos em andamento, histórias curtas e CTA. Isso troca promessas abstratas por confiança.
2. Substituir os placeholders das galerias de `Mulheres`, `Escola de Talentos` e `Cuidado em Movimento` pelas três imagens P0 indicadas para cada projeto. São as ausências mais perceptíveis do projeto atual.
3. Criar seção "Impacto em números" com indicadores auditáveis: pessoas formadas, autores publicados, horas voluntárias, materiais disponibilizados e famílias/ações acompanhadas. Use ícones, não fotografia, para não competir com histórias humanas.
4. Criar "Histórias em movimento": uma história curta por trimestre com retrato, contexto, consentimento e link para projeto. Evitar antes/depois e linguagem que exponha pessoas atendidas.
5. Na Biblioteca, manter capas como peça principal, incluir título/autor no card e usar fotografia somente como contexto no hero e em campanhas. Não misturar fotos decorativas com capas em uma mesma grade.
6. No Podcast, adotar sistema de capa quadrada por série e poster 16:9 por vídeo; não reutilizar uma mesma foto em episódios distintos. Vídeos devem ter poster local, nunca `poster="#"`.
7. Para telas de login, cadastro, perfil, painel e administração, não adicionar bancos de imagem. São superfícies utilitárias; uma marca discreta e ilustração abstrata opcional são suficientes e mais seguras.

## Plano de Produção

### Fase 1: preparação

* Definir mensagem, pessoas autorizadas, agenda e ambientes para quatro blocos: acolhimento/voluntariado, formação, publicação/podcast e cuidado comunitário.
* Registrar termos de uso de imagem; para menores e atendimentos, autorização específica do responsável e aprovação editorial antes de publicar.
* Criar lista de cenas e campos de ALT/SEO já no briefing. Nunca depender de reconhecimento automático de imagem para descrever pessoas.

### Fase 2: quatro diárias de captação

| Diária | Entregas principais | Meta |
|---|---|---|
| 1. Comunidade e acolhimento | Home hero, voluntariado, equipe, contato, liderança. | 10 imagens finais + retratos. |
| 2. Formação e biblioteca | Escola de Talentos, inclusão digital, estudo e biblioteca. | 12 imagens finais. |
| 3. Autoria e podcast | Mulheres que Transformam, capas/processo, episódios e vídeo. | 12 imagens finais + 4 posters. |
| 4. Cuidado e impacto | Kits, planejamento, atividades e famílias com consentimento. | 10 imagens finais. |

### Fase 3: curadoria e publicação

* Selecionar 40--50 fotos finais em vez de publicar todas; cada foto precisa ter função, autorização, ALT e associação a uma página.
* Aplicar o preset único, exportar variantes desktop/mobile e revisar em fundo claro e azul-marinho.
* Testar corte em 1440, 1024, 430 e 360 px. Imagens em que rosto ou gesto essencial é cortado devem ter variante própria, não `object-position` improvisado.
* Criar inventário em planilha/CMS com arquivo, crédito, licença, pessoa retratada, validade do consentimento, ALT, páginas e data de revisão.

## Tabela Final de Necessidades

| Página | Seção | Imagem necessária | Objetivo | Estilo | Prioridade |
|---|---|---|---|---|---|
| Início | Hero | Acolhimento em encontro | Pertencimento imediato | Documental cinematográfico, 16:9 | P0 |
| Início | Comunidade em ação | Voluntariado, inclusão digital, podcast | Provar atuação | Tríptico documental, 4:3 | P0 |
| Início | Missão e contribuição | Diálogo, planejamento, mentoria | Dar substância aos valores | Editorial humano, 4:3 | P1 |
| Quem somos | História e liderança | Equipe, fundador, arquivo | Legitimar origem e cultura | Retrato ambiental + documental | P0 |
| Projetos | Resultados | Autores, livros e mentoria | Tornar impacto concreto | Editorial de publicação | P0 |
| Mulheres que Transformam | Galeria | Escrita, revisão, lançamento | Mostrar processo e voz | Documental íntimo | P0 |
| Escola de Talentos | Galeria | Aula, mentoria, entrega | Mostrar aprendizagem aplicada | Observacional energético | P0 |
| Cuidado em Movimento | Galeria | Kits, equipe, acompanhamento | Comunicar cuidado ético | Documental discreto | P0 |
| Biblioteca | Hero e campanhas | Leitura, pesquisa, estudo | Contextualizar catálogo | Editorial silencioso | P1 |
| Podcasts | Destaque, episódios e vídeos | Estúdio, host, convidados, posters | Identidade de conteúdo | Retrato editorial | P0 |
| Voluntariado | Hero e processo | Recepção e treinamento | Reduzir insegurança da inscrição | Documental acolhedor | P0 |
| Contato | Atendimento e local | Recepção e fachada | Tornar canal tangível | Ambiental claro | P1 |
| Ministérios | Cada frente ativa | Atividade exclusiva por área | Organização e pertencimento | Registro real de atuação | P2 |
| FAQ, termos, privacidade | Conteúdo textual | Nenhuma fotografia | Foco e legibilidade | Ícones discretos | N/A |
| Áreas autenticadas | Superfícies utilitárias | Nenhuma fotografia | Segurança e concentração | UI funcional | N/A |

## Critérios de Aprovação

Uma imagem só entra no site quando: representa atividade real; há direito de uso e consentimento; comunica dignidade; usa o padrão tonal definido; continua legível no corte responsivo; recebe ALT específico; não duplica outra imagem sem função; e ajuda uma pessoa a entender ou confiar mais na Comunidade do Reino.
