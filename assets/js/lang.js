// Define the language labels for English and Spanish
var langStorage = {
  en: {
    "inicio": "Home",
    "quienes-somos": "About Us",
    "igualas": "Retainers",
    "servicios-juridicos": "Legal Services",
    "civil": "Civil",
    "familia": "Family",
    "penal": "Criminal",
    "fiscal": "Tax",
    "urbanismo-medio-ambiente": "Urbanism and Environment",
    "proteccion-datos": "Data Protection",
    "administrativo": "Administrative Law",
    "laboral": "Labor Law",
    "extranjeria": "Immigration",
    "contacto": "Contact",
    "conocenos": "Meet Us",
    "eslogan-justicia": 'Justice is the constant and perpetual will to give each one their Right."',
    "quienes-somos-descripcion-1": "López & Núñez Abogados is a multidisciplinary firm with professionals specialized in each branch of law. As legal professionals, our main objective is to provide the client with the best service, through ethics and professional responsibility.",
    "quienes-somos-descripcion-2": "Without a doubt, we opt for specialization in order to offer a perfected and personalized study according to the specific case.",
    "nombre-carmen-nc": "CARMEN NÚÑEZ CANCELA",
    "carmen-descripcion-1": "Member n. º 5255 of the Illustrious Bar Association of Cadiz.",
    "carmen-descripcion-2": "Graduated in Law from the University of Seville. She completed the Master's Degree in Access to the Legal Profession at the University of Salamanca, which was taught by lawyers from all over Spain, as well as Judges and Prosecutors from the national sphere.",
    "carmen-descripcion-3": "She expanded her training with the Master's Degree in Environmental Law at the University of the Basque Country (Euskal Herriko Unibersitatea), the Expert Course in Labor Advice, and the Specialization Course in Gender Violence.",
    "carmen-descripcion-4": "She began her career at the law firm Dávila Abogados, in Salamanca, where she acquired great training and experience. She is one of the co-founders of López & Núñez Abogados, where she has grown as a professional, becoming an expert in several fields of Law.",
    "nombre-cristina-rg": "CRISTINA RAMOS GARCÍA",
    "cristina-descripcion-1": "Member nº 5357 of the Illustrious Bar Association of Cadiz.",
    "cristina-descripcion-2": "Graduated in Law from the University of Cadiz. She completed the Master's Degree in Access to the Legal Profession at the Illustrious Bar Association of Cadiz, with specialized training in both Urban Planning and Real Estate Law.",
    "cristina-descripcion-3": "Subsequently, she completed various specialized studies in different branches of Law in the civil, criminal, and family law fields. She combined her training with collaboration with various law firms, which allowed her to acquire greater professional capacity.",
    'cristina-descripcion-4': "She began her career in law by creating the CR ABOGADOS firm as an independent lawyer, which allowed her to understand law in a different way.",
    'cristina-descripcion-5': "Her significant vocation for the practice of law, together with her dedication and enthusiasm, led her and her colleagues, Carmen Núñez Cancela and Lola Núñez Cancela, to venture into creating a new concept of a law firm, thus partnering with López & Núñez Abogados, with the aim of offering their clients specialized service, providing personalized attention and a thorough study of each matter.",
    'nombre-lola-nc': "LOLA NÚÑEZ CANCELA",
    'lola-descripcion-1': "Member No. 5368 of the Illustrious Bar Association of Cádiz.",
    'lola-descripcion-2': "Graduated in Law from the University of Seville. She completed the Master's Degree in Access to Law at the University of Salamanca. She furthered her education with the Master's Degree in Tax Advisory at the MAGUESDE Legal Practice School in Seville, as well as different training courses highlighting the Course on Gender Equality and Violence.",
    'lola-descripcion-3': "She began her career under the guidance of Fernando Dávila González, in Salamanca, where she acquired great training. She has been a freelance collaborator for other law firms.",
    'lola-descripcion-4': "She is one of the co-founders of López & Núñez Abogados, which has been a great opportunity for her both professionally and personally, with law and tax advisory being her main vocation.",
    'lola-descripcion-5': "Her only goal is to safeguard the interests of her clients, offering the best defense and advice. She empathizes with each person and/or company, treating each case in a personalized way.",
    'igualas-descripcion': "Through a previously established periodic monthly payment, the client can make use of the legal services of López & Núñez Abogados. The greatest advantage is undoubtedly having a trusted lawyer who knows them, attending to the needs of the company at all times.",
    'igualas-tipos': "The types of equalized payments we offer:",
    'iguala-esencial': "Essential Retainer",
    'iguala-esencial-lista-1': "Telephone, in-person or email assistance.",
    'iguala-esencial-lista-2': "Drafting, review and modification of contracts.",
    'iguala-esencial-lista-3': "Unpaid invoices (12 per year).",
    'iguala-esencial-lista-4': "Administrative appeals (1 per year).",
    'iguala-esencial-precio': "95 EUROS (IVA not included).",
    'iguala-estandar': "Standard Retainer",
    'iguala-estandar-lista-1': "Telephone, in-person or email assistance.",
    'iguala-estandar-lista-2': "Drafting, review and modification of contracts.",
    'iguala-estandar-lista-3': "Unpaid invoices (20 per year).",
    'iguala-estandar-lista-4': "Administrative appeals (3 per year).",
    'iguala-estandar-lista-5': "15% discount on litigation.",
    'iguala-estandar-precio': "160 EUROS (IVA not included).",
    'iguala-plus': "Plus Retainer",
    'iguala-plus-lista-1': "Telephone, in-person or email assistance.",
    'iguala-plus-lista-2': "Drafting, review and modification of contracts.",
    'iguala-plus-lista-3': "Unpaid invoices (40 per year).",
    'iguala-plus-lista-4': "Administrative appeals (6 per year).",
    'iguala-plus-lista-5': "Litigations (1 per year)",
    'iguala-plus-precio': "270 EUROS (IVA not included).",
    'civil-lista-1': "Urban and rural leases.",
    'civil-lista-2': "Recovery of unpaid rents.",
    'civil-lista-3': "Eviction for non-payment.",
    'civil-lista-4': "Claims for payment.",
    'civil-lista-5': "Consumer rights and protection.",
    'civil-lista-6': "Traffic accidents.",
    'civil-lista-7': "Contracts: drafting, modification, breach of contract.",
    'familia-lista-1': "Divorce or separation proceedings by mutual agreement or contentious, as well as modification of measures and execution in case of non-compliance by either party.",
    'familia-lista-2': "Settlement of the matrimonial property regime.",
    'familia-lista-3': "Child support and alimony.",
    'familia-lista-4': "Incapacity, guardianship and curatorship proceedings.",
    'penal-lista-1': "Fraud.",
'penal-lista-2': "Money laundering.",
'penal-lista-3': "Speedy trials.",
'penal-lista-4': "Crimes against persons.",
'penal-lista-5': "Assault and battery.",
'penal-lista-6': "Economic crimes.",
'penal-lista-7': "Crimes against road safety.",
'penal-lista-8': "Driving under the influence of alcohol.",
'penal-lista-9': "Threats.",
'penal-lista-10': "Crimes against property.",
'penal-lista-11': "Crimes against freedom.",
'penal-lista-12': "Crimes against public health.",
'penal-lista-13': "Crimes against the Administration.",
'penal-lista-14': "Crimes against sexual freedom.",
'fiscal-lista-1': "Tax settlement (sale, donations, inheritance, condominium extinction, etc).",
'fiscal-lista-2': "Income tax returns.",
'fiscal-lista-3': "Appeals against tax authority resolutions.",
'urbanismo-medio-ambiente-descripcion': "At López & Núñez Abogados we provide comprehensive legal advice on all matters related to Environmental Law. Our Environmental department is made up of lawyers who are specialists in the field and work closely with professionals with an economic and technical profile, such as agricultural engineers and environmental scientists.",
'urbanismo-medio-ambiente-servicios': "Our services include:",
'urbanismo-medio-ambiente-lista-1': "Legal assistance in environmental assessments, analysis, and procedures.",
'urbanismo-medio-ambiente-lista-2': "Licenses and enforcement orders.",
'urbanismo-medio-ambiente-lista-3': "Proceedings for legalization and urban planning discipline (sanctions).",
'urbanismo-medio-ambiente-lista-4': "Actions before Notary, Registry and competent administrative bodies, and regularization of the registration status of properties.",
'urbanismo-medio-ambiente-lista-5': "Defense in matters of civil, administrative, and criminal liability in environmental matters.",
'proteccion-datos-descripcion-1': "DID YOU KNOW...?",
'proteccion-datos-descripcion-2': "It is mandatory to carry out a series of protocols to ensure that the data being processed is properly protected, especially if it is sensitive data.",
'proteccion-datos-descripcion-3': "But... Who is obliged to carry out this protocol?",
'proteccion-datos-descripcion-4': "All professionals and self-employed individuals who have customer and/or third-party data in their possession.",
'proteccion-datos-descripcion-5': "Our service includes:",
'proteccion-datos-lista-1': "Advice and information on data protection.",
'proteccion-datos-lista-2': "Data Protection Officer for companies.",
'proteccion-datos-lista-3': "Implementation of a data protection and security compliance program for companies or organizations.",
'proteccion-datos-lista-4': "Data protection impact assessments.",
'proteccion-datos-lista-5': "Data protection audits.",
'administrativo-lista-1': "Pre-administrative claims.",
'administrativo-lista-2': "Administrative appeals.",
'administrativo-lista-3': "Contentious-administrative procedure.",
'administrativo-lista-4': "Administrative liability.",
'laboral-lista-1': "Employment contracts.",
'laboral-lista-2': "Dismissals.",
'laboral-lista-3': "Conciliation before the CMAC (Center for Mediation, Arbitration, and Conciliation).",
'laboral-lista-4': "Workplace accidents.",
'laboral-lista-5': "Claims before the Social Security.",
'extranjeria-lista-1': "Spanish nationality.",
'extranjeria-lista-2': "Family reunification.",
'extranjeria-lista-3': "Social and employment integration.",
'extranjeria-lista-4': "Administrative appeals for denial of Spanish nationality, residency permits, visas, among others.",
'extranjeria-lista-5': "Criminal records.",
'extranjeria-lista-6': "Community card.",
'extranjeria-lista-7': "Visas:",
'extranjeria-lista-7.1': "Tourist.",
'extranjeria-lista-7.2': "Study.",
'extranjeria-lista-7.3': "Family reunification.",
'contacto-visitenos': "Visit us:",
'contacto-direccion': "C/ Nao San Antonio, San Fernando Building, Local 1.",
'contacto-escribanos': "Write to us at:",
'contacto-llamenos': "Call us at:",
'placeholder-nombre': "Name",
'placeholder-correo': "Email",
'placeholder-asunto': "Subject of the message",
'placeholder-mensaje-escriba': "Write your message",
'mensaje-enviar': "Send message",
'copyright-aviso-legal': "Legal notice.",
'copyright-politica-privacidad': "Privacy policy."
  },
  es: {
    inicio: 'Inicio',
    'quienes-somos': '¿Quiénes somos?',
    igualas: 'Igualas',
    'servicios-juridicos': 'Servicios Jurídicos',
    civil: 'Civil',
    familia: 'Familia',
    penal: 'Penal',
    fiscal: 'Fiscal',
    'urbanismo-medio-ambiente': 'Urbanismo y Medio Ambiente',
    'proteccion-datos': 'Protección de Datos',
    administrativo: 'Derecho Administrativo',
    laboral: 'Derecho Laboral',
    extranjeria: 'Extranjería',
    contacto: 'Contacto',
    conocenos: 'Conócenos',
    'eslogan-justicia': '"La justicia es la constante y perpetua voluntad de dar a cada uno su Derecho."',
    'quienes-somos-descripcion-1': "López & Núñez Abogados es un buffete multidisciplinar con profesionales especializados en cada rama del derecho. Como profesionales de la abogacía, nuestro objetivo principal es aportar al cliente el mejor servicio, mediante la ética y la responsabilidad profesional.",
    'quienes-somos-descripcion-2': "Sin duda optamos por la especialización para así ofrecer un estudio perfeccionado y personalizado según el caso concreto.",
    'nombre-carmen-nc': "CARMEN NÚÑEZ CANCELA",
    'carmen-descripcion-1': "Colegiada n. º 5255 del Ilustre Colegio de Abogados de Cádiz.",
    'carmen-descripcion-2': "Graduada en Derecho por la Universidad de Sevilla. Realizó el Máster de acceso a la Abogacía en la Universidad de Salamanca, que fue impartido por abogados de toda España, y Jueces y Fiscales de ámbito nacional.",
    'carmen-descripcion-3': "Amplió su formación con el Máster de Derecho Ambiental en la Universidad del País Vasco (Euskal Herriko Unibersitatea), el Curso Experto en Asesoría Laboral y Curso de Especialización en Violencia de Género.",
    'carmen-descripcion-4': "Inició su carrera en el gabinete jurídico Dávila Abogados, en Salamanca, donde adquirió una gran formación y experiencia. Es una de las cofundadoras de López & Núñez Abogados, donde ha ido creciendo como profesional, convirtiéndose en una experta en varios campos del Derecho.",
    'nombre-cristina-rg': "CRISTINA RAMOS GARCÍA",
    'cristina-descripcion-1': "Colegiada nº 5357 del Ilustre Colegio de Abogados de Cádiz.",
    'cristina-descripcion-2': "Graduada en Derecho por la Universidad de Cádiz. Realizó el Máster de Acceso a la Abogacía en el Ilustrísimo Colegio de Abogados de Cádiz, contando en su haber con formación especializada tanto en Urbanismo como en Derecho Inmobiliario.",
    'cristina-descripcion-3': "Con posterioridad, realizó diversos estudios de especialización en diferentes ramas del Derecho en el ámbito civil, penal y en Derecho de familia. Ha compaginado su formación con la colaboración con varios despachos de abogados, que le permitieron adquirir una mayor capacidad profesional.",
    'cristina-descripcion-4': "Comenzó su andadura en la abogacía creando la firma CR ABOGADOS como abogada independiente, lo que le sirvió para entender la abogacía de una manera diferente.",
    'cristina-descripcion-5': "Su significativa vocación para el ejercicio de la abogacía, junto a su dedicación y entusiasmo, hacen que, junto a sus compañeras, Carmen Núñez Cancela y Lola Núñez Cancela, se aventurase en crear una nueva concepción de un despacho de abogados, asociándose así con López & Núñez Abogados, con el objetivo de ofrecer a sus clientes un servicio especializado, prestando un trato personalizado y un estudio exhaustivo de cada asunto.",
    'nombre-lola-nc': "LOLA NÚÑEZ CANCELA",
    'lola-descripcion-1': "Colegiada n º 5368 del Ilustre Colegio de Abogados de Cádiz.",
    'lola-descripcion-2': "Graduada en Derecho por la Universidad de Sevilla. Realizó el Máster de Acceso a la Abogacía en la Universidad de Salamanca. Amplió su formación con el Máster de Asesor Fiscal en la Escuela de Práctica Jurídica MAGUESDE en Sevilla, así como diferentes cursos de formación destacando el Curso de Plan de Igualdad y Violencia de Género.",
    'lola-descripcion-3': "Inició su carrera de la mano de Fernando Dávila González, en Salamanca, donde adquirió una gran formación. Ha sido colaboradora autónoma de otros bufetes de abogados.",
    'lola-descripcion-4': "Es una de las cofundadoras de López & Núñez Abogados, lo que le ha supuesto una gran oportunidad tanto profesional como personal, siendo la abogacía y la asesoría fiscal su principal vocación.",
    'lola-descripcion-5': "Su único objetivo es velar por la protección de los intereses de sus clientes, ofreciendo la mejor defensa y asesoramiento. Empatizando con cada persona y/o empresa, tratando cada caso de forma personalizada.",
    'igualas-descripcion': "Mediante un pago mensual periódico previamente establecido, el cliente podrá hacer uso de los servicios jurídicos de López & Núñez Abogados. La mayor ventaja es sin duda contar con un abogado de confianza que le conoce, atendiendo a las necesidades de la empresa en cada momento.",
    'igualas-tipos': "Los tipos de igualas que ofrecemos:",
    'iguala-esencial': "Iguala Esencial",
    'iguala-esencial-lista-1': "Asistencia telefónica, presencial o vía e-mail.",
    'iguala-esencial-lista-2': "Redacción, revisión y modificación de contratos.",
    'iguala-esencial-lista-3': "Facturas impagadas (12 al año).",
    'iguala-esencial-lista-4': "Recursos administrativos (1 al año).",
    'iguala-esencial-precio': "95 EUROS (IVA no incluido).",
    'iguala-estandar': "Iguala Estándar",
    'iguala-estandar-lista-1': "Asistencia telefónica, presencial o vía e-mail.",
    'iguala-estandar-lista-2': "Redacción, revisión y modificación de contratos.",
    'iguala-estandar-lista-3': "Facturas impagadas (20 al año).",
    'iguala-estandar-lista-4': "Recursos administrativos (3 al año).",
    'iguala-estandar-lista-5': "Descuento en litigios del 15%.",
    'iguala-estandar-precio': "160 EUROS (IVA no incluido).",
    'iguala-plus': "Iguala Plus",
    'iguala-plus-lista-1': "Asistencia telefónica, presencial o vía e-mail.",
    'iguala-plus-lista-2': "Redacción, revisión y modificación de contratos.",
    'iguala-plus-lista-3': "Facturas impagadas (40 al año).",
    'iguala-plus-lista-4': "Recursos administrativos (6 al año).",
    'iguala-plus-lista-5': "Litigios (1 al año)",
    'iguala-plus-precio': "270 EUROS (IVA no incluido).",
    'civil-lista-1': "Arrendamientos urbanos y rústicos.",
    'civil-lista-2': "Reclamación de rentas impagadas.",
    'civil-lista-3': "Desahucio por impago.",
    'civil-lista-4': "Reclamaciones de cantidad.",
    'civil-lista-5': "Ejercicio de derechos de consumidores y usuarios.",
    'civil-lista-6': "Accidentes de tráfico.",
    'civil-lista-7': "Contratos: redacción, modificación, incumplimiento de contrato.",
    'familia-lista-1': "Procedimiento de separación o divorcio de mutuo acuerdo o contencioso, así como modificación de medidas y ejecución en caso de incumplimiento por alguna de las partes.",
    'familia-lista-2': "Liquidación régimen económico matrimonial.",
    'familia-lista-3': "Pensión de alimentos y pensión compensatoria.",
    'familia-lista-4': "Procedimiento de incapacitación, tutela y curatela.",

    'penal-lista-1': "Estafa.",
    'penal-lista-2': "Blanqueo de capitales.",
    'penal-lista-3': "Juicios rápidos.",
    'penal-lista-4': "Delitos contra las personas.",
    'penal-lista-5': "Lesiones.",
    'penal-lista-6': "Delitos económicos.",
    'penal-lista-7': "Delitos contra la seguridad vial.",
    'penal-lista-8': "Alcoholemias.",
    'penal-lista-9': "Amenazas.",
    'penal-lista-10': "Delitos contra el patrimonio.",
    'penal-lista-11': "Delitos contra la libertad.",
    'penal-lista-12': "Delitos contra la salud pública.",
    'penal-lista-13': "Delitos contra la Administración.",
    'penal-lista-14': "Delitos contra la libertad sexual.",
    'fiscal-lista-1': "Liquidación de impuestos (compraventa, donaciones, herencias, extinción condominio, etc).",
    'fiscal-lista-2': "Declaraciones de renta.",
    'fiscal-lista-3': "Recursos contra resoluciones de Hacienda.",

    'urbanismo-medio-ambiente-descripcion': "Desde López & Núñez Abogados prestamos un asesoramiento jurídico integral en todos los asuntos relativos al Derecho Ambiental. Nuestro departamento de Medio Ambiente está formado por abogados especialistas en la materia que trabajan en estrecha colaboración con profesionales de perfil económico y técnico, como ingenieros agrícolas y ambientólogos.",
    'urbanismo-medio-ambiente-servicios': "Nuestros servicios:",
    'urbanismo-medio-ambiente-lista-1': "Asistencia jurídica en evaluaciones, análisis y trámites medioambientales.",
    'urbanismo-medio-ambiente-lista-2': "Licencias y órdenes de ejecución.",
    'urbanismo-medio-ambiente-lista-3': "Expedientes de legalización y disciplina urbanística (sanciones).",
    'urbanismo-medio-ambiente-lista-4': "Actuaciones ante Notaría, Registro y órganos administrativos competentes y regularización de la situación registral de inmuebles.",
    'urbanismo-medio-ambiente-lista-5': "Defensa en materia de responsabilidad civil, administrativa y penal en materia ambiental.",
    'proteccion-datos-descripcion-1': "¿SABÍAS QUE...?",
    'proteccion-datos-descripcion-2': "Es de obligado cumplimiento llevar a cabo una serie de protocolos para asegurar que los datos tratados debidamente protegidos, especialmente si se trata de datos sensibles.",
    'proteccion-datos-descripcion-3': "Pero... ¿Quién está obligado a llevar a cabo este protocolo?",
    'proteccion-datos-descripcion-4': "Todos aquellos profesionales y autónomos que tengan en su poder datos de clientes o/y terceros.",
    'proteccion-datos-descripcion-5': "Nuestro servicio incluye:",
    'proteccion-datos-lista-1': "Asesoramiento e información sobre protección de datos.",
    'proteccion-datos-lista-2': "Delegado de protección de datos para empresas.",
    'proteccion-datos-lista-3': "Implantación de programa de cumplimiento de protección de datos y seguridad para empresas u organizaciones.",
    'proteccion-datos-lista-4': "Evaluaciones de impacto de protección de datos.",
    'proteccion-datos-lista-5': "Auditorias de protección de datos.",

    'administrativo-lista-1': "Reclamaciones previas administrativas.",
    'administrativo-lista-2': "Recursos administrativos.",
    'administrativo-lista-3': "Procedimiento contencioso-administrativo.",
    'administrativo-lista-4': "Responsabilidad patrimonial de la Administración.",
    'laboral-lista-1': "Contratos de trabajo.",
    'laboral-lista-2': "Despidos.",
    'laboral-lista-3': "Conciliaciones ante el CMAC.",
    'laboral-lista-4': "Accidentes laborales.",
    'laboral-lista-5': "Reclamaciones ante la Seguridad Social.",
    'extranjeria-lista-1': "Nacionalidad española.",
    'extranjeria-lista-2': "Reagrupación familiar.",
    'extranjeria-lista-3': "Arraigo social y laboral.",
    'extranjeria-lista-4': "Recursos administrativos de reposición, alzadas y contenciosos-administrativos. Denegación de nacionalidad española, permiso de residencia  y visado, entre otros.",
    'extranjeria-lista-5': "Antecedentes penales.",
    'extranjeria-lista-6': "Tarjeta comunitaria.",
    'extranjeria-lista-7': "Visados:",
    'extranjeria-lista-7.1': "Turista.",
    'extranjeria-lista-7.2': "Estancia por estudios.",
    'extranjeria-lista-7.3': "Reagrupación familiar.",
    'contacto-visitenos': "Visítenos:",
    'contacto-direccion': "C/ Nao San Antonio, Edificio San Fernando, Local 1.",
    'contacto-escribanos': "Escríbanos a:",
    'contacto-llamenos': "Llámenos al:",
    'placeholder-nombre': "Nombre",
    'placeholder-correo': "Correo electrónico",
    'placeholder-asunto': "Asunto del mensaje",
    'placeholder-mensaje-escriba': "Escriba el mensaje",
    'mensaje-enviar': "Enviar mensaje",
    'copyright-aviso-legal': "Aviso legal.",
    'copyright-politica-privacidad': "Política de privacidad."
  }
};

let currentLang = 'es';
let lang = langStorage[currentLang];

function changeLang(langCode) {
  currentLang = langCode;
  lang = langStorage[currentLang];
  updateContent();
}

function updateContent() {
  // Loop through each element that has a "data-lang" attribute
  document.querySelectorAll('[data-lang]').forEach(element => {
    // Get the "data-lang" attribute value
    const langKey = element.getAttribute('data-lang');
    // Set the text content of the element to the corresponding language value
    if (langKey.includes("placeholder")) {
      element.placeholder = lang[langKey];
    } else if (langKey.includes("copyright")) {
      element.text = lang[langKey];
    } else {
      element.textContent = lang[langKey];
    }
  });
}
