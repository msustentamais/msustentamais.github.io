/* =====================================================================
   CONTEÚDO DO SITE MSUSTENTAMAIS
   ---------------------------------------------------------------------
   Este é o único arquivo que você precisa editar para atualizar o site.
   Regras simples para não quebrar nada:
   • Cada item fica entre chaves { ... } e termina com vírgula.
   • Textos ficam entre aspas "assim". Se o texto tiver aspas dentro,
     use aspas curvas “assim” ou aspas simples 'assim'.
   • Listas ficam entre colchetes [ ... ].
   • Datas no formato "AAAA-MM-DD" (ex.: "2026-09-29").
   • Para deixar um campo vazio, use "" (aspas sem nada dentro).
   Depois de salvar no GitHub, o site atualiza em 1 a 2 minutos.
   Se o site mostrar um aviso amarelo no topo, falta uma vírgula,
   aspa ou chave aqui neste arquivo.
   ===================================================================== */

window.CONTEUDO = {

  /* ---------- CONTATOS E REDES ---------- */
  contato: {
    whatsapp: "https://wa.me/5565999055552",
    whatsappTexto: "(65) 99905-5552",
    email: "msustentamais@gmail.com",
    cidade: "Cáceres, Mato Grosso",
    youtube: "",            // link do canal, ex.: "https://www.youtube.com/@msustentamais"
    youtubeVideoId: "",     // opcional: vídeo em destaque (o código depois de "v=" no link)
    instagram: ""           // opcional, ex.: "https://www.instagram.com/msustentamais"
  },

  /* ---------- VENDAS E LINKS DO CEPGAS ---------- */
  vendas: {
    diagnostico: "https://msustentamais.github.io/CEPGAS/diagnostico_comportamental.html",
    landingCepgas: "https://msustentamais.github.io/CEPGAS/landing_cepgas.html",
    guia: "https://msustentamais.github.io/CEPGAS/lead_guia.html",
    compra: "https://pay.kiwify.com.br/bFlIE4j",
    compraTexto: "Adquirir o CEPGAS™"   // texto do botão de compra
  },

  /* ---------- FOTOS ----------
     Envie as fotos para uma pasta "img" no GitHub e escreva o caminho aqui.
     A galeria só aparece quando houver pelo menos uma foto. */
  fotos: {
    fernanda: "",           // ex.: "img/fernanda.jpg" (aparece em "Quem sou")
    fazenda: [
      // { src: "img/fazenda-01.jpg", legenda: "Rebanho no fim da tarde" },
    ]
  },

  /* ---------- BOAS PRÁTICAS (atualizar sempre) ----------
     As que têm data aparecem primeiro, da mais recente para a mais antiga.
     As 3 mais recentes também aparecem na página inicial.
     pilares: um ou mais entre "Ambiental", "Social" e "Governança".
     categoria: escolha livre (ex.: "Pecuária sustentável", "Cultura").
     como, prova, origem e link são opcionais. */
  boasPraticas: [
    {
      data: "2026-09-29",
      pilares: ["Ambiental"],
      categoria: "Pecuária sustentável",
      titulo: "Água limpa e acessível para o rebanho",
      texto: "Bebedouros limpos, bem distribuídos e protegidos do pisoteio reduzem doenças, melhoram o ganho de peso e preservam as nascentes e margens de corixos.",
      como: [],
      prova: "",
      origem: "Rotina da Fazenda Pantaneira Santa Fé do Machadinho.",
      link: ""
    },
    {
      data: "2026-09-15",
      pilares: ["Governança"],
      categoria: "Gestão ESG",
      titulo: "Diagnosticar antes de agir",
      texto: "Toda ação de sustentabilidade começa por um retrato honesto da situação atual: o que já se faz bem, onde estão os gargalos e quais indicadores vão mostrar o avanço.",
      como: [],
      prova: "",
      origem: "",
      link: ""
    },
    {
      data: "2026-09-01",
      pilares: ["Social", "Ambiental"],
      categoria: "Educação ambiental",
      titulo: "Aprender com quem vive o território",
      texto: "Mestres de tradição, pantaneiros e comunidades ribeirinhas guardam saberes de manejo que nenhum manual substitui. Escutá-los é parte do método.",
      como: [],
      prova: "",
      origem: "",
      link: ""
    },
    {
      data: "",
      pilares: ["Social", "Governança"],
      categoria: "Território",
      titulo: "Escutar o território antes de propor",
      texto: "",
      como: ["Reúna produtores, lideranças locais, poder público e formadores de opinião.", "Levante a identidade do território, os gargalos e as oportunidades.", "Faça rodas de conversa e devolva a síntese aos participantes."],
      prova: "Ata de cada roda de conversa e um quadro-síntese do diagnóstico.",
      origem: "Diagnóstico territorial do projeto Pecuária Tropical pelo Clima, da Morada Comum.",
      link: ""
    },
    {
      data: "",
      pilares: ["Social", "Ambiental"],
      categoria: "Educação ambiental",
      titulo: "Fazer educação ambiental que nasce da comunidade",
      texto: "",
      como: ["Parta da percepção que a comunidade já tem do seu ambiente.", "Una escola e comunidade em um mesmo projeto.", "Interprete o ambiente com imagens e símbolos do próprio lugar."],
      prova: "Cadernos do projeto e registros das atividades feitas com a comunidade.",
      origem: "Projeto de Educação Ambiental (PrEA) e PAEC, com Mimoso e São Pedro de Joselândia.",
      link: ""
    },
    {
      data: "",
      pilares: ["Ambiental"],
      categoria: "Gestão ESG",
      titulo: "Conhecer o impacto real do lugar onde se opera",
      texto: "",
      como: ["Liste os impactos da operação no lugar onde ela acontece.", "Priorize os que mais pesam.", "Não copie a lista de prioridades de outra empresa."],
      prova: "Mapa de impactos com data e responsável.",
      origem: "Competência Gestão de impacto, do CEPGAS™.",
      link: ""
    },
    {
      data: "",
      pilares: ["Governança"],
      categoria: "Gestão ESG",
      titulo: "Decidir com critério escrito",
      texto: "",
      como: ["Escreva o critério antes de a situação difícil aparecer.", "Dê a mesma resposta a situações parecidas.", "Guarde cada decisão junto com o motivo."],
      prova: "Registro da decisão e do critério usado.",
      origem: "Competência Parâmetros e critérios, do CEPGAS™.",
      link: ""
    },
    {
      data: "",
      pilares: ["Governança"],
      categoria: "Gestão ESG",
      titulo: "Dar nome a quem decide e a quem executa",
      texto: "",
      como: ["Para cada tema de ESG, defina uma pessoa que decide e uma que executa.", "Escreva isso na pauta e na ata da reunião.", "Revise quando o cenário mudar."],
      prova: "Quadro de papéis atualizado.",
      origem: "Competência Estruturação de papéis, do CEPGAS™.",
      link: ""
    },
    {
      data: "",
      pilares: ["Governança"],
      categoria: "Gestão ESG",
      titulo: "Só afirmar o que se consegue provar",
      texto: "",
      como: ["Antes de publicar uma frase, localize a evidência que a sustenta.", "Guarde o registro, o indicador ou a decisão documentada.", "Se não houver prova, reescreva a frase."],
      prova: "Pasta de evidências ligada a cada afirmação pública.",
      origem: "Competência Sustentação por evidências, do CEPGAS™.",
      link: ""
    }
  ],

  /* ---------- PROJETOS ----------
     status: "Em andamento", "Realizado" ou "Submetido".
     temas: um ou mais. Os projetos com o tema "Cultura" ou "Patrimônio"
            aparecem também na página Cultura.
     periodo, descricao e link são opcionais — se ficarem "", não aparecem.
     destaque: true faz o projeto aparecer na página inicial (use em até 3). */
  projetos: [
    {
      titulo: "Cáceres em Sentidos",
      status: "Submetido",
      periodo: "2026",
      temas: ["Cultura", "Educação ambiental", "Turismo"],
      descricao: "A cultura como promotora da educação ambiental, do turismo e do setor criativo: livro em 10 capítulos com versões acessíveis, vídeos temáticos, oficinas para professores e mostra cultural. Proposta apresentada ao Programa Rouanet Centro-Oeste.",
      link: "",
      destaque: true
    },
    {
      titulo: "Fazenda Pantaneira Santa Fé do Machadinho",
      status: "Em andamento",
      periodo: "desde 2018",
      temas: ["Pecuária sustentável"],
      descricao: "Fazenda pantaneira gerida com os programas Fazenda Pantaneira Sustentável e Produção Sustentável de Bezerros. É o campo onde a metodologia é praticada no dia a dia.",
      link: "",
      destaque: true
    },
    {
      titulo: "Metodologia CEPGAS™",
      status: "Em andamento",
      periodo: "desde 2025",
      temas: ["Formação de líderes ESG"],
      descricao: "Formação individual em conhecimentos, habilidades e atitudes de liderança em sustentabilidade, organizada em 5 módulos e guiada por diagnósticos.",
      link: "https://msustentamais.github.io/CEPGAS/landing_cepgas.html",
      destaque: true
    },
    {
      titulo: "Pecuária Tropical pelo Clima",
      status: "Em andamento",
      periodo: "2026",
      temas: ["Pecuária sustentável", "Governança"],
      descricao: "Como Embaixadora Territorial do projeto, da Morada Comum, conduzi o diagnóstico territorial e rodas de conversa com produtores, mulheres produtoras e juventude em Cáceres e Vila Bela da Santíssima Trindade.",
      link: "",
      destaque: false
    },
    {
      titulo: "Vozes da Pecuária",
      status: "Em andamento",
      periodo: "",
      temas: ["Pecuária sustentável"],
      descricao: "Atuação como embaixadora do projeto.",
      link: "",
      destaque: false
    },
    {
      titulo: "Governança regional",
      status: "Em andamento",
      periodo: "2025 e 2026",
      temas: ["Governança", "Turismo"],
      descricao: "Participação, como representante, no COMDER, no COMDEMA e na IGR Pantanal, a Instância de Governança Regional do Pantanal, na construção de propostas de desenvolvimento sustentável regional.",
      link: "",
      destaque: false
    },
    {
      titulo: "Restauração da Rua da Manga – Quintino Bocaiúva",
      status: "Realizado",
      periodo: "",
      temas: ["Patrimônio", "Cultura"],
      descricao: "",
      link: "",
      destaque: false
    },
    {
      titulo: "Restauração da Ilha do Malheiro",
      status: "Realizado",
      periodo: "",
      temas: ["Patrimônio", "Cultura", "Meio ambiente"],
      descricao: "",
      link: "",
      destaque: false
    },
    {
      titulo: "Iconografia Pantaneira Cacerense – Percepção de Sentido",
      status: "Realizado",
      periodo: "",
      temas: ["Cultura"],
      descricao: "",
      link: "",
      destaque: false
    },
    {
      titulo: "Curso de Carne de Jacaré",
      status: "Realizado",
      periodo: "",
      temas: ["Produção sustentável"],
      descricao: "",
      link: "",
      destaque: false
    },
    {
      titulo: "Educação ambiental com comunidades pantaneiras",
      status: "Realizado",
      periodo: "2004 a 2006",
      temas: ["Educação ambiental", "Cultura"],
      descricao: "Projetos com as comunidades de Mimoso e São Pedro de Joselândia, com o GPEA/UFMT e apoio da FAPEMAT, usando imagens e símbolos do próprio lugar para interpretar o ambiente.",
      link: "",
      destaque: false
    },
    {
      titulo: "Turismo na Fazenda Santa Fé do Machadinho",
      status: "Realizado",
      periodo: "2003 a 2005",
      temas: ["Turismo"],
      descricao: "Proposta de implantação do turismo na fazenda, feita como monografia, que virou projeto real e foi apresentada em eventos nacionais.",
      link: "",
      destaque: false
    }
  ],

  /* ---------- DESTAQUE DA PÁGINA CULTURA ---------- */
  culturaDestaque: {
    titulo: "Cáceres em Sentidos",
    status: "Proposta submetida ao Programa Rouanet Centro-Oeste",
    texto: "Um livro sobre Cáceres escrito com quem vive a cidade e o Pantanal, em versões impressa, com letra ampliada, digital e em audiolivro, acompanhado de vídeos temáticos, oficinas de elaboração de projetos para professores e uma mostra cultural aberta à comunidade.",
    itens: [
      "Cultura",
      "Educação Ambiental",
      "Turismo",
      "Os Elementos: fogo, água, terra e ar",
      "Comunidades tradicionais e suas produções sustentáveis",
      "Animais do Pantanal",
      "Formas de expressão: artesanato, artes visuais, música e dança",
      "O Rio Paraguai e os espaços de convivência",
      "Acessibilidade e inclusão da idade prateada",
      "Elaboração de projetos de cultura, educação ambiental, turismo e setor criativo"
    ]
  },

  /* ---------- MATÉRIAS NA IMPRENSA (links externos) ----------
     Copie o modelo abaixo (tire as barras // do início das linhas) para cada matéria. */
  materias: [
    // {
    //   data: "2024-05-10",
    //   veiculo: "Nome do jornal ou site",
    //   titulo: "Título da matéria",
    //   link: "https://endereco-da-materia.com.br"
    // },
  ],

  /* ---------- ARTIGOS, LIVROS E PUBLICAÇÕES ----------
     tipo: Artigo, Coluna, Livro, Apresentação, Pesquisa, Monografia...
     A página ordena do mais recente para o mais antigo pelo ano. */
  publicacoes: [
    { ano: "2005", tipo: "Apresentação", titulo: "A Água na Percepção Pantaneira de Meio Ambiente", detalhe: "Encuentro por una Nueva Cultura del Agua en América Latina, Fortaleza (CE).", link: "" },
    { ano: "2004 a 2006", tipo: "Pesquisa", titulo: "Reinventando Caminhos Iconográficos para a Interpretação Ambiental: um filtro pedagógico às comunidades de Mimoso e São Pedro de Joselândia", detalhe: "Projeto do GPEA/UFMT com apoio da FAPEMAT, coordenado pela Profa. Michèle Sato. Participação.", link: "" },
    { ano: "2004", tipo: "Livro", titulo: "Múltiplas Dimensões da Educação Ambiental", detalhe: "Coautoria.", link: "" },
    { ano: "2004", tipo: "Livro", titulo: "Conceitos em Educação Ambiental", detalhe: "Coautoria.", link: "" },
    { ano: "2004", tipo: "Pesquisa", titulo: "Projeto Ambiental Escolar Comunitário (PAEC)", detalhe: "Um dos quatro cadernos do Projeto de Educação Ambiental (PrEA), com as comunidades pantaneiras de Mimoso e São Pedro de Joselândia. Coautoria.", link: "" },
    { ano: "2004", tipo: "Apresentação", titulo: "Turismo Rural no Pantanal", detalhe: "Trabalho apresentado em 2004.", link: "" },
    { ano: "2003", tipo: "Monografia", titulo: "Proposta de Implantação do Turismo na Fazenda Santa Fé do Machadinho", detalhe: "Especialização em Turismo, Desenvolvimento Local e Regional (UNEMAT). Apresentada em eventos como o V Fórum Brasileiro de Educação Ambiental até 2005.", link: "" }
  ],

  /* ---------- VÍDEOS ----------
     Cole o endereço do YouTube em "link" e o vídeo passa a tocar no site.
     Sem link, o cartão aparece como "Em breve". */
  videos: [
    { serie: "Aula gratuita", titulo: "Por que o ESG da sua empresa continua frágil", descricao: "Nove minutos sobre o que o mercado oferece, por que não resolve e o que muda quando o líder decide com critério.", link: "" },
    { serie: "Estilos de liderança", titulo: "CEPGAS™ para o líder executor", descricao: "Como o método conversa com quem transforma intenção em ação.", link: "" },
    { serie: "Estilos de liderança", titulo: "CEPGAS™ para o líder inspirador", descricao: "Como o método dá prova ao propósito de quem mobiliza pessoas.", link: "" },
    { serie: "Estilos de liderança", titulo: "CEPGAS™ para o líder integrador", descricao: "Como o método transforma cuidado em clareza de papéis e critérios.", link: "" },
    { serie: "Estilos de liderança", titulo: "CEPGAS™ para o líder estrategista", descricao: "Como o método ensina o processo a decidir onde ainda não há manual.", link: "" }
  ],

  /* ---------- PRODUTOS E SERVIÇOS ----------
     status: "Disponível", "Sob consulta" ou "Em breve".
     acao: "diag" (abre o diagnóstico), "compra" (abre a página de compra) ou "wa" (WhatsApp). */
  produtos: [
    { nome: "Diagnóstico comportamental", desc: "Descubra o seu estilo predominante de liderança e o maior gargalo do ESG da sua empresa.", status: "Disponível", acao: "diag" },
    { nome: "Consultoria estratégica individual CEPGAS™", desc: "Formação em cinco módulos, em cima das decisões reais do líder.", status: "Disponível", acao: "wa" },
    { nome: "Mentoria individual e corporativa", desc: "Acompanhamento continuado de líderes e equipes.", status: "Sob consulta", acao: "wa" },
    { nome: "Workshops in-company", desc: "Formação da equipe dentro da própria empresa.", status: "Sob consulta", acao: "wa" },
    { nome: "Palestras", desc: "ESG, liderança, cultura e Pantanal, para eventos, escolas e empresas.", status: "Sob consulta", acao: "wa" },
    { nome: "Projetos culturais e de educação ambiental", desc: "Elaboração e coordenação de projetos que unem cultura, educação ambiental, turismo e setor criativo.", status: "Sob consulta", acao: "wa" },
    { nome: "Vivências na fazenda", desc: "Imersão no território, com a IGR Pantanal como credencial institucional.", status: "Sob consulta", acao: "wa" },
    { nome: "Curso online", desc: "O método em vídeo, no ritmo do líder.", status: "Em breve", acao: "wa" },
    { nome: "Certificação de liderança CEPGAS™", desc: "Reconhecimento formal da formação.", status: "Em breve", acao: "wa" }
  ],

  /* ---------- HISTÓRICO DA SUSTENTABILIDADE (página Meio ambiente) ----------
     faixa: "mundo", "br" (Brasil e Pantanal) ou "eu" (minha trajetória). */
  marcos: [
    { ano: 1972, rot: "1972", faixa: "mundo", titulo: "Conferência de Estocolmo (ONU)", texto: "O meio ambiente entra na agenda dos governos." },
    { ano: 1977, rot: "1977", faixa: "mundo", titulo: "Conferência de Tbilisi", texto: "A educação ambiental ganha diretrizes internacionais." },
    { ano: 1987, rot: "1987", faixa: "mundo", titulo: "Relatório Brundtland", texto: "Nasce a definição de desenvolvimento sustentável." },
    { ano: 1988, rot: "1988", faixa: "br", titulo: "Constituição Federal", texto: "O Pantanal Mato-Grossense é reconhecido como patrimônio nacional." },
    { ano: 1992, rot: "1992", faixa: "mundo", titulo: "Rio-92", texto: "Sustentabilidade vira compromisso global, com a Agenda 21." },
    { ano: 1992, rot: "1992", faixa: "eu", titulo: "Formação em Pedagogia", texto: "Concluo a graduação, no mesmo ano da Rio-92." },
    { ano: 1994, rot: "1994", faixa: "eu", titulo: "Educação de jovens e adultos", texto: "Passo a coordenar o programa de EJA do SESI-MT, até 1998." },
    { ano: 1999, rot: "1999", faixa: "br", titulo: "Lei 9.795", texto: "O Brasil ganha a Política Nacional de Educação Ambiental." },
    { ano: 2000, rot: "2000", faixa: "br", titulo: "Pantanal na UNESCO", texto: "A região é reconhecida como Patrimônio Natural da Humanidade e Reserva da Biosfera." },
    { ano: 2001, rot: "2001", faixa: "eu", titulo: "Consultoria no SEBRAE-MT", texto: "Começo a atuar como consultora e instrutora, até 2004." },
    { ano: 2003, rot: "2003", faixa: "eu", titulo: "Educação ambiental no Pantanal", texto: "Entro no GPEA/UFMT e no ProFEAP. Minha monografia sobre turismo na fazenda vira projeto real." },
    { ano: 2004, rot: "2004", faixa: "mundo", titulo: "Who Cares Wins (ONU)", texto: "O termo ESG entra no vocabulário do mercado financeiro." },
    { ano: 2004, rot: "2004", faixa: "eu", titulo: "Projetos com as comunidades", texto: "Coautoria de livros de educação ambiental e do PrEA e do PAEC. Começa o projeto apoiado pela FAPEMAT, até 2006." },
    { ano: 2005, rot: "2005", faixa: "eu", titulo: "A água na percepção pantaneira", texto: "Apresento o trabalho em Fortaleza, no encontro por uma nova cultura da água na América Latina." },
    { ano: 2015, rot: "2015", faixa: "mundo", titulo: "Agenda 2030 e Acordo de Paris", texto: "Os ODS e as metas climáticas passam a orientar empresas e países." },
    { ano: 2018, rot: "2018", faixa: "eu", titulo: "Pecuária sustentável na fazenda", texto: "A fazenda entra nos programas Fazenda Pantaneira Sustentável e Produção Sustentável de Bezerros." },
    { ano: 2019, rot: "2019", faixa: "eu", titulo: "Doutorado", texto: "Título de Doutora em Educação pela Universidad de Santiago de Compostela." },
    { ano: 2025, rot: "2025", faixa: "mundo", titulo: "COP30 em Belém", texto: "A agenda climática global acontece em território brasileiro." },
    { ano: 2025, rot: "2025 e 2026", faixa: "eu", titulo: "Governança regional", texto: "Integro, como representante, o COMDER, o COMDEMA e a IGR Pantanal." },
    { ano: 2026, rot: "2026", faixa: "eu", titulo: "CEPGAS™ e cultura", texto: "Aplico o método em consultoria estratégica individual, atuo como Embaixadora Territorial do projeto Pecuária Tropical pelo Clima e submeto o projeto Cáceres em Sentidos ao Programa Rouanet Centro-Oeste." }
  ]
};
