export default {
  global: {
    componenteFormativo: 'El plan de contingencia en el servicio guiado',
    descripcionCurso:
      'Este componente está dirigido a todas las personas que componen el equipo de trabajo, pero con un especial enfoque al guía de turismo, persona responsable de orientar, conducir, instruir y asistir a los turistas. El objetivo es contextualizar y ampliar el conocimiento de los peligros y los riesgos derivados de este, a los que se encuentran expuestos los turistas, el guía y su equipo de trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    fondoBannerInterno: require('@/assets/curso/portada/fondo-banner-interno.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Identificación y valoración del riesgo en el contexto del servicio guiado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de manejo y técnicas de evaluación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos de control y de mitigación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodología de identificación y valoración del riesgo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Instrumento',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Niveles de riesgo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Plan de contingencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estructura y componentes',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Acciones y controles en el guionaje',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Iconografía del riesgo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Simulacro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Objetivos de un simulacro',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Clasificación de los simulacros',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Fases de un simulacro',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Fundación MAPFRE. (s. f.). Diccionario de seguros.',
      link:
        'https://www.fundacionmapfre.org/publicaciones/diccionario-mapfre-seguros/riesgo/',
    },
    {
      referencia:
        'Martínez, A. (2021). Definición de Riesgo. ConceptoDefinición.',
      link: 'https://conceptodefinicion.de/riesgo/',
    },
    {
      referencia:
        'PROCOLOMBIA. (s. f.). COntemplar, COmprender, COnservar: Manual Ilustrado para Guías de Turismo de Naturaleza en Colombia.',
      link: 'https://guianaturaleza.colombia.travel/',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'evento repentino no planeado de una actividad que da lugar a muerte, lesión, daño u otra pérdida a las personas, a la propiedad, al ambiente, a la calidad o pérdida en el proceso. ',
    },
    {
      termino: 'Consecuencia',
      significado:
        'hecho o acontecimiento derivado o que resulta inevitable y forzosamente de otro. Resultado, en términos de lesión o enfermedad, de la materialización de un riesgo, expresado cualitativa y cuantitativamente.',
    },
    {
      termino: 'Contingencia',
      significado:
        'suceso que puede suceder o no, especialmente un problema que se plantea de forma imprevista.',
    },
    {
      termino: 'Incidente',
      significado:
        'suceso repentino no deseado que ocurre por las mismas causas que se presentan los accidentes, solo que por cuestiones del azar no desencadena lesiones en las personas, daños a la propiedad, al proceso o al ambiente.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal.',
    },
    {
      termino: 'Probabilidad',
      significado:
        'el término probabilidad proviene de lo probable, o sea, de aquello que es más posible que ocurra, y se entiende como el mayor o menor grado de posibilidad de que un evento aleatorio ocurra.',
    },
    {
      termino: 'Riesgo',
      significado:
        'exposición a una situación donde hay una posibilidad de sufrir un daño o de estar en peligro. Es la vulnerabilidad o amenaza de que ocurra un evento y sus efectos sean negativos y que alguien o algo pueda verse afectado por él.',
    },
  ],
  complementario: [
    {
      tema:
        'Identificación y valoración del riesgo en el contexto del servicio guiado',
      referencia:
        'Beltrán, C. y Murcia, J. (2016). Métodos para identificación de peligros, análisis, evaluación y tratamiento de los riesgos en Colombia. Revista ingeniería, matemáticas y ciencias de la información, 3(6), p. 29-38.',
      tipo: 'Revista',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_81169c6509314bf9b01c2dd903a1113f',
    },
    {
      tema:
        'Identificación y valoración del riesgo en el contexto del servicio guiado',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2011). Guía para la identificación de los peligros y la valoración de los riesgos en seguridad y salud ocupacional.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?vid=SENA&search_scope=sena_completo&tab=sena_completo&docid=sena_aleph000059785&lang=es_ES&context=L&adaptor=Local%20Search%20Engine&query=any,contains,u%C3%ADa%20para%20la%20identificaci%C3%B3n%20de%20los%20peligros%20y%20la%20valoraci%C3%B3n%20de%20los%20riesgos%20en%20seguridad%20y%20salud%20ocupacional.&mode=Basic',
    },
    {
      tema: 'Metodología de identificación y valoración del riesgo',
      referencia:
        'Enríquez, A. y Sánchez, J. (2012). Ohsas 18001:2007 adaptado a 18002:2008: sistemas de gestión de la seguridad y salud en el trabajo. Fundación Confemetal.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000067913',
    },
    {
      tema: 'Iconografía del riesgo',
      referencia:
        'Admin Gestion-Calidad.com. (2016). Señalización de Riesgos Laborales como prevención. Gestión Calidad.',
      tipo: 'Página Web',
      link: 'https://gestion-calidad.com/senalizacion-riesgos-laborales ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ana Milena Sánchez Parada',
        cargo: 'Instructora Técnica',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Oscar Manuel Gómez Morillo',
        cargo: 'Instructor Técnico',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Alejandro Perlaza Espinosa',
        cargo: 'Instructor Técnico',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo front end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}
