import type { Locale } from './i18n';

const translationsData = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      modelling: 'Modelling',
    },
    hero: {
      badge: 'Entrepreneur · Developer · China Business',
      bio: 'French entrepreneur with Maltese roots, building from Shenzhen and Shanghai. SaaS products, AI tools, and on-the-ground China operations for companies serious about doing business in Asia.',
      cta: {
        projects: 'My Projects',
        contact: 'Get in Touch',
      },
      expertise: [
        {
          title: 'Web Development',
          description:
            'Full-stack development and AI integrations, from MVPs to production-grade SaaS',
        },
        {
          title: 'China Agent',
          description:
            'Direct ties with the Chinese market: sourcing, negotiations, logistics, and market entry',
        },
        {
          title: 'AI & Automation',
          description:
            'Custom AI pipelines and workflow automations that cut manual work and scale fast',
        },
        {
          title: 'International Consulting',
          description:
            'Market entry strategy, cross-cultural deal-making, and hands-on execution in both markets',
        },
      ],
    },
    stats: [
      { value: '6+', label: 'Active Projects' },
      { value: 'China', label: 'Based in' },
      { value: '4', label: 'Languages' },
    ],
    now: {
      title: 'Right Now',
      cards: [
        {
          title: 'Web Dev & AI Projects',
          description:
            'Building SaaS products and AI-powered tools: YouTube script generators, swimming coaching platforms, and more.',
        },
        {
          title: 'Based in China',
          description:
            "Living and working from China's business hubs. Deep local network and understanding of the market.",
        },
        {
          title: 'China Business Partner',
          description:
            'Full-cycle support: sourcing, quality control, logistics, negotiations, and market entry for international businesses.',
        },
      ],
    },
    common: {
      visitWebsite: 'Visit Website',
      inDevelopment: 'In Development',
    },
    projects: {
      label: 'Projects',
      title: "What I'm Building",
      description:
        'Six active ventures: SaaS, AI tooling, geopolitics, and sports tech.',
      items: [
        {
          name: 'FULLHAURA',
          description:
            'AI agency building digital tools, automations, and web solutions for businesses across Europe and Asia. From API integrations to full-stack web development.',
          tags: ['AI Agency', 'Web Dev', 'Automation'],
          status: 'Active',
          url: '#',
          gradient: 'from-cyan-500 to-blue-600',
          image: '',
        },
        {
          name: 'Sumera.io',
          description:
            'AI-powered YouTube script generator with a proprietary 5-stage pipeline. Turns video ideas into production-ready scripts in 10 minutes.',
          tags: ['SaaS', 'AI', 'Creator Tools'],
          status: 'Live',
          url: 'https://sumera.io',
          gradient: 'from-lime-400 to-emerald-500',
          image: '/images/sumera-cover.png',
        },
        {
          name: 'Fullink.io',
          description:
            'All-in-one link-in-bio platform for creators. Beautiful themes, analytics, payment integration via Stripe, and blazing-fast performance. Free forever.',
          tags: ['SaaS', 'Creator Tools', 'Link-in-Bio'],
          status: 'Live',
          url: 'https://www.fullink.io',
          gradient: 'from-violet-500 to-indigo-600',
          image: '',
        },
        {
          name: 'Geo-Front',
          description:
            'Live geopolitical monitoring platform tracking the Iran/USA conflict with real-time, accurate updates. Built for clarity in a fast-moving situation.',
          tags: ['Geopolitics', 'Live Data', 'News'],
          status: 'Live',
          url: 'https://geo-front.com',
          gradient: 'from-red-600 to-slate-800',
          image: '',
        },
        {
          name: 'SwimForm.ai',
          description:
            'AI swimming coach in your pocket. Upload your video, get elite-level technique feedback. Built by a former national team swimmer.',
          tags: ['Sports Tech', 'AI', 'Coaching'],
          status: 'In Development',
          url: '',
          gradient: 'from-amber-400 to-orange-500',
          image: '',
        },
      ],
    },
    pastProjects: {
      label: 'Other Ventures',
      title: 'Past & Side Projects',
      description: 'Experiments that shipped: education, travel, and creator tools.',
      items: [
        {
          name: 'MoneyLabs',
          description:
            'Online course teaching AI voice generation for passive income. Practical, monetization-focused education.',
          tags: ['Education', 'AI'],
          gradient: 'from-violet-500 to-purple-600',
        },
        {
          name: 'Bali Girls Trip',
          description:
            'Premium women\'s travel concierge service for Bali. Curated itineraries and group travel experiences.',
          tags: ['Travel', 'Lifestyle'],
          gradient: 'from-pink-400 to-rose-500',
        },
      ],
    },
    about: {
      label: 'Background',
      title: 'Discipline shapes everything.',
      paragraphs: [
        'Born in France with Maltese roots. Sixteen years of competitive swimming, including the French national team, taught me what it takes to perform under pressure. That same mindset drives everything I build.',
        'Now based in China, I combine fluency in the local market with hands-on technical skills to ship products and help foreign companies operate in Asia without the guesswork.',
        'French, English, Portuguese, Russian. Four languages that open doors most people never reach.',
      ],
      languages: ['Français', 'English', 'Português', 'Русский'],
      stats: [
        { value: '16+', label: 'Years competitive swimming' },
        { value: '4', label: 'Languages spoken' },
        { value: '6+', label: 'Active projects' },
        { value: '35', label: 'Countries visited' },
      ],
    },
    contact: {
      label: 'Contact',
      title: 'Got a project in mind?',
      subtitle:
        'Web development, AI build, or China operations. Pick a channel and let\'s get into it.',
      buttons: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Send an Email',
        wechat: 'WeChat',
        wechatCopied: 'ID Copied!',
      },
      wechatId: 'wxid_llgnw6mtfc2522',
      info: {
        location: 'China',
        email: 'tristangrech.nat@gmail.com',
        nationality: 'French · EU Passport',
        availability: 'Open to projects worldwide',
      },
    },
    footer: {
      tagline: 'Entrepreneur · Developer · China',
      copyright: '© 2026 Tristan Grech. All rights reserved.',
      links: {
        about: 'About',
        projects: 'Projects',
        contact: 'Contact',
        modelling: 'Modelling',
      },
    },
    modelling: {
      hero: {
        label: 'Model · Athlete',
        firstName: 'Tristan',
        lastName: 'Grech',
        description:
          'French · Maltese origins\n186 cm · Based in China\nFormer French national swim team',
        photoPlaceholder: 'Photo',
        scrollHint: 'Scroll',
      },
      specs: {
        sectionLabel: 'Model Specs',
        items: [
          { key: 'Height', value: '186 cm' },
          { key: 'Weight', value: '87–100 kg' },
          { key: 'Hair', value: 'Dark Brown' },
          { key: 'Eyes', value: 'Brown' },
          { key: 'Shoe', value: 'EU 45' },
          { key: 'Tattoos', value: 'None' },
          { key: 'Nationality', value: 'French' },
          { key: 'Based', value: 'China' },
          { key: 'Available', value: 'Asia-wide · Open to travel' },
        ],
      },
      portfolio: {
        sectionLabel: 'Portfolio',
        title: 'Work',
        description:
          'Commercial, fitness, editorial, lifestyle. Built for versatility across Asian markets.',
        items: [
          { label: 'Editorial', category: 'Editorial' },
          { label: 'Commercial', category: 'Commercial' },
          { label: 'Fitness', category: 'Fitness' },
          { label: 'Lifestyle', category: 'Lifestyle' },
          { label: 'Fashion', category: 'Fashion' },
        ],
      },
      swimming: {
        sectionLabel: 'Athletics',
        title: 'Trained at the highest level. Built for performance.',
        paragraphs: [
          'Sixteen years of competitive swimming, capped by the French national team, forged the discipline and physical conditioning that define this work. Not gym-built. Pool-built.',
          'That edge shows in fitness and athletic campaigns. The physique, the posture, the endurance. It comes from a place most models cannot reach.',
        ],
        photoPlaceholder: 'Photo',
        achievements: [
          '16+ years competitive swimming',
          'French national team representative',
          'Elite-level endurance and physical conditioning',
          'Weight-flexible: 87 to 100 kg based on campaign needs',
          'Available for fitness, sportswear, and athletic brand campaigns',
        ],
      },
      contact: {
        eyebrow: 'Open for bookings',
        title: "Let's make something real.",
        subtitle:
          'Agencies, casting directors, photographers, brands. Asia-wide. Ready now.',
        emailButton: 'Send an Email',
        instagramButton: 'Instagram',
        email: 'tristangrech.nat@gmail.com',
        info: {
          location: { label: 'Location', value: 'China' },
          email: { label: 'Email', value: 'tristangrech.nat@gmail.com' },
          nationality: { label: 'Nationality', value: 'French · EU Passport' },
          availability: {
            label: 'Availability',
            value: 'Asia-wide · Open to travel',
          },
        },
      },
    },
  },

  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      contact: 'Контакты',
      modelling: 'Моделинг',
    },
    hero: {
      badge: 'Предприниматель · Разработчик · Бизнес в Китае',
      bio: 'Французский предприниматель с мальтийскими корнями, базирующийся в Китае. Создаю международные проекты, связывающие Европу и Азию через технологии, веб-разработку и практический подход к бизнесу.',
      cta: {
        projects: 'Мои проекты',
        contact: 'Связаться',
      },
      expertise: [
        {
          title: 'Веб-разработка',
          description:
            'Фулл-стек разработка, интеграция ИИ и современные веб-решения для бизнеса по всему миру',
        },
        {
          title: 'Бизнес в Китае',
          description:
            'Прямые связи с китайским рынком — сорсинг, переговоры, логистика и выход на рынок',
        },
        {
          title: 'ИИ и автоматизация',
          description:
            'Создание интеллектуальных инструментов и автоматизаций, оптимизирующих бизнес-процессы',
        },
        {
          title: 'Международный консалтинг',
          description:
            'Мост между европейскими и азиатскими рынками с практическим бизнес-консалтингом',
        },
      ],
    },
    stats: [
      { value: '6+', label: 'Активных проектов' },
      { value: 'Китай', label: 'Базируюсь в' },
      { value: '4', label: 'Языка' },
    ],
    now: {
      title: 'Сейчас',
      cards: [
        {
          title: 'Веб-разработка и ИИ-проекты',
          description:
            'Создаю SaaS-продукты и инструменты на базе ИИ — от генераторов сценариев для YouTube до платформ для тренеров по плаванию.',
        },
        {
          title: 'Базируюсь в Китае',
          description:
            'Живу и работаю в деловых центрах Китая. Глубокая локальная сеть контактов и понимание рынка.',
        },
        {
          title: 'Партнёр по бизнесу в Китае',
          description:
            'Полный цикл поддержки: сорсинг, контроль качества, логистика, переговоры и выход на рынок для международного бизнеса.',
        },
      ],
    },
    common: {
      visitWebsite: 'Посетить сайт',
      inDevelopment: 'В разработке',
    },
    projects: {
      label: 'Проекты',
      title: 'Над чем я работаю',
      description:
        'Активные проекты в области ИИ, веб-разработки, образования и лайфстайла.',
      items: [
        {
          name: 'FULLHAURA',
          description:
            'ИИ-агентство, создающее цифровые инструменты, автоматизации и веб-решения для бизнеса в Европе и Азии. От API-интеграций до полноценной веб-разработки.',
          tags: ['ИИ-агентство', 'Веб-разработка', 'Автоматизация'],
          status: 'Активен',
          url: '#',
          gradient: 'from-cyan-500 to-blue-600',
          image: '',
        },
        {
          name: 'Sumera.io',
          description:
            'ИИ-генератор сценариев для YouTube с авторским 5-этапным конвейером. Превращает идеи для видео в готовые сценарии за 10 минут.',
          tags: ['SaaS', 'ИИ', 'Инструменты для креаторов'],
          status: 'Запущен',
          url: 'https://sumera.io',
          gradient: 'from-lime-400 to-emerald-500',
          image: '/images/sumera-cover.png',
        },
        {
          name: 'Fullink.io',
          description:
            'Платформа «ссылка в био» для креаторов. Красивые темы, аналитика, оплата через Stripe и молниеносная скорость. Бесплатно навсегда.',
          tags: ['SaaS', 'Инструменты для креаторов', 'Link-in-Bio'],
          status: 'Запущен',
          url: 'https://www.fullink.io',
          gradient: 'from-violet-500 to-indigo-600',
          image: '',
        },
        {
          name: 'Geo-Front',
          description:
            'Платформа геополитического мониторинга в реальном времени, отслеживающая конфликт Иран/США с точными и актуальными обновлениями.',
          tags: ['Геополитика', 'Данные в реальном времени', 'Новости'],
          status: 'Запущен',
          url: 'https://geo-front.com',
          gradient: 'from-red-600 to-slate-800',
          image: '',
        },
        {
          name: 'SwimForm.ai',
          description:
            'ИИ-платформа для тренировок по плаванию. Загрузите видео и получите профессиональный анализ техники. Основано на 16+ летах соревновательного опыта.',
          tags: ['Спортивные технологии', 'ИИ', 'Коучинг'],
          status: 'В разработке',
          url: '',
          gradient: 'from-amber-400 to-orange-500',
          image: '',
        },
      ],
    },
    pastProjects: {
      label: 'Другие проекты',
      title: 'Прошлые и побочные проекты',
      description: 'Другие проекты и эксперименты на этом пути.',
      items: [
        {
          name: 'MoneyLabs',
          description:
            'Онлайн-курс по ИИ-генерации голоса для пассивного дохода. Практическое обучение, направленное на монетизацию.',
          tags: ['Образование', 'ИИ'],
          gradient: 'from-violet-500 to-purple-600',
        },
        {
          name: 'Bali Girls Trip',
          description:
            'Премиальный консьерж-сервис женских путешествий на Бали. Кураторские маршруты и групповые туры.',
          tags: ['Путешествия', 'Лайфстайл'],
          gradient: 'from-pink-400 to-rose-500',
        },
      ],
    },
    about: {
      label: 'Обо мне',
      title: 'Дисциплина определяет всё.',
      paragraphs: [
        'Родился во Франции, корни — на Мальте. Всю жизнь я строю на стыке физического совершенства и предпринимательского драйва. Шестнадцать лет соревновательного плавания — включая сборную Франции — заложили фундамент, который я приношу в каждый проект.',
        'Сейчас я базируюсь в Китае и сочетаю глубокое знание локального рынка с техническими навыками в веб-разработке и ИИ, чтобы создавать продукты и помогать бизнесу наводить мосты между Европой и Азией.',
        'Мультилингвальный, адаптивный и всегда создающий что-то новое.',
      ],
      languages: ['Français', 'English', 'Português', 'Русский'],
      stats: [
        { value: '16+', label: 'Лет соревновательного плавания' },
        { value: '4', label: 'Языка' },
        { value: '6+', label: 'Активных проектов' },
        { value: '∞', label: 'Трудовая этика' },
      ],
    },
    contact: {
      label: 'Контакты',
      title: 'Есть проект?',
      subtitle:
        'Веб-разработка, ИИ-решения или бизнес в Китае — я готов обсудить.',
      buttons: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'Написать письмо',
        wechat: 'WeChat',
        wechatCopied: 'ID скопирован!',
      },
      wechatId: 'wxid_llgnw6mtfc2522',
      info: {
        location: 'Китай',
        email: 'tristangrech.nat@gmail.com',
        nationality: 'Франция · Паспорт ЕС',
        availability: 'Открыт к проектам по всему миру',
      },
    },
    footer: {
      tagline: 'Предприниматель · Разработчик · Китай',
      copyright: '© 2026 Tristan Grech. Все права защищены.',
      links: {
        about: 'Обо мне',
        projects: 'Проекты',
        contact: 'Контакты',
        modelling: 'Моделинг',
      },
    },
    modelling: {
      hero: {
        label: 'Модель · Спортсмен',
        firstName: 'Tristan',
        lastName: 'Grech',
        description:
          'Франция · Мальтийские корни\n186 см · Базируется в Китае\nБывший член сборной Франции по плаванию',
        photoPlaceholder: 'Фото',
        scrollHint: 'Листать',
      },
      specs: {
        sectionLabel: 'Параметры модели',
        items: [
          { key: 'Рост', value: '186 см' },
          { key: 'Вес', value: '87–100 кг' },
          { key: 'Волосы', value: 'Тёмно-каштановые' },
          { key: 'Глаза', value: 'Карие' },
          { key: 'Обувь', value: 'EU 45' },
          { key: 'Татуировки', value: 'Нет' },
          { key: 'Гражданство', value: 'Франция' },
          { key: 'Базируется', value: 'Китай' },
          { key: 'Доступность', value: 'Вся Азия · Открыт к поездкам' },
        ],
      },
      portfolio: {
        sectionLabel: 'Портфолио',
        title: 'Работы',
        description:
          'Коммерческая, фитнес-, редакционная, лайфстайл-съёмка. Универсальность для азиатских рынков.',
        items: [
          { label: 'Редакционное', category: 'Редакционное' },
          { label: 'Коммерческое', category: 'Коммерческое' },
          { label: 'Фитнес', category: 'Фитнес' },
          { label: 'Лайфстайл', category: 'Лайфстайл' },
          { label: 'Мода', category: 'Мода' },
        ],
      },
      swimming: {
        sectionLabel: 'Спорт',
        title: 'Тренирован на высшем уровне. Создан для результатов.',
        paragraphs: [
          'Шестнадцать лет соревновательного плавания сформировали мой подход ко всему — дисциплина, последовательность и одержимость маргинальными улучшениями. Физический результат — тело, созданное для выносливости и силы.',
          'Этот бэкграунд даёт преимущество в фитнес-моделинге и спортивных кампаниях, которое большинство моделей просто не могут повторить.',
        ],
        photoPlaceholder: 'Фото',
        achievements: [
          '16+ лет соревновательного плавания',
          'Представитель сборной Франции',
          'Элитная выносливость и физическая подготовка',
          'Гибкость по весу: от 87 до 100 кг в зависимости от кампании',
          'Доступен для фитнес-, спортивных и атлетических брендовых кампаний',
        ],
      },
      contact: {
        eyebrow: 'Открыт для букинга',
        title: 'Давайте создадим что-то настоящее.',
        subtitle:
          'Агентства, кастинг-директора, фотографы, бренды. Вся Азия. Готов сейчас.',
        emailButton: 'Написать письмо',
        instagramButton: 'Instagram',
        email: 'tristangrech.nat@gmail.com',
        info: {
          location: { label: 'Местоположение', value: 'Китай' },
          email: { label: 'Эл. почта', value: 'tristangrech.nat@gmail.com' },
          nationality: {
            label: 'Гражданство',
            value: 'Франция · Паспорт ЕС',
          },
          availability: {
            label: 'Доступность',
            value: 'Открыт к проектам по всему миру',
          },
        },
      },
    },
  },

  zh: {
    nav: {
      home: '首页',
      about: '关于',
      projects: '项目',
      contact: '联系',
      modelling: '模特',
    },
    hero: {
      badge: '创业者 · 开发者 · 中国商务',
      bio: '法国创业者，马耳他血统，常驻中国。通过技术、网站开发和务实的商业方法，打造连接欧洲与亚洲的国际项目。',
      cta: {
        projects: '我的项目',
        contact: '联系我',
      },
      expertise: [
        {
          title: '网站开发',
          description: '全栈开发、AI集成以及面向全球企业的现代网络解决方案',
        },
        {
          title: '中国商务',
          description: '与中国市场的直接联系——采购、谈判、物流和市场进入',
        },
        {
          title: 'AI与自动化',
          description: '构建智能工具和自动化流程，优化企业运营效率',
        },
        {
          title: '国际咨询',
          description: '以实战商业咨询连接欧洲和亚洲市场',
        },
      ],
    },
    stats: [
      { value: '6+', label: '活跃项目' },
      { value: '中国', label: '常驻地' },
      { value: '4', label: '语言' },
    ],
    now: {
      title: '当前动态',
      cards: [
        {
          title: '网站开发与AI项目',
          description:
            '正在开发SaaS产品和AI驱动的工具——从YouTube脚本生成器到游泳教练平台。',
        },
        {
          title: '常驻中国',
          description:
            '在中国商业中心工作和生活。拥有深厚的本地人脉网络和对市场的深入了解。',
        },
        {
          title: '中国商务合作伙伴',
          description:
            '全流程支持：采购、质量控制、物流、谈判以及为国际企业提供市场进入服务。',
        },
      ],
    },
    common: {
      visitWebsite: '访问网站',
      inDevelopment: '开发中',
    },
    projects: {
      label: '项目',
      title: '我正在做什么',
      description: '涉及AI、网站开发、教育和生活方式的活跃项目。',
      items: [
        {
          name: 'FULLHAURA',
          description:
            'AI代理机构，为欧洲和亚洲的企业打造数字工具、自动化流程和网络解决方案。从API集成到全栈网站开发。',
          tags: ['AI代理', '网站开发', '自动化'],
          status: '活跃中',
          url: '#',
          gradient: 'from-cyan-500 to-blue-600',
          image: '',
        },
        {
          name: 'Sumera.io',
          description:
            'AI驱动的YouTube脚本生成器，拥有独创的5阶段流水线。10分钟内将视频创意转化为可以直接拍摄的脚本。',
          tags: ['SaaS', 'AI', '创作者工具'],
          status: '已上线',
          url: 'https://sumera.io',
          gradient: 'from-lime-400 to-emerald-500',
          image: '/images/sumera-cover.png',
        },
        {
          name: 'Fullink.io',
          description:
            '面向创作者的一站式链接聚合平台。精美主题、数据分析、Stripe支付集成和极速性能。永久免费。',
          tags: ['SaaS', '创作者工具', 'Link-in-Bio'],
          status: '已上线',
          url: 'https://www.fullink.io',
          gradient: 'from-violet-500 to-indigo-600',
          image: '',
        },
        {
          name: 'Geo-Front',
          description:
            '实时地缘政治监控平台，追踪伊朗/美国冲突，提供实时、准确的更新。在快速变化的局势中提供清晰信息。',
          tags: ['地缘政治', '实时数据', '新闻'],
          status: '已上线',
          url: 'https://geo-front.com',
          gradient: 'from-red-600 to-slate-800',
          image: '',
        },
        {
          name: 'SwimForm.ai',
          description:
            'AI游泳教练平台。上传您的视频，获取专业级别的技术反馈。基于16年以上的竞技经验打造。',
          tags: ['体育科技', 'AI', '教练'],
          status: '开发中',
          url: '',
          gradient: 'from-amber-400 to-orange-500',
          image: '',
        },
      ],
    },
    pastProjects: {
      label: '其他项目',
      title: '过往与副业项目',
      description: '其他探索与尝试。',
      items: [
        {
          name: 'MoneyLabs',
          description:
            'AI语音生成在线课程，教授如何实现被动收入。注重实践、以变现为导向的教育。',
          tags: ['教育', 'AI'],
          gradient: 'from-violet-500 to-purple-600',
        },
        {
          name: 'Bali Girls Trip',
          description:
            '巴厘岛高端女性旅行管家服务。精心策划的行程和组团旅行体验。',
          tags: ['旅行', '生活方式'],
          gradient: 'from-pink-400 to-rose-500',
        },
      ],
    },
    about: {
      label: '个人背景',
      title: '自律塑造一切。',
      paragraphs: [
        '生于法国，拥有马耳他血统。我的人生始终建立在体育卓越与创业动力的交汇点上。十六年的竞技游泳——包括法国国家队的经历——为我每一个项目奠定了坚实的基础。',
        '现常驻中国，我将深厚的本地市场知识与网站开发和AI的技术能力相结合，打造产品并帮助企业弥合欧洲与亚洲之间的差距。',
        '精通多语言，适应力强，始终在创造新事物。',
      ],
      languages: ['Français', 'English', 'Português', 'Русский'],
      stats: [
        { value: '16+', label: '年竞技游泳经历' },
        { value: '4', label: '种语言' },
        { value: '6+', label: '个活跃项目' },
        { value: '∞', label: '职业精神' },
      ],
    },
    contact: {
      label: '联系方式',
      title: '有项目想法？',
      subtitle: '无论是网站开发、AI解决方案还是中国商务——我随时准备沟通。',
      buttons: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: '发送邮件',
        wechat: '微信',
        wechatCopied: 'ID已复制！',
      },
      wechatId: 'wxid_llgnw6mtfc2522',
      info: {
        location: '中国',
        email: 'tristangrech.nat@gmail.com',
        nationality: '法国 · 欧盟护照',
        availability: '接受全球项目合作',
      },
    },
    footer: {
      tagline: '创业者 · 开发者 · 中国',
      copyright: '© 2026 Tristan Grech。保留所有权利。',
      links: {
        about: '关于',
        projects: '项目',
        contact: '联系',
        modelling: '模特',
      },
    },
    modelling: {
      hero: {
        label: '模特 · 运动员',
        firstName: 'Tristan',
        lastName: 'Grech',
        description:
          '法国 · 马耳他血统\n186 cm · 常驻中国\n前法国国家游泳队成员',
        photoPlaceholder: '照片',
        scrollHint: '滚动',
      },
      specs: {
        sectionLabel: '模特参数',
        items: [
          { key: '身高', value: '186 cm' },
          { key: '体重', value: '87–100 kg' },
          { key: '发色', value: '深棕色' },
          { key: '瞳色', value: '棕色' },
          { key: '鞋码', value: 'EU 45' },
          { key: '纹身', value: '无' },
          { key: '国籍', value: '法国' },
          { key: '常驻地', value: '中国' },
          { key: '可用性', value: '亚洲范围 · 可出差' },
        ],
      },
      portfolio: {
        sectionLabel: '作品集',
        title: '作品',
        description: '商业、健身、编辑、生活方式。为亚洲市场打造的多功能性。',
        items: [
          { label: '编辑', category: '编辑' },
          { label: '商业', category: '商业' },
          { label: '健身', category: '健身' },
          { label: '生活方式', category: '生活方式' },
          { label: '时尚', category: '时尚' },
        ],
      },
      swimming: {
        sectionLabel: '体育背景',
        title: '在最高水平训练。为表现而生。',
        paragraphs: [
          '十六年的竞技游泳塑造了我对一切事物的态度——自律、坚持以及对细微进步的执着。其物理成果是一个为耐力和力量而打造的体魄。',
          '这样的背景在健身模特和运动广告中提供了大多数模特无法复制的优势。',
        ],
        photoPlaceholder: '照片',
        achievements: [
          '16年以上竞技游泳经历',
          '法国国家队代表',
          '精英级别的耐力与体能训练',
          '体重灵活：87至100公斤，可根据活动需求调整',
          '可接受健身、运动装备和体育品牌广告',
        ],
      },
      contact: {
        eyebrow: '开放预约',
        title: '让我们创造真实的作品。',
        subtitle:
          '经纪公司、选角导演、摄影师、品牌。覆盖亚洲全境。随时准备就绪。',
        emailButton: '发送邮件',
        instagramButton: 'Instagram',
        email: 'tristangrech.nat@gmail.com',
        info: {
          location: { label: '位置', value: '中国' },
          email: { label: '邮箱', value: 'tristangrech.nat@gmail.com' },
          nationality: { label: '国籍', value: '法国 · 欧盟护照' },
          availability: { label: '可用性', value: '亚洲范围 · 可出差' },
        },
      },
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عنّي',
      projects: 'المشاريع',
      contact: 'تواصل',
      modelling: 'عارض أزياء',
    },
    hero: {
      badge: 'رائد أعمال · مطوّر · أعمال في الصين',
      bio: 'رائد أعمال فرنسي من أصول مالطية مقيم في الصين. أبني مشاريع دولية تربط أوروبا وآسيا من خلال التكنولوجيا وتطوير الويب ونهج عملي في الأعمال.',
      cta: {
        projects: 'مشاريعي',
        contact: 'تواصل معي',
      },
      expertise: [
        {
          title: 'تطوير الويب',
          description: 'تطوير متكامل، تكامل الذكاء الاصطناعي، وحلول ويب حديثة للشركات حول العالم',
        },
        {
          title: 'الأعمال في الصين',
          description: 'روابط مباشرة مع السوق الصيني — التوريد، المفاوضات، اللوجستيات، ودخول السوق',
        },
        {
          title: 'الذكاء الاصطناعي والأتمتة',
          description: 'بناء أدوات ذكية وأتمتة تُبسّط عمليات الأعمال',
        },
        {
          title: 'الاستشارات الدولية',
          description: 'ربط الأسواق الأوروبية والآسيوية من خلال استشارات أعمال عملية',
        },
      ],
    },
    stats: [
      { value: '+6', label: 'مشاريع نشطة' },
      { value: 'الصين', label: 'مقيم في' },
      { value: '4', label: 'لغات' },
    ],
    now: {
      title: 'حالياً',
      cards: [
        {
          title: 'تطوير الويب ومشاريع الذكاء الاصطناعي',
          description: 'بناء منتجات SaaS وأدوات مدعومة بالذكاء الاصطناعي — من مولّدات نصوص يوتيوب إلى منصات تدريب السباحة.',
        },
        {
          title: 'مقيم في الصين',
          description: 'أعيش وأعمل من مراكز الأعمال في الصين. شبكة محلية عميقة وفهم شامل للسوق.',
        },
        {
          title: 'شريك أعمال في الصين',
          description: 'دعم شامل: التوريد، مراقبة الجودة، اللوجستيات، المفاوضات، ودخول السوق للشركات الدولية.',
        },
      ],
    },
    common: {
      visitWebsite: 'زيارة الموقع',
      inDevelopment: 'قيد التطوير',
    },
    projects: {
      label: 'المشاريع',
      title: 'ماذا أبني',
      description: 'مشاريع نشطة تشمل الذكاء الاصطناعي وتطوير الويب والتعليم ونمط الحياة.',
      items: [
        {
          name: 'FULLHAURA',
          description: 'وكالة ذكاء اصطناعي تبني أدوات رقمية وأتمتة وحلول ويب للشركات في أوروبا وآسيا. من تكامل API إلى تطوير ويب متكامل.',
          tags: ['وكالة AI', 'تطوير ويب', 'أتمتة'],
          status: 'نشط',
          url: '#',
          gradient: 'from-cyan-500 to-blue-600',
          image: '',
        },
        {
          name: 'Sumera.io',
          description: 'مولّد نصوص يوتيوب مدعوم بالذكاء الاصطناعي بخط إنتاج خماسي المراحل. يحوّل أفكار الفيديو إلى نصوص جاهزة للإنتاج في 10 دقائق.',
          tags: ['SaaS', 'AI', 'أدوات المبدعين'],
          status: 'مباشر',
          url: 'https://sumera.io',
          gradient: 'from-lime-400 to-emerald-500',
          image: '/images/sumera-cover.png',
        },
        {
          name: 'Fullink.io',
          description: 'منصة رابط في البايو شاملة للمبدعين. سمات جميلة، تحليلات، تكامل دفع عبر Stripe، وأداء فائق السرعة. مجاني للأبد.',
          tags: ['SaaS', 'أدوات المبدعين', 'Link-in-Bio'],
          status: 'مباشر',
          url: 'https://www.fullink.io',
          gradient: 'from-violet-500 to-indigo-600',
          image: '',
        },
        {
          name: 'Geo-Front',
          description: 'منصة مراقبة جيوسياسية مباشرة لتتبع النزاع بين إيران والولايات المتحدة بتحديثات دقيقة وفورية. مصممة للوضوح في ظل أوضاع سريعة التغيّر.',
          tags: ['جيوسياسة', 'بيانات مباشرة', 'أخبار'],
          status: 'مباشر',
          url: 'https://geo-front.com',
          gradient: 'from-red-600 to-slate-800',
          image: '',
        },
        {
          name: 'SwimForm.ai',
          description: 'منصة تدريب سباحة مدعومة بالذكاء الاصطناعي. ارفع فيديوهاتك واحصل على تقييم تقني على مستوى النخبة. مبني على أكثر من 16 عاماً من الخبرة التنافسية.',
          tags: ['تقنية رياضية', 'AI', 'تدريب'],
          status: 'قيد التطوير',
          url: '',
          gradient: 'from-amber-400 to-orange-500',
          image: '',
        },
      ],
    },
    pastProjects: {
      label: 'مشاريع أخرى',
      title: 'مشاريع سابقة وجانبية',
      description: 'مشاريع واستكشافات أخرى على طول الطريق.',
      items: [
        {
          name: 'MoneyLabs',
          description: 'دورة تعليمية عبر الإنترنت لتعليم توليد الصوت بالذكاء الاصطناعي للدخل السلبي. تعليم عملي يركز على تحقيق الأرباح.',
          tags: ['تعليم', 'AI'],
          gradient: 'from-violet-500 to-purple-600',
        },
        {
          name: 'Bali Girls Trip',
          description: 'خدمة سفر فاخرة للنساء إلى بالي. رحلات منسّقة وتجارب سفر جماعية.',
          tags: ['سفر', 'نمط حياة'],
          gradient: 'from-pink-400 to-rose-500',
        },
      ],
    },
    about: {
      label: 'نبذة عنّي',
      title: 'الانضباط يصنع كل شيء.',
      paragraphs: [
        'وُلدت في فرنسا بجذور مالطية. بنيت حياتي عند تقاطع التميّز البدني والدافع الريادي. ستة عشر عاماً من السباحة التنافسية — بما في ذلك المنتخب الفرنسي — أسست القاعدة التي أحملها لكل مشروع.',
        'الآن مقيم في الصين، أجمع بين المعرفة العميقة بالسوق المحلي والمهارات التقنية في تطوير الويب والذكاء الاصطناعي لبناء المنتجات ومساعدة الشركات على سد الفجوة بين أوروبا وآسيا.',
        'متعدد اللغات، قادر على التكيّف، ودائماً أبني شيئاً جديداً.',
      ],
      languages: ['Français', 'English', 'Português', 'Русский'],
      stats: [
        { value: '+16', label: 'سنة سباحة تنافسية' },
        { value: '4', label: 'لغات' },
        { value: '+6', label: 'مشاريع نشطة' },
        { value: '∞', label: 'أخلاقيات العمل' },
      ],
    },
    contact: {
      label: 'تواصل',
      title: 'لديك مشروع في ذهنك؟',
      subtitle: 'سواء كان تطوير ويب أو حلول ذكاء اصطناعي أو أعمال في الصين — أنا جاهز للحديث.',
      buttons: {
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
        email: 'أرسل بريداً',
        wechat: 'WeChat',
        wechatCopied: 'تم نسخ المعرّف!',
      },
      wechatId: 'wxid_llgnw6mtfc2522',
      info: {
        location: 'الصين',
        email: 'tristangrech.nat@gmail.com',
        nationality: 'فرنسي · جواز سفر أوروبي',
        availability: 'متاح لمشاريع حول العالم',
      },
    },
    footer: {
      tagline: 'رائد أعمال · مطوّر · الصين',
      copyright: '© 2026 Tristan Grech. جميع الحقوق محفوظة.',
      links: {
        about: 'عنّي',
        projects: 'المشاريع',
        contact: 'تواصل',
        modelling: 'عارض أزياء',
      },
    },
    modelling: {
      hero: {
        label: 'عارض أزياء · رياضي',
        firstName: 'Tristan',
        lastName: 'Grech',
        description: 'فرنسي · أصول مالطية\n186 سم · مقيم في الصين\nعضو سابق في المنتخب الفرنسي للسباحة',
        photoPlaceholder: 'صورة',
        scrollHint: 'مرّر',
      },
      specs: {
        sectionLabel: 'مواصفات العارض',
        items: [
          { key: 'الطول', value: '186 سم' },
          { key: 'الوزن', value: '87–100 كغ' },
          { key: 'الشعر', value: 'بني داكن' },
          { key: 'العيون', value: 'بنّية' },
          { key: 'الحذاء', value: 'EU 45' },
          { key: 'الوشوم', value: 'لا يوجد' },
          { key: 'الجنسية', value: 'فرنسي' },
          { key: 'مقيم في', value: 'الصين' },
          { key: 'متاح في', value: 'عموم آسيا · مستعد للسفر' },
        ],
      },
      portfolio: {
        sectionLabel: 'معرض الأعمال',
        title: 'الأعمال',
        description: 'تجاري، لياقة، تحريري، نمط حياة. مُصمّم للتنوع في الأسواق الآسيوية.',
        items: [
          { label: 'تحريري', category: 'تحريري' },
          { label: 'تجاري', category: 'تجاري' },
          { label: 'لياقة', category: 'لياقة' },
          { label: 'نمط حياة', category: 'نمط حياة' },
          { label: 'أزياء', category: 'أزياء' },
        ],
      },
      swimming: {
        sectionLabel: 'الرياضة',
        title: 'تدرّبت على أعلى مستوى. مبني للأداء.',
        paragraphs: [
          'ستة عشر عاماً من السباحة التنافسية شكّلت نهجي في كل شيء — الانضباط والاتساق والهوس بالتحسين المستمر. النتيجة البدنية هي جسم مبني للتحمّل والقوة.',
          'هذه الخلفية تمنح ميزة في عروض اللياقة والحملات الرياضية لا يستطيع معظم العارضين تكرارها.',
        ],
        photoPlaceholder: 'صورة',
        achievements: [
          'أكثر من 16 عاماً من السباحة التنافسية',
          'ممثل المنتخب الفرنسي',
          'لياقة بدنية وتكييف على مستوى النخبة',
          'مرونة في الوزن: 87 إلى 100 كغ حسب متطلبات الحملة',
          'متاح لحملات اللياقة والملابس الرياضية والعلامات التجارية الرياضية',
        ],
      },
      contact: {
        eyebrow: 'متاح للحجوزات',
        title: 'لنصنع شيئاً حقيقياً.',
        subtitle: 'وكالات، مخرجو اختيار الممثلين، مصوّرون، علامات تجارية. عموم آسيا. جاهز الآن.',
        emailButton: 'أرسل بريداً',
        instagramButton: 'Instagram',
        email: 'tristangrech.nat@gmail.com',
        info: {
          location: { label: 'الموقع', value: 'الصين' },
          email: { label: 'البريد', value: 'tristangrech.nat@gmail.com' },
          nationality: { label: 'الجنسية', value: 'فرنسي · جواز سفر أوروبي' },
          availability: { label: 'متاح في', value: 'عموم آسيا · مستعد للسفر' },
        },
      },
    },
  },
};

export const translations = translationsData;
