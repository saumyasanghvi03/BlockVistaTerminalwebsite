export type Language = 'en' | 'hi' | 'gu' | 'mr';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      features: 'Features',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    // Hero Section
    hero: {
      title: 'AI-Powered Trading for',
      titleHighlight: 'Indian Stock Market',
      description: 'Real-time data from NSE and BSE, AI-driven analysis, and portfolio management. Designed for Indian traders with SEBI compliance.',
      startTrial: 'Start Free Trial',
      watchDemo: 'Watch Demo',
      activeTraders: 'Active Traders',
      dailyVolume: 'Daily Market Volume',
      uptime: 'Uptime',
    },
    // Features Section
    features: {
      title: 'Powerful Features for Indian Traders',
      subtitle: 'Everything you need to succeed in NSE, BSE, and F&O markets.',
      nseData: 'NSE & BSE Real-Time Data',
      nseDataDesc: 'Instant market data from NSE and BSE with live stock prices and trading volumes.',
      aiAnalysis: 'AI-Driven Analysis',
      aiAnalysisDesc: 'Machine learning-powered technical analysis and stock recommendations.',
      foSupport: 'F&O & Derivatives',
      foSupportDesc: 'Advanced trading tools for Futures, Options, and other derivatives.',
      sebiCompliance: 'SEBI Compliance',
      sebiComplianceDesc: 'Secure trading with full SEBI compliance, KYC verification, and AML checks.',
      portfolio: 'Portfolio Management',
      portfolioDesc: 'Track all holdings, calculate P&L, and get tax reports for Indian tax filing.',
      alerts: 'Smart Alerts',
      alertsDesc: 'Set custom alerts for price, volume, and technical indicators.',
    },
    // Key Capabilities
    capabilities: {
      title: 'Built for Indian Traders',
      items: [
        'Real-time market data from NSE and BSE',
        'Trading in Equity, F&O, and Commodities',
        'SEBI compliance and secure transactions',
        'Indian tax reporting and P&L tracking',
        '24x7 customer support in multiple languages',
        'Integrated with Indian brokers',
      ],
    },
    // Trading Hours
    tradingHours: {
      title: 'Indian Market Hours',
      subtitle: 'Support for all NSE and BSE trading sessions',
      nseEquity: 'NSE - Equity',
      nseEquityHours: {
        preOpen: 'Pre-Open: 09:00 - 09:15 AM',
        normal: 'Normal Session: 09:15 AM - 03:30 PM',
        postClose: 'Post Close: 03:40 - 04:00 PM',
      },
      nsefo: 'NSE - F&O',
      nseFoHours: {
        preOpen: 'Pre-Open: 09:00 - 09:15 AM',
        normal: 'Normal Session: 09:15 AM - 03:30 PM',
        afterMarket: 'After Market: 03:40 - 11:30 PM',
      },
      bseEquity: 'BSE - Equity',
      bseEquityHours: {
        preOpen: 'Pre-Open: 09:00 - 09:15 AM',
        normal: 'Normal Session: 09:15 AM - 03:30 PM',
        postClose: 'Post Close: 03:40 - 04:00 PM',
      },
      mcx: 'MCX - Commodities',
      mcxHours: {
        morning: 'Morning Session: 09:00 AM - 05:00 PM',
        evening: 'Evening Session: 05:15 - 11:30 PM',
        night: 'Night Session: 11:45 PM - 05:00 AM',
      },
    },
    // Pricing
    pricing: {
      title: 'Simple & Transparent Pricing',
      subtitle: 'Choose the plan that fits your trading needs',
      basic: 'Basic',
      basicDesc: 'For individual traders',
      pro: 'Pro',
      proDesc: 'For active traders and analysts',
      enterprise: 'Enterprise',
      enterpriseDesc: 'For institutions and brokers',
      perMonth: '/month',
      customPricing: 'Custom pricing',
      getStarted: 'Get Started',
      features: {
        basic: [
          'NSE/BSE real-time data',
          'Basic charting tools',
          'Portfolio tracking',
          'Email support',
          'Up to 5 watchlists',
        ],
        pro: [
          'Everything in Basic',
          'AI-driven analysis',
          'F&O trading support',
          'Priority support',
          'Unlimited watchlists',
          'Custom alerts',
        ],
        enterprise: [
          'Everything in Pro',
          'White-label solution',
          'Dedicated account manager',
          'Custom integrations',
          'SLA guarantee',
          'Advanced compliance tools',
        ],
      },
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about BlockVista Terminal',
      questions: [
        {
          q: 'Does BlockVista support both NSE and BSE?',
          a: 'Yes, BlockVista Terminal fully supports NSE, BSE, MCX, and NCDEX exchanges.',
        },
        {
          q: 'Is it SEBI compliant?',
          a: 'Absolutely. BlockVista Terminal is fully SEBI compliant and meets all regulatory requirements.',
        },
        {
          q: 'Can I trade F&O?',
          a: 'Yes, Pro and Enterprise plans provide full support for Futures and Options trading on NSE and MCX.',
        },
        {
          q: 'Is there tax reporting?',
          a: 'Yes, BlockVista automatically calculates your P&L and provides detailed reports for Indian tax filing.',
        },
        {
          q: 'Is there multilingual support?',
          a: 'Yes, BlockVista is available in English, Hindi, Gujarati, and Marathi with 24x7 support in all languages.',
        },
        {
          q: 'How do I start?',
          a: 'Fill out the early access form on BlockVista AI to join our waitlist. For pilot programs and enterprise requirements, book a meeting with Team BlockVista for a personalized demo and onboarding.',
        },
      ],
    },
    // CTA
    cta: {
      title: 'Ready to Transform Your Trading?',
      subtitle: 'Join thousands of Indian traders using BlockVista Terminal to make smarter decisions.',
      startTrial: 'Start Your Free Trial',
      scheduleDemo: 'Schedule Demo',
    },
    // Footer
    footer: {
      tagline: 'AI-powered trading platform for Indian stock market traders.',
      product: 'Product',
      productLinks: ['Features', 'Pricing', 'API Docs'],
      company: 'Company',
      companyLinks: ['About', 'Blog', 'Contact'],
      legal: 'Legal',
      legalLinks: ['Privacy', 'Terms', 'Security'],
      copyright: '© 2024 BlockVista Terminal. All rights reserved.',
      social: ['Twitter', 'LinkedIn', 'GitHub'],
    },
  },
  hi: {
    // Navigation
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      features: 'विशेषताएं',
      pricing: 'मूल्य निर्धारण',
      faq: 'सामान्य प्रश्न',
      contact: 'संपर्क करें',
      getStarted: 'शुरुआत करें',
    },
    // Hero Section
    hero: {
      title: 'भारतीय शेयर बाजार के लिए',
      titleHighlight: 'AI-संचालित ट्रेडिंग',
      description: 'NSE और BSE से रीयल-टाइम डेटा, AI-संचालित विश्लेषण, और पोर्टफोलियो प्रबंधन। SEBI अनुपालन के साथ भारतीय ट्रेडर्स के लिए डिज़ाइन किया गया।',
      startTrial: 'फ्री ट्रायल शुरू करें',
      watchDemo: 'डेमो देखें',
      activeTraders: 'सक्रिय ट्रेडर्स',
      dailyVolume: 'दैनिक बाजार वॉल्यूम',
      uptime: 'अपटाइम',
    },
    // Features Section
    features: {
      title: 'भारतीय ट्रेडर्स के लिए शक्तिशाली विशेषताएं',
      subtitle: 'NSE, BSE, और F&O बाजारों में सफल ट्रेडिंग के लिए आवश्यक सभी उपकरण।',
      nseData: 'NSE और BSE रीयल-टाइम डेटा',
      nseDataDesc: 'NSE और BSE से तुरंत मार्केट डेटा, स्टॉक प्राइस, और ट्रेडिंग वॉल्यूम।',
      aiAnalysis: 'AI-संचालित विश्लेषण',
      aiAnalysisDesc: 'मशीन लर्निंग से संचालित तकनीकी विश्लेषण और स्टॉक सिफारिशें।',
      foSupport: 'F&O और डेरिवेटिव्स',
      foSupportDesc: 'फ्यूचर्स, ऑप्शन्स, और अन्य डेरिवेटिव्स के लिए उन्नत ट्रेडिंग टूल्स।',
      sebiCompliance: 'SEBI अनुपालन',
      sebiComplianceDesc: 'पूर्ण SEBI अनुपालन, KYC सत्यापन, और AML जांच के साथ सुरक्षित ट्रेडिंग।',
      portfolio: 'पोर्टफोलियो प्रबंधन',
      portfolioDesc: 'आपके सभी होल्डिंग्स को ट्रैक करें, लाभ/हानि की गणना करें, और कर रिपोर्ट प्राप्त करें।',
      alerts: 'स्मार्ट अलर्ट्स',
      alertsDesc: 'कीमत, वॉल्यूम, और तकनीकी संकेतों के लिए कस्टम अलर्ट सेट करें।',
    },
    // Key Capabilities
    capabilities: {
      title: 'भारतीय ट्रेडर्स के लिए बनाया गया',
      items: [
        'NSE और BSE से रीयल-टाइम मार्केट डेटा',
        'F&O, इक्विटी, और कमोडिटीज में ट्रेडिंग',
        'SEBI अनुपालन और सुरक्षित लेनदेन',
        'भारतीय कर रिपोर्टिंग और लाभ/हानि ट्रैकिंग',
        '24x7 हिंदी भाषा में ग्राहक सहायता',
        'भारतीय ब्रोकरों के साथ एकीकृत',
      ],
    },
    // Trading Hours
    tradingHours: {
      title: 'भारतीय बाजार के समय',
      subtitle: 'NSE और BSE के सभी ट्रेडिंग सेशन के लिए समर्थन',
      nseEquity: 'NSE - इक्विटी',
      nseEquityHours: {
        preOpen: 'प्री-ओपन: 09:00 - 09:15 AM',
        normal: 'नॉर्मल सेशन: 09:15 AM - 03:30 PM',
        postClose: 'पोस्ट क्लोज: 03:40 - 04:00 PM',
      },
      nsefo: 'NSE - F&O',
      nseFoHours: {
        preOpen: 'प्री-ओपन: 09:00 - 09:15 AM',
        normal: 'नॉर्मल सेशन: 09:15 AM - 03:30 PM',
        afterMarket: 'आफ्टर मार्केट: 03:40 - 11:30 PM',
      },
      bseEquity: 'BSE - इक्विटी',
      bseEquityHours: {
        preOpen: 'प्री-ओपन: 09:00 - 09:15 AM',
        normal: 'नॉर्मल सेशन: 09:15 AM - 03:30 PM',
        postClose: 'पोस्ट क्लोज: 03:40 - 04:00 PM',
      },
      mcx: 'MCX - कमोडिटीज',
      mcxHours: {
        morning: 'सुबह सेशन: 09:00 AM - 05:00 PM',
        evening: 'शाम सेशन: 05:15 - 11:30 PM',
        night: 'नाइट सेशन: 11:45 PM - 05:00 AM',
      },
    },
    // Pricing
    pricing: {
      title: 'सरल और पारदर्शी मूल्य निर्धारण',
      subtitle: 'अपनी ट्रेडिंग आवश्यकताओं के अनुसार योजना चुनें',
      basic: 'बेसिक',
      basicDesc: 'व्यक्तिगत ट्रेडर्स के लिए',
      pro: 'प्रो',
      proDesc: 'सक्रिय ट्रेडर्स के लिए',
      enterprise: 'एंटरप्राइज',
      enterpriseDesc: 'संस्थाओं और ब्रोकरों के लिए',
      perMonth: '/माह',
      customPricing: 'कस्टम मूल्य',
      getStarted: 'शुरुआत करें',
      features: {
        basic: [
          'NSE/BSE रीयल-टाइम डेटा',
          'बेसिक चार्टिंग टूल्स',
          'पोर्टफोलियो ट्रैकिंग',
          'ईमेल सहायता',
          '5 वॉचलिस्ट तक',
        ],
        pro: [
          'सभी बेसिक सुविधाएं',
          'AI-संचालित विश्लेषण',
          'F&O ट्रेडिंग सपोर्ट',
          'प्राथमिकता सहायता',
          'असीमित वॉचलिस्ट',
          'कस्टम अलर्ट्स',
        ],
        enterprise: [
          'सभी प्रो सुविधाएं',
          'व्हाइट-लेबल समाधान',
          'समर्पित खाता प्रबंधक',
          'कस्टम एकीकरण',
          'SLA गारंटी',
          'उन्नत अनुपालन उपकरण',
        ],
      },
    },
    // FAQ
    faq: {
      title: 'सामान्य प्रश्न',
      subtitle: 'BlockVista Terminal के बारे में आपको जो कुछ भी जानना चाहिए',
      questions: [
        {
          q: 'क्या BlockVista NSE और BSE दोनों को सपोर्ट करता है?',
          a: 'हाँ, BlockVista Terminal NSE, BSE, MCX, और NCDEX सहित सभी भारतीय एक्सचेंजों को पूरी तरह से सपोर्ट करता है।',
        },
        {
          q: 'क्या यह SEBI अनुपालन है?',
          a: 'बिल्कुल। BlockVista Terminal पूरी तरह से SEBI अनुपालन है और सभी नियामक आवश्यकताओं को पूरा करता है।',
        },
        {
          q: 'क्या मैं F&O ट्रेडिंग कर सकता हूँ?',
          a: 'हाँ, प्रो और एंटरप्राइज योजनाएं NSE और MCX पर फ्यूचर्स और ऑप्शन्स ट्रेडिंग के लिए पूर्ण समर्थन प्रदान करती हैं।',
        },
        {
          q: 'क्या कर रिपोर्टिंग सुविधा है?',
          a: 'हाँ, BlockVista स्वचालित रूप से आपके लाभ/हानि की गणना करता है और भारतीय कर रिपोर्टिंग के लिए विस्तृत रिपोर्ट प्रदान करता है।',
        },
        {
          q: 'क्या बहुभाषी समर्थन है?',
          a: 'हाँ, BlockVista अंग्रेजी, हिंदी, गुजराती, और मराठी में उपलब्ध है और सभी भाषाओं में 24x7 ग्राहक सहायता प्रदान करता है।',
        },
        {
          q: 'मैं कैसे शुरू करूं?',
          a: 'हमारी वेटलिस्ट में शामिल होने के लिए BlockVista AI पर अर्ली एक्सेस फॉर्म भरें। पायलट प्रोग्राम और एंटरप्राइज आवश्यकताओं के लिए, व्यक्तिगत डेमो और ऑनबोर्डिंग के लिए टीम BlockVista के साथ मीटिंग बुक करें।',
        },
      ],
    },
    // CTA
    cta: {
      title: 'आपकी ट्रेडिंग को अगले स्तर पर ले जाएं',
      subtitle: 'हजारों भारतीय ट्रेडर्स BlockVista Terminal का उपयोग करके बेहतर निर्णय ले रहे हैं।',
      startTrial: 'फ्री ट्रायल शुरू करें',
      scheduleDemo: 'डेमो शेड्यूल करें',
    },
    // Footer
    footer: {
      tagline: 'भारतीय ट्रेडर्स के लिए AI-संचालित ट्रेडिंग प्लेटफॉर्म।',
      product: 'उत्पाद',
      productLinks: ['विशेषताएं', 'मूल्य निर्धारण', 'API दस्तावेज़'],
      company: 'कंपनी',
      companyLinks: ['हमारे बारे में', 'ब्लॉग', 'संपर्क करें'],
      legal: 'कानूनी',
      legalLinks: ['गोपनीयता', 'शर्तें', 'सुरक्षा'],
      copyright: '© 2024 BlockVista Terminal. सर्वाधिकार सुरक्षित।',
      social: ['Twitter', 'LinkedIn', 'GitHub'],
    },
  },
  gu: {
    // Navigation
    nav: {
      home: 'હોમ',
      about: 'આપણા વિશે',
      features: 'વિશેષતાઓ',
      pricing: 'કિંમત',
      faq: 'સામાન્ય પ્રશ્નો',
      contact: 'સંપર્ક કરો',
      getStarted: 'શરૂ કરો',
    },
    // Hero Section
    hero: {
      title: 'ભારતીય શેર બજાર માટે',
      titleHighlight: 'AI-સંચાલિત ટ્રેડિંગ',
      description: 'NSE અને BSE થી રીયલ-ટાઇમ ડેટા, AI-સંચાલિત વિશ્લેષણ, અને પોર્ટફોલિયો વ્યવસ્થાપન। SEBI કમ્પ્લાયન્સ સાથે ભારતીય ટ્રેડર્સ માટે ડિઝાઇન કરેલું।',
      startTrial: 'મફત ટ્રાયલ શરૂ કરો',
      watchDemo: 'ડેમો જુઓ',
      activeTraders: 'સક્રિય ટ્રેડર્સ',
      dailyVolume: 'દૈનિક બજાર વોલ્યુમ',
      uptime: 'અપટાઇમ',
    },
    // Features Section
    features: {
      title: 'ભારતીય ટ્રેડર્સ માટે શક્તિશાળી વિશેષતાઓ',
      subtitle: 'NSE, BSE, અને F&O બજારોમાં સફળ ટ્રેડિંગ માટે જરૂરી તમામ સાધનો।',
      nseData: 'NSE અને BSE રીયલ-ટાઇમ ડેટા',
      nseDataDesc: 'NSE અને BSE થી તાત્કાલિક બજાર ડેટા, સ્ટોક ભાવ, અને ટ્રેડિંગ વોલ્યુમ।',
      aiAnalysis: 'AI-સંચાલિત વિશ્લેષણ',
      aiAnalysisDesc: 'મશીન લર્નિંગ દ્વારા સંચાલિત તકનીકી વિશ્લેષણ અને સ્ટોક ભલામણો।',
      foSupport: 'F&O અને ડેરિવેટિવ્સ',
      foSupportDesc: 'ફ્યુચર્સ, ઓપશન્સ, અને અન્ય ડેરિવેટિવ્સ માટે અદ્યતન ટ્રેડિંગ સાધનો।',
      sebiCompliance: 'SEBI કમ્પ્લાયન્સ',
      sebiComplianceDesc: 'સંપૂર્ણ SEBI કમ્પ્લાયન્સ, KYC ચકાસણી, અને AML તપાસ સાથે સુરક્ષિત ટ્રેડિંગ।',
      portfolio: 'પોર્ટફોલિયો વ્યવસ્થાપન',
      portfolioDesc: 'તમારી તમામ હોલ્ડિંગ્સને ટ્રેક કરો, P&L ગણતરી કરો, અને ટેક્સ રિપોર્ટ મેળવો।',
      alerts: 'સ્માર્ટ એલર્ટ્સ',
      alertsDesc: 'કિંમત, વોલ્યુમ, અને તકનીકી સૂચકાંકો માટે કસ્ટમ એલર્ટ્સ સેટ કરો।',
    },
    // Key Capabilities
    capabilities: {
      title: 'ભારતીય ટ્રેડર્સ માટે બનાવેલું',
      items: [
        'NSE અને BSE થી રીયલ-ટાઇમ બજાર ડેટા',
        'ઇક્વિટી, F&O, અને કોમોડિટીમાં ટ્રેડિંગ',
        'SEBI કમ્પ્લાયન્સ અને સુરક્ષિત લેનદેન',
        'ભારતીય ટેક્સ રિપોર્ટિંગ અને P&L ટ્રેકિંગ',
        '24x7 ગુજરાતી ભાષામાં ગ્રાહક સહાય',
        'ભારતીય બ્રોકર્સ સાથે એકીકૃત',
      ],
    },
    // Trading Hours
    tradingHours: {
      title: 'ભારતીય બજાર સમય',
      subtitle: 'NSE અને BSE ના તમામ ટ્રેડિંગ સેશન માટે સમર્થન',
      nseEquity: 'NSE - ઇક્વિટી',
      nseEquityHours: {
        preOpen: 'પ્રી-ઓપન: 09:00 - 09:15 AM',
        normal: 'સામાન્ય સેશન: 09:15 AM - 03:30 PM',
        postClose: 'પોસ્ટ ક્લોઝ: 03:40 - 04:00 PM',
      },
      nsefo: 'NSE - F&O',
      nseFoHours: {
        preOpen: 'પ્રી-ઓપન: 09:00 - 09:15 AM',
        normal: 'સામાન્ય સેશન: 09:15 AM - 03:30 PM',
        afterMarket: 'આફ્ટર માર્કેટ: 03:40 - 11:30 PM',
      },
      bseEquity: 'BSE - ઇક્વિટી',
      bseEquityHours: {
        preOpen: 'પ્રી-ઓપન: 09:00 - 09:15 AM',
        normal: 'સામાન્ય સેશન: 09:15 AM - 03:30 PM',
        postClose: 'પોસ્ટ ક્લોઝ: 03:40 - 04:00 PM',
      },
      mcx: 'MCX - કોમોડિટીઝ',
      mcxHours: {
        morning: 'સવારનું સેશન: 09:00 AM - 05:00 PM',
        evening: 'સાંજનું સેશન: 05:15 - 11:30 PM',
        night: 'રાતનું સેશન: 11:45 PM - 05:00 AM',
      },
    },
    // Pricing
    pricing: {
      title: 'સરળ અને પારદર્શક કિંમત',
      subtitle: 'તમારી ટ્રેડિંગ જરૂરિયાતો અનુસાર યોજના પસંદ કરો',
      basic: 'બેસિક',
      basicDesc: 'વ્યક્તિગત ટ્રેડર્સ માટે',
      pro: 'પ્રો',
      proDesc: 'સક્રિય ટ્રેડર્સ માટે',
      enterprise: 'એન્ટરપ્રાઇઝ',
      enterpriseDesc: 'સંસ્થાઓ અને બ્રોકર્સ માટે',
      perMonth: '/મહિનો',
      customPricing: 'કસ્ટમ કિંમત',
      getStarted: 'શરૂ કરો',
      features: {
        basic: [
          'NSE/BSE રીયલ-ટાઇમ ડેટા',
          'બેસિક ચાર્ટિંગ સાધનો',
          'પોર્ટફોલિયો ટ્રેકિંગ',
          'ઈમેલ સહાય',
          '5 વોચલિસ્ટ સુધી',
        ],
        pro: [
          'બધી બેસિક સુવિધાઓ',
          'AI-સંચાલિત વિશ્લેષણ',
          'F&O ટ્રેડિંગ સપોર્ટ',
          'અગ્રતા સહાય',
          'અમર્યાદિત વોચલિસ્ટ',
          'કસ્ટમ એલર્ટ્સ',
        ],
        enterprise: [
          'બધી પ્રો સુવિધાઓ',
          'વ્હાઇટ-લેબલ સમાધાન',
          'સમર્પિત ખાતા વ્યવસ્થાપક',
          'કસ્ટમ એકીકરણ',
          'SLA ગ્યારંટી',
          'અદ્યતન કમ્પ્લાયન્સ સાધનો',
        ],
      },
    },
    // FAQ
    faq: {
      title: 'સામાન્ય પ્રશ્નો',
      subtitle: 'BlockVista Terminal વિશે તમને જે કંઈ જાણવું હોય તે',
      questions: [
        {
          q: 'શું BlockVista NSE અને BSE બંનેને સપોર્ટ કરે છે?',
          a: 'હા, BlockVista Terminal NSE, BSE, MCX, અને NCDEX સહિત તમામ ભારતીય એક્સચેંજોને સંપૂર્ણ રીતે સપોર્ટ કરે છે।',
        },
        {
          q: 'શું તે SEBI કમ્પ્લાયન્ટ છે?',
          a: 'બિલકુલ. BlockVista Terminal સંપૂર્ણ SEBI કમ્પ્લાયન્ટ છે અને તમામ નિયમક આવશ્યકતાઓ પૂરી કરે છે।',
        },
        {
          q: 'શું હું F&O ટ્રેડિંગ કરી શકું?',
          a: 'હા, પ્રો અને એન્ટરપ્રાઇઝ યોજનાઓ NSE અને MCX પર ફ્યુચર્સ અને ઓપશન્સ ટ્રેડિંગ માટે સંપૂર્ણ સમર્થન પ્રદાન કરે છે।',
        },
        {
          q: 'શું ટેક્સ રિપોર્ટિંગ સુવિધા છે?',
          a: 'હા, BlockVista આપોઆપ તમારા P&L ની ગણતરી કરે છે અને ભારતીય ટેક્સ ફાઇલિંગ માટે વિગતવાર રિપોર્ટ પ્રદાન કરે છે।',
        },
        {
          q: 'શું બહુભાષી સમર્થન છે?',
          a: 'હા, BlockVista અંગ્રેજી, હિંદી, ગુજરાતી, અને મરાઠીમાં ઉપલબ્ધ છે અને તમામ ભાષાઓમાં 24x7 ગ્રાહક સહાય પ્રદાન કરે છે।',
        },
        {
          q: 'હું કેવી રીતે શરૂ કરૂં?',
          a: 'અમારી વેઇટલિસ્ટમાં જોડાવા માટે BlockVista AI પર અર્લી એક્સેસ ફોર્મ ભરો. પાયલટ પ્રોગ્રામ અને એન્ટરપ્રાઇઝ જરૂરિયાતો માટે, વ્યક્તિગત ડેમો અને ઓનબોર્ડિંગ માટે ટીમ BlockVista સાથે મીટિંગ બુક કરો.',
        },
      ],
    },
    // CTA
    cta: {
      title: 'તમારી ટ્રેડિંગને આગલા સ્તરે લઈ જાવ',
      subtitle: 'હજારો ભારતીય ટ્રેડર્સ BlockVista Terminal નો ઉપયોગ કરીને સ્માર્ટ નિર્ણયો લઈ રહ્યા છે।',
      startTrial: 'મફત ટ્રાયલ શરૂ કરો',
      scheduleDemo: 'ડેમો શેડ્યુલ કરો',
    },
    // Footer
    footer: {
      tagline: 'ભારતીય ટ્રેડર્સ માટે AI-સંચાલિત ટ્રેડિંગ પ્લેટફોર્મ।',
      product: 'ઉત્પાદ',
      productLinks: ['વિશેષતાઓ', 'કિંમત', 'API ડોક્યુમેન્ટેશન'],
      company: 'કંપનी',
      companyLinks: ['આપણા વિશે', 'બ્લોગ', 'સંપર્ક કરો'],
      legal: 'કાનૂની',
      legalLinks: ['ગોપનીયતા', 'શરતો', 'સુરક્ષા'],
      copyright: '© 2024 BlockVista Terminal. તમામ અધિકાર આરક્ષિત.',
      social: ['Twitter', 'LinkedIn', 'GitHub'],
    },
  },
  mr: {
    // Navigation
    nav: {
      home: 'होम',
      about: 'आमच्याबद्दल',
      features: 'वैशिष्ट्ये',
      pricing: 'मूल्य निर्धारण',
      faq: 'वारंवार विचारलेले प्रश्न',
      contact: 'संपर्क करा',
      getStarted: 'सुरू करा',
    },
    // Hero Section
    hero: {
      title: 'भारतीय शेअर बाजारासाठी',
      titleHighlight: 'AI-संचालित ट्रेडिंग',
      description: 'NSE आणि BSE पासून रीयल-टाइम डेटा, AI-संचालित विश्लेषण, आणि पोर्टफोलिओ व्यवस्थापन. SEBI अनुपालन सह भारतीय व्यापार्यांसाठी डिজाइन केलेले.',
      startTrial: 'मुक्त चाचणी सुरू करा',
      watchDemo: 'डेमो पहा',
      activeTraders: 'सक्रिय व्यापारी',
      dailyVolume: 'दैनिक बाजार व्हॉल्यूम',
      uptime: 'अपटाइम',
    },
    // Features Section
    features: {
      title: 'भारतीय व्यापार्यांसाठी शक्तिशाली वैशिष्ट्ये',
      subtitle: 'NSE, BSE, आणि F&O बाजारांमध्ये यशस्वी ट्रेडिंगसाठी आवश्यक सर्व साधने.',
      nseData: 'NSE आणि BSE रीयल-टाइम डेटा',
      nseDataDesc: 'NSE आणि BSE पासून तात्काळ बाजार डेटा, शेअर किंमती, आणि ट्रेडिंग व्हॉल्यूम.',
      aiAnalysis: 'AI-संचालित विश्लेषण',
      aiAnalysisDesc: 'मशीन लर्निंगद्वारे संचालित तांत्रिक विश्लेषण आणि शेअर शिफारसी.',
      foSupport: 'F&O आणि डेरिव्हेटिव्ज',
      foSupportDesc: 'फ्यूचर्स, ऑप्शन्स, आणि इतर डेरिव्हेटिव्जसाठी प्रगत ट्रेडिंग साधने.',
      sebiCompliance: 'SEBI अनुपालन',
      sebiComplianceDesc: 'संपूर्ण SEBI अनुपालन, KYC सत्यापन, आणि AML तपासणीसह सुरक्षित ट्रेडिंग.',
      portfolio: 'पोर्टफोलिओ व्यवस्थापन',
      portfolioDesc: 'आपली सर्व होल्डिंग्स ट्रॅक करा, P&L गणना करा, आणि कर अहवाल मिळवा.',
      alerts: 'स्मार्ट सतर्कता',
      alertsDesc: 'किंमत, व्हॉल्यूम, आणि तांत्रिक संकेतकांसाठी कस्टम सतर्कता सेट करा.',
    },
    // Key Capabilities
    capabilities: {
      title: 'भारतीय व्यापार्यांसाठी बनविलेले',
      items: [
        'NSE आणि BSE पासून रीयल-टाइम बाजार डेटा',
        'इक्विटी, F&O, आणि कमोडिटीमध्ये ट्रेडिंग',
        'SEBI अनुपालन आणि सुरक्षित व्यवहार',
        'भारतीय कर अहवाल आणि P&L ट्रॅकिंग',
        '24x7 मराठी भाषेत ग्राहक सहायता',
        'भारतीय ब्रोकरांसह एकीकृत',
      ],
    },
    // Trading Hours
    tradingHours: {
      title: 'भारतीय बाजार तास',
      subtitle: 'NSE आणि BSE च्या सर्व ट्रेडिंग सेशनसाठी समर्थन',
      nseEquity: 'NSE - इक्विटी',
      nseEquityHours: {
        preOpen: 'प्री-ओपन: 09:00 - 09:15 AM',
        normal: 'सामान्य सेशन: 09:15 AM - 03:30 PM',
        postClose: 'पोस्ट क्लोज: 03:40 - 04:00 PM',
      },
      nsefo: 'NSE - F&O',
      nseFoHours: {
        preOpen: 'प्री-ओपन: 09:00 - 09:15 AM',
        normal: 'सामान्य सेशन: 09:15 AM - 03:30 PM',
        afterMarket: 'आफ्टर मार्केट: 03:40 - 11:30 PM',
      },
      bseEquity: 'BSE - इक्विटी',
      bseEquityHours: {
        preOpen: 'प्री-ओपन: 09:00 - 09:15 AM',
        normal: 'सामान्य सेशन: 09:15 AM - 03:30 PM',
        postClose: 'पोस्ट क्लोज: 03:40 - 04:00 PM',
      },
      mcx: 'MCX - कमोडिटीज',
      mcxHours: {
        morning: 'सकाळचे सेशन: 09:00 AM - 05:00 PM',
        evening: 'संध्याकाळचे सेशन: 05:15 - 11:30 PM',
        night: 'रात्रीचे सेशन: 11:45 PM - 05:00 AM',
      },
    },
    // Pricing
    pricing: {
      title: 'सरल आणि पारदर्शक मूल्य निर्धारण',
      subtitle: 'आपल्या ट्रेडिंग आवश्यकतांनुसार योजना निवडा',
      basic: 'मूलभूत',
      basicDesc: 'वैयक्तिक व्यापार्यांसाठी',
      pro: 'प्रो',
      proDesc: 'सक्रिय व्यापार्यांसाठी',
      enterprise: 'एंटरप्राइज',
      enterpriseDesc: 'संस्थांसाठी आणि ब्रोकरांसाठी',
      perMonth: '/महिना',
      customPricing: 'कस्टम मूल्य',
      getStarted: 'सुरू करा',
      features: {
        basic: [
          'NSE/BSE रीयल-टाइम डेटा',
          'मूलभूत चार्टिंग साधने',
          'पोर्टफोलिओ ट्रॅकिंग',
          'ईमेल समर्थन',
          '5 वॉचलिस्ट पर्यंत',
        ],
        pro: [
          'सर्व मूलभूत वैशिष्ट्ये',
          'AI-संचालित विश्लेषण',
          'F&O ट्रेडिंग समर्थन',
          'प्राधान्य समर्थन',
          'अमर्यादित वॉचलिस्ट',
          'कस्टम सतर्कता',
        ],
        enterprise: [
          'सर्व प्रो वैशिष्ट्ये',
          'व्हाइट-लेबल समाधान',
          'समर्पित खाते व्यवस्थापक',
          'कस्टम एकीकरण',
          'SLA गारंटी',
          'प्रगत अनुपालन साधने',
        ],
      },
    },
    // FAQ
    faq: {
      title: 'वारंवार विचारलेले प्रश्न',
      subtitle: 'BlockVista Terminal बद्दल आपल्याला जे काही जाणून घेणे आवश्यक आहे',
      questions: [
        {
          q: 'BlockVista NSE आणि BSE दोन्ही समर्थन करतो का?',
          a: 'होय, BlockVista Terminal NSE, BSE, MCX, आणि NCDEX सह सर्व भारतीय एक्सचेंजांना पूर्णपणे समर्थन करते.',
        },
        {
          q: 'हे SEBI अनुपालन आहे का?',
          a: 'अगदी. BlockVista Terminal पूर्णपणे SEBI अनुपालन आहे आणि सर्व नियामक आवश्यकतांची पूर्तता करते.',
        },
        {
          q: 'मी F&O ट्रेडिंग करू शकतो का?',
          a: 'होय, प्रो आणि एंटरप्राइज योजना NSE आणि MCX वर फ्यूचर्स आणि ऑप्शन्स ट्रेडिंगसाठी संपूर्ण समर्थन प्रदान करतात.',
        },
        {
          q: 'कर अहवाल सुविधा आहे का?',
          a: 'होय, BlockVista आपल्या P&L ची स्वयंचलितपणे गणना करते आणि भारतीय कर फाइलिंगसाठी तपशीलवार अहवाल प्रदान करते.',
        },
        {
          q: 'बहुभाषिक समर्थन आहे का?',
          a: 'होय, BlockVista इंग्रजी, हिंदी, गुजराती, आणि मराठीमध्ये उपलब्ध आहे आणि सर्व भाषांमध्ये 24x7 ग्राहक समर्थन प्रदान करते.',
        },
        {
          q: 'मी कसे सुरू करू?',
          a: 'आमच्या वेटलिस्टमध्ये सहभागी होण्यासाठी BlockVista AI वर अर्ली एक्सेस फॉर्म भरा. पायलट प्रोग्राम आणि एंटरप्राइज आवश्यकतांसाठी, वैयक्तिक डेमो आणि ऑनबोर्डिंगसाठी टीम BlockVista सोबत मीटिंग बुक करा.',
        },
      ],
    },
    // CTA
    cta: {
      title: 'आपल्या ट्रेडिंगला पुढच्या स्तरावर नेले',
      subtitle: 'हजारो भारतीय व्यापारी BlockVista Terminal वापरून स्मार्ट निर्णय घेत आहेत.',
      startTrial: 'मुक्त चाचणी सुरू करा',
      scheduleDemo: 'डेमो शेड्यूल करा',
    },
    // Footer
    footer: {
      tagline: 'भारतीय व्यापार्यांसाठी AI-संचालित ट्रेडिंग प्लेटफॉर्म.',
      product: 'उत्पाद',
      productLinks: ['वैशिष्ट्ये', 'मूल्य निर्धारण', 'API दस्तऐवज'],
      company: 'कंपनी',
      companyLinks: ['आमच्याबद्दल', 'ब्लॉग', 'संपर्क करा'],
      legal: 'कायदेशीर',
      legalLinks: ['गोपनीयता', 'अटी', 'सुरक्षा'],
      copyright: '© 2024 BlockVista Terminal. सर्व अधिकार राखीव.',
      social: ['Twitter', 'LinkedIn', 'GitHub'],
    },
  },
};
