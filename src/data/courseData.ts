import { CourseModule, AreaCard, TrackData, PracticalProject, TechLab, FaqItem, CourseEditableInfo } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    number: './01',
    title: 'Fundamentos e Fluência em Inteligência Artificial',
    subtitle: 'Entenda a Inteligência Artificial antes de utilizá-la.',
    hours: 60,
    question: 'O que é Inteligência Artificial?',
    microcertification: 'Fundamentos de Inteligência Artificial e Dados',
    iconName: 'Brain',
    courses: [
      {
        title: 'Disciplina 1: Fundamentos da Inteligência Artificial e Cultura Digital',
        hours: 30,
        description: 'Construa uma base conceitual sólida sobre a evolução da IA, machine learning, redes neurais e cultura digital.',
        topics: [
          'Fundamentos e História da IA',
          'IA Tradicional vs. IA Generativa',
          'Machine Learning & Deep Learning',
          'Redes Neurais, LLMs & Transformers',
          'Tokens, Contexto & Embeddings',
          'Modelos Multimodais & Agentes',
          'Como a IA aprende e como ela erra',
          'Alucinação, Viés & Limitações',
          'Pensamento Computacional & Cultura Digital'
        ]
      },
      {
        title: 'Disciplina 2: Dados, Informação e Tomada de Decisão com IA',
        hours: 30,
        description: 'Domine a arte de interpretar e estruturar dados para orientar decisões estratégicas potencializadas por IA.',
        topics: [
          'Dados Estruturados e Não Estruturados',
          'Qualidade e Organização de Bases de Dados',
          'Indicadores, Métricas e Estatística Aplicada',
          'Visualização de Dados e Dashboards',
          'Data Storytelling e Análise Exploratória',
          'Tomada de Decisão Baseada em Dados',
          'IA Aplicada à Análise de Dados'
        ]
      }
    ]
  },
  {
    id: 2,
    number: './02',
    title: 'IA Generativa e Conhecimento',
    subtitle: 'Transforme IA em uma ferramenta profissional de alta produtividade.',
    hours: 60,
    question: 'Como utilizar Inteligência Artificial?',
    project: 'O estudante cria um assistente especialista relacionado à sua profissão.',
    microcertification: 'IA Generativa e Assistentes Inteligentes',
    iconName: 'Sparkles',
    courses: [
      {
        title: 'Disciplina 3: IA Generativa, Prompting e Engenharia de Contexto',
        hours: 30,
        description: 'Domine a comunicação avançada com grandes modelos de linguagem para obter resultados profissionais precisos.',
        topics: [
          'LLMs e Engenharia de Prompt',
          'Engenharia de Contexto e System Instructions',
          'Técnicas Zero-shot, Few-shot e Prompt Iterativo',
          'Structured Outputs (JSON, tabelas, relatórios)',
          'Pesquisa avançada com IA',
          'Análise de documentos e produção de conteúdo',
          'Planejamento, Produtividade e Multimodalidade'
        ]
      },
      {
        title: 'Disciplina 4: Pesquisa, Documentos e Bases de Conhecimento com IA',
        hours: 30,
        description: 'Construa bases de conhecimento seguras e assistentes especialistas orientados a acervos documentais.',
        topics: [
          'Pesquisa Semântica e RAG (Retrieval-Augmented Generation)',
          'Embeddings e Grounding',
          'Organização Documental Inteligente',
          'Assistentes Especialistas sobre Documentos',
          'Redução de Alucinação e Verificação de Fontes',
          'Copilotos Profissionais e Ferramentas como NotebookLM'
        ]
      }
    ]
  },
  {
    id: 3,
    number: './03',
    title: 'Inteligência Analítica e Preditiva',
    subtitle: 'Use dados para compreender, prever cenários e decidir com precisão.',
    hours: 60,
    question: 'Como a IA analisa, identifica padrões e prevê?',
    microcertification: 'Machine Learning e Inteligência Preditiva',
    iconName: 'TrendingUp',
    courses: [
      {
        title: 'Disciplina 5: Inteligência Analítica e Machine Learning sem Código',
        hours: 30,
        description: 'Aprenda a aplicar algoritmos de aprendizado de máquina usando plataformas no-code intuitivas.',
        topics: [
          'Fundamentos de Machine Learning (Treino, Teste, Validação)',
          'Features, Targets e Preparação de Dados',
          'Classificação, Regressão e Clustering',
          'Séries Temporais, Forecast e Detecção de Anomalias',
          'Overfitting, Underfitting e Métricas de Desempenho',
          'Interpretabilidade (Explainable AI - XAI)',
          'Plataformas AutoML e Machine Learning No-Code'
        ]
      },
      {
        title: 'Disciplina 6: IA para Texto, Imagens, Áudio e Dados Multimodais',
        hours: 30,
        description: 'Explore o processamento inteligente de mídias diversas, da visão computacional ao áudio sintético.',
        topics: [
          'Processamento de Linguagem Natural (NLP) e Análise de Sentimentos',
          'Visão Computacional e Reconhecimento de Objetos',
          'IA Generativa de Imagens e Restauração',
          'Transcrição e Síntese de Voz',
          'Modelos Multimodais Avançados',
          'Deepfakes, Autenticidade e Detecção de Manipulação'
        ]
      }
    ]
  },
  {
    id: 4,
    number: './04',
    title: 'Automação e Agentes Inteligentes',
    subtitle: 'Faça a Inteligência Artificial trabalhar de forma autônoma com você.',
    hours: 60,
    question: 'Como fazer a IA executar tarefas?',
    project: 'Construção de uma automação ou agente voltado a um problema real da área do aluno.',
    microcertification: 'Automação e Agentes de Inteligência Artificial',
    iconName: 'Cpu',
    courses: [
      {
        title: 'Disciplina 7: Automação Inteligente de Processos',
        hours: 30,
        description: 'Conecte sistemas e elimine tarefas repetitivas integrando IAs a fluxos de trabalho visuais.',
        topics: [
          'Mapeamento de Processos e Desenho de Workflows',
          'Triggers, Ações, Condições e Integções',
          'Conceitos de APIs e Webhooks sem código',
          'Automação de Documentos, Formulários e Planilhas',
          'Automação de E-mails e Atendimento ao Cliente',
          'Human-in-the-Loop, Monitoramento e Gestão de Exceções',
          'Ferramentas: n8n, Make, Power Automate, Zapier'
        ]
      },
      {
        title: 'Disciplina 8: Agentes de IA e Assistentes Autônomos',
        hours: 30,
        description: 'Projete sistemas de agentes inteligentes capazes de planejar, usar ferramentas e tomar decisões.',
        topics: [
          'Arquitetura de Agentes de IA (Objetivos, Memória, Ferramentas)',
          'Planejamento, Raciocínio e Execução Autônoma',
          'Agentes Pesquisadores, Administrativos, Comerciais, Jurídicos e Educacionais',
          'Orquestração de Sistemas Multiagentes',
          'Supervisão Humana, Balizas de Segurança e Guardrails'
        ]
      }
    ]
  },
  {
    id: 5,
    number: './05',
    title: 'Governança, Estratégia e Inovação',
    subtitle: 'IA responsável e bem planejada gera inovação sustentável.',
    hours: 60,
    question: 'Como implantar IA de forma estratégica e responsável?',
    microcertification: 'Governança e Estratégia em Inteligência Artificial',
    iconName: 'ShieldCheck',
    courses: [
      {
        title: 'Disciplina 9: Ética, LGPD, Segurança e Governança da IA',
        hours: 30,
        description: 'Assegure a conformidade legal, a privacidade de dados e o uso ético da IA em corporações.',
        topics: [
          'Ética, Viés Algorítmico e Discriminação',
          'Transparência e Explicabilidade (XAI)',
          'LGPD, Privacidade, Dados Pessoais e Sensíveis',
          'Segurança, Confidencialidade e Mitigação de Shadow AI',
          'Proteção contra Prompt Injection e Riscos de IP / Direitos Autorais',
          'Políticas Institucionais, Matriz de Risco e Auditoria de IA'
        ]
      },
      {
        title: 'Disciplina 10: Estratégia, Inovação e Gestão de Projetos com IA',
        hours: 30,
        description: 'Identifique oportunidades de alto ROI e lidere a transformação digital nas organizações.',
        topics: [
          'Estratégia de IA e Transformação Digital',
          'Design Thinking e Problem Framing para IA',
          'Framework AI Canvas e Mapeamento de Oportunidades',
          'Gestão de Projetos com Métodos Ágeis (MVP, PoC)',
          'Análise Build vs. Buy, Custos, ROI e KPIs',
          'Gestão da Mudança e Cultura Organizacional'
        ]
      }
    ]
  },
  {
    id: 6,
    number: './06',
    title: 'IA Aplicada às Profissões',
    subtitle: 'Leve a Inteligência Artificial para a prática da sua profissão.',
    hours: 60,
    question: 'Como aplicar IA à minha profissão?',
    project: 'Desenvolvimento e apresentação do Projeto Integrador em IA.',
    microcertification: 'Inteligência Artificial Aplicada à Profissão',
    iconName: 'Briefcase',
    courses: [
      {
        title: 'Disciplina 11: IA Aplicada às Profissões',
        hours: 30,
        description: 'Aplicação prática orientada às especificidades de cada área do conhecimento com mentoria especializada.',
        topics: [
          'Imersão Prática na Trilha Profissional Escolhida',
          'Resolução de Casos Reais do Setor',
          'Seleção da Melhores Ferramentas para a Profissão',
          'Acompanhamento de Tendências e Inovações do Mercado'
        ]
      },
      {
        title: 'Disciplina 12: Projeto Integrador em Inteligência Artificial',
        hours: 30,
        description: 'Construção da solução prática final de IA aplicando todo o conhecimento adquirido ao longo do curso.',
        topics: [
          'Definição do Problema Profissional Real',
          'Mapeamento de Dados e Conhecimento',
          'Desenvolvimento da Solução / Protótipo de IA',
          'Validação, Governança e Plano de Implantação',
          'Pitch Final e Apresentação do Portfólio'
        ]
      }
    ]
  }
];

export const AREAS_DATA: AreaCard[] = [
  {
    id: 'saude',
    title: 'SAÚDE',
    icon: 'Activity',
    careers: ['Medicina', 'Odontologia', 'Enfermagem', 'Farmácia', 'Fisioterapia', 'Psicologia', 'Veterinária', 'Gestão em Saúde']
  },
  {
    id: 'engenharia',
    title: 'ENGENHARIAS E AGRO',
    icon: 'Compass',
    careers: ['Engenharia de Produção', 'Engenharia Mecânica', 'Engenharia Civil', 'Engenharia Elétrica', 'Agronomia', 'Arquitetura', 'Áreas correlatas']
  },
  {
    id: 'tecnologia',
    title: 'TECNOLOGIA',
    icon: 'Terminal',
    careers: ['ADS', 'Sistemas de Informação', 'Ciência da Computação', 'Engenharia de Software', 'Profissionais de TI']
  },
  {
    id: 'direito',
    title: 'DIREITO',
    icon: 'Scale',
    careers: ['Direito', 'Compliance', 'Gestão Pública', 'Serviços Jurídicos']
  },
  {
    id: 'negocios',
    title: 'NEGÓCIOS',
    icon: 'PieChart',
    careers: ['Administração', 'Contabilidade', 'Economia', 'Marketing', 'RH', 'Gestão', 'Empreendedorismo']
  },
  {
    id: 'educacao',
    title: 'EDUCAÇÃO',
    icon: 'BookOpen',
    careers: ['Pedagogia', 'Licenciaturas', 'Coordenadores', 'Professores', 'Gestores Educacionais']
  },
  {
    id: 'comunicacao',
    title: 'COMUNICAÇÃO E CRIATIVIDADE',
    icon: 'PenTool',
    careers: ['Publicidade', 'Jornalismo', 'Design', 'Comunicação', 'Produção de Conteúdo']
  }
];

export const NO_CODE_NOT_REQUIRED = [
  'Python avançado',
  'SQL e bancos relacionais',
  'Linguagem R',
  'Programação tradicional',
  'Desenvolvimento de software',
  'Cálculo avançado / Álgebra linear'
];

export const NO_CODE_YOU_WILL_LEARN = [
  'Inteligência Artificial na Prática',
  'Engenharia de IA Generativa & Prompts',
  'Análise Inteligente de Dados',
  'Machine Learning sem Código (No-Code)',
  'Automação Inteligente de Processos',
  'Criação de Agentes Autônomos de IA',
  'Governança, Ética & Segurança LGPD',
  'Estratégia de Inovação & ROI em IA',
  'Aplicações Profissionais Específicas'
];

export const PRACTICAL_PROJECTS: PracticalProject[] = [
  {
    id: 1,
    number: 'PROJETO 01',
    title: 'Análise Inteligente de Dados',
    description: 'Processamento e extração de insights acionáveis a partir de dados estruturados e não estruturados da sua área.'
  },
  {
    id: 2,
    number: 'PROJETO 02',
    title: 'Assistente Especialista com IA',
    description: 'Desenvolvimento de um assistente virtual customizado com base de conhecimento (RAG) focada na sua profissão.'
  },
  {
    id: 3,
    number: 'PROJETO 03',
    title: 'Modelo Preditivo No-Code',
    description: 'Treinamento e validação de um modelo de Machine Learning preditivo utilizando plataformas AutoML visuais.'
  },
  {
    id: 4,
    number: 'PROJETO 04',
    title: 'Automação ou Agente de IA',
    description: 'Criação de um agente autônomo ou fluxo automatizado para executar rotinas operacionais complexas.'
  },
  {
    id: 5,
    number: 'PROJETO 05',
    title: 'Plano Estratégico e Governança',
    description: 'Elaboração de uma matriz de risco, governança LGPD e plano de adoção institucional de IA com cálculo de ROI.'
  },
  {
    id: 6,
    number: 'PROJETO 06',
    title: 'Projeto Integrador Final',
    description: 'Construção completa e validação de uma solução de IA ponta a ponta aplicável diretamente no seu mercado.'
  }
];

export const PROFESSIONAL_TRACKS: TrackData[] = [
  {
    id: 'saude',
    title: 'IA NA SAÚDE',
    icon: 'Activity',
    topics: [
      'Análise de dados clínicos e apoio à decisão médica',
      'IA no diagnóstico por imagem e triagem preventiva',
      'Aceleração de pesquisas biomédicas e fármacos',
      'Gestão em saúde, documentação de prontuários e automação',
      'Privacidade de dados de pacientes e bioética em IA'
    ]
  },
  {
    id: 'engenharia',
    title: 'IA PARA ENGENHARIAS E AGRO',
    icon: 'Compass',
    topics: [
      'Manutenção preditiva em equipamentos e estruturas',
      'Visão computacional e IoT para inspeção de qualidade',
      'Otimização de processos produtivos e simulações complexas',
      'Agricultura de precisão, sensoriamento remoto e previsão de safra'
    ]
  },
  {
    id: 'tecnologia',
    title: 'IA PARA TECNOLOGIA',
    icon: 'Terminal',
    topics: [
      'Desenvolvimento assistido por IA e copilotos de código',
      'Integração de APIs de LLMs e arquiteturas RAG avançadas',
      'Orquestração de redes multiagentes e automação de TI',
      'Deploy e MLOps em produção (trilha com código opcional)'
    ]
  },
  {
    id: 'direito',
    title: 'IA PARA DIREITO',
    icon: 'Scale',
    topics: [
      'LegalTech e jurimetria aplicada à tomada de decisões',
      'Pesquisa jurídica inteligente e análise preditiva de julgados',
      'Automação e revisão de contratos com inteligência generativa',
      'Due diligence, compliance automatizado e ética jurídica'
    ]
  },
  {
    id: 'negocios',
    title: 'IA PARA NEGÓCIOS',
    icon: 'PieChart',
    topics: [
      'Marketing hiperpersonalizado, CRM inteligente e Customer Analytics',
      'Previsão financeira (Forecasting), contabilidade e RH preditivo',
      'Otimização de Supply Chain e automação de inteligência competitiva',
      'Tomada de decisão baseada em modelos preditivos de negócios'
    ]
  },
  {
    id: 'educacao',
    title: 'IA PARA EDUCAÇÃO',
    icon: 'BookOpen',
    topics: [
      'Tutores inteligentes e sistemas de aprendizagem adaptativa',
      'Criação acelerada de materiais didáticos e planos de aula',
      'Learning Analytics para acompanhamento do engajamento escolar',
      'Agentes educacionais, ética e integridade acadêmica na era da IA'
    ]
  }
];

export const TECH_LABS: TechLab[] = [
  {
    title: 'Python para IA',
    hours: 20,
    description: 'Introdução prática à linguagem Python focada em automação, manipulação de dados e uso de bibliotecas de IA.',
    tags: ['Linguagem', 'Scripts', 'Bibliotecas']
  },
  {
    title: 'SQL e Bancos de Dados',
    hours: 20,
    description: 'Fundamentos de consultas relacionais e estruturação de dados para alimentar pipelines de inteligência.',
    tags: ['Queries', 'Relacional', 'Bases de Dados']
  },
  {
    title: 'APIs e Integrações',
    hours: 20,
    description: 'Aprenda a conectar sistemas, consumir APIs de grandes modelos de linguagem (OpenAI, Anthropic) e usar webhooks.',
    tags: ['REST APIs', 'Endpoints', 'Webhooks']
  },
  {
    title: 'Desenvolvimento com LLMs',
    hours: 20,
    description: 'Construção técnica de aplicações com modelos de linguagem, chamadas de funções e gerenciamento de contexto.',
    tags: ['LLM Stack', 'Prompt Code', 'Engenharia']
  },
  {
    title: 'MLOps e Deploy',
    hours: 20,
    description: 'Boas práticas para publicar, monitorar e manter modelos e agentes em ambiente de produção contínua.',
    tags: ['Deploy', 'Monitoramento', 'Produção']
  }
];

export const SKILLS_LIST = [
  'Compreender os fundamentos e conceitos da IA',
  'Utilizar IA generativa profissionalmente com máxima produtividade',
  'Criar prompts e engenharia de contexto avançada',
  'Construir assistentes especialistas orientados a negócios',
  'Trabalhar com documentos e bases de conhecimento (RAG)',
  'Interpretar dados e extrair inteligência acionável',
  'Compreender modelos preditivos e tendências de mercado',
  'Utilizar Machine Learning com ferramentas no-code',
  'Trabalhar com IA multimodal (Texto, Imagem, Áudio e Vídeo)',
  'Automatizar processos repetitivos e fluxos de trabalho',
  'Construir agentes de IA e assistentes autônomos',
  'Projetar soluções completas de IA para problemas reais',
  'Avaliar riscos e mitigar alucinações e viés',
  'Aplicar conceitos de LGPD, segurança e governança institucional',
  'Avaliar custos, ROI e viabilidade de projetos de IA',
  'Liderar projetos e a transformação digital com IA',
  'Aplicar Inteligência Artificial à sua própria profissão'
];

export const TECH_STACK_TAGS = [
  'ChatGPT',
  'Claude',
  'Gemini',
  'NotebookLM',
  'Microsoft Copilot',
  'n8n',
  'Make',
  'Power Automate',
  'AutoML',
  'Power BI',
  'Bases Vetoriais',
  'Modelos Multimodais',
  'Plataformas de Agentes'
];

export const DEFAULT_COURSE_INFO: CourseEditableInfo = {
  duration: '12 meses (360 horas)',
  modality: 'EaD Ao Vivo + Conteúdo Gravado',
  days: 'Segundas e Quartas-feiras',
  hours: '19:00 às 22:00 (Aulas gravadas disponíveis)',
  startDate: 'Matrículas Abertas - Turma 2026.2',
  investment: '12x de R$ 399,00 ou R$ 4.290,00 à vista',
  spots: 'Vagas Limitadas por Turma'
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Preciso saber programação?',
    answer: 'Não. A pós-graduação foi desenvolvida especialmente para profissionais de diferentes áreas. A programação não é requisito para acompanhar ou concluir a formação. Todas as tecnologias são ensinadas por meio de plataformas visuais, ferramentas no-code, low-code, IA generativa e automação.'
  },
  {
    id: 2,
    question: 'Quem pode fazer a pós?',
    answer: 'Profissionais graduados (bacharelado, licenciatura ou tecnólogo) em qualquer área do conhecimento, observados os critérios acadêmicos formais de ingresso da instituição.'
  },
  {
    id: 3,
    question: 'O curso é apenas para profissionais de tecnologia?',
    answer: 'Não. A formação foi desenvolvida para ser verdadeiramente multidisciplinar, abrangendo profissionais da Saúde, Direito, Engenharias, Negócios, Educação, Comunicação, TI e Gestão.'
  },
  {
    id: 4,
    question: 'Vou desenvolver projetos práticos?',
    answer: 'Sim. A metodologia é 100% baseada em aplicação prática e projetos progressivos. Em cada módulo você construirá um entregável real, culminando no Projeto Integrador onde desenvolverá uma solução para sua própria profissão.'
  },
  {
    id: 5,
    question: 'As ferramentas utilizadas podem mudar?',
    answer: 'Sim. Como o ecossistema de Inteligência Artificial evolui rapidamente, as ferramentas e plataformas utilizadas poderão ser atualizadas ao longo do curso, sempre preservando os conceitos fundamentais, as competências e os objetivos acadêmicos.'
  }
];
