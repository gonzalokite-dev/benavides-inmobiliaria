export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; body: string; button: string }
  | { type: 'links'; title: string; items: { label: string; href: string; desc: string }[] }
  | { type: 'faq'; eyebrow?: string; items: { q: string; a: string }[] }

export interface PostTranslation {
  seoTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  tags: string[];
  excerpt: string;
  blocks: Block[];
}

export interface BlogPost {
  slug: string;
  date: string;
  updatedDate?: string;
  readingTime: number;
  authorKey: 'alfonso' | 'german' | 'gonzalo';
  image?: { src: string; alt: string };
  es: PostTranslation;
  en: PostTranslation;
}

export const authors = {
  alfonso: {
    name: 'Alfonso Benavides Colom',
    role_es: 'Abogado y Asesor Fiscal',
    role_en: 'Lawyer and Tax Advisor',
    photo: '/alfonso-benavides.jpg',
  },
  german: {
    name: 'Germán Álvarez de Sotomayor',
    role_es: 'Abogado especializado en Derecho Inmobiliario',
    role_en: 'Lawyer specialised in Real Estate Law',
    photo: '/german-alvarez.jpg',
  },
  gonzalo: {
    name: 'Gonzalo Benavides López de Ayala',
    role_es: 'Economista y Asesor Fiscal',
    role_en: 'Economist and Tax Advisor',
    photo: '/gonzalo-benavides.jpg',
  },
};

export const posts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────────
  // POST 1 — Impuestos al comprar una vivienda en Mallorca
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'impuestos-comprar-vivienda-mallorca-no-residentes',
    date: '2025-03-19',
    readingTime: 10,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/42093/pexels-photo-42093.jpeg',
      alt: 'Catedral de Palma de Mallorca — impuestos al comprar vivienda en Mallorca para no residentes',
    },
    es: {
      seoTitle: 'Impuestos al comprar una vivienda en Mallorca: guía completa para no residentes',
      metaDescription:
        'Guía completa sobre los impuestos y gastos al comprar una vivienda en Mallorca como no residente: ITP, IVA, AJD, IRNR, NIE y costes totales.',
      h1: 'Impuestos al comprar una vivienda en Mallorca: guía completa para no residentes',
      category: 'Fiscalidad Inmobiliaria',
      tags: ['impuestos', 'no residentes', 'ITP', 'compraventa', 'Mallorca'],
      excerpt:
        'Si estás pensando en comprar una vivienda en Mallorca como no residente, conocer la carga fiscal es fundamental. Los impuestos y gastos pueden suponer entre un 10% y un 14% del precio. En esta guía lo explicamos todo.',
      blocks: [
        {
          type: 'p',
          text: 'Comprar una vivienda en Mallorca es una decisión que va mucho más allá del precio de venta. Antes de firmar cualquier contrato, es imprescindible conocer con precisión todos los impuestos y gastos asociados a la operación. En el caso de compradores no residentes en España, la carga fiscal presenta particularidades importantes que conviene analizar en detalle desde el primer momento. No hacerlo puede traducirse en sorpresas económicas significativas y, en algunos casos, en incumplimientos fiscales con consecuencias legales. En esta guía explicamos de forma exhaustiva todos los impuestos que afectan a la compra de vivienda en Mallorca para no residentes, con ejemplos prácticos y tablas comparativas.',
        },
        {
          type: 'h2',
          text: '¿Qué impuestos se pagan al comprar una vivienda en Mallorca?',
        },
        {
          type: 'h3',
          text: 'Vivienda de segunda mano: el ITP',
        },
        {
          type: 'p',
          text: 'El Impuesto sobre Transmisiones Patrimoniales (ITP) es el principal tributo que se paga al adquirir una vivienda de segunda mano en España. En las Islas Baleares, este impuesto es progresivo y lo gestiona la Agencia Tributaria de las Illes Balears (ATIB). A diferencia de otras comunidades autónomas que aplican un tipo único, Baleares establece tramos progresivos en función del valor del inmueble, lo que significa que cuanto más cara sea la propiedad, mayor es el porcentaje que se aplica sobre los tramos superiores. Esta estructura progresiva puede tener un impacto significativo en propiedades de precio elevado, habitual en el mercado mallorquín.',
        },
        {
          type: 'ul',
          items: [
            'Hasta 400.000 €: 8%',
            'De 400.001 € a 600.000 €: 9%',
            'De 600.001 € a 1.000.000 €: 10%',
            'Por encima de 1.000.000 €: 11%',
          ],
        },
        {
          type: 'p',
          text: 'Para ilustrarlo con un ejemplo práctico: si adquieres una vivienda de segunda mano en Mallorca por 500.000 €, el ITP no se calcula aplicando un tipo único sobre el total, sino de forma progresiva por tramos. Sobre los primeros 400.000 € pagas el 8% (32.000 €), y sobre los 100.000 € restantes pagas el 9% (9.000 €). En total, el ITP asciende a 41.000 €, lo que equivale a un tipo efectivo del 8,2% sobre el precio total de la operación. Es importante destacar que la base imponible del ITP es el mayor entre el precio de venta y el valor de referencia catastral que fija la Administración, lo que puede elevar la factura fiscal incluso cuando el precio pactado entre las partes sea inferior.',
        },
        {
          type: 'h3',
          text: 'Vivienda de obra nueva: IVA y Actos Jurídicos Documentados (AJD)',
        },
        {
          type: 'p',
          text: 'Cuando la vivienda es de obra nueva y se adquiere directamente del promotor, el ITP no es aplicable. En su lugar, se pagan dos tributos diferentes: el Impuesto sobre el Valor Añadido (IVA) y el Impuesto de Actos Jurídicos Documentados (AJD). El IVA aplicable a la compra de vivienda nueva habitual es del 10% sobre el precio de venta. Para plazas de garaje adquiridas conjuntamente con la vivienda (hasta dos plazas), el tipo también es del 10%. Si se trata de locales, oficinas u otro tipo de inmuebles no residenciales, el IVA es del 21%. A esto hay que añadir el AJD, que en las Islas Baleares tiene un tipo del 1,2% sobre el valor escriturado. El AJD grava la formalización del contrato en escritura pública, y su importe puede parecer menor que el ITP, pero en propiedades de precio elevado supone una cantidad significativa. En resumen, para una vivienda nueva de 500.000 €, pagarías 50.000 € de IVA más 6.000 € de AJD, es decir, un total de 56.000 € en tributos, lo que supone un 11,2% adicional sobre el precio pactado.',
        },
        {
          type: 'h2',
          text: 'Otros gastos al comprar vivienda en Mallorca',
        },
        {
          type: 'p',
          text: 'Además de los impuestos directamente asociados a la compraventa, existen otros gastos que el comprador debe asumir y que con frecuencia se infraestiman. Estos costes son independientes de si la vivienda es nueva o de segunda mano, y pueden añadir entre 1.500 € y 3.000 € adicionales a la factura total según el valor del inmueble.',
        },
        {
          type: 'ul',
          items: [
            'Notaría: entre 600 € y 1.500 € según el valor del inmueble',
            'Registro de la Propiedad: entre 400 € y 800 €',
            'Gestoría: entre 300 € y 600 €',
            'Tasación (si hay hipoteca): entre 300 € y 600 €',
          ],
        },
        {
          type: 'h2',
          text: 'Impuestos específicos para compradores no residentes en España',
        },
        {
          type: 'h3',
          text: 'El NIE: imprescindible para comprar',
        },
        {
          type: 'p',
          text: 'El Número de Identificación de Extranjero (NIE) es el código fiscal que identifica a los ciudadanos extranjeros ante la Administración española. Sin NIE es imposible formalizar una compraventa inmobiliaria en España: el notario no puede autorizar la escritura sin que el comprador acredite su NIE. Además del cierre ante notario, el NIE es imprescindible para abrir una cuenta bancaria en España, pagar los impuestos derivados de la compra, solicitar financiación hipotecaria y cumplir con las obligaciones fiscales periódicas como propietario no residente. Los ciudadanos de la Unión Europea pueden obtener el NIE en cualquier Comisaría de Policía con competencias en extranjería en España, con cita previa, o en el Consulado español de su país de residencia. Los ciudadanos no comunitarios siguen el mismo procedimiento, aunque en algunos casos el trámite puede requerir documentación adicional. Los plazos de tramitación oscilan entre una y cuatro semanas dependiendo de la vía elegida y la carga de trabajo de las oficinas tramitadoras. Una solución muy práctica para compradores que no residen en España o que tienen dificultades para desplazarse es otorgar un poder notarial a un abogado en España para que tramite el NIE en su nombre.',
        },
        {
          type: 'h3',
          text: 'IRNR: obligaciones fiscales anuales como propietario no residente',
        },
        {
          type: 'p',
          text: 'Una vez que eres propietario de una vivienda en España sin residir fiscalmente en el país, naces automáticamente obligado a tributar por el Impuesto sobre la Renta de No Residentes (IRNR). Aunque no alquiles la vivienda ni obtengas ningún ingreso de ella, la ley española presume que obtienes una renta por el simple hecho de ser propietario. Este concepto se denomina imputación de rentas, y se calcula como el 1,1% del valor catastral del inmueble (o el 2% si el valor catastral no ha sido revisado en los últimos diez años). Sobre esa renta imputada se aplica el tipo impositivo del IRNR, que varía según la residencia fiscal del propietario: los residentes en países de la Unión Europea o del Espacio Económico Europeo tributan al 19%, mientras que los residentes en países fuera del EEE tributan al 24%. La declaración se presenta anualmente mediante el Modelo 210 y el plazo para presentarla es el año natural siguiente al que corresponda la renta imputada. Por ejemplo, por la imputación de rentas del año 2024, el plazo de presentación es durante el año 2025.',
        },
        {
          type: 'h3',
          text: 'Retención del 3% en futuras ventas',
        },
        {
          type: 'p',
          text: 'Este es un aspecto que muchos compradores no residentes desconocen en el momento de la compra, pero que tiene relevancia cuando llega el momento de vender. Cuando un no residente vende un inmueble en España, el comprador está obligado por ley a retener el 3% del precio de venta y a ingresarlo en la Agencia Tributaria a cuenta del IRNR del vendedor. Esto significa que en el momento del cierre ante notario, el vendedor no residente recibirá el 97% del precio pactado, y el 3% restante quedará retenido como pago a cuenta de la posible ganancia patrimonial. Si la ganancia real es inferior a esa retención, o si se produce una pérdida patrimonial, el vendedor tiene derecho a solicitar la devolución de la diferencia presentando el Modelo 210 de no residentes. Esta retención actúa como un mecanismo de garantía para la Administración española, que así se asegura de que los no residentes no vendan y se lleven el capital sin haber tributado por las ganancias obtenidas.',
        },
        {
          type: 'h3',
          text: 'Impuesto sobre el Patrimonio',
        },
        {
          type: 'p',
          text: 'Los no residentes con bienes en España están obligados a declarar el Impuesto sobre el Patrimonio por los activos situados en territorio español cuando el valor neto de dichos activos supere los 700.000 €. Este impuesto es competencia de las Comunidades Autónomas, y en las Islas Baleares se aplica una escala de tipos que oscila entre el 0,28% y el 3,45% en función del valor del patrimonio neto. A diferencia del Impuesto sobre la Renta de las Personas Físicas (IRPF), en el Impuesto sobre el Patrimonio los no residentes no tienen derecho a los mismos mínimos exentos que los residentes, aunque sí existe el mínimo exento general de 700.000 €. Para patrimonios elevados, el Impuesto sobre el Patrimonio puede suponer una cantidad significativa que debe tenerse en cuenta en la planificación fiscal global de la inversión. Conviene recordar que el Impuesto sobre el Patrimonio interactúa con el IRPF a través del denominado límite conjunto de cuotas íntegras, pero este mecanismo no está disponible para los no residentes, lo que hace aún más relevante la planificación fiscal previa.',
        },
        {
          type: 'h2',
          text: 'Resumen: ¿cuánto cuesta en total comprar una vivienda en Mallorca?',
        },
        {
          type: 'table',
          headers: ['Concepto', 'Vivienda 300.000 €', 'Vivienda 500.000 €', 'Vivienda 1.000.000 €'],
          rows: [
            ['ITP (segunda mano)', '24.000 €', '41.000 €', '91.000 €'],
            ['Notaría', '~800 €', '~1.000 €', '~1.500 €'],
            ['Registro', '~500 €', '~600 €', '~800 €'],
            ['Gestoría', '~400 €', '~400 €', '~500 €'],
            ['Total gastos aprox.', '~25.700 € (8,6%)', '~43.000 € (8,6%)', '~93.800 € (9,4%)'],
          ],
        },
        {
          type: 'h2',
          text: 'Cómo optimizar fiscalmente tu compra en Mallorca',
        },
        {
          type: 'p',
          text: 'La planificación fiscal previa a la compra es uno de los aspectos más relevantes y que mayor impacto puede tener en el resultado económico final de la operación. No se trata únicamente de pagar los impuestos correctos en el momento de la compra, sino de estructurar la adquisición de manera que minimice la carga fiscal global a lo largo de toda la vida de la inversión: desde la compra hasta la eventual venta o transmisión hereditaria. Existen varias decisiones estratégicas que conviene analizar con un asesor fiscal especializado antes de firmar ningún documento:',
        },
        {
          type: 'ul',
          items: [
            'Compra personal vs. sociedad patrimonial: según tu situación puede ser más eficiente adquirir a través de una SL española, especialmente si el inmueble va a generar rentas por alquiler o si se trata de una inversión con horizonte de reventa',
            'Convenios de doble imposición: España tiene más de 90 convenios para evitar la doble imposición que pueden reducir la carga fiscal total en tu país de residencia, permitiendo compensar los impuestos pagados en España',
            'Planificación de la financiación: las implicaciones fiscales de la hipoteca en España y en tu país de residencia pueden ser significativas, y conviene analizarlas de forma coordinada',
            'Representante fiscal: obligatorio en algunos casos y altamente recomendable siempre; se encarga de las declaraciones periódicas y de mantener la relación con la Agencia Tributaria española',
          ],
        },
        {
          type: 'cta',
          title: '¿Vas a comprar una vivienda en Mallorca?',
          body: 'Nuestro equipo de abogados y asesores fiscales especializados en no residentes te ayuda a estructurar tu compra de forma segura y eficiente. Primera consulta sin coste.',
          button: 'Hablar con un asesor',
        },
        {
          type: 'h2',
          text: 'Preguntas frecuentes',
        },
        {
          type: 'h3',
          text: '¿Puede un extranjero comprar una vivienda en Mallorca?',
        },
        {
          type: 'p',
          text: 'Sí, absolutamente. España no impone ninguna restricción a la compra de inmuebles por parte de ciudadanos extranjeros, ya sean de la Unión Europea o de terceros países. El proceso es esencialmente el mismo que para un ciudadano español, con algunas particularidades administrativas como la obtención previa del NIE y, en algunos casos, la apertura de una cuenta bancaria en España. Mallorca es uno de los destinos más elegidos por compradores internacionales en toda Europa, y el marco legal español ofrece plenas garantías de seguridad jurídica para los inversores extranjeros.',
        },
        {
          type: 'h3',
          text: '¿Es mejor comprar a título personal o a través de una sociedad?',
        },
        {
          type: 'p',
          text: 'No existe una respuesta única a esta pregunta: depende de la situación fiscal particular de cada comprador, del número de propiedades que se prevé adquirir, del uso que se va a dar al inmueble (vivienda habitual, alquiler vacacional, inversión a largo plazo) y de los planes de transmisión futura. En términos generales, la compra a través de una Sociedad Limitada española puede ser más eficiente fiscalmente cuando se prevé generar rentas por alquiler, cuando el patrimonio inmobiliario es elevado o cuando se quiere facilitar la transmisión generacional. La compra a título personal es más sencilla administrativamente y puede ser más adecuada para una sola propiedad de uso personal. Recomendamos siempre realizar un análisis fiscal previo antes de tomar esta decisión.',
        },
        {
          type: 'h3',
          text: '¿Qué pasa si no declaro el IRNR como no residente?',
        },
        {
          type: 'p',
          text: 'El incumplimiento de las obligaciones fiscales como propietario no residente puede tener consecuencias económicas significativas. La Agencia Tributaria española dispone de herramientas para identificar a los propietarios no residentes que no cumplen con sus obligaciones declarativas, incluyendo el cruce de información con registros de la propiedad y las administraciones de otros países con los que España tiene acuerdos de intercambio de información fiscal. Las sanciones por no presentar el Modelo 210 pueden incluir recargos por presentación fuera de plazo (del 5% al 20% según el retraso), intereses de demora, y en los casos más graves, sanciones formales que pueden alcanzar el 50% de la cuota no declarada. Además, el incumplimiento continuado puede complicar futuras operaciones sobre el inmueble, incluida su eventual venta.',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes sobre impuestos al comprar en Mallorca',
          items: [
            {
              q: '¿Cuánto se paga de ITP al comprar una vivienda de segunda mano en Mallorca?',
              a: 'En las Islas Baleares el ITP es progresivo: 8% hasta 400.000 €, 9% de 400.001 a 600.000 €, 10% de 600.001 a 1.000.000 €, y 11% por encima de 1.000.000 €. Para una vivienda de 500.000 € el ITP asciende a 41.000 € (tipo efectivo del 8,2%). A esto hay que añadir los gastos de notaría, registro y gestoría, que suman entre 1.500 y 3.000 € adicionales.',
            },
            {
              q: '¿Qué impuestos paga un no residente al comprar en Mallorca?',
              a: 'Un no residente paga los mismos impuestos de adquisición que un residente: ITP (segunda mano) o IVA+AJD (obra nueva). Adicionalmente, como propietario no residente, deberá declarar anualmente el Impuesto sobre la Renta de No Residentes (IRNR): si alquila la propiedad, tributa sobre los rendimientos; si no la alquila, tributa por una renta imputada del 1,1% del valor catastral. También deberá declarar el Impuesto sobre el Patrimonio si el valor de sus bienes en España supera los 700.000 €.',
            },
            {
              q: '¿Cuánto cuesta comprar una vivienda de 600.000 € en Mallorca incluyendo todos los impuestos?',
              a: 'Para una vivienda de segunda mano de 600.000 € en Mallorca, el ITP asciende a 50.000 € (8% sobre los primeros 400.000 € = 32.000 € + 9% sobre los siguientes 200.000 € = 18.000 €). Añadiendo notaría (aprox. 1.200 €), registro (aprox. 600 €) y gestoría (aprox. 400 €), el coste total adicional al precio de compra se sitúa en torno a los 52.200 €, lo que equivale a un 8,7% sobre el precio escriturado.',
            },
            {
              q: '¿Necesito un NIE para comprar una vivienda en Mallorca?',
              a: 'Sí, el NIE (Número de Identificación de Extranjero) es absolutamente obligatorio. Sin NIE ningún notario autorizará la escritura de compraventa, no es posible pagar los impuestos derivados de la compra ni inscribir la propiedad en el Registro. El NIE puede obtenerse en España en cualquier comisaría de policía con competencias en extranjería, o desde el extranjero en el consulado español de tu país de residencia. El proceso suele tardar entre 1 y 4 semanas.',
            },
            {
              q: '¿Hay alguna exención o reducción del ITP para compradores en Mallorca?',
              a: 'Las Islas Baleares contemplan algunas bonificaciones del ITP para determinados colectivos: tipo reducido del 4% para familias numerosas que adquieren su vivienda habitual, tipo reducido para jóvenes menores de 36 años en la compra de su primera vivienda habitual (con límites de precio), y tipo del 0,1% para víctimas de violencia de género. Estas bonificaciones son incompatibles entre sí y están sujetas a requisitos específicos que conviene verificar con un asesor antes de la firma.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Servicios y recursos relacionados',
          items: [
            { label: 'Inmobiliaria en Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Más de 10 años asesorando compraventas en toda la isla con asesoría legal y fiscal incluida.' },
            { label: 'Comprar Casa en Mallorca', href: '/es/comprar-casa-mallorca', desc: 'Due diligence, análisis fiscal y representación independiente del comprador.' },
            { label: 'Asesoría Fiscal Inmobiliaria', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'ITP, IVA, IRNR, plusvalía y planificación fiscal de operaciones inmobiliarias.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'Taxes when buying a property in Mallorca: complete guide for non-residents',
      metaDescription:
        'Complete guide to taxes and costs when buying a property in Mallorca as a non-resident: Transfer Tax, VAT, IRNR, NIE and total purchase costs.',
      h1: 'Taxes when buying a property in Mallorca: complete guide for non-residents',
      category: 'Real Estate Taxation',
      tags: ['taxes', 'non-residents', 'transfer tax', 'property purchase', 'Mallorca'],
      excerpt:
        'If you are thinking of buying a property in Mallorca as a non-resident, understanding the tax burden is essential. Taxes and costs can amount to between 10% and 14% of the purchase price. This guide explains everything.',
      blocks: [
        {
          type: 'p',
          text: 'Buying a property in Mallorca involves far more than the asking price. Before signing any contract, it is essential to have a precise understanding of all the taxes and costs associated with the transaction. For buyers who are not tax residents in Spain, the tax burden has important particularities that must be analysed in detail from the very outset. Failing to do so can result in significant financial surprises and, in some cases, tax non-compliance with legal consequences. This guide provides a comprehensive explanation of all the taxes affecting property purchases in Mallorca for non-residents, with practical examples and comparison tables.',
        },
        {
          type: 'h2',
          text: 'What taxes are paid when buying a property in Mallorca?',
        },
        {
          type: 'h3',
          text: 'Second-hand property: Transfer Tax (ITP)',
        },
        {
          type: 'p',
          text: 'The Impuesto sobre Transmisiones Patrimoniales (ITP), or Property Transfer Tax, is the main tax payable when acquiring a second-hand property in Spain. In the Balearic Islands, this tax is progressive and is administered by the Balearic Tax Agency (ATIB). Unlike other Spanish regions that apply a flat rate, the Balearic Islands set progressive brackets based on the property value, meaning that the higher the price, the greater the percentage applied on the upper tranches. This progressive structure can have a significant impact on high-value properties, which are common in the Mallorcan market.',
        },
        {
          type: 'ul',
          items: [
            'Up to €400,000: 8%',
            'From €400,001 to €600,000: 9%',
            'From €600,001 to €1,000,000: 10%',
            'Above €1,000,000: 11%',
          ],
        },
        {
          type: 'p',
          text: 'To illustrate with a practical example: if you purchase a second-hand property in Mallorca for €500,000, the Transfer Tax is not calculated by applying a single flat rate to the total. Instead it is calculated progressively by bracket. On the first €400,000 you pay 8% (€32,000), and on the remaining €100,000 you pay 9% (€9,000). In total, the Transfer Tax amounts to €41,000, equivalent to an effective rate of 8.2% on the total transaction price. It is important to note that the tax base for Transfer Tax is the higher of the sale price and the cadastral reference value set by the Tax Administration, which may increase the tax bill even when the agreed price between the parties is lower.',
        },
        {
          type: 'h3',
          text: 'New-build property: VAT and Stamp Duty (AJD)',
        },
        {
          type: 'p',
          text: 'When the property is newly built and purchased directly from the developer, Transfer Tax does not apply. Instead, two different taxes are payable: Value Added Tax (VAT) and Stamp Duty (Actos Jurídicos Documentados, or AJD). The VAT applicable to the purchase of a standard new-build residential property is 10% of the sale price. For parking spaces purchased together with the property (up to two spaces), the rate is also 10%. For commercial premises, offices or other non-residential properties, VAT is 21%. In addition to this, Stamp Duty in the Balearic Islands is levied at 1.2% of the notarised value. Stamp Duty covers the formalisation of the contract as a public deed, and while its amount may appear smaller than Transfer Tax, it represents a significant sum for high-value properties. In summary, for a new-build property at €500,000, you would pay €50,000 in VAT plus €6,000 in Stamp Duty — a total of €56,000 in taxes, representing an additional 11.2% on top of the agreed price.',
        },
        {
          type: 'h2',
          text: 'Other costs when buying a property in Mallorca',
        },
        {
          type: 'p',
          text: 'In addition to the taxes directly associated with the purchase, there are other costs that the buyer must bear and which are frequently underestimated. These costs apply regardless of whether the property is new or second-hand, and can add between €1,500 and €3,000 to the total bill, depending on the value of the property.',
        },
        {
          type: 'ul',
          items: [
            'Notary fees: between €600 and €1,500 depending on the property value',
            'Land Registry: between €400 and €800',
            'Gestoría (administrative agent): between €300 and €600',
            'Valuation (if applying for a mortgage): between €300 and €600',
          ],
        },
        {
          type: 'h2',
          text: 'Taxes specific to non-resident buyers in Spain',
        },
        {
          type: 'h3',
          text: 'The NIE: essential for buying property',
        },
        {
          type: 'p',
          text: 'The NIE (Número de Identificación de Extranjero) is the tax identification number assigned to foreign nationals by the Spanish Administration. Without a NIE it is impossible to complete a property purchase in Spain: the notary will not authorise the deed unless the buyer can evidence their NIE. Beyond the notarial closing, the NIE is also required to open a bank account in Spain, pay the taxes arising from the purchase, apply for a mortgage and fulfil periodic tax obligations as a non-resident property owner. EU citizens can obtain a NIE at any Police Station with jurisdiction over foreigners in Spain, by prior appointment, or at the Spanish Consulate in their country of residence. Non-EU citizens follow the same procedure, although in some cases additional documentation may be required. Processing times range from one to four weeks depending on the route chosen and the workload of the processing offices. A very practical solution for buyers who do not reside in Spain or who find it difficult to travel is to grant a notarial power of attorney to a lawyer in Spain to process the NIE on their behalf.',
        },
        {
          type: 'h3',
          text: 'IRNR: annual tax obligations as a non-resident property owner',
        },
        {
          type: 'p',
          text: 'Once you own a property in Spain without being a tax resident there, you automatically become liable to pay the Non-Resident Income Tax (IRNR). Even if you do not rent the property out or generate any income from it, Spanish law presumes that you are obtaining income simply by virtue of being the owner. This concept is known as imputación de rentas (deemed rental income), and is calculated as 1.1% of the property\'s cadastral value (or 2% if the cadastral value has not been revised in the last ten years). The IRNR tax rate is then applied to this deemed income. The rate varies depending on the owner\'s country of tax residence: residents in EU or EEA countries are taxed at 19%, while residents outside the EEA are taxed at 24%. The declaration is submitted annually using Form 210 (Modelo 210), and the filing deadline is during the calendar year following the year to which the deemed income relates. For example, for the imputed income of 2024, the filing deadline is during 2025.',
        },
        {
          type: 'h3',
          text: '3% retention on future sales',
        },
        {
          type: 'p',
          text: 'This is an aspect that many non-resident buyers are unaware of at the time of purchase, but which becomes relevant when the time comes to sell. When a non-resident sells a property in Spain, the buyer is legally required to withhold 3% of the sale price and pay it to the Tax Agency as a prepayment of the seller\'s IRNR liability. This means that at the notarial closing, the non-resident seller will receive 97% of the agreed price, with the remaining 3% retained as a withholding on account of any capital gain. If the actual gain is less than this retention, or if there is a capital loss, the seller is entitled to claim a refund of the difference by filing Form 210. This retention mechanism acts as a guarantee for the Spanish Administration, ensuring that non-residents do not sell and repatriate their capital without having paid tax on any gains made.',
        },
        {
          type: 'h3',
          text: 'Wealth Tax (Impuesto sobre el Patrimonio)',
        },
        {
          type: 'p',
          text: 'Non-residents with assets in Spain are required to declare Wealth Tax on assets located in Spanish territory when the net value of those assets exceeds €700,000. This tax is administered at regional level, and in the Balearic Islands a progressive scale of rates ranging from 0.28% to 3.45% applies, depending on the net value of the taxable wealth. Unlike Personal Income Tax, non-residents are not entitled to the same personal exemptions as residents for Wealth Tax purposes, although the general exempt minimum of €700,000 does apply. For high-net-worth individuals, Wealth Tax can represent a significant annual amount that must be factored into the overall tax planning of the investment. It is worth noting that Wealth Tax interacts with Personal Income Tax through a joint tax liability cap mechanism, but this mechanism is not available to non-residents, making advance tax planning even more relevant.',
        },
        {
          type: 'h2',
          text: 'Summary: how much does it cost in total to buy a property in Mallorca?',
        },
        {
          type: 'table',
          headers: ['Item', '€300,000 property', '€500,000 property', '€1,000,000 property'],
          rows: [
            ['Transfer Tax (second-hand)', '€24,000', '€41,000', '€91,000'],
            ['Notary fees', '~€800', '~€1,000', '~€1,500'],
            ['Land Registry', '~€500', '~€600', '~€800'],
            ['Gestoría', '~€400', '~€400', '~€500'],
            ['Total approximate costs', '~€25,700 (8.6%)', '~€43,000 (8.6%)', '~€93,800 (9.4%)'],
          ],
        },
        {
          type: 'h2',
          text: 'How to optimise the tax treatment of your purchase in Mallorca',
        },
        {
          type: 'p',
          text: 'Advance tax planning is one of the most relevant aspects of any property purchase, with the greatest potential impact on the overall financial outcome of the transaction. It is not merely about paying the correct taxes at the time of purchase, but about structuring the acquisition in a way that minimises the overall tax burden throughout the entire life of the investment: from the initial purchase through to the eventual sale or inheritance transfer. There are several strategic decisions that should be analysed with a specialist tax advisor before signing any documents:',
        },
        {
          type: 'ul',
          items: [
            'Personal purchase vs. holding company: depending on your situation, it may be more tax-efficient to acquire through a Spanish limited company (SL), especially if the property will generate rental income or if you are planning a future sale',
            'Double tax treaties: Spain has over 90 double taxation conventions that can reduce the total tax burden in your country of residence, allowing taxes paid in Spain to be offset',
            'Financing structure: the tax implications of a Spanish mortgage and of financing in your country of residence can be significant and should be analysed in a coordinated manner',
            'Fiscal representative: mandatory in some cases and always strongly recommended; this person handles periodic tax filings and manages the relationship with the Spanish Tax Agency on your behalf',
          ],
        },
        {
          type: 'cta',
          title: 'Are you planning to buy a property in Mallorca?',
          body: 'Our team of lawyers and tax advisors specialised in non-residents will help you structure your purchase safely and efficiently. Free initial consultation.',
          button: 'Speak to an advisor',
        },
        {
          type: 'h2',
          text: 'Frequently asked questions',
        },
        {
          type: 'h3',
          text: 'Can a foreigner buy a property in Mallorca?',
        },
        {
          type: 'p',
          text: 'Yes, absolutely. Spain does not impose any restrictions on property purchases by foreign nationals, whether from the European Union or from third countries. The process is essentially the same as for a Spanish citizen, with some administrative particularities such as obtaining a NIE beforehand and, in some cases, opening a bank account in Spain. Mallorca is one of the most popular destinations for international buyers across Europe, and the Spanish legal framework provides full legal certainty guarantees for foreign investors.',
        },
        {
          type: 'h3',
          text: 'Is it better to buy in a personal name or through a company?',
        },
        {
          type: 'p',
          text: 'There is no single answer to this question: it depends on each buyer\'s individual tax situation, the number of properties they plan to acquire, the intended use of the property (primary residence, holiday rental, long-term investment) and future transfer plans. Generally speaking, purchasing through a Spanish limited company can be more tax-efficient when rental income is expected, when the overall property portfolio is substantial, or when facilitating generational transfer is a priority. A personal purchase is simpler to administer and may be more appropriate for a single property for personal use. We always recommend carrying out a prior tax analysis before making this decision.',
        },
        {
          type: 'h3',
          text: 'What happens if I do not file the IRNR as a non-resident?',
        },
        {
          type: 'p',
          text: 'Failure to comply with tax obligations as a non-resident property owner can have significant financial consequences. The Spanish Tax Agency has tools to identify non-resident property owners who are not meeting their reporting obligations, including cross-referencing information with Land Registry records and the tax administrations of other countries with which Spain has information-sharing agreements. Penalties for failing to file Form 210 can include surcharges for late filing (ranging from 5% to 20% depending on the delay), late payment interest, and in more serious cases, formal penalties that can reach 50% of the undeclared tax liability. Furthermore, persistent non-compliance can complicate future transactions relating to the property, including any eventual sale.',
        },
        {
          type: 'faq',
          eyebrow: 'Frequently asked questions about buying property in Mallorca',
          items: [
            {
              q: 'How much Transfer Tax (ITP) do you pay on a second-hand property in Mallorca?',
              a: 'In the Balearic Islands, ITP is progressive: 8% up to €400,000; 9% from €400,001 to €600,000; 10% from €600,001 to €1,000,000; and 11% above €1,000,000. For a property costing €500,000, the ITP amounts to €41,000 (effective rate of 8.2%). Notary, land registry and administration fees add a further €1,500–3,000.',
            },
            {
              q: 'What taxes does a non-resident pay when buying property in Mallorca?',
              a: 'A non-resident pays the same acquisition taxes as a resident: ITP (second-hand) or VAT+AJD (new build). As a non-resident owner, they must also file an annual Non-Resident Income Tax return (IRNR): if the property is rented out, they are taxed on the rental income; if not, they are taxed on an imputed income of 1.1% of the cadastral value. Wealth Tax (Impuesto sobre el Patrimonio) must also be declared if the value of assets in Spain exceeds €700,000.',
            },
            {
              q: 'Do I need a Spanish bank account to buy property in Mallorca?',
              a: 'A Spanish bank account is not legally mandatory, but it is highly advisable. In practice, it is often essential: Spanish banks typically require a local account for mortgage applications, and it greatly simplifies payment of the purchase price at the notary (via banker\'s cheque), direct debits for ongoing costs (community fees, IBI property tax, utilities) and receipt of any tax refunds from the Spanish Tax Agency.',
            },
            {
              q: 'Can I buy property in Mallorca without visiting Spain?',
              a: 'Yes. You can purchase a property in Mallorca without being physically present by granting a notarial power of attorney (poder notarial) to a lawyer in Spain, authorising them to act on your behalf at all stages: signing contracts, completing at the notary, paying taxes and registering the property. The power of attorney can be granted at a Spanish consulate in your country of residence or, if already in Spain, before a Spanish notary.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Related services and resources',
          items: [
            { label: 'Real Estate Agency in Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Over 10 years advising property transactions across the whole island.' },
            { label: 'Buy Property in Mallorca', href: '/en/buy-property-mallorca', desc: 'Due diligence, tax analysis and independent buyer representation.' },
            { label: 'Property Tax Advisory', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'ITP, VAT, IRNR, capital gains and transaction tax planning.' },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // POST 2 — Cómo invertir en inmobiliario en Mallorca
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'como-invertir-inmobiliario-mallorca',
    date: '2025-03-12',
    readingTime: 12,
    authorKey: 'alfonso',
    image: {
      src: 'https://images.pexels.com/photos/12267705/pexels-photo-12267705.jpeg',
      alt: 'Puerto de Mallorca al atardecer — invertir en inmobiliario en Mallorca rentabilidad',
    },
    es: {
      seoTitle: 'Cómo invertir en inmobiliario en Mallorca: guía para maximizar la rentabilidad',
      metaDescription:
        'Guía completa para invertir en inmobiliario en Mallorca: tipos de inversión, rentabilidad por zonas, fiscalidad del inversor y estructura óptima de la inversión.',
      h1: 'Cómo invertir en inmobiliario en Mallorca: guía para maximizar la rentabilidad',
      category: 'Inversión Inmobiliaria',
      tags: ['inversión', 'rentabilidad', 'alquiler vacacional', 'Mallorca', 'no residentes'],
      excerpt:
        'Mallorca es uno de los mercados inmobiliarios más atractivos de Europa. Alta demanda, oferta limitada y rentabilidades superiores a la media. En esta guía analizamos cómo invertir, qué zonas elegir y cómo estructurar fiscalmente la inversión.',
      blocks: [
        {
          type: 'p',
          text: 'Mallorca se ha consolidado como uno de los mercados inmobiliarios más atractivos de Europa para inversores internacionales. La combinación de una demanda turística extraordinariamente sólida, una oferta de suelo urbanizable cada vez más restringida y un marco legal que protege los derechos de propiedad crea las condiciones ideales para una inversión inmobiliaria segura y rentable. Sin embargo, el mercado mallorquín presenta peculiaridades que lo distinguen de otros mercados europeos, tanto en su dinámica de precios como en su regulación, que hacen imprescindible un asesoramiento especializado antes de comprometer capital. En esta guía analizamos en profundidad las claves para invertir con criterio en el mercado inmobiliario de Mallorca.',
        },
        {
          type: 'h2',
          text: '¿Por qué Mallorca es un mercado atractivo para invertir?',
        },
        {
          type: 'ul',
          items: [
            'Más de 13 millones de turistas al año generan una demanda sostenida de alojamiento que supera la oferta disponible, creando un desequilibrio estructural favorable al propietario',
            'La Ley de Turismo de Baleares restringe nuevas licencias de alquiler vacacional, creando una barrera de entrada difícil de superar que protege el valor de las licencias existentes',
            'El 40% de las transacciones en Baleares involucran compradores extranjeros, lo que mantiene la demanda internacional constante y diversificada geográficamente',
            'El precio medio de la vivienda en zonas prime ha crecido entre un 8% y un 12% anual en los últimos cinco años, combinando rentabilidad por rentas con revalorización del capital',
            'Marco legal estable y seguridad jurídica plena dentro de la Unión Europea, con garantías de derechos de propiedad reconocidas internacionalmente',
          ],
        },
        {
          type: 'h2',
          text: 'Tipos de inversión inmobiliaria en Mallorca',
        },
        {
          type: 'h3',
          text: 'Alquiler vacacional (turístico)',
        },
        {
          type: 'p',
          text: 'Históricamente, el alquiler vacacional ha sido la modalidad de inversión con mayor rentabilidad bruta en Mallorca, con rendimientos que en las mejores ubicaciones y temporadas pueden alcanzar el 5-8% anual sobre el precio de adquisición. Sin embargo, el endurecimiento progresivo de la regulación autonómica ha convertido la obtención de una licencia turística en algo cada vez más difícil y, en muchas zonas, directamente imposible. En Palma, el Ayuntamiento suspendió en 2018 la concesión de nuevas licencias para apartamentos turísticos, una moratoria que se ha mantenido y ampliado. En otras zonas de la isla, las licencias se gestionan por cupos y plazos limitados. Todo esto convierte la propia licencia turística en un activo patrimonial con valor propio, independiente del inmueble. Una propiedad con licencia turística vigente y transmisible puede valer entre un 15% y un 30% más que una propiedad idéntica sin ella, dependiendo de la zona. Si el plan de negocio de la inversión incluye el alquiler vacacional, la verificación del estado, transmisibilidad y vigencia de la licencia turística debe ser el primer paso de la due diligence.',
        },
        {
          type: 'h3',
          text: 'Alquiler de larga estancia',
        },
        {
          type: 'p',
          text: 'El alquiler residencial de larga estancia ofrece rentabilidades brutas más modestas que el vacacional, generalmente entre el 3% y el 5% según la zona, pero presenta ventajas importantes que lo hacen atractivo para un perfil de inversor diferente. La gestión es considerablemente menos intensiva que el alquiler vacacional: no hay rotación constante de inquilinos, no se requiere equipamiento ni servicios turísticos, y los ingresos son más predecibles y estables a lo largo del año. En Mallorca, la escasez de vivienda disponible para arrendar —consecuencia de la presión turística y del incremento de la segunda residencia— mantiene los precios de alquiler en niveles elevados y los periodos de comercialización en mínimos históricos: en zonas demandadas como el centro de Palma o Portixol, el tiempo medio desde que se pone en alquiler hasta que se firma el contrato es inferior a siete días. Esta escasez estructural proporciona una cobertura natural frente al riesgo de desocupación y una tendencia alcista en los precios de arrendamiento que compensa parcialmente la menor rentabilidad bruta respecto al alquiler vacacional.',
        },
        {
          type: 'h3',
          text: 'Inversión en el segmento de lujo',
        },
        {
          type: 'p',
          text: 'Las propiedades de lujo por encima de los 2 millones de euros muestran una resiliencia excepcional a los ciclos económicos que las convierte en una categoría de inversión diferenciada. La demanda de este segmento proviene principalmente de compradores de alta capacidad adquisitiva de Alemania, Reino Unido, Suiza, Austria y los países nórdicos, para quienes Mallorca representa una primera residencia secundaria de alto valor sentimental y estratégico. En los momentos de mayor incertidumbre económica global, este segmento no solo mantiene su valor sino que en ocasiones lo incrementa, porque el capital busca activos reales de alta calidad en entornos seguros. Los plazos de comercialización en el segmento prime son relativamente cortos para el nivel de precios: una villa bien ubicada y presentada, con piscina y vistas, puede encontrar comprador en entre tres y seis meses. La rentabilidad en este segmento proviene principalmente de la revalorización del capital a largo plazo, complementada en algunos casos por alquileres vacacionales a precios muy elevados durante la temporada alta.',
        },
        {
          type: 'h3',
          text: 'Inmuebles comerciales y locales',
        },
        {
          type: 'p',
          text: 'Los inmuebles comerciales —locales en planta baja, oficinas y naves— son menos líquidos que los residenciales pero ofrecen características diferenciales que los hacen atractivos para ciertos perfiles de inversor. Un local bien ubicado en el centro de Palma o en zonas de alto tráfico peatonal puede ofrecer rentabilidades brutas del 5-7% con contratos de arrendamiento a largo plazo que proporcionan una estabilidad de ingresos superior a la del residencial. El riesgo de impago en el segmento comercial es diferente al residencial: los inquilinos comerciales suelen ser empresas con mayor solvencia patrimonial y los contratos incluyen garantías adicionales. La gestión es también menos compleja que en el residencial: menos intervenciones de mantenimiento, sin suministros que gestionar y contratos habitualmente de mayor duración. El principal riesgo a vigilar es la vacancia entre contratos, que en zonas prime de Palma suele ser limitada pero que puede ser significativa en ubicaciones secundarias.',
        },
        {
          type: 'h2',
          text: 'Rentabilidad por zonas en Mallorca',
        },
        {
          type: 'table',
          headers: ['Zona', 'Precio medio (€/m²)', 'Tipo de inversión recomendado', 'Rentabilidad bruta aprox.'],
          rows: [
            ['Palma centro y Paseo Marítimo', '4.500 – 7.000', 'Larga estancia, lujo', '3 – 5%'],
            ['Puerto de Pollensa / Alcúdia', '3.000 – 5.000', 'Vacacional (con licencia)', '5 – 8%'],
            ['Sóller y zona norte', '4.000 – 8.000', 'Premium, revalorización', '4 – 6%'],
            ['Zona sur (Santanyí, Ses Salines)', '3.000 – 5.500', 'Vacacional, equilibrio', '5 – 7%'],
            ['Santa Ponsa / Calvià', '4.000 – 7.000', 'Mercado internacional', '4 – 6%'],
          ],
        },
        {
          type: 'h2',
          text: 'Fiscalidad básica del inversor inmobiliario no residente',
        },
        {
          type: 'h3',
          text: 'Tributación de los ingresos por alquiler',
        },
        {
          type: 'p',
          text: 'Los inversores no residentes que obtienen ingresos por el arrendamiento de inmuebles en España tributan por el IRNR sobre los rendimientos netos del alquiler. El tipo impositivo varía según la residencia fiscal: los residentes en países de la Unión Europea o del Espacio Económico Europeo pagan el 19% sobre los rendimientos netos, pudiendo deducir los gastos directamente relacionados con el alquiler en proporción a los días arrendados (intereses hipotecarios, gastos de mantenimiento, seguro, cuota de comunidad, tasa de basuras, etc.). Los residentes fuera del EEE tributan al 24% sobre los ingresos brutos, sin posibilidad de deducir gastos en la mayoría de los casos salvo que el convenio de doble imposición aplicable permita otra cosa. Esta diferencia de trato entre residentes y no residentes de la UE fue objeto de condena por el Tribunal de Justicia de la UE, lo que llevó a España a equiparar el tratamiento de los residentes del EEE con el de los residentes de la UE. La declaración trimestral de rentas del alquiler se presenta mediante el Modelo 210 en los primeros veinte días naturales de los meses de abril, julio, octubre y enero.',
        },
        {
          type: 'h3',
          text: 'Plusvalía en la venta del inmueble',
        },
        {
          type: 'p',
          text: 'Cuando un inversor no residente vende un inmueble en España y obtiene una ganancia patrimonial, esa ganancia tributa por el IRNR al tipo del 19% para residentes en la UE y el EEE, y al 24% para el resto. La ganancia se calcula como la diferencia entre el precio de venta (minorado por los gastos directamente imputables a la venta) y el precio de adquisición (incrementado por los gastos e impuestos de la compra). En el momento de la venta, el comprador está obligado a practicar una retención del 3% sobre el precio pactado e ingresarla en Hacienda a cuenta del IRNR del vendedor. Esta retención actúa como pago a cuenta: si el impuesto final resultante es superior, el vendedor deberá pagar la diferencia; si es inferior, tendrá derecho a solicitar la devolución. La declaración se formaliza mediante el Modelo 210 dentro del plazo de tres meses desde la fecha de la escritura.',
        },
        {
          type: 'h3',
          text: 'Modelo 210 y obligaciones periódicas',
        },
        {
          type: 'p',
          text: 'El Modelo 210 es la declaración central del IRNR y se utiliza tanto para declarar los ingresos por alquiler (trimestralmente) como para la imputación de rentas anuales por la mera titularidad del inmueble (cuando no se arrienda). También se utiliza para regularizar la retención del 3% practicada en la compraventa. Como propietario no residente, aunque no alquiles el inmueble ni obtengas ningún ingreso del mismo, estás obligado a presentar el Modelo 210 anualmente por la imputación de rentas. El incumplimiento de estas obligaciones puede derivar en sanciones, recargos e intereses de demora. Además, si existen deudas fiscales en España, la Agencia Tributaria puede ejercer acciones de cobro sobre el propio inmueble, que actúa como garantía real de las deudas tributarias.',
        },
        {
          type: 'h2',
          text: 'Estructura óptima para invertir en Mallorca',
        },
        {
          type: 'p',
          text: 'La estructura a través de la cual se materializa la inversión tiene un impacto fiscal y patrimonial muy significativo que conviene analizar en profundidad antes de comprometer capital. Existen tres opciones principales, cada una con sus ventajas e inconvenientes:',
        },
        {
          type: 'ul',
          items: [
            'Compra personal: más sencilla, adecuada para una sola propiedad o inversión puntual. Sin costes de constitución ni gestión societaria. La tributación de las rentas y ganancias se realiza directamente en el IRNR del propietario.',
            'Sociedad Limitada española (SL): recomendable para portfolios o inversiones de alta rentabilidad. Tributación al 25% sobre beneficio neto, permite deducir todos los gastos relacionados con la actividad, facilita la transmisión generacional y puede ser más eficiente para patrimonios elevados o múltiples inmuebles.',
            'Holding internacional: para inversores con estructuras patrimoniales complejas en el extranjero. Requiere una coordinación cuidadosa entre la fiscalidad española e internacional para evitar la doble imposición y garantizar que la estructura sea reconocida tanto en España como en el país de residencia del inversor.',
          ],
        },
        {
          type: 'h2',
          text: 'Errores más comunes al invertir en Mallorca',
        },
        {
          type: 'ul',
          items: [
            'No verificar el estado de la licencia turística antes de comprar, lo que puede frustrar completamente el plan de negocio previsto para la inversión',
            'Infraestimar los costes de adquisición: ITP, notaría, registro y gestoría pueden suponer un 10-12% adicional sobre el precio de compra',
            'No planificar la estructura fiscal desde el inicio, lo que genera una tributación ineficiente que puede reducir significativamente la rentabilidad neta de la inversión',
            'Desconocer las obligaciones fiscales anuales como propietario no residente, con el riesgo de acumular sanciones y recargos',
            'Omitir una due diligence jurídica completa: cargas ocultas, deudas de comunidad, expedientes urbanísticos abiertos o limitaciones al uso pueden representar riesgos graves para la inversión',
          ],
        },
        {
          type: 'cta',
          title: '¿Quieres invertir en inmobiliario en Mallorca?',
          body: 'Nuestro equipo combina asesoramiento legal, fiscal e inmobiliario para ayudarte a identificar la oportunidad correcta, estructurar la inversión de forma eficiente y maximizar la rentabilidad. Consulta sin coste.',
          button: 'Solicitar consulta',
        },
        {
          type: 'h2',
          text: 'Preguntas frecuentes sobre inversión inmobiliaria en Mallorca',
        },
        {
          type: 'h3',
          text: '¿Cuánto dinero se necesita para invertir en inmobiliario en Mallorca?',
        },
        {
          type: 'p',
          text: 'El capital mínimo necesario depende de la zona y el tipo de inversión que se busque. Las propiedades de entrada en zonas menos exclusivas pueden encontrarse a partir de los 200.000 €, aunque en las zonas más demandadas los precios parten de 400.000-500.000 €. A la inversión en el activo hay que añadir entre un 10% y un 12% en concepto de impuestos y gastos de adquisición (ITP, notaría, registro y gestoría), más el coste de cualquier reforma o acondicionamiento necesario antes de poner el inmueble en el mercado. Si la inversión se financia con hipoteca, los bancos españoles suelen financiar como máximo el 60-70% del valor de tasación para no residentes, por lo que el capital propio necesario puede ser más elevado de lo esperado.',
        },
        {
          type: 'h3',
          text: '¿Es rentable el alquiler vacacional en Mallorca?',
        },
        {
          type: 'p',
          text: 'Con una licencia turística vigente y en las ubicaciones correctas, el alquiler vacacional puede generar rentabilidades brutas del 5-8% anual. Sin embargo, la obtención de nuevas licencias turísticas es cada vez más difícil o directamente imposible en muchas zonas de Mallorca, especialmente en Palma. Antes de comprar con la intención de explotar turísticamente el inmueble, es imprescindible verificar que existe una licencia turística vigente y transmisible con la propiedad, o que la normativa urbanística del municipio permite obtenerla. Una propiedad sin licencia turística en una zona donde no se pueden otorgar nuevas licencias nunca podrá explotarse en régimen de alquiler vacacional.',
        },
        {
          type: 'h3',
          text: '¿Comprar a nombre personal o a través de una empresa?',
        },
        {
          type: 'p',
          text: 'Esta es una de las decisiones más importantes de la inversión y no tiene una respuesta universal. Depende del volumen de la inversión, del número de propiedades previstas, de la fiscalidad personal del inversor en su país de residencia y de los planes a largo plazo. Para inversiones de cierta envergadura o portfolios con varios activos, una Sociedad Limitada española puede ofrecer ventajas fiscales significativas: tributación al 25% sobre beneficio neto (frente al 19-24% del IRNR sobre ingresos brutos para no residentes), posibilidad de deducir todos los gastos, facilidad para transmitir acciones en lugar de inmuebles, y optimización del Impuesto sobre el Patrimonio. Recomendamos realizar un análisis fiscal completo antes de tomar esta decisión.',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes sobre inversión inmobiliaria en Mallorca',
          items: [
            {
              q: '¿Cuál es la rentabilidad media del alquiler en Mallorca?',
              a: 'La rentabilidad bruta por alquiler en Mallorca oscila entre el 3% y el 6% anual dependiendo de la zona, la tipología del inmueble y el tipo de alquiler (residencial de larga duración vs. vacacional). Las zonas con mayor rentabilidad bruta suelen ser las menos exclusivas: Palma residencial, Alcúdia y el norte de la isla. Las zonas prime (Andratx, Son Vida, Deià) ofrecen menor rentabilidad corriente pero mayor apreciación de capital a largo plazo. El alquiler vacacional en zonas turísticas puede generar rentabilidades brutas del 5-8%, aunque conlleva costes de gestión más elevados y mayor dependencia de la estacionalidad.',
            },
            {
              q: '¿Qué zonas de Mallorca son mejores para invertir en inmobiliario?',
              a: 'Depende del objetivo de inversión. Para rentabilidad por alquiler de larga duración, las mejores zonas son los barrios residenciales de Palma (Santa Catalina, Son Espanyolet, Camp Redó) y poblaciones con demanda local consolidada como Inca o Manacor. Para revalorización de capital a largo plazo, las zonas prime del suroeste (Andratx, Santa Ponça) y el norte (Puerto Pollensa, Alcúdia) han mostrado una apreciación sostenida durante la última década. Para alquiler vacacional, las zonas costeras con acceso a playa y alta demanda turística ofrecen los mayores ingresos brutos, pero están sujetas a restricciones de licencia.',
            },
            {
              q: '¿Cuánto capital mínimo se necesita para invertir en inmobiliario en Mallorca?',
              a: 'El precio de entrada en el mercado mallorquín varía enormemente por zona. Es posible encontrar pisos en Palma por debajo de 200.000 €, aunque en zonas con mayor demanda los precios parten de 300.000-400.000 €. Para propiedades de inversión con potencial de revalorización significativo en zonas premium, el umbral práctico suele estar en 500.000-800.000 €. A esto hay que añadir los costes de adquisición (ITP del 8-11% + gastos de notaría y registro) y, si la propiedad necesita reforma, el presupuesto correspondiente.',
            },
            {
              q: '¿Es mejor invertir en alquiler vacacional o residencial en Mallorca?',
              a: 'El alquiler vacacional ofrece mayor rentabilidad bruta pero requiere gestión activa, tiene una estacionalidad marcada (alta demanda de junio a septiembre, baja el resto del año) y está sujeto a regulación de licencias turísticas, que en Mallorca son muy restrictivas. El alquiler residencial de larga duración ofrece menor rentabilidad bruta pero mayor estabilidad, menos gestión y sin restricciones de licencia. La elección depende del perfil del inversor: quien busca ingresos pasivos estables prefiere el residencial; quien puede gestionar activamente y asume mayor volatilidad puede optar por el vacacional.',
            },
            {
              q: '¿Qué impuestos tiene que pagar un inversor no residente en Mallorca?',
              a: 'Un inversor no residente que alquila una propiedad en Mallorca debe declarar trimestralmente el Impuesto sobre la Renta de No Residentes (IRNR) mediante el Modelo 210. El tipo impositivo es del 19% para residentes en la UE/EEE y del 24% para el resto. Puede deducir los gastos relacionados con el alquiler si es residente en la UE. Además, si el valor de sus bienes en España supera los 700.000 €, debe declarar el Impuesto sobre el Patrimonio. En caso de venta futura, tributará por la ganancia patrimonial y el comprador le retendrá el 3% del precio como pago a cuenta del IRNR.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Servicios y recursos relacionados',
          items: [
            { label: 'Inmobiliaria en Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Más de 10 años asesorando compraventas e inversiones en toda la isla.' },
            { label: 'Invertir en Inmobiliario en Mallorca', href: '/es/invertir-inmobiliario-mallorca', desc: 'Análisis de rentabilidad, estructura jurídica y gestión de portfolio.' },
            { label: 'Sociedad Patrimonial para Inmuebles', href: '/es/blog/sociedad-patrimonial-comprar-inmueble-mallorca-2026', desc: '¿Conviene comprar a través de una SL? Ventajas, inconvenientes y cuándo tiene sentido.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'How to invest in real estate in Mallorca: a guide to maximising returns',
      metaDescription:
        'Complete guide to real estate investment in Mallorca: types of investment, returns by zone, non-resident taxation and optimal investment structure.',
      h1: 'How to invest in real estate in Mallorca: a guide to maximising returns',
      category: 'Real Estate Investment',
      tags: ['investment', 'returns', 'holiday rental', 'Mallorca', 'non-residents'],
      excerpt:
        'Mallorca is one of the most attractive real estate markets in Europe. High demand, limited supply and above-average returns. This guide analyses how to invest, which zones to choose and how to structure the investment tax-efficiently.',
      blocks: [
        {
          type: 'p',
          text: 'Mallorca has established itself as one of the most attractive real estate markets in Europe for international investors. The combination of extraordinarily solid tourist demand, an increasingly restricted supply of developable land and a legal framework that protects property rights creates the ideal conditions for safe and profitable real estate investment. However, the Mallorcan market has peculiarities that distinguish it from other European markets, both in its price dynamics and its regulation, making specialist advice essential before committing capital. This guide provides an in-depth analysis of the key factors to consider when investing in the Mallorca real estate market.',
        },
        {
          type: 'h2',
          text: 'Why is Mallorca an attractive market for investment?',
        },
        {
          type: 'ul',
          items: [
            'Over 13 million tourists per year generate sustained accommodation demand that exceeds available supply, creating a structural imbalance favourable to property owners',
            'The Balearic Islands Tourism Act restricts new holiday rental licences, creating a barrier to entry that is difficult to overcome and protects the value of existing licences',
            '40% of transactions in the Balearic Islands involve foreign buyers, maintaining constant and geographically diversified international demand',
            'The average property price in prime zones has grown by between 8% and 12% per year over the past five years, combining rental yield with capital appreciation',
            'Stable legal framework and full legal certainty within the European Union, with internationally recognised property rights guarantees',
          ],
        },
        {
          type: 'h2',
          text: 'Types of real estate investment in Mallorca',
        },
        {
          type: 'h3',
          text: 'Holiday rental (tourist accommodation)',
        },
        {
          type: 'p',
          text: 'Historically, holiday rental has been the highest-yielding form of investment in Mallorca, with returns that in the best locations and seasons can reach 5-8% gross annually on the acquisition price. However, the progressive tightening of regional regulation has made obtaining a tourist licence increasingly difficult and, in many areas, simply impossible. In Palma, the City Council suspended the granting of new tourist licences for apartments in 2018, a moratorium that has been maintained and extended. In other parts of the island, licences are managed through quotas and limited timeframes. This means that the tourist licence itself has become a patrimonial asset with its own intrinsic value, independent of the property. A property with a valid and transferable tourist licence can be worth between 15% and 30% more than an identical property without one, depending on the location. If the investment business plan includes holiday rental, verifying the status, transferability and validity of the tourist licence must be the first step in any due diligence process.',
        },
        {
          type: 'h3',
          text: 'Long-term residential rental',
        },
        {
          type: 'p',
          text: 'Long-term residential rental offers more modest gross yields than holiday rental, generally between 3% and 5% depending on the zone, but has important advantages that make it attractive for a different investor profile. Management is considerably less intensive than holiday rental: there is no constant turnover of guests, no equipment or tourist services are required, and income is more predictable and stable throughout the year. In Mallorca, the shortage of properties available for long-term rent — a consequence of tourist pressure and the increase in second homes — keeps rental prices at high levels and marketing periods at historic lows: in sought-after areas such as central Palma or Portixol, the average time from listing to contract signing is under seven days. This structural shortage provides a natural hedge against vacancy risk and an upward trend in rental prices that partially offsets the lower gross yield compared to holiday rental.',
        },
        {
          type: 'h3',
          text: 'Luxury segment investment',
        },
        {
          type: 'p',
          text: 'Luxury properties above €2 million show exceptional resilience to economic cycles that makes them a differentiated investment category. Demand in this segment comes primarily from high-net-worth buyers from Germany, the United Kingdom, Switzerland, Austria and the Nordic countries, for whom Mallorca represents a high-value second primary residence with both sentimental and strategic significance. During periods of greatest global economic uncertainty, this segment not only holds its value but sometimes increases it, because capital seeks high-quality real assets in secure environments. Marketing timelines in the prime segment are relatively short for the price level: a well-located and presented villa with pool and views can find a buyer within three to six months. Returns in this segment come primarily from long-term capital appreciation, complemented in some cases by holiday rentals at very high prices during the peak season.',
        },
        {
          type: 'h3',
          text: 'Commercial property',
        },
        {
          type: 'p',
          text: 'Commercial properties — ground-floor retail units, offices and warehouses — are less liquid than residential properties but offer distinctive characteristics that make them attractive to certain investor profiles. A well-located commercial unit in central Palma or in areas with high footfall can offer gross yields of 5-7% with long-term lease agreements that provide greater income stability than residential rental. The default risk in the commercial segment differs from residential: commercial tenants are typically companies with greater financial capacity and leases include additional guarantees. Management is also less demanding than residential: fewer maintenance interventions, no utilities to manage and typically longer-duration contracts. The main risk to monitor is vacancy between tenancies, which in prime Palma locations tends to be limited but can be significant in secondary locations.',
        },
        {
          type: 'h2',
          text: 'Returns by zone in Mallorca',
        },
        {
          type: 'table',
          headers: ['Zone', 'Average price (€/m²)', 'Recommended investment type', 'Approx. gross yield'],
          rows: [
            ['Palma city centre & Paseo Marítimo', '€4,500 – €7,000', 'Long-term, luxury', '3 – 5%'],
            ['Port de Pollença / Alcúdia', '€3,000 – €5,000', 'Holiday rental (with licence)', '5 – 8%'],
            ['Sóller & north coast', '€4,000 – €8,000', 'Premium, capital appreciation', '4 – 6%'],
            ['South (Santanyí, Ses Salines)', '€3,000 – €5,500', 'Holiday rental, balanced', '5 – 7%'],
            ['Santa Ponsa / Calvià', '€4,000 – €7,000', 'International market', '4 – 6%'],
          ],
        },
        {
          type: 'h2',
          text: 'Basic tax framework for non-resident real estate investors',
        },
        {
          type: 'h3',
          text: 'Taxation of rental income',
        },
        {
          type: 'p',
          text: 'Non-resident investors who generate income from renting properties in Spain are taxed under the Non-Resident Income Tax (IRNR) on their net rental income. The tax rate varies by country of tax residence: residents of European Union or European Economic Area countries pay 19% on net income, and may deduct expenses directly related to the rental in proportion to the days rented (mortgage interest, maintenance costs, insurance, community fees, rubbish collection tax, etc.). Residents outside the EEA are taxed at 24% on gross income, with no ability to deduct expenses in most cases unless the applicable double tax treaty provides otherwise. This differential treatment between EU and non-EU residents was the subject of a ruling by the European Court of Justice against Spain, which led Spain to align the treatment of EEA residents with that of EU residents. Quarterly rental income declarations are submitted via Form 210 during the first twenty calendar days of April, July, October and January.',
        },
        {
          type: 'h3',
          text: 'Capital gains on property sale',
        },
        {
          type: 'p',
          text: 'When a non-resident investor sells a property in Spain and makes a capital gain, that gain is taxed under IRNR at 19% for EU and EEA residents, and at 24% for all others. The gain is calculated as the difference between the sale price (reduced by directly attributable selling costs) and the acquisition price (increased by the costs and taxes paid on purchase). At the time of sale, the buyer is required to withhold 3% of the agreed price and pay it to the Tax Agency as a prepayment of the seller\'s IRNR. This withholding acts as a payment on account: if the final tax liability is higher, the seller must pay the difference; if it is lower, the seller may claim a refund. The declaration is formalised using Form 210 within three months of the date of the public deed.',
        },
        {
          type: 'h3',
          text: 'Form 210 and periodic obligations',
        },
        {
          type: 'p',
          text: 'Form 210 is the central IRNR declaration and is used both to declare rental income (quarterly) and to report the annual deemed income arising from mere ownership of the property (when it is not rented out). It is also used to regularise the 3% withholding made on a sale. As a non-resident property owner, even if you do not rent the property out and obtain no income from it, you are required to file Form 210 annually for the imputed deemed income. Failure to comply with these obligations can result in penalties, surcharges and late payment interest. Furthermore, if there are tax debts in Spain, the Tax Agency can take enforcement action against the property itself, which acts as collateral security for tax debts.',
        },
        {
          type: 'h2',
          text: 'Optimal investment structure for Mallorca',
        },
        {
          type: 'p',
          text: 'The structure through which the investment is made has a very significant tax and patrimonial impact that should be thoroughly analysed before committing capital. There are three main options, each with its own advantages and disadvantages:',
        },
        {
          type: 'ul',
          items: [
            'Personal purchase: simpler and suitable for a single property or one-off investment. No company formation or administration costs. Rental income and gains are taxed directly under the owner\'s IRNR.',
            'Spanish limited company (SL): recommended for portfolios or high-yield investments. Taxed at 25% on net profit, allowing deduction of all related expenses, facilitating generational transfer, and potentially more efficient for substantial portfolios or multiple properties.',
            'International holding structure: for investors with complex patrimonial structures abroad. Requires careful coordination between Spanish and international tax law to avoid double taxation and ensure the structure is recognised both in Spain and in the investor\'s country of residence.',
          ],
        },
        {
          type: 'h2',
          text: 'Most common mistakes when investing in Mallorca',
        },
        {
          type: 'ul',
          items: [
            'Failing to verify the status of the tourist licence before purchasing, which can completely undermine the intended business plan for the investment',
            'Underestimating acquisition costs: Transfer Tax, notary, land registry and gestoría can add 10-12% on top of the purchase price',
            'Not planning the tax structure from the outset, leading to inefficient taxation that can significantly reduce the net return on the investment',
            'Being unaware of annual tax obligations as a non-resident property owner, with the risk of accumulating penalties and surcharges',
            'Omitting a full legal due diligence: hidden encumbrances, community debts, open planning enforcement proceedings or use restrictions can represent serious risks to the investment',
          ],
        },
        {
          type: 'cta',
          title: 'Would you like to invest in real estate in Mallorca?',
          body: 'Our team combines legal, tax and real estate advisory to help you identify the right opportunity, structure the investment efficiently and maximise your returns. Free initial consultation.',
          button: 'Request a consultation',
        },
        {
          type: 'h2',
          text: 'Frequently asked questions about real estate investment in Mallorca',
        },
        {
          type: 'h3',
          text: 'How much capital is needed to invest in real estate in Mallorca?',
        },
        {
          type: 'p',
          text: 'The minimum capital required depends on the zone and type of investment sought. Entry-level properties in less exclusive zones can be found from around €200,000, although in the most sought-after locations prices start from €400,000-€500,000. On top of the asset investment, you should budget between 10% and 12% for acquisition taxes and costs (Transfer Tax, notary, Land Registry and gestoría), plus the cost of any renovation or refurbishment needed before bringing the property to market. If the investment is financed with a mortgage, Spanish banks typically lend a maximum of 60-70% of the appraised value for non-residents, meaning the equity requirement can be higher than expected.',
        },
        {
          type: 'h3',
          text: 'Is holiday rental in Mallorca profitable?',
        },
        {
          type: 'p',
          text: 'With a valid tourist licence and in the right locations, holiday rental can generate gross yields of 5-8% per year. However, obtaining new tourist licences is increasingly difficult or simply impossible in many areas of Mallorca, especially in Palma. Before purchasing with the intention of operating a holiday rental, it is essential to verify that a valid and transferable tourist licence exists with the property, or that the planning regulations of the municipality allow one to be obtained. A property without a tourist licence in a zone where no new licences can be granted will never be eligible for holiday rental.',
        },
        {
          type: 'h3',
          text: 'Should you buy in a personal name or through a company?',
        },
        {
          type: 'p',
          text: 'This is one of the most important decisions in the investment and has no universal answer. It depends on the size of the investment, the number of properties planned, the investor\'s personal tax situation in their country of residence and long-term plans. For investments of a certain scale or portfolios with multiple assets, a Spanish limited company can offer significant tax advantages: 25% tax on net profit (compared to 19-24% IRNR on gross income for non-residents), ability to deduct all expenses, ease of transferring shares rather than properties, and Wealth Tax optimisation. We recommend carrying out a full tax analysis before making this decision.',
        },
        {
          type: 'faq',
          eyebrow: 'Frequently asked questions about investing in Mallorca real estate',
          items: [
            {
              q: 'What is the average rental yield in Mallorca?',
              a: 'Gross rental yields in Mallorca range from 3% to 6% per year depending on the area, property type and rental model (long-term residential vs. holiday let). Higher gross yields are typically found in less exclusive areas: residential Palma, Alcúdia and the north of the island. Prime areas (Andratx, Son Vida, Deià) offer lower current yields but stronger long-term capital appreciation. Holiday rentals in tourist areas can generate gross yields of 5–8%, though with higher management costs and greater seasonality risk.',
            },
            {
              q: 'Which areas of Mallorca are best for property investment?',
              a: 'It depends on the investment objective. For long-term rental yield, the best areas are the residential districts of Palma and towns with consolidated local demand such as Inca or Manacor. For long-term capital appreciation, the prime southwest (Andratx, Santa Ponça) and north (Puerto Pollensa, Alcúdia) have shown sustained appreciation over the past decade. For holiday letting, coastal areas with beach access and high tourist demand generate the highest gross income but are subject to strict licensing restrictions.',
            },
            {
              q: 'Is it better to invest in holiday or long-term rentals in Mallorca?',
              a: 'Holiday rentals offer higher gross yields but require active management, have marked seasonality (high demand June–September, low the rest of the year) and are subject to tourist licence regulations, which are very restrictive in Mallorca. Long-term residential rentals offer lower gross yields but greater stability, less management and no licensing restrictions. The choice depends on the investor profile: those seeking passive stable income prefer long-term; those able to manage actively and accept greater volatility may opt for holiday lets.',
            },
            {
              q: 'What taxes does a non-resident investor pay in Mallorca?',
              a: 'A non-resident investor who rents out a property in Mallorca must file quarterly Non-Resident Income Tax returns (IRNR) using Modelo 210. The tax rate is 19% for EU/EEA residents and 24% for others. EU residents can deduct related rental expenses. If the value of their assets in Spain exceeds €700,000, Wealth Tax must also be declared. On a future sale, the capital gain is taxed and the buyer will withhold 3% of the sale price as an advance payment of the IRNR.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Related services and resources',
          items: [
            { label: 'Real Estate Agency in Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Over 10 years advising property transactions and investments across the whole island.' },
            { label: 'Invest in Mallorca Real Estate', href: '/en/invest-mallorca-real-estate', desc: 'Yield analysis, legal structure and property portfolio management.' },
            { label: 'Buying through a company in Mallorca', href: '/es/blog/sociedad-patrimonial-comprar-inmueble-mallorca-2026', desc: 'When does a holding company make sense for Mallorca property?' },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // POST 3 — Comprar casa en Mallorca no residente: guía legal
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'comprar-casa-mallorca-no-residente-guia-legal',
    date: '2025-03-05',
    readingTime: 11,
    authorKey: 'german',
    image: {
      src: 'https://images.pexels.com/photos/26832624/pexels-photo-26832624.jpeg',
      alt: 'Cala de aguas turquesas en Mallorca — comprar casa en Mallorca siendo no residente',
    },
    es: {
      seoTitle: 'Cómo comprar una casa en Mallorca siendo no residente: guía legal paso a paso',
      metaDescription:
        'Guía legal completa para comprar una vivienda en Mallorca como extranjero no residente: NIE, cuenta bancaria, contrato de arras, due diligence, notaría e impuestos.',
      h1: 'Cómo comprar una casa en Mallorca siendo no residente: guía legal paso a paso',
      category: 'Derecho Inmobiliario',
      tags: ['no residentes', 'NIE', 'compraventa', 'due diligence', 'guía legal', 'Mallorca'],
      excerpt:
        'Comprar una casa en Mallorca siendo extranjero es perfectamente posible. El proceso implica varios trámites legales y fiscales que conviene conocer de antemano. En esta guía explicamos cada paso.',
      blocks: [
        {
          type: 'p',
          text: 'Comprar una vivienda en Mallorca siendo extranjero no residente es perfectamente legal y es algo que miles de compradores internacionales hacen cada año. España no impone ninguna restricción a la adquisición de inmuebles por parte de ciudadanos extranjeros, independientemente de su nacionalidad o de su país de residencia fiscal. Sin embargo, el proceso implica una serie de trámites legales y fiscales que difieren en algunos aspectos del proceso habitual para los residentes españoles, y que conviene conocer en detalle antes de iniciar la búsqueda de propiedad. Una preparación adecuada evita retrasos, sorpresas económicas y, en el peor de los casos, problemas legales que podrían comprometer la operación. En esta guía explicamos paso a paso cómo se compra una vivienda en Mallorca siendo no residente, desde los primeros trámites previos hasta la inscripción en el Registro de la Propiedad.',
        },
        {
          type: 'h2',
          text: '¿Pueden los extranjeros comprar una casa en Mallorca?',
        },
        {
          type: 'p',
          text: 'Sí, sin restricciones. Cualquier ciudadano extranjero, ya sea de un país de la Unión Europea o de cualquier otro país del mundo, puede comprar inmuebles en España con exactamente los mismos derechos que un ciudadano español. No existe ninguna limitación por razón de nacionalidad, residencia o capacidad de inversión. España cuenta con un marco legal sólido que garantiza la seguridad jurídica de las inversiones inmobiliarias y el pleno reconocimiento de los derechos de propiedad de los ciudadanos extranjeros. Mallorca, por su atractivo turístico, su calidad de vida y la solidez de su mercado inmobiliario, es uno de los destinos más elegidos por compradores internacionales de toda Europa. El proceso de compra es esencialmente el mismo que para un ciudadano español, con algunas particularidades administrativas que explicamos a continuación.',
        },
        {
          type: 'h2',
          text: 'Paso 1 — Obtener el NIE (Número de Identificación de Extranjero)',
        },
        {
          type: 'p',
          text: 'El NIE (Número de Identificación de Extranjero) es el código de identificación fiscal que asigna la Administración española a los ciudadanos extranjeros. Es un requisito absolutamente imprescindible para realizar cualquier operación jurídica o económica en España: sin NIE no es posible firmar una escritura ante notario, abrir una cuenta bancaria, pagar impuestos, solicitar una hipoteca ni, en general, relacionarse con ninguna administración pública española. Obtener el NIE debe ser uno de los primeros pasos cuando se plantea seriamente la compra de una vivienda en España, ya que los plazos de tramitación pueden ser variables y conviene tenerlo resuelto antes de llegar al momento del cierre.',
        },
        {
          type: 'ul',
          items: [
            'En España: en cualquier Comisaría de Policía con competencias en extranjería, con cita previa a través del sistema de cita online del Ministerio del Interior',
            'Desde el extranjero: en el Consulado español de tu país de residencia, presentando la solicitud junto con la documentación requerida',
            'Plazo de tramitación: entre 1 y 4 semanas según la vía elegida y el volumen de trabajo de la oficina tramitadora',
            'Alternativa práctica: otorgar poder notarial a un abogado en España para que tramite el NIE en tu nombre, evitando tener que desplazarte exclusivamente para este trámite',
          ],
        },
        {
          type: 'h2',
          text: 'Paso 2 — Abrir una cuenta bancaria en España',
        },
        {
          type: 'p',
          text: 'Aunque abrir una cuenta bancaria en España no es un requisito legalmente obligatorio para comprar una vivienda, en la práctica es altamente recomendable y en muchos casos necesario. Tener una cuenta bancaria española facilita enormemente el pago del precio en el momento del cierre ante notario (a través de cheque bancario o transferencia), es necesaria para domiciliar los gastos corrientes del inmueble (cuota de comunidad, suministros, IBI) y es imprescindible si se solicita financiación hipotecaria en España. Los principales bancos españoles —CaixaBank, BBVA, Santander, Bankinter, Sabadell— disponen de servicios específicos para no residentes y pueden abrir cuentas sin necesidad de que el titular sea residente fiscal en España. El proceso de apertura suele requerir el NIE, el pasaporte en vigor, una acreditación del domicilio en el país de residencia y en algunos casos un justificante de ingresos o actividad profesional.',
        },
        {
          type: 'h2',
          text: 'Paso 3 — Encontrar la propiedad y firmar el contrato de arras',
        },
        {
          type: 'p',
          text: 'Una vez identificada la propiedad de interés y acordado el precio con el vendedor, el siguiente paso habitual en el proceso de compraventa en España es la firma de un contrato de arras. Este contrato privado tiene como función principal reservar la propiedad y fijar los términos esenciales de la operación (precio, condiciones de pago, plazo para la escritura pública), a cambio de un desembolso económico previo que actúa como señal o garantía de cumplimiento. El importe habitual de la señal es el 10% del precio de compraventa, aunque puede variar en función de lo acordado entre las partes.',
        },
        {
          type: 'ul',
          items: [
            'Si el vendedor incumple el contrato de arras: está obligado a devolverte el doble de la cantidad que entregaste como señal, lo que actúa como penalización por su incumplimiento',
            'Si eres tú quien incumple el contrato de arras: pierdes la cantidad entregada como señal, sin derecho a reclamación adicional por parte del vendedor',
            'Por eso es imprescindible revisar el contrato con un abogado antes de firmarlo: las cláusulas sobre condiciones suspensivas (obtención de hipoteca, resultado de la due diligence) pueden ser determinantes',
          ],
        },
        {
          type: 'h2',
          text: 'Paso 4 — Due diligence legal del inmueble',
        },
        {
          type: 'p',
          text: 'Antes de firmar la escritura pública de compraventa, es fundamental realizar una revisión legal exhaustiva del inmueble. Esta due diligence jurídica tiene como objetivo identificar todos los riesgos legales, urbanísticos, registrales y fiscales que podrían afectar a tu inversión o a tu capacidad de usar y disponer del inmueble libremente. Omitir este paso o realizarlo de forma superficial puede tener consecuencias graves y económicamente muy costosas.',
        },
        {
          type: 'ul',
          items: [
            'Nota simple registral: verifica la titularidad del inmueble y todas las cargas que pesan sobre él (hipotecas, embargos, servidumbres, anotaciones preventivas)',
            'Certificado de deudas de la comunidad de propietarios: confirma que el vendedor está al corriente en el pago de las cuotas comunitarias y que no existen derramas pendientes de importe significativo',
            'IBI y tributos municipales: verificar que no existen deudas pendientes con el Ayuntamiento por el Impuesto sobre Bienes Inmuebles u otros tributos locales',
            'Cédula de habitabilidad y certificado de eficiencia energética: documentos obligatorios para formalizar la venta de una vivienda en España',
            'Licencia de primera ocupación: imprescindible en el caso de viviendas de obra nueva o de inmuebles que hayan sufrido una reforma integral',
            'Estado urbanístico: confirmar que el inmueble no está afectado por expedientes de disciplina urbanística, procedimientos de expropiación o limitaciones al uso impuestas por el planeamiento',
            'Licencia turística: si el plan de negocio incluye el alquiler vacacional, verificar que existe una licencia turística vigente, que es transmisible con la propiedad y que no está sujeta a ninguna limitación o condición especial',
          ],
        },
        {
          type: 'h2',
          text: 'Paso 5 — Escritura de compraventa ante notario',
        },
        {
          type: 'p',
          text: 'La compraventa de un inmueble en España debe formalizarse en escritura pública ante notario para tener plena eficacia jurídica y poder inscribirse en el Registro de la Propiedad. En el momento de la firma de la escritura, el vendedor y el comprador (o sus representantes legales debidamente apoderados) comparecen ante el notario, se entrega el precio acordado (habitualmente mediante cheque bancario o transferencia simultánea), se produce la entrega de posesión y se entregan las llaves. El notario lee la escritura en su integridad, verifica las identidades de los comparecientes, comprueba que el inmueble está libre de cargas según el Registro de la Propiedad y autoriza la escritura con su fe pública.',
        },
        {
          type: 'p',
          text: 'Si el vendedor es no residente en España, el comprador está obligado por ley a practicar una retención del 3% del precio de la compraventa e ingresarla en la Agencia Tributaria en el plazo de un mes desde la firma, a cuenta del IRNR del vendedor. Si no puedes asistir personalmente a la firma, puedes otorgar un poder notarial a un abogado de tu confianza para que te represente en todos los actos de la compraventa, incluida la firma de la escritura ante notario. Este poder puede ser otorgado en tu país de residencia ante el notario local (con apostilla de La Haya) o directamente ante un notario español.',
        },
        {
          type: 'h2',
          text: 'Paso 6 — Liquidación de impuestos e inscripción en el Registro de la Propiedad',
        },
        {
          type: 'p',
          text: 'Una vez firmada la escritura de compraventa ante notario, existen dos trámites esenciales que deben completarse dentro del plazo de treinta días hábiles: la liquidación de los impuestos correspondientes (ITP en el caso de vivienda de segunda mano, o IVA y AJD en el caso de obra nueva) ante la Agencia Tributaria de las Illes Balears, y la inscripción de la escritura en el Registro de la Propiedad. Ambos trámites son fundamentales: el primero, para cumplir con las obligaciones tributarias derivadas de la transmisión; el segundo, para que el cambio de titularidad sea oponible frente a terceros y quede protegido por el principio de fe pública registral. En la práctica, estos trámites son gestionados por la gestoría o el abogado que acompaña la operación, quien se encarga de liquidar los impuestos, presentar la documentación en el Registro y devolver al comprador la escritura debidamente registrada.',
        },
        {
          type: 'h2',
          text: 'Designar un representante fiscal en España',
        },
        {
          type: 'p',
          text: 'Como propietario de un inmueble en España sin ser residente fiscal en el país, en determinados supuestos estás obligado por ley a designar un representante fiscal ante la Agencia Tributaria española. Este representante actúa como tu interlocutor con Hacienda en España, se encarga de presentar las declaraciones periódicas del IRNR (Modelo 210), te mantiene informado de las obligaciones fiscales vigentes y puede intervenir en cualquier procedimiento tributario que pueda afectarte como propietario no residente. En Benavides Real Estate ofrecemos el servicio de representación fiscal como parte de nuestro servicio integral para compradores e inversores no residentes, garantizando el cumplimiento de todas las obligaciones fiscales en España desde el primer día.',
        },
        {
          type: 'h2',
          text: '¿Cuánto tiempo lleva comprar una vivienda en Mallorca?',
        },
        {
          type: 'table',
          headers: ['Trámite', 'Duración aproximada'],
          rows: [
            ['Obtención del NIE', '1 – 4 semanas'],
            ['Apertura de cuenta bancaria', '1 – 2 semanas'],
            ['Negociación y contrato de arras', '1 – 2 semanas'],
            ['Due diligence legal', '1 – 2 semanas'],
            ['Firma de escritura (tras arras)', '2 – 4 semanas'],
            ['Inscripción en el Registro', '2 – 4 semanas tras firma'],
            ['Proceso completo', '6 – 12 semanas'],
          ],
        },
        {
          type: 'cta',
          title: '¿Estás pensando en comprar una casa en Mallorca?',
          body: 'Nuestro equipo de abogados y asesores fiscales te acompaña en cada paso del proceso, desde la búsqueda de la propiedad hasta el cierre de la operación, garantizando total seguridad jurídica y fiscal. Primera consulta gratuita.',
          button: 'Hablar con un abogado',
        },
        {
          type: 'h2',
          text: 'Preguntas frecuentes',
        },
        {
          type: 'h3',
          text: '¿Es obligatorio el NIE para comprar en España?',
        },
        {
          type: 'p',
          text: 'Sí, el NIE es absolutamente obligatorio. Ningún notario autorizará una escritura de compraventa de un inmueble en España sin que el comprador acredite previamente su NIE. Además, sin NIE no es posible pagar los impuestos derivados de la compra ni inscribir la escritura en el Registro de la Propiedad. El NIE debe obtenerse antes de llegar al momento del cierre, idealmente en cuanto se decide seriamente iniciar la búsqueda de propiedad en España.',
        },
        {
          type: 'h3',
          text: '¿Puedo comprar sin venir a España?',
        },
        {
          type: 'p',
          text: 'Sí, es perfectamente posible comprar una vivienda en España sin desplazarte físicamente al país. A través de un poder notarial otorgado en tu país de residencia ante notario local (debidamente apostillado conforme al Convenio de La Haya) o ante un notario español, puedes autorizar a un abogado de tu confianza para que te represente en todos los actos de la compraventa, incluida la firma de la escritura ante notario, la liquidación de impuestos y la inscripción registral. En la práctica, muchos compradores internacionales optan por esta vía cuando ya han visitado y decidido el inmueble pero no pueden o no desean desplazarse nuevamente para el cierre de la operación.',
        },
        {
          type: 'h3',
          text: '¿Qué es la nota simple y por qué es importante?',
        },
        {
          type: 'p',
          text: 'La nota simple es un documento emitido por el Registro de la Propiedad que recoge la información esencial sobre un inmueble: su titular registral, su descripción física (superficie, situación, referencia registral), y todas las cargas y gravámenes que pesan sobre él (hipotecas, embargos, servidumbres, anotaciones preventivas). La nota simple es el primer documento que cualquier abogado o asesor solicita antes de hacer cualquier oferta o iniciar la negociación, porque permite conocer el estado jurídico real del inmueble y detectar posibles problemas antes de comprometer ningún dinero. Se puede solicitar online a través del portal del Colegio de Registradores de España por un coste de pocos euros y suele estar disponible en horas.',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes sobre comprar casa en Mallorca',
          items: [
            {
              q: '¿Cuánto tiempo tarda el proceso de compra de una vivienda en Mallorca?',
              a: 'Desde que se identifica la propiedad hasta la firma de la escritura ante notario, el proceso suele durar entre 6 y 14 semanas. El período entre la firma del contrato de arras y la escritura final es típicamente de 6 a 10 semanas. Si el comprador necesita financiación hipotecaria, los bancos pueden tardar entre 4 y 8 semanas adicionales en formalizar la hipoteca. La obtención del NIE, si aún no se tiene, puede añadir entre 1 y 4 semanas más.',
            },
            {
              q: '¿Qué es el contrato de arras y qué pasa si me arrepiento?',
              a: 'El contrato de arras es un contrato privado que reserva la propiedad y fija las condiciones esenciales de la compraventa (precio, forma de pago, plazo para la escritura). El depósito habitual es el 10% del precio. Si el comprador se arrepiente, pierde el depósito. Si el vendedor se arrepiente, está obligado a devolver el doble del depósito recibido. Por eso es fundamental revisar este contrato con un abogado antes de firmarlo: las condiciones suspensivas (aprobación de hipoteca, resultado de la due diligence) pueden ser decisivas.',
            },
            {
              q: '¿Puedo conseguir hipoteca en España siendo no residente?',
              a: 'Sí, los no residentes pueden obtener hipotecas en España, aunque en condiciones generalmente menos favorables que los residentes. Los bancos españoles suelen financiar hasta el 60-70% del valor de tasación para no residentes (frente al 80% habitual para residentes). El plazo máximo suele ser de 20-25 años. Se exige acreditar ingresos regulares y una buena situación patrimonial. Los principales bancos con oferta específica para no residentes son CaixaBank, BBVA, Sabadell y Bankinter.',
            },
            {
              q: '¿Qué es la due diligence inmobiliaria y por qué es importante?',
              a: 'La due diligence inmobiliaria es la revisión exhaustiva del estado legal, urbanístico, registral y fiscal de una propiedad antes de comprarla. Incluye: verificar que el vendedor es el titular registral legítimo, comprobar que no existen cargas, hipotecas o embargos ocultos, revisar la situación urbanística (licencias, clasificación del suelo, posibles infracciones), verificar el estado de pago de cuotas de comunidad e IBI, y comprobar la situación de suministros. Omitir la due diligence es uno de los errores más costosos que puede cometer un comprador.',
            },
            {
              q: '¿Qué gastos adicionales al precio tengo que pagar al comprar en Mallorca?',
              a: 'Además del precio de compra, debes presupuestar entre el 10% y el 13% adicional en impuestos y gastos: ITP del 8-11% (segunda mano) o IVA del 10% + AJD del 1,2% (obra nueva), más notaría (600-1.500 €), Registro de la Propiedad (400-800 €) y gestoría (300-600 €). Si contratas un abogado para la due diligence y representación (muy recomendable), añade entre 1.500 y 4.000 € dependiendo del valor de la operación.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Servicios y recursos relacionados',
          items: [
            { label: 'Inmobiliaria en Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Más de 10 años asesorando compraventas en toda la isla con asesoría legal y fiscal.' },
            { label: 'Comprar Casa en Mallorca', href: '/es/comprar-casa-mallorca', desc: 'Due diligence, análisis fiscal y representación independiente del comprador.' },
            { label: 'Impuestos al comprar en Mallorca', href: '/es/blog/impuestos-comprar-vivienda-mallorca-no-residentes', desc: 'Guía completa: ITP, IVA, AJD, IRNR y costes totales.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'How to buy a property in Mallorca as a non-resident: a step-by-step legal guide',
      metaDescription:
        'Complete legal guide to buying a property in Mallorca as a foreign non-resident: NIE, bank account, preliminary contract, due diligence, notary and taxes.',
      h1: 'How to buy a property in Mallorca as a non-resident: a step-by-step legal guide',
      category: 'Real Estate Law',
      tags: ['non-residents', 'NIE', 'property purchase', 'due diligence', 'legal guide', 'Mallorca'],
      excerpt:
        'Buying a property in Mallorca as a foreigner is entirely possible. The process involves several legal and tax steps worth knowing in advance. This guide walks you through each one.',
      blocks: [
        {
          type: 'p',
          text: 'Buying a property in Mallorca as a foreign non-resident is entirely legal and is something that thousands of international buyers do every year. Spain imposes no restrictions on property acquisitions by foreign nationals, regardless of their nationality or country of tax residence. However, the process involves a number of legal and tax procedures that differ in some respects from the standard process for Spanish residents, and which are worth understanding in detail before beginning the property search. Adequate preparation avoids delays, financial surprises and, in the worst case, legal issues that could jeopardise the transaction. This guide explains step by step how to buy a property in Mallorca as a non-resident, from the initial preliminary steps through to registration at the Land Registry.',
        },
        {
          type: 'h2',
          text: 'Can foreigners buy a property in Mallorca?',
        },
        {
          type: 'p',
          text: 'Yes, without restrictions. Any foreign national, whether from a European Union country or from any other country in the world, can purchase property in Spain with exactly the same rights as a Spanish citizen. There are no limitations based on nationality, residency status or investment capacity. Spain has a robust legal framework that guarantees the legal certainty of real estate investments and the full recognition of property rights of foreign nationals. Mallorca, owing to its tourist appeal, quality of life and the solidity of its property market, is one of the most sought-after destinations for international buyers from across Europe. The purchase process is essentially the same as for a Spanish citizen, with some administrative particularities that we explain below.',
        },
        {
          type: 'h2',
          text: 'Step 1 — Obtaining the NIE (Foreigner Identification Number)',
        },
        {
          type: 'p',
          text: 'The NIE (Número de Identificación de Extranjero) is the tax identification code assigned by the Spanish Administration to foreign nationals. It is an absolutely essential requirement for carrying out any legal or economic transaction in Spain: without a NIE it is not possible to sign a public deed before a notary, open a bank account, pay taxes, apply for a mortgage or, in general, deal with any Spanish public authority. Obtaining the NIE should be one of the first steps when seriously considering the purchase of a property in Spain, as processing times can be variable and it is important to have it resolved before reaching the moment of completion.',
        },
        {
          type: 'ul',
          items: [
            'In Spain: at any Police Station with jurisdiction over foreigners, by prior appointment through the Ministry of Interior\'s online appointment system',
            'From abroad: at the Spanish Consulate in your country of residence, submitting the application together with the required documentation',
            'Processing time: between 1 and 4 weeks depending on the route chosen and the workload of the processing office',
            'Practical alternative: grant a notarial power of attorney to a lawyer in Spain to process the NIE on your behalf, avoiding the need to travel specifically for this formality',
          ],
        },
        {
          type: 'h2',
          text: 'Step 2 — Opening a bank account in Spain',
        },
        {
          type: 'p',
          text: 'Although opening a bank account in Spain is not a legally mandatory requirement for buying a property, in practice it is highly advisable and in many cases necessary. Having a Spanish bank account greatly facilitates payment of the purchase price at the notarial closing (via banker\'s cheque or simultaneous transfer), is required for setting up direct debits for ongoing property costs (community fees, utilities, local property tax), and is essential if you are applying for a Spanish mortgage. Spain\'s main banks — CaixaBank, BBVA, Santander, Bankinter, Sabadell — have specific services for non-residents and can open accounts without the account holder needing to be a tax resident in Spain. The account opening process typically requires the NIE, a valid passport, proof of address in the country of residence and in some cases proof of income or professional activity.',
        },
        {
          type: 'h2',
          text: 'Step 3 — Finding the property and signing the preliminary contract (arras)',
        },
        {
          type: 'p',
          text: 'Once you have identified the property of interest and agreed a price with the vendor, the next usual step in the Spanish property purchase process is signing a contrato de arras (preliminary contract). This private contract\'s main purpose is to reserve the property and fix the essential terms of the transaction (price, payment conditions, deadline for the public deed), in exchange for an upfront payment that acts as a deposit or performance guarantee. The standard deposit is 10% of the purchase price, although this can vary depending on what is agreed between the parties.',
        },
        {
          type: 'ul',
          items: [
            'If the vendor breaches the arras contract: they are obliged to return double the amount you paid as a deposit, which acts as a penalty for their breach',
            'If you are the one who breaches the arras contract: you forfeit the deposit paid, with no right to additional claims by the vendor',
            'That is why it is essential to have the contract reviewed by a lawyer before signing: clauses regarding suspensive conditions (mortgage approval, due diligence outcome) can be decisive',
          ],
        },
        {
          type: 'h2',
          text: 'Step 4 — Legal due diligence on the property',
        },
        {
          type: 'p',
          text: 'Before signing the public deed of sale, it is essential to carry out a thorough legal review of the property. This legal due diligence aims to identify all legal, planning, land registry and tax risks that could affect your investment or your ability to use and freely dispose of the property. Omitting this step or carrying it out superficially can have serious and financially very costly consequences.',
        },
        {
          type: 'ul',
          items: [
            'Land Registry extract (nota simple): verifies ownership of the property and all encumbrances registered against it (mortgages, attachments, easements, preventive annotations)',
            'Community of owners debt certificate: confirms that the vendor is up to date with community fee payments and that there are no pending special levies of significant amount',
            'Local property tax (IBI) and municipal taxes: verify there are no outstanding debts with the local council',
            'Habitation certificate and energy performance certificate: documents mandatory for formalising the sale of a property in Spain',
            'First occupation licence: essential for new-build properties or properties that have undergone a full renovation',
            'Planning status: confirm the property is not subject to open planning enforcement proceedings, compulsory purchase procedures or use restrictions imposed by planning regulations',
            'Tourist licence: if the business plan includes holiday rental, verify that a valid tourist licence exists, that it is transferable with the property and that it is not subject to any special limitation or condition',
          ],
        },
        {
          type: 'h2',
          text: 'Step 5 — Public deed of sale before a notary',
        },
        {
          type: 'p',
          text: 'The purchase of a property in Spain must be formalised as a public deed before a notary in order to have full legal effect and to be registrable at the Land Registry. At the moment of signing the deed, the vendor and the buyer (or their duly authorised legal representatives) appear before the notary, the agreed price is paid (typically by banker\'s cheque or simultaneous bank transfer), possession is handed over and the keys are delivered. The notary reads the deed in full, verifies the identities of those present, confirms that the property is free of encumbrances according to the Land Registry and authorises the deed with public notarial faith.',
        },
        {
          type: 'p',
          text: 'If the vendor is a non-resident in Spain, the buyer is legally required to withhold 3% of the purchase price and pay it to the Tax Agency within one month of signing, as an advance payment on account of the vendor\'s IRNR liability. If you cannot attend the signing in person, you can grant a notarial power of attorney to a trusted lawyer to represent you in all acts of the purchase, including signing the deed before the notary. This power of attorney can be granted in your country of residence before a local notary (duly apostilled under the Hague Convention) or directly before a Spanish notary.',
        },
        {
          type: 'h2',
          text: 'Step 6 — Tax settlement and registration at the Land Registry',
        },
        {
          type: 'p',
          text: 'Once the deed of sale has been signed before the notary, there are two essential formalities that must be completed within thirty business days: settlement of the applicable taxes (Transfer Tax for second-hand properties, or VAT and Stamp Duty for new builds) with the Balearic Islands Tax Agency, and registration of the deed at the Land Registry in the buyer\'s name. Both steps are fundamental: the first, to comply with the tax obligations arising from the transfer; the second, so that the change of ownership is enforceable against third parties and protected by the principle of public faith in the Register. In practice, these formalities are handled by the gestoría or the lawyer accompanying the transaction, who takes care of settling the taxes, filing the documentation at the Registry and returning the duly registered deed to the buyer.',
        },
        {
          type: 'h2',
          text: 'Appointing a fiscal representative in Spain',
        },
        {
          type: 'p',
          text: 'As a property owner in Spain who is not a tax resident there, you are in certain circumstances legally required to appoint a fiscal representative before the Spanish Tax Agency. This representative acts as your point of contact with the Agencia Tributaria in Spain, is responsible for filing periodic IRNR declarations (Form 210), keeps you informed of your current tax obligations and can intervene in any tax procedure that may affect you as a non-resident property owner. At Benavides Real Estate we offer fiscal representation as part of our comprehensive service for non-resident buyers and investors, ensuring full compliance with all tax obligations in Spain from day one.',
        },
        {
          type: 'h2',
          text: 'How long does it take to buy a property in Mallorca?',
        },
        {
          type: 'table',
          headers: ['Step', 'Approximate duration'],
          rows: [
            ['Obtaining the NIE', '1 – 4 weeks'],
            ['Opening a bank account', '1 – 2 weeks'],
            ['Negotiation and preliminary contract', '1 – 2 weeks'],
            ['Legal due diligence', '1 – 2 weeks'],
            ['Deed signing (after arras)', '2 – 4 weeks'],
            ['Land Registry registration', '2 – 4 weeks after signing'],
            ['Full process', '6 – 12 weeks'],
          ],
        },
        {
          type: 'cta',
          title: 'Are you thinking of buying a property in Mallorca?',
          body: 'Our team of lawyers and tax advisors accompanies you at every step of the process, from the property search to the completion of the transaction, guaranteeing full legal and tax certainty. Free initial consultation.',
          button: 'Speak to a lawyer',
        },
        {
          type: 'h2',
          text: 'Frequently asked questions',
        },
        {
          type: 'h3',
          text: 'Is the NIE mandatory for buying property in Spain?',
        },
        {
          type: 'p',
          text: 'Yes, the NIE is absolutely mandatory. No notary will authorise a property deed of sale in Spain without the buyer first evidencing their NIE. In addition, without a NIE it is not possible to pay the taxes arising from the purchase or to register the deed at the Land Registry. The NIE must be obtained before reaching the moment of completion, ideally as soon as you decide seriously to begin the property search in Spain.',
        },
        {
          type: 'h3',
          text: 'Can I buy without coming to Spain?',
        },
        {
          type: 'p',
          text: 'Yes, it is entirely possible to buy a property in Spain without physically travelling to the country. Through a notarial power of attorney granted in your country of residence before a local notary (duly apostilled under the Hague Convention) or before a Spanish notary, you can authorise a trusted lawyer to represent you in all acts of the purchase, including signing the deed before the notary, settling taxes and completing Land Registry registration. In practice, many international buyers opt for this route when they have already visited and decided on the property but cannot or do not wish to travel again for the completion of the transaction.',
        },
        {
          type: 'h3',
          text: 'What is the nota simple and why is it important?',
        },
        {
          type: 'p',
          text: 'The nota simple is a document issued by the Land Registry (Registro de la Propiedad) that contains essential information about a property: its registered owner, its physical description (floor area, location, registry reference) and all encumbrances and charges registered against it (mortgages, attachments, easements, preventive annotations). The nota simple is the first document that any lawyer or adviser requests before making any offer or entering into negotiations, because it allows you to understand the true legal status of the property and identify any potential issues before committing any money. It can be requested online through the portal of the Spanish College of Registrars for a small fee and is usually available within hours.',
        },
        {
          type: 'faq',
          eyebrow: 'Frequently asked questions about buying property in Mallorca as a non-resident',
          items: [
            {
              q: 'How long does the property purchase process take in Mallorca?',
              a: 'From identifying the property to signing the deed before a notary, the process typically takes between 6 and 14 weeks. The period between signing the deposit contract (arras) and the final deed is usually 6 to 10 weeks. If the buyer requires mortgage financing, Spanish banks may take 4 to 8 additional weeks to formalise the loan. Obtaining the NIE, if not already held, can add a further 1 to 4 weeks.',
            },
            {
              q: 'What is a contrato de arras and what happens if I change my mind?',
              a: 'The contrato de arras is a private preliminary contract that reserves the property and sets the essential terms of the sale (price, payment terms, deadline for the public deed). The standard deposit is 10% of the price. If the buyer withdraws, they forfeit the deposit. If the vendor withdraws, they must return double the deposit received. This is why it is essential to have the contract reviewed by a lawyer before signing — particularly regarding suspensive conditions such as mortgage approval or due diligence outcome.',
            },
            {
              q: 'Can I get a mortgage in Spain as a non-resident?',
              a: 'Yes, non-residents can obtain mortgages in Spain, though generally on less favourable terms than residents. Spanish banks typically lend up to 60–70% of the appraised value for non-residents (versus the usual 80% for residents). The maximum term is usually 20–25 years. Regular income and a solid financial position must be demonstrated. The main banks with specific non-resident offerings are CaixaBank, BBVA, Sabadell and Bankinter.',
            },
            {
              q: 'What additional costs do I need to budget for when buying in Mallorca?',
              a: 'In addition to the purchase price, budget for 10–13% in taxes and costs: ITP of 8–11% (second-hand property) or VAT at 10% plus AJD at 1.2% (new build), plus notary fees (€600–1,500), Land Registry fees (€400–800) and administration (€300–600). If you engage a lawyer for due diligence and representation — which is highly recommended — add €1,500–4,000 depending on the transaction value.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Related services and resources',
          items: [
            { label: 'Real Estate Agency in Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Over 10 years advising property transactions across the whole island.' },
            { label: 'Buy Property in Mallorca', href: '/en/buy-property-mallorca', desc: 'Due diligence, tax analysis and independent buyer representation.' },
            { label: 'Taxes when buying property in Mallorca', href: '/es/blog/impuestos-comprar-vivienda-mallorca-no-residentes', desc: 'Complete guide: ITP, VAT, AJD, IRNR and total purchase costs.' },
          ],
        },
      ],
    },
  },

  // ─── POST A: Plusvalía municipal Mallorca 2026 ──────────────────────────────
  {
    slug: 'plusvalia-municipal-mallorca-como-se-calcula-2026',
    date: '2026-03-21',
    readingTime: 8,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/25489922/pexels-photo-25489922.jpeg',
      alt: 'Vista aérea de Palma de Mallorca — plusvalía municipal al vender propiedad en Mallorca',
    },
    es: {
      seoTitle: 'Plusvalía municipal en Mallorca: cómo se calcula y cuándo no se paga (2026)',
      metaDescription: 'Guía completa sobre la plusvalía municipal al vender un piso en Mallorca en 2026: método objetivo vs. real, cálculo con ejemplos y cuándo puede ser cero.',
      h1: 'Plusvalía municipal en Mallorca: cómo se calcula y cuándo puedes no pagarla (2026)',
      category: 'Fiscalidad Inmobiliaria',
      tags: ['plusvalía municipal', 'IIVTNU', 'venta piso Mallorca', 'impuestos venta', 'Palma de Mallorca'],
      excerpt: 'La plusvalía municipal es uno de los impuestos más desconocidos —y más discutidos— en la venta de un inmueble. En 2026, los vendedores en Mallorca pueden elegir entre dos métodos de cálculo. Le explicamos cuál le conviene y cuándo puede ser cero.',
      blocks: [
        {
          type: 'p',
          text: 'La plusvalía municipal —denominada técnicamente Impuesto sobre el Incremento del Valor de los Terrenos de Naturaleza Urbana (IIVTNU)— es un tributo local que grava el incremento de valor experimentado por el suelo urbano durante el tiempo que un inmueble ha permanecido en manos de su propietario. Se devengará con cualquier transmisión: compraventa, herencia o donación. Su gestión corresponde a cada ayuntamiento, lo que significa que el tipo impositivo y los coeficientes aplicables pueden variar ligeramente de un municipio a otro dentro de Mallorca. Es uno de los impuestos que más sorpresas genera a los vendedores, precisamente porque muchos lo desconocen o lo subestiman hasta el momento de firmar ante notario.',
        },
        {
          type: 'h2',
          text: '¿Quién paga la plusvalía municipal en Mallorca?',
        },
        {
          type: 'p',
          text: 'Con carácter general, la plusvalía municipal la abona el vendedor. En las compraventas entre particulares, es el transmitente quien debe liquidar el impuesto ante el ayuntamiento correspondiente en el plazo de 30 días hábiles desde la firma de la escritura. Sin embargo, la ley permite que las partes acuerden contractualmente que el pago recaiga sobre el comprador, aunque este pacto no tiene efectos frente a la administración: si el impuesto no se paga, el ayuntamiento puede reclamárselo al vendedor. En las transmisiones mortis causa (herencias), el obligado al pago es el heredero o legatario, con un plazo de seis meses desde el fallecimiento del causante, prorrogable a un año previa solicitud motivada. En las donaciones, el sujeto pasivo es el donatario (quien recibe el inmueble).',
        },
        {
          type: 'h2',
          text: 'Los dos métodos de cálculo en 2026',
        },
        {
          type: 'p',
          text: 'Desde noviembre de 2021, tras la aprobación del Real Decreto-ley 26/2021 que adaptó la normativa del IIVTNU a la doctrina del Tribunal Constitucional, existen dos métodos alternativos para calcular la base imponible del impuesto. El contribuyente puede elegir libremente el que resulte más favorable, y el ayuntamiento no puede rechazar la opción escogida siempre que se acredite correctamente. Esto supuso un cambio fundamental: antes de 2021, el método objetivo se aplicaba siempre, incluso cuando el inmueble se había vendido con pérdida respecto al precio de compra, generando situaciones injustas que el Tribunal Constitucional declaró inconstitucionales.',
        },
        {
          type: 'h3',
          text: 'Método objetivo (basado en coeficientes)',
        },
        {
          type: 'p',
          text: 'En el método objetivo, la base imponible se calcula multiplicando el valor catastral del suelo en el momento de la transmisión por un coeficiente establecido en función del número de años completos de tenencia del inmueble. Estos coeficientes son aprobados anualmente por Orden Ministerial con carácter máximo, y cada ayuntamiento puede aplicar los suyos propios siempre que no los superen. La fórmula es: Base imponible = Valor catastral del suelo × Coeficiente según años de tenencia. Ejemplo práctico: un inmueble con un valor catastral del suelo de 80.000 €, mantenido durante 12 años, al que le corresponde un coeficiente de 0,45, genera una base imponible de 36.000 €. Aplicando el tipo máximo del Ayuntamiento de Palma (30%), la cuota sería de 10.800 €.',
        },
        {
          type: 'h3',
          text: 'Método real (basado en la ganancia efectiva)',
        },
        {
          type: 'p',
          text: 'El método real calcula la base imponible a partir del incremento real de valor experimentado por el terreno. La fórmula es: Base imponible = (Precio de venta − Precio de compra) × (Valor catastral del suelo ÷ Valor catastral total del inmueble). Este cociente catastral permite aislar la parte de la ganancia total atribuible exclusivamente al suelo, que es lo que grava el IIVTNU (no el valor de la construcción). Ejemplo: un inmueble comprado por 200.000 € y vendido por 350.000 €, con una ganancia de 150.000 €. Si el valor catastral del suelo representa el 60% del valor catastral total, la base imponible sería 90.000 €. Aplicando el tipo del 30%, la cuota sería 27.000 €, superior a la del método objetivo en este caso.',
        },
        {
          type: 'h3',
          text: '¿Cómo elegir el método más favorable?',
        },
        {
          type: 'p',
          text: 'La recomendación profesional es siempre calcular ambos métodos antes de presentar la autoliquidación o la declaración al ayuntamiento, y optar por el que genere una cuota menor. El ayuntamiento no puede impedir esta elección si está debidamente documentada. En la práctica, el método objetivo tiende a ser más favorable en inmuebles adquiridos hace pocos años o en zonas donde el valor catastral es bajo en relación al precio de mercado; el método real suele convenir más en inmuebles adquiridos hace mucho tiempo con escasa revalorización real, o en ventas con pérdida. El plazo para presentar la autoliquidación (modelo municipal correspondiente) es de 30 días hábiles desde la escritura en caso de compraventa.',
        },
        {
          type: 'table',
          headers: ['Supuesto', 'Método objetivo', 'Método real', 'Recomendación'],
          rows: [
            ['Inmueble adquirido hace pocos años con alta revalorización', 'Favorable', 'Desfavorable', 'Método objetivo'],
            ['Inmueble adquirido hace muchos años con poca revalorización', 'Desfavorable', 'Favorable', 'Método real'],
            ['Venta con pérdida respecto al precio de compra', 'Pagar impuesto', 'Cuota cero', 'Método real o exención'],
          ],
        },
        {
          type: 'h2',
          text: 'Cuándo la plusvalía municipal puede ser cero',
        },
        {
          type: 'p',
          text: 'Existen dos escenarios principales en los que la cuota de la plusvalía municipal puede ser cero o muy reducida. El primero —y el más relevante— es la venta con pérdida o sin incremento real de valor del suelo: si el inmueble se vende por un precio inferior o igual al precio de compra, aplicando el método real la base imponible es cero y, por tanto, no hay cuota. Esta posibilidad fue reconocida por el Tribunal Constitucional en su Sentencia 182/2021 y consolidada con el RDL 26/2021. Para acreditar la pérdida, basta con aportar las escrituras de compra y venta. El segundo escenario afecta al suelo rústico: el IIVTNU grava exclusivamente los terrenos de naturaleza urbana, por lo que las fincas rústicas de Mallorca —un activo muy demandado— están exentas de este impuesto, independientemente del precio de venta.',
        },
        {
          type: 'h2',
          text: 'Plusvalía municipal en herencias en Mallorca',
        },
        {
          type: 'p',
          text: 'Cuando se hereda un inmueble y posteriormente se vende, pueden surgir dos momentos de tributación por plusvalía municipal. En primer lugar, en el momento de la herencia: el heredero debe liquidar la plusvalía en un plazo de seis meses desde el fallecimiento del causante (prorrogable a un año), tomando como base el valor catastral del suelo en esa fecha. En segundo lugar, si el heredero vende posteriormente el inmueble, deberá calcular la plusvalía correspondiente al período que va desde la fecha de adquisición por herencia hasta la fecha de la nueva venta. El contador de años se reinicia desde la herencia, no desde la compra original del causante. Esta circunstancia tiene implicaciones importantes para las familias que poseen inmuebles heredados en Mallorca y están planificando su venta: en muchos casos, esperar un cierto número de años tras la herencia puede resultar fiscalmente ventajoso dependiendo del método de cálculo aplicable.',
        },
        {
          type: 'cta',
          title: '¿Va a vender un inmueble en Mallorca?',
          body: 'Calculamos ambos métodos de plusvalía municipal y le asesoramos sobre la opción más ventajosa. Primera consulta sin coste.',
          button: 'Solicitar análisis fiscal',
        },
        {
          type: 'links',
          title: 'Servicios y recursos relacionados',
          items: [
            { label: 'Compraventa de Inmuebles en Mallorca', href: '/es/servicios/vender-piso-mallorca', desc: 'Gestión completa de la venta: precio, contratos, notaría e impuestos.' },
            { label: 'Asesoría Fiscal Inmobiliaria', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'Planificación fiscal y liquidación de todos los impuestos de su operación.' },
            { label: 'Impuestos al comprar en Mallorca (no residentes)', href: '/es/blog/impuestos-comprar-vivienda-mallorca-no-residentes', desc: 'Guía completa: ITP, IVA, AJD, IRNR y gastos totales.' },
          ],
        },
        {
          type: 'h2',
          text: 'Preguntas frecuentes sobre la plusvalía municipal en Mallorca',
        },
        {
          type: 'h3',
          text: '¿Puedo aplazar el pago de la plusvalía municipal?',
        },
        {
          type: 'p',
          text: 'Con carácter general, no existe un aplazamiento automático del pago de la plusvalía municipal. Algunos ayuntamientos permiten el fraccionamiento en plazos previo requerimiento justificado por dificultades económicas acreditadas, pero no es una opción universal ni automática. En Palma, la gestión corresponde a la Agència Tributària de Palma, a quien debe dirigirse la solicitud de aplazamiento antes de que venza el plazo de 30 días. Es fundamental no incumplir el plazo de presentación: una declaración extemporánea —presentada fuera de plazo sin requerimiento previo de la administración— genera recargos del 5% si se presenta dentro de los tres meses siguientes, del 10% hasta los seis meses, del 15% hasta el año, y del 20% a partir del año, además de los intereses de demora correspondientes.',
        },
        {
          type: 'h3',
          text: '¿La plusvalía la paga el comprador o el vendedor?',
        },
        {
          type: 'p',
          text: 'Por imperativo legal, la plusvalía municipal la paga siempre el vendedor (o el heredero/donatario en las transmisiones no onerosas). No obstante, las partes pueden acordar en el contrato privado que sea el comprador quien asuma este coste —es una cláusula que a veces se negocia en el contexto de la compraventa—. Este pacto, sin embargo, no tiene efectos frente a la administración tributaria: si el comprador no cumple, el ayuntamiento reclamará el impuesto al vendedor, que es el sujeto pasivo legal. Nunca debe cederse esta obligación sin el respaldo de una garantía contractual clara y el asesoramiento de un abogado, pues el vendedor sigue siendo el responsable ante Hacienda independientemente de lo pactado entre las partes.',
        },
        {
          type: 'h3',
          text: '¿Qué pasa si vendo con pérdidas respecto al precio de compra?',
        },
        {
          type: 'p',
          text: 'Si vende su inmueble por un precio inferior o igual al que pagó en su día, utilizando el método real la base imponible de la plusvalía municipal será cero, y por tanto no habrá cuota a ingresar. Para acreditarlo, deberá presentar ante el ayuntamiento las escrituras de compra y de venta, que demuestran que no ha existido incremento real de valor del suelo. Es importante subrayar que la obligación de presentar la autoliquidación o la declaración existe aunque la cuota sea cero: no presentar nada puede dar lugar a procedimientos sancionadores por parte del ayuntamiento. Conserve siempre las escrituras originales de compra —incluyendo los gastos de adquisición debidamente documentados— como prueba ante la administración.',
        },
      ],
    },
    en: {
      seoTitle: 'Municipal Capital Gains Tax in Mallorca: how it is calculated and when you don\'t pay it (2026)',
      metaDescription: 'Complete guide to municipal capital gains tax (plusvalía) when selling a property in Mallorca in 2026: objective vs. real method, calculation examples and when it can be zero.',
      h1: 'Municipal Capital Gains Tax in Mallorca: how it is calculated and when you don\'t pay it (2026)',
      category: 'Property Taxation',
      tags: ['municipal capital gains tax', 'plusvalía municipal', 'selling property Mallorca', 'property taxes Spain', 'Palma de Mallorca'],
      excerpt: 'The municipal capital gains tax (plusvalía) is one of the least understood — and most debated — taxes when selling a property. In 2026, sellers in Mallorca can choose between two calculation methods. We explain which one suits you and when it can be zero.',
      blocks: [
        {
          type: 'p',
          text: 'The municipal capital gains tax — technically known as the Tax on the Increase in Value of Urban Land (IIVTNU, or plusvalía municipal) — is a local tax levied on the increase in value experienced by urban land during the period a property has been held by its owner. It applies to any transfer: sale, inheritance or donation. Each local authority (ayuntamiento) manages the tax, which means that the applicable rate and coefficients may vary slightly between municipalities within Mallorca. It is one of the taxes that most surprises sellers, precisely because many are unaware of it or underestimate it until they are about to sign at the notary.',
        },
        {
          type: 'h2',
          text: 'Who pays the municipal capital gains tax in Mallorca?',
        },
        {
          type: 'p',
          text: 'As a general rule, the municipal capital gains tax is paid by the seller. In private sales, the transferor must settle the tax with the relevant local authority within 30 business days of signing the title deed. However, the law allows the parties to agree contractually that the buyer assumes the cost — though this arrangement has no effect on the tax authority: if the tax is not paid, the local authority can demand it from the seller. In inheritances, the heir or legatee is liable, with a six-month deadline from the date of death (extendable to one year upon reasoned request). In donations, the donee (recipient) is the taxable person.',
        },
        {
          type: 'h2',
          text: 'The two calculation methods in 2026',
        },
        {
          type: 'p',
          text: 'Since November 2021, following the approval of Royal Decree-Law 26/2021 — which adapted the IIVTNU rules to the doctrine of the Constitutional Court — there are two alternative methods for calculating the taxable base. The taxpayer can freely choose whichever is most favourable, and the local authority cannot reject the chosen option provided it is properly documented. This was a fundamental change: before 2021, the objective method was always applied, even when a property had been sold at a loss relative to its purchase price, creating situations the Constitutional Court declared unconstitutional.',
        },
        {
          type: 'h3',
          text: 'Objective method (based on coefficients)',
        },
        {
          type: 'p',
          text: 'Under the objective method, the taxable base is calculated by multiplying the cadastral value of the land at the time of transfer by a coefficient set according to the number of full years of ownership. These coefficients are approved annually by Ministerial Order as maximum values; each local authority may apply its own as long as they do not exceed these caps. The formula is: Taxable base = Cadastral land value × Coefficient for years of ownership. Practical example: a property with a cadastral land value of €80,000, held for 12 years, with an applicable coefficient of 0.45, generates a taxable base of €36,000. Applying the maximum rate of the Palma City Council (30%), the tax due would be €10,800.',
        },
        {
          type: 'h3',
          text: 'Real method (based on actual gain)',
        },
        {
          type: 'p',
          text: 'The real method calculates the taxable base from the actual increase in land value. The formula is: Taxable base = (Sale price − Purchase price) × (Cadastral land value ÷ Total cadastral value). This cadastral ratio isolates the portion of the total gain attributable solely to the land, which is what the IIVTNU taxes (not the building value). Example: a property bought for €200,000 and sold for €350,000, yielding a gain of €150,000. If the cadastral land value represents 60% of the total cadastral value, the taxable base would be €90,000. Applying a 30% rate, the tax would be €27,000 — higher than under the objective method in this case.',
        },
        {
          type: 'h3',
          text: 'How to choose the most favourable method',
        },
        {
          type: 'p',
          text: 'The professional recommendation is always to calculate both methods before filing the self-assessment or declaration with the local authority, and to choose whichever generates the lower tax. The local authority cannot prevent this choice if it is properly documented. In practice, the objective method tends to be more favourable for properties acquired recently or in areas where the cadastral value is low relative to the market price; the real method generally suits properties held for many years with modest actual appreciation, or in cases where the sale is at a loss. The deadline for filing the self-assessment is 30 business days from the deed signing in the case of a sale.',
        },
        {
          type: 'table',
          headers: ['Scenario', 'Objective method', 'Real method', 'Recommendation'],
          rows: [
            ['Property acquired recently with high appreciation', 'Favourable', 'Unfavourable', 'Objective method'],
            ['Property held for many years with modest appreciation', 'Unfavourable', 'Favourable', 'Real method'],
            ['Sale at a loss vs. purchase price', 'Tax still owed', 'Zero liability', 'Real method or exemption'],
          ],
        },
        {
          type: 'h2',
          text: 'When the municipal capital gains tax can be zero',
        },
        {
          type: 'p',
          text: 'There are two main scenarios in which the municipal capital gains tax liability can be zero or minimal. The first — and most relevant — is a sale at a loss or with no real increase in land value: if the property is sold for a price equal to or below the original purchase price, applying the real method yields a taxable base of zero and therefore no tax. This was recognised by the Constitutional Court in Ruling 182/2021 and consolidated by Royal Decree-Law 26/2021. To prove the loss, it is sufficient to provide the purchase and sale deeds. The second scenario concerns rural land: the IIVTNU only taxes urban land, so rural estates (fincas rústicas) in Mallorca — a highly sought-after asset — are entirely exempt from this tax, regardless of the sale price.',
        },
        {
          type: 'h2',
          text: 'Municipal capital gains tax on inheritances in Mallorca',
        },
        {
          type: 'p',
          text: 'When a property is inherited and subsequently sold, two separate capital gains tax events may arise. First, at the time of inheritance: the heir must settle the tax within six months of the date of death (extendable to one year), using the cadastral land value at that date as the taxable base. Second, if the heir later sells the property, a new municipal capital gains tax calculation applies for the period from the date of inheritance to the date of sale. The clock resets from the date of inheritance, not from the original purchase by the deceased. This has significant implications for families with inherited properties in Mallorca who are planning a sale: in many cases, waiting a certain number of years after inheritance may be tax-efficient depending on the applicable calculation method.',
        },
        {
          type: 'cta',
          title: 'Are you selling a property in Mallorca?',
          body: 'We calculate both methods of municipal capital gains tax and advise you on the most advantageous option. First consultation at no charge.',
          button: 'Request tax analysis',
        },
        {
          type: 'links',
          title: 'Related services and resources',
          items: [
            { label: 'Property Sales in Mallorca', href: '/en/servicios/vender-piso-mallorca', desc: 'Full sale management: pricing, contracts, notary and taxes.' },
            { label: 'Real Estate Tax Advisory', href: '/en/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'Tax planning and settlement of all taxes on your transaction.' },
            { label: 'Taxes when buying in Mallorca (non-residents)', href: '/en/blog/impuestos-comprar-vivienda-mallorca-no-residentes', desc: 'Complete guide: ITP, VAT, stamp duty, IRNR and total costs.' },
          ],
        },
        {
          type: 'h2',
          text: 'Frequently asked questions about municipal capital gains tax in Mallorca',
        },
        {
          type: 'h3',
          text: 'Can I defer payment of the municipal capital gains tax?',
        },
        {
          type: 'p',
          text: 'There is generally no automatic deferral of the municipal capital gains tax. Some local authorities allow instalment payments upon a prior reasoned request evidencing financial hardship, but this is not a universal or automatic option. In Palma, management falls to the Agència Tributària de Palma, to whom a deferral request must be addressed before the 30-day deadline expires. It is essential not to miss the filing deadline: a late self-assessment — submitted without a prior demand from the administration — incurs surcharges of 5% if filed within three months, 10% up to six months, 15% up to one year, and 20% beyond one year, plus applicable late-payment interest.',
        },
        {
          type: 'h3',
          text: 'Does the buyer or the seller pay the municipal capital gains tax?',
        },
        {
          type: 'p',
          text: 'As a matter of law, the municipal capital gains tax is always paid by the seller (or the heir/donee in non-sale transfers). However, the parties may agree in the private contract that the buyer assumes this cost — a clause sometimes negotiated in the context of a sale. This agreement, however, has no effect on the tax authority: if the buyer does not pay, the local authority will claim the tax from the seller, who is the legal taxable person. This obligation should never be transferred without a clear contractual guarantee and proper legal advice, as the seller remains responsible to the tax authority regardless of what has been agreed between the parties.',
        },
        {
          type: 'h3',
          text: 'What happens if I sell at a loss compared to the purchase price?',
        },
        {
          type: 'p',
          text: 'If you sell your property for a price equal to or below what you originally paid, using the real method the taxable base of the municipal capital gains tax will be zero and therefore no tax will be due. To prove this, you will need to present the purchase and sale deeds to the local authority, demonstrating that there has been no real increase in land value. It is important to note that the obligation to file the self-assessment or declaration still exists even when the liability is zero: failing to file anything can lead to penalty proceedings by the local authority. Always retain the original purchase deeds — including properly documented acquisition costs — as evidence before the administration.',
        },
      ],
    },
  },

  // ─── POST B: Sociedad Patrimonial Mallorca 2026 ─────────────────────────────
  {
    slug: 'sociedad-patrimonial-comprar-inmueble-mallorca-2026',
    date: '2026-03-21',
    readingTime: 10,
    authorKey: 'alfonso',
    image: {
      src: 'https://images.pexels.com/photos/30862292/pexels-photo-30862292.jpeg',
      alt: 'Catedral de Palma y Palacio Real de Mallorca — sociedad patrimonial para compra de inmueble en Baleares',
    },
    es: {
      seoTitle: 'Sociedad patrimonial para comprar un inmueble en Mallorca: ventajas e inconvenientes (2026)',
      metaDescription: '¿Conviene comprar un inmueble en Mallorca a través de una sociedad patrimonial? Análisis de ventajas fiscales, inconvenientes y cuándo tiene sentido en 2026.',
      h1: '¿Conviene comprar un inmueble en Mallorca a través de una sociedad? Ventajas, inconvenientes y cuándo tiene sentido (2026)',
      category: 'Planificación Patrimonial',
      tags: ['sociedad patrimonial', 'holding inmobiliario', 'SL inmueble', 'fiscalidad Mallorca', 'IS vs IRPF'],
      excerpt: 'Muchos inversores en Mallorca se preguntan si es más eficiente comprar a través de una sociedad limitada. La respuesta depende de varios factores: el uso del inmueble, el patrimonio total y el horizonte temporal. Le explicamos cuándo tiene sentido —y cuándo no.',
      blocks: [
        {
          type: 'p',
          text: 'Esta es la pregunta que con mayor frecuencia plantean los inversores con un inmueble de alto valor o con varios activos en cartera. La respuesta no es universal: depende de la situación concreta de cada persona —su nivel de renta, su patrimonio total, el uso previsto del inmueble, el horizonte temporal y sus objetivos de transmisión—. Este artículo analiza los factores fiscales y jurídicos que determinan si la adquisición a través de una Sociedad Limitada (SL) española tiene sentido para un inmueble en Mallorca en 2026, con el objetivo de que pueda tomar una decisión informada antes de estructurar su inversión.',
        },
        {
          type: 'h2',
          text: '¿Qué es una sociedad patrimonial?',
        },
        {
          type: 'p',
          text: 'Una sociedad patrimonial es una Sociedad Limitada española cuyo activo principal y actividad fundamental consiste en la tenencia de bienes inmuebles. Conforme a la Ley del Impuesto sobre Sociedades (LIS), una sociedad se considera «de mera tenencia de bienes» o patrimonial cuando más de la mitad de su activo no está afecto a una actividad económica real —es decir, cuando funciona esencialmente como vehículo de inversión y no como empresa operativa—. Esta calificación tiene implicaciones fiscales específicas: entre otras, restringe la aplicación de ciertos beneficios del IS, como el tipo reducido del 23% previsto para empresas de reducida dimensión. En la práctica, muchos inversores estructuran la sociedad de forma que también desarrolle una actividad de gestión activa del alquiler (contratos, mantenimiento, relación con inquilinos), lo que puede excluir la calificación como patrimonial y permitir acceder a un tratamiento fiscal más favorable en el Impuesto sobre Sociedades.',
        },
        {
          type: 'h2',
          text: 'Ventajas de comprar a través de una sociedad en Mallorca',
        },
        {
          type: 'h3',
          text: '1. Menor tributación de los rendimientos del alquiler',
        },
        {
          type: 'p',
          text: 'Los rendimientos del alquiler percibidos por una persona física tributan en el IRPF como rendimientos de capital inmobiliario, integrándose en la base imponible general y sometidos a los tipos marginales progresivos, que en las Islas Baleares pueden alcanzar el 47% a partir de 120.000 € de renta total. A través de una sociedad, los beneficios del alquiler tributan en el Impuesto sobre Sociedades al tipo general del 25% (o al 23% para sociedades con cifra de negocios inferior a 1 millón de euros, si no son patrimoniales). Para inversores con rentas elevadas, esta diferencia puede ser muy significativa. Ejemplo: ingresos netos del alquiler de 50.000 € al año. Como persona física con tipo marginal del 40%: IRPF de aproximadamente 20.000 €. A través de una SL al 25%: IS de 12.500 €. Ahorro anual: 7.500 €, que puede reinvertirse en el propio patrimonio.',
        },
        {
          type: 'h3',
          text: '2. Deducibilidad de gastos',
        },
        {
          type: 'p',
          text: 'Una sociedad puede deducir en el Impuesto sobre Sociedades un abanico más amplio y flexible de gastos que una persona física que alquila a título personal: la amortización del inmueble (3% anual sobre el valor de construcción, excluido el suelo), los intereses de la hipoteca o del préstamo de adquisición, los honorarios de gestión y administración, los gastos de seguro, las reparaciones y obras de mantenimiento, los honorarios de asesoría contable y jurídica y, en determinadas circunstancias, los gastos de vehículo cuando están vinculados a la actividad. Las personas físicas que alquilan también pueden deducir muchos de estos conceptos en el IRPF, pero la estructura societaria ofrece en general mayor flexibilidad y capacidad de planificación en la deducción de gastos, especialmente en carteras con múltiples inmuebles.',
        },
        {
          type: 'h3',
          text: '3. Ventajas en la transmisión generacional',
        },
        {
          type: 'p',
          text: 'La transmisión directa de un inmueble por herencia o donación implica tributar en el Impuesto sobre Sucesiones y Donaciones (ISD) sobre el valor de mercado del bien. Transmitir participaciones de una sociedad que es propietaria del inmueble puede ser mucho más eficiente fiscalmente: si la sociedad califica como empresa familiar en los términos del artículo 4.Ocho de la Ley del Impuesto sobre el Patrimonio y cumple los requisitos de la reducción del artículo 20.2.c) de la Ley del ISD, las participaciones pueden beneficiarse de una reducción del 95% en la base imponible del ISD en las Islas Baleares. En un inmueble de 1.000.000 €, esta reducción puede suponer un ahorro fiscal de cientos de miles de euros en la transmisión generacional, lo que convierte a la estructura societaria en una de las herramientas más potentes de planificación sucesoria.',
        },
        {
          type: 'h3',
          text: '4. Protección patrimonial',
        },
        {
          type: 'p',
          text: 'La titularidad del inmueble a través de una sociedad limitada ofrece una separación entre el patrimonio personal de los socios y las responsabilidades derivadas del inmueble. En caso de litigios con inquilinos, reclamaciones por defectos constructivos, accidentes en el inmueble u otras contingencias relacionadas con la propiedad, la responsabilidad queda en principio limitada al patrimonio de la sociedad, sin afectar directamente al patrimonio personal de los socios. Esta protección puede tener un valor considerable para inversores con múltiples propiedades o con un patrimonio personal significativo que quieran compartimentar los riesgos.',
        },
        {
          type: 'h2',
          text: 'Inconvenientes y costes de la estructura societaria',
        },
        {
          type: 'h3',
          text: '1. IVA en la compra (obra nueva)',
        },
        {
          type: 'p',
          text: 'Cuando una sociedad adquiere un inmueble de obra nueva a un promotor, paga el IVA del 10% —igual que una persona física—. Sin embargo, la sociedad solo puede deducir este IVA soportado si el inmueble se destina a una actividad sujeta y no exenta de IVA. El alquiler residencial en España está exento de IVA con carácter general, lo que significa que la sociedad no puede recuperar el IVA pagado en la compra. Únicamente si el inmueble se arrienda para uso comercial u oficinas (alquiler sujeto a IVA) puede recuperarse el impuesto íntegramente. Para inmuebles residenciales destinados al alquiler, la situación frente al IVA es similar a la de la compra como persona física, por lo que este factor no constituye per se una ventaja de la estructura societaria.',
        },
        {
          type: 'h3',
          text: '2. Costes de constitución y mantenimiento',
        },
        {
          type: 'p',
          text: 'La constitución de una SL en España tiene un coste aproximado de entre 1.000 y 2.000 euros (notario, Registro Mercantil, gestión). Los costes anuales de contabilidad, presentación de cuentas anuales y declaraciones fiscales (IS, IVA si procede, declaraciones informativas) oscilan habitualmente entre 1.500 y 4.000 euros anuales, dependiendo de la complejidad de la estructura. Estos costes fijos solo se justifican si el ahorro fiscal generado los supera con claridad, lo que en la práctica suele requerir inmuebles con un valor de mercado superior a 300.000 € o ingresos anuales de alquiler superiores a 30.000 €. Para inversiones más pequeñas o de uso principalmente personal, la estructura societaria puede resultar más gravosa que la titularidad directa.',
        },
        {
          type: 'h3',
          text: '3. Doble tributación en la distribución de dividendos',
        },
        {
          type: 'p',
          text: 'Los beneficios generados en la sociedad tributan en el IS al 25%. Cuando se distribuyen a los socios como dividendos, vuelven a tributar en el IRPF del socio como rendimientos del capital mobiliario, a los tipos de la base del ahorro: 19% hasta 6.000 €, 21% de 6.001 a 50.000 €, 23% de 50.001 a 200.000 €, 27% de 200.001 a 300.000 € y 28% a partir de 300.000 € (escala 2026). Esta doble imposición puede erosionar significativamente el ahorro fiscal generado si los beneficios se distribuyen regularmente. La estructura societaria resulta más eficiente cuando los beneficios se reinvierten dentro de la propia sociedad —por ejemplo, para adquirir nuevos inmuebles o amortizar deuda— en lugar de distribuirse anualmente como dividendos.',
        },
        {
          type: 'h3',
          text: '4. Restricciones fiscales específicas de las sociedades patrimoniales',
        },
        {
          type: 'p',
          text: 'Las sociedades calificadas como patrimoniales por la LIS no pueden aplicar el tipo reducido del 23% previsto para empresas de reducida dimensión. Tampoco pueden acogerse a determinados regímenes especiales del IS que pueden resultar favorables en otros contextos. Adicionalmente, presentan restricciones en la compensación de bases imponibles negativas y en la deducción de pérdidas. Para los socios no residentes, la sociedad patrimonial puede generar obligaciones específicas en el Impuesto sobre la Renta de No Residentes (IRNR) tanto en la distribución de dividendos como en la transmisión de las participaciones, por lo que el análisis debe ser especialmente cuidadoso cuando la estructura tiene socios internacionales.',
        },
        {
          type: 'h2',
          text: '¿Cuándo tiene sentido comprar a través de una sociedad en Mallorca?',
        },
        {
          type: 'ul',
          items: [
            'Inversores con varios inmuebles en Mallorca que quieren centralizar la gestión y optimizar la carga fiscal global del portfolio',
            'Propietarios con rendimientos de alquiler superiores a 30.000 € anuales que tributan en IRPF a tipo marginal alto (más del 37%)',
            'Familias que planifican la transmisión hereditaria de inmuebles de valor elevado y quieren aprovechar las reducciones de empresa familiar en el ISD',
            'Inversores no residentes que quieren simplificar sus obligaciones fiscales en España y limitar su exposición al IRNR personal',
            'Propietarios que quieren proteger su patrimonio personal de posibles contingencias derivadas del inmueble',
          ],
        },
        {
          type: 'h2',
          text: 'Cuándo NO merece la pena',
        },
        {
          type: 'ul',
          items: [
            'Una sola propiedad de uso personal (vivienda habitual): no genera rentas que justifiquen la estructura',
            'Inversores con rentas totales bajas que tributan a tipos marginales del IRPF reducidos (menos del 30%)',
            'Cuando el inmueble se va a vender en el corto plazo: los costes de constitución y liquidación de la sociedad pueden superar el ahorro',
            'Compradores que necesitan financiación hipotecaria: los bancos son más reticentes a conceder hipotecas a sociedades patrimoniales y las condiciones suelen ser peores',
          ],
        },
        {
          type: 'h2',
          text: 'Caso práctico: inversor con tres pisos en alquiler en Mallorca',
        },
        {
          type: 'p',
          text: 'Supongamos un inversor con una renta total en IRPF de 150.000 € anuales (salario más rendimientos de capital). Tiene tres pisos en alquiler en Mallorca que generan 60.000 € netos al año. Su tipo marginal en IRPF es del 47%. Opción A —titularidad personal—: paga aproximadamente 28.200 € en IRPF sobre los rendimientos del alquiler. Opción B —sociedad limitada—: paga 15.000 € de IS al 25%. Ahorro anual bruto: 13.200 €. Descontando los costes de asesoría y contabilidad de la sociedad (estimados en 3.000 € anuales), el beneficio neto es de aproximadamente 10.200 € al año. En un horizonte de diez años, el ahorro acumulado supera los 100.000 €, cifra que más que justifica la complejidad adicional de la estructura societaria.',
        },
        {
          type: 'cta',
          title: '¿Está valorando crear una sociedad para su inmueble en Mallorca?',
          body: 'Analizamos su situación personal y fiscal para determinar si la estructura societaria le conviene y, si es así, cómo constituirla de forma eficiente. Primera consulta sin coste.',
          button: 'Hablar con un asesor',
        },
        {
          type: 'links',
          title: 'Servicios relacionados',
          items: [
            { label: 'Planificación Patrimonial Inmobiliaria', href: '/es/servicios/planificacion-patrimonial-inmobiliaria', desc: 'Estructuración de patrimonios inmobiliarios: sociedad, herencia y transmisión generacional.' },
            { label: 'Inversión Inmobiliaria en Mallorca', href: '/es/servicios/inversion-inmobiliaria-mallorca', desc: 'Análisis de rentabilidad y estructura fiscal para inversores.' },
            { label: 'Asesoría Fiscal Inmobiliaria', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'IS, IRPF, IRNR y planificación fiscal integral de su cartera inmobiliaria.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'Buying property in Mallorca through a company: pros, cons and when it makes sense (2026)',
      metaDescription: 'Should you buy a property in Mallorca through a holding company? Analysis of tax advantages, drawbacks and when it makes sense in 2026.',
      h1: 'Buying property in Mallorca through a company: pros, cons and when it makes sense (2026)',
      category: 'Wealth Planning',
      tags: ['property holding company', 'Spanish SL real estate', 'Mallorca investment structure', 'IS vs IRPF', 'tax planning Mallorca'],
      excerpt: 'Many investors in Mallorca wonder whether buying through a Spanish limited company is more tax-efficient. The answer depends on several factors: the intended use of the property, total wealth and the investment horizon. We explain when it makes sense — and when it does not.',
      blocks: [
        {
          type: 'p',
          text: 'This is the question most frequently raised by investors holding a high-value property or a portfolio of several assets. The answer is not universal: it depends on each person\'s specific situation — their income level, total wealth, intended use of the property, time horizon and succession objectives. This article analyses the tax and legal factors that determine whether acquisition through a Spanish limited company (SL — Sociedad Limitada) makes sense for a Mallorca property in 2026, with the aim of enabling an informed decision before structuring your investment.',
        },
        {
          type: 'h2',
          text: 'What is a sociedad patrimonial (property holding company)?',
        },
        {
          type: 'p',
          text: 'A sociedad patrimonial is a Spanish limited company (SL) whose main asset and purpose is holding real estate. Under Spanish Corporate Income Tax law (LIS — Ley del Impuesto sobre Sociedades), a company is classified as a holding entity (de mera tenencia de bienes) when more than half its assets are not linked to an actual economic activity — in other words, when it functions essentially as an investment vehicle rather than an operating business. This classification carries specific tax implications, including restrictions on certain Corporate Tax benefits, such as the 23% reduced rate available to smaller companies. In practice, many investors structure their company to also carry out active property management (leases, maintenance, tenant relations), which may exclude the holding classification and allow access to more favourable Corporate Tax treatment.',
        },
        {
          type: 'h2',
          text: 'Advantages of buying through a company in Mallorca',
        },
        {
          type: 'h3',
          text: '1. Lower taxation on rental income',
        },
        {
          type: 'p',
          text: 'Rental income received by an individual is subject to Personal Income Tax (IRPF) at progressive marginal rates, which in the Balearic Islands can reach 47% on income above €120,000. Through a company, rental profits are taxed at the general Corporate Income Tax rate of 25% (or 23% for companies with turnover below €1 million, provided they do not qualify as holding entities). For investors in high income-tax brackets, this difference can be very substantial. Example: net rental income of €50,000 per year. As an individual at a 40% marginal rate: approximately €20,000 in IRPF. Through an SL at 25%: €12,500 in Corporate Tax. Annual saving: €7,500, which can be reinvested within the company.',
        },
        {
          type: 'h3',
          text: '2. Deductibility of expenses',
        },
        {
          type: 'p',
          text: 'A company can deduct a broader and more flexible range of expenses against its Corporate Tax liability than an individual letting property personally: depreciation of the building (3% per year on the construction value, excluding land), mortgage or acquisition loan interest, management and administration fees, insurance, repairs and maintenance, legal and accounting advisory fees, and in certain circumstances vehicle costs when linked to the activity. Individuals renting property can also deduct many of these items under IRPF, but the corporate structure generally offers greater flexibility and planning scope — particularly for portfolios with multiple properties.',
        },
        {
          type: 'h3',
          text: '3. Advantages in generational wealth transfer',
        },
        {
          type: 'p',
          text: 'Transferring a property directly by inheritance or gift triggers Inheritance and Gift Tax (ISD) on the full market value of the asset. Transferring shares in a company that owns the property can be significantly more tax-efficient: if the company qualifies as a family business under Article 4.Eight of the Wealth Tax Law and meets the requirements of Article 20.2(c) of the ISD Law, the shares may benefit from a 95% reduction in the ISD taxable base in the Balearic Islands. On a property worth €1,000,000, this reduction can represent a tax saving of hundreds of thousands of euros on generational transfer, making the corporate structure one of the most powerful estate planning tools available.',
        },
        {
          type: 'h3',
          text: '4. Asset protection',
        },
        {
          type: 'p',
          text: 'Holding a property through a limited company creates a separation between the personal assets of the shareholders and the liabilities arising from the property. In the event of disputes with tenants, construction defect claims, accidents on the premises or other property-related contingencies, liability is in principle limited to the company\'s assets, without directly affecting the personal wealth of the shareholders. This protection can be particularly valuable for investors with multiple properties or significant personal assets who wish to compartmentalise their risks.',
        },
        {
          type: 'h2',
          text: 'Drawbacks and costs of the corporate structure',
        },
        {
          type: 'h3',
          text: '1. VAT on new-build purchases',
        },
        {
          type: 'p',
          text: 'When a company buys a new-build property from a developer, it pays 10% VAT — the same as an individual. However, the company can only reclaim this input VAT if the property is used for a taxable, VAT-applicable activity. Residential rental in Spain is generally VAT-exempt, meaning the company cannot recover the VAT paid on the purchase. Only if the property is rented commercially — for offices or business premises (a VAT-applicable rental) — can the VAT be fully reclaimed. For residential properties intended for letting, the VAT position is similar to that of an individual purchase, so this factor does not constitute an inherent advantage of the corporate structure.',
        },
        {
          type: 'h3',
          text: '2. Set-up and ongoing maintenance costs',
        },
        {
          type: 'p',
          text: 'Setting up a Spanish SL costs approximately €1,000–€2,000 (notary, Mercantile Registry, professional fees). Annual accounting, filing of annual accounts and tax returns (Corporate Tax, VAT if applicable, information returns) typically cost between €1,500 and €4,000 per year depending on the complexity of the structure. These fixed costs are only justified when the tax savings clearly exceed them — which in practice generally requires properties with a market value above €300,000 or annual rental income above €30,000. For smaller investments or primarily personal-use assets, the corporate structure may prove more costly than direct ownership.',
        },
        {
          type: 'h3',
          text: '3. Double taxation on dividend distributions',
        },
        {
          type: 'p',
          text: 'Profits generated within the company are taxed at 25% Corporate Tax. When distributed to shareholders as dividends, they are taxed again under the shareholder\'s personal income tax at savings-base rates: 19% up to €6,000; 21% from €6,001 to €50,000; 23% from €50,001 to €200,000; 27% from €200,001 to €300,000; and 28% above €300,000 (2026 scale). This double taxation can significantly erode the tax saving if profits are distributed regularly. The corporate structure is most efficient when profits are reinvested within the company — for example, to acquire further properties or pay down debt — rather than being distributed annually as dividends.',
        },
        {
          type: 'h3',
          text: '4. Specific tax restrictions on holding companies',
        },
        {
          type: 'p',
          text: 'Companies classified as holding entities under LIS cannot apply the 23% reduced Corporate Tax rate available to smaller companies, nor access certain favourable special tax regimes. They also face restrictions on the use of tax losses and the offset of negative taxable bases. For non-resident shareholders, a holding company structure can generate specific Non-Resident Income Tax (IRNR) implications both on dividend distributions and on the sale of the company\'s shares, making a thorough analysis particularly important when the structure has international shareholders.',
        },
        {
          type: 'h2',
          text: 'When does buying through a company make sense in Mallorca?',
        },
        {
          type: 'ul',
          items: [
            'Investors with several properties in Mallorca who want to centralise management and optimise the overall tax burden on their portfolio',
            'Owners with rental income exceeding €30,000 per year who are taxed at a high IRPF marginal rate (above 37%)',
            'Families planning the generational transfer of high-value properties who want to take advantage of family business reductions in Inheritance and Gift Tax',
            'Non-resident investors who want to simplify their tax obligations in Spain and limit their personal IRNR exposure',
            'Owners who want to protect their personal assets from potential liabilities arising from the property',
          ],
        },
        {
          type: 'h2',
          text: 'When it is NOT worth it',
        },
        {
          type: 'ul',
          items: [
            'A single property for personal use (primary residence): generates no income to justify the structure',
            'Investors with low total income taxed at low IRPF marginal rates (below 30%)',
            'When the property will be sold in the short term: set-up and winding-up costs may exceed the savings',
            'Buyers who need mortgage financing: banks are more reluctant to lend to holding companies and the terms are generally less favourable',
          ],
        },
        {
          type: 'h2',
          text: 'Practical case: investor with three rental properties in Mallorca',
        },
        {
          type: 'p',
          text: 'Consider an investor with total annual IRPF income of €150,000 (salary plus capital income). Three properties in Mallorca generating €60,000 net per year in rent. Marginal IRPF rate: 47%. Option A — personal ownership: approximately €28,200 in IRPF on rental income. Option B — limited company: €15,000 in Corporate Tax at 25%. Gross annual saving: €13,200. Deducting annual accounting and advisory costs for the company (estimated at €3,000), the net benefit is approximately €10,200 per year. Over a ten-year horizon, the cumulative saving exceeds €100,000 — a figure that more than justifies the additional complexity of the corporate structure.',
        },
        {
          type: 'cta',
          title: 'Are you considering setting up a company for your Mallorca property?',
          body: 'We analyse your personal and tax situation to determine whether the corporate structure suits you and, if so, how to set it up efficiently. First consultation at no charge.',
          button: 'Speak with an adviser',
        },
        {
          type: 'links',
          title: 'Related services',
          items: [
            { label: 'Real Estate Wealth Planning', href: '/en/servicios/planificacion-patrimonial-inmobiliaria', desc: 'Structuring real estate assets: company vehicles, inheritance and generational transfer.' },
            { label: 'Property Investment in Mallorca', href: '/en/servicios/inversion-inmobiliaria-mallorca', desc: 'Yield analysis and tax structuring for investors.' },
            { label: 'Real Estate Tax Advisory', href: '/en/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'Corporate Tax, IRPF, IRNR and integrated fiscal planning for your property portfolio.' },
          ],
        },
      ],
    },
  },

  // ─── POST C: Vender piso Mallorca impuestos 2026 ────────────────────────────
  {
    slug: 'vender-piso-mallorca-impuestos-2026',
    date: '2026-03-21',
    readingTime: 9,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/27500284/pexels-photo-27500284.jpeg',
      alt: 'Playa de Santanyí, Mallorca — impuestos al vender un piso en Mallorca 2026',
    },
    es: {
      seoTitle: 'Vender un piso en Mallorca en 2026: impuestos, pasos y costes',
      metaDescription: 'Guía completa para vender un piso en Mallorca en 2026: IRPF, plusvalía municipal, retención del 3% para no residentes, documentos necesarios y plazos.',
      h1: 'Vender un piso en Mallorca en 2026: impuestos, pasos y qué debe saber antes de firmar',
      category: 'Compraventa Inmobiliaria',
      tags: ['vender piso Mallorca', 'IRPF venta inmueble', 'IRNR no residente', 'retención 3%', 'plusvalía municipal'],
      excerpt: 'Vender un piso en Mallorca implica más que encontrar comprador. Hay impuestos que calcular, documentos que preparar y plazos que cumplir. Esta guía explica todo lo que necesita saber como vendedor en 2026, tanto si reside en España como si vive en el extranjero.',
      blocks: [
        {
          type: 'p',
          text: 'Vender un inmueble en Mallorca en 2026 supone afrontar una serie de pasos fiscales, jurídicos y administrativos que muchos vendedores subestiman. Más allá de la negociación del precio y la cita ante notario, el vendedor debe calcular y declarar varios impuestos, obtener documentación específica y, en algunos casos, gestionar la retención del 3% del precio de venta que realiza el comprador. No planificar estos aspectos con antelación puede traducirse en costes inesperados o en problemas de cumplimiento tributario que conviene evitar.',
        },
        {
          type: 'h2',
          text: 'Impuestos que paga el vendedor en Mallorca',
        },
        {
          type: 'p',
          text: 'El vendedor de un inmueble en Mallorca está sujeto a dos impuestos principales: el IRPF (para residentes fiscales en España) o el IRNR (para no residentes), que gravan la ganancia patrimonial derivada de la venta; y la plusvalía municipal (IIVTNU), que grava el incremento del valor del suelo urbano durante el período de tenencia. Ambos tributos deben liquidarse en plazos distintos y con procedimientos diferentes. El IVA, en cambio, lo paga el comprador en las compraventas de obra nueva a promotores, y el ITP en las ventas entre particulares de segunda mano.',
        },
        {
          type: 'h3',
          text: '1. IRPF para residentes fiscales en España',
        },
        {
          type: 'p',
          text: 'La ganancia patrimonial en el IRPF se calcula como la diferencia entre el valor de transmisión (precio de venta menos gastos inherentes a la venta: honorarios de agencia, notaría a cargo del vendedor, plusvalía municipal) y el valor de adquisición (precio de compra más gastos pagados en su día: ITP o IVA/AJD, notaría, registro, e inversiones en mejoras debidamente acreditadas). La ganancia resultante se integra en la base del ahorro y tributa a los siguientes tipos en 2026: 19% sobre los primeros 6.000 €; 21% de 6.001 a 50.000 €; 23% de 50.001 a 200.000 €; 27% de 200.001 a 300.000 €; y 28% a partir de 300.000 €. Existen exenciones relevantes: si el inmueble es la vivienda habitual del vendedor y reinvierte la totalidad del importe obtenido en la adquisición de una nueva vivienda habitual en el plazo de dos años, la ganancia queda exenta. Si el vendedor tiene más de 65 años y vende su vivienda habitual, la ganancia está íntegramente exenta sin necesidad de reinversión.',
        },
        {
          type: 'h3',
          text: '2. IRNR para vendedores no residentes en España',
        },
        {
          type: 'p',
          text: 'Los vendedores que no son residentes fiscales en España tributan por la ganancia patrimonial en el Impuesto sobre la Renta de No Residentes (IRNR). El tipo aplicable es del 19% para residentes en la Unión Europea o el Espacio Económico Europeo, y del 24% para residentes en terceros países fuera del EEE. La ganancia se calcula de forma análoga al IRPF. La diferencia clave es la retención del 3%: el comprador está obligado a retener el 3% del precio de venta e ingresarlo en la AEAT en el plazo de un mes mediante el Modelo 211. Esta retención tiene carácter de pago a cuenta del IRNR del vendedor no residente. El vendedor debe posteriormente presentar el Modelo 210 (declaración del IRNR) en el plazo de tres meses desde la venta. Si la retención del 3% supera el impuesto efectivamente debido, el vendedor tiene derecho a solicitar la devolución del exceso; si la retención es insuficiente, debe ingresar la diferencia.',
        },
        {
          type: 'table',
          headers: ['Concepto', 'Residente fiscal España', 'No residente (UE/EEE)', 'No residente (fuera UE)'],
          rows: [
            ['Impuesto aplicable', 'IRPF (base ahorro)', 'IRNR', 'IRNR'],
            ['Tipo impositivo', '19%-28% (tramos)', '19% sobre ganancia', '24% sobre ganancia'],
            ['Retención por comprador', 'No aplica', '3% del precio de venta', '3% del precio de venta'],
            ['Plazo declaración', 'IRPF anual (abril-junio)', '3 meses desde la venta', '3 meses desde la venta'],
            ['Exención vivienda habitual', 'Sí, con condiciones', 'No aplica', 'No aplica'],
          ],
        },
        {
          type: 'h3',
          text: '3. Plusvalía municipal (IIVTNU)',
        },
        {
          type: 'p',
          text: 'La plusvalía municipal es un tributo local que recaudan los ayuntamientos sobre el incremento del valor del suelo urbano durante el tiempo de tenencia del inmueble. En 2026, el vendedor puede elegir entre el método objetivo (basado en coeficientes aprobados por Orden Ministerial) y el método real (basado en la ganancia efectiva del suelo), optando por el que resulte más favorable. En el Ayuntamiento de Palma, el tipo máximo aplicable es del 30% sobre la base imponible. El plazo para liquidarla es de 30 días hábiles desde la firma de la escritura. Esta materia se aborda en detalle en nuestra guía específica sobre la plusvalía municipal en Mallorca, donde encontrará ejemplos de cálculo y los escenarios en los que la cuota puede ser cero.',
        },
        {
          type: 'h2',
          text: 'Documentos necesarios para vender un piso en Mallorca',
        },
        {
          type: 'ul',
          items: [
            'Escritura de compra original o nota simple actualizada del Registro de la Propiedad',
            'Último recibo del IBI (Impuesto sobre Bienes Inmuebles) al corriente de pago',
            'Certificado de la comunidad de propietarios acreditando que no hay cuotas pendientes',
            'Certificado de eficiencia energética vigente (obligatorio desde 2013 para la venta)',
            'Cédula de habitabilidad (cédula de idoneidad en Baleares) si el inmueble la requiere',
            'DNI/NIE del vendedor en vigor',
            'Certificado de deuda pendiente de hipoteca si el inmueble está hipotecado',
            'Últimas facturas de suministros (agua, luz, gas) para facilitar el cambio de titularidad',
          ],
        },
        {
          type: 'h2',
          text: 'El proceso de venta paso a paso',
        },
        {
          type: 'ul',
          items: [
            'Paso 1 — Valoración y estrategia de precio: fijar un precio realista basado en comparables reales del mercado mallorquín, no en portales online que mezclan distintas calidades y zonas',
            'Paso 2 — Due diligence previa: antes de comercializar, revisar que la documentación está completa y que no hay cargas sorpresa que puedan retrasar o frustrar la venta',
            'Paso 3 — Contrato de arras: negociar y firmar un contrato de arras penitenciales o confirmatorias. La elección importa: las arras penitenciales permiten al vendedor retener el doble si el comprador incumple',
            'Paso 4 — Preparación notarial: el notario necesita varios días para preparar la escritura. El vendedor debe coordinar con el banco hipotecante (si hay hipoteca) para la cancelación simultánea',
            'Paso 5 — Firma ante notario: otorgamiento de la escritura pública de compraventa. En el mismo acto se produce la entrega de llaves y el pago del precio (generalmente mediante cheque bancario o transferencia SWIFT)',
            'Paso 6 — Liquidación de impuestos: en los 30 días siguientes a la firma, el vendedor debe liquidar la plusvalía municipal. El IRPF/IRNR se declara en los plazos indicados',
          ],
        },
        {
          type: 'h2',
          text: 'Planificación fiscal antes de firmar: claves para no pagar más de lo necesario',
        },
        {
          type: 'p',
          text: 'El mensaje más importante de esta guía es que la planificación fiscal debe realizarse antes de firmar la escritura, no después. Una vez que la escritura está otorgada, la obligación tributaria queda fijada y las opciones de optimización son muy limitadas. Antes de firmar, es esencial revisar: (1) si las mejoras realizadas en el inmueble —nueva cocina, baños, ventanas, instalaciones— están acreditadas con facturas que pueden incrementar el valor de adquisición y reducir la ganancia; (2) si todos los gastos de adquisición de la compra original están correctamente documentados; (3) en el caso de vendedores mayores de 65 años, si se cumplen los requisitos para la exención por venta de vivienda habitual; (4) para los no residentes, calcular si la retención del 3% será suficiente o si cabe esperar una devolución o un pago adicional; (5) si el momento de la firma puede estructurarse de forma que resulte más eficiente desde el punto de vista fiscal en relación con el cierre del ejercicio fiscal.',
        },
        {
          type: 'cta',
          title: '¿Va a vender su piso en Mallorca?',
          body: 'Le calculamos todos los impuestos antes de firmar y gestionamos la venta de principio a fin: arras, notaría, plusvalía e IRPF/IRNR. Primera consulta sin coste.',
          button: 'Hablar con un asesor',
        },
        {
          type: 'links',
          title: 'Servicios y recursos relacionados',
          items: [
            { label: 'Compraventa de Inmuebles en Mallorca', href: '/es/servicios/vender-piso-mallorca', desc: 'Gestión completa de la venta: precio, compradores, contratos, notaría e impuestos.' },
            { label: 'Asesoría Fiscal Inmobiliaria', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'Planificación de IRPF, IRNR, plusvalía y optimización fiscal de la operación.' },
            { label: 'Plusvalía municipal en Mallorca: cómo se calcula', href: '/es/blog/plusvalia-municipal-mallorca-como-se-calcula-2026', desc: 'Guía completa: método objetivo vs. real y cuándo puede ser cero.' },
          ],
        },
        {
          type: 'h2',
          text: 'Preguntas frecuentes sobre la venta de un piso en Mallorca',
        },
        {
          type: 'h3',
          text: '¿Cuánto tiempo se tarda en vender un piso en Mallorca en 2026?',
        },
        {
          type: 'p',
          text: 'En el mercado actual de Mallorca (2026), un inmueble con precio adecuado a su mercado tarda habitualmente entre dos y cuatro meses desde la comercialización hasta la firma de la escritura. El plazo entre la firma del contrato de arras y la escritura final ante notario es típicamente de seis a diez semanas, aunque puede alargarse si el comprador necesita financiación hipotecaria (los bancos pueden tardar entre cuatro y ocho semanas en formalizar la hipoteca). Las propiedades de lujo —por encima de 1,5 millones de euros— pueden requerir entre seis y doce meses para encontrar al comprador adecuado, dado el menor volumen de demanda en ese segmento.',
        },
        {
          type: 'h3',
          text: 'Soy no residente y vendo mi piso en Mallorca. ¿Cuándo recupero el 3% si me deben devolver?',
        },
        {
          type: 'p',
          text: 'El comprador tiene la obligación de ingresar el 3% del precio de venta en la AEAT en el plazo de un mes desde la firma mediante el Modelo 211. A continuación, el vendedor no residente debe presentar el Modelo 210 (declaración del IRNR) en el plazo de tres meses desde la fecha de la escritura. Si el cálculo del impuesto efectivo arroja una cuota inferior al 3% retenido, el vendedor tiene derecho a la devolución del exceso. La AEAT suele tardar entre seis y dieciocho meses en procesar estas devoluciones, que se realizan mediante transferencia bancaria a la cuenta indicada en el Modelo 210. Es importante designar un representante fiscal en España o disponer de una cuenta bancaria española activa para recibir la devolución sin incidencias.',
        },
        {
          type: 'h3',
          text: '¿Puedo vender si tengo la hipoteca sin cancelar?',
        },
        {
          type: 'p',
          text: 'Sí, es una situación muy habitual. La hipoteca se cancela simultáneamente en el mismo acto notarial de la compraventa: el precio pagado por el comprador se destina en primer lugar a liquidar la deuda hipotecaria pendiente, y el remanente se entrega al vendedor. Para ello, el banco del vendedor debe emitir un certificado de deuda pendiente y enviar a un representante (apoderado) al notario para firmar la cancelación registral de la hipoteca en el mismo acto. El vendedor debe coordinar con su banco con suficiente antelación —al menos dos semanas antes de la firma— para evitar retrasos de última hora.',
        },
      ],
    },
    en: {
      seoTitle: 'Selling a property in Mallorca in 2026: taxes, steps and what you need to know',
      metaDescription: 'Complete guide to selling a property in Mallorca in 2026: capital gains tax, municipal tax, 3% withholding for non-residents, required documents and deadlines.',
      h1: 'Selling a property in Mallorca in 2026: taxes, steps and what you need to know before signing',
      category: 'Property Sales',
      tags: ['selling property Mallorca', 'capital gains tax Spain', 'non-resident IRNR', '3% withholding Spain', 'plusvalía municipal'],
      excerpt: 'Selling a property in Mallorca involves more than finding a buyer. There are taxes to calculate, documents to prepare and deadlines to meet. This guide explains everything you need to know as a seller in 2026, whether you are a Spanish tax resident or live abroad.',
      blocks: [
        {
          type: 'p',
          text: 'Selling a property in Mallorca in 2026 involves a series of tax, legal and administrative steps that many sellers underestimate. Beyond price negotiation and the notary appointment, the seller must calculate and declare several taxes, obtain specific documents and, in some cases, manage the 3% withholding of the sale price by the buyer. Failing to plan these aspects in advance can result in unexpected costs or tax compliance issues that are best avoided.',
        },
        {
          type: 'h2',
          text: 'Taxes paid by the seller in Mallorca',
        },
        {
          type: 'p',
          text: 'A seller in Mallorca is subject to two main taxes: Personal Income Tax (IRPF, for Spanish tax residents) or Non-Resident Income Tax (IRNR, for non-residents), which apply to the capital gain derived from the sale; and the municipal capital gains tax (plusvalía municipal or IIVTNU), which applies to the increase in urban land value during the period of ownership. Both taxes must be settled within different deadlines and through separate procedures. VAT, by contrast, is paid by the buyer on new-build purchases from developers, while Transfer Tax (ITP) applies to second-hand sales between private parties.',
        },
        {
          type: 'h3',
          text: '1. Personal Income Tax (IRPF) for Spanish tax residents',
        },
        {
          type: 'p',
          text: 'The capital gain for IRPF purposes is calculated as the difference between the transfer value (sale price minus inherent selling costs: agency fees, notary costs borne by the seller, municipal capital gains tax) and the acquisition value (original purchase price plus costs paid at the time: ITP or VAT/stamp duty, notary, land registry, and documented capital improvements). The resulting gain is included in the savings tax base and taxed at the following rates in 2026: 19% on the first €6,000; 21% from €6,001 to €50,000; 23% from €50,001 to €200,000; 27% from €200,001 to €300,000; and 28% above €300,000. Key exemptions: if the property is the seller\'s primary residence (vivienda habitual) and the entire proceeds are reinvested in a new primary residence within two years, the gain is fully exempt. If the seller is over 65 and selling their primary residence, the gain is entirely exempt with no reinvestment requirement.',
        },
        {
          type: 'h3',
          text: '2. Non-Resident Income Tax (IRNR) for non-resident sellers',
        },
        {
          type: 'p',
          text: 'Sellers who are not Spanish tax residents are taxed on the capital gain under the Non-Resident Income Tax (IRNR). The applicable rate is 19% for residents in the European Union or European Economic Area, and 24% for residents in third countries outside the EEA. The gain is calculated in the same way as for IRPF. The key difference is the 3% withholding: the buyer is legally required to retain 3% of the sale price and pay it to the AEAT within one month using Modelo 211. This retention serves as a payment on account of the seller\'s IRNR liability. The seller must then file Modelo 210 (the non-resident tax return) within three months of the sale. If the 3% retention exceeds the actual tax due, the seller is entitled to claim a refund of the excess; if the retention falls short, the seller must pay the difference.',
        },
        {
          type: 'table',
          headers: ['Item', 'Spanish tax resident', 'Non-resident (EU/EEA)', 'Non-resident (outside EU)'],
          rows: [
            ['Applicable tax', 'IRPF (savings base)', 'IRNR', 'IRNR'],
            ['Tax rate', '19%–28% (bands)', '19% on gain', '24% on gain'],
            ['Buyer withholding', 'Not applicable', '3% of sale price', '3% of sale price'],
            ['Filing deadline', 'Annual IRPF (April–June)', '3 months from sale', '3 months from sale'],
            ['Primary residence exemption', 'Yes, with conditions', 'Not applicable', 'Not applicable'],
          ],
        },
        {
          type: 'h3',
          text: '3. Municipal Capital Gains Tax (plusvalía municipal / IIVTNU)',
        },
        {
          type: 'p',
          text: 'The municipal capital gains tax is a local tax collected by the local authority on the increase in urban land value during the period of ownership. In 2026, sellers can choose between the objective method (based on coefficients approved by Ministerial Order) and the real method (based on the actual land value increase), opting for whichever is more favourable. In the Palma City Council area, the maximum applicable rate is 30% on the taxable base. The deadline for settlement is 30 business days from the signing of the title deed. This topic is covered in detail in our dedicated guide on municipal capital gains tax in Mallorca, where you will find calculation examples and the scenarios in which the liability can be zero.',
        },
        {
          type: 'h2',
          text: 'Documents required to sell a property in Mallorca',
        },
        {
          type: 'ul',
          items: [
            'Original purchase deed or an up-to-date nota simple from the Land Registry',
            'Most recent IBI (Property Tax) receipt showing payment is up to date',
            'Certificate from the owners\' community confirming no outstanding service charges',
            'Valid energy performance certificate (mandatory since 2013 for all sales)',
            'Certificate of habitability (cédula de idoneidad in the Balearic Islands) where applicable',
            'Valid Spanish national ID (DNI) or Foreigner\'s Identity Number (NIE) of the seller',
            'Outstanding mortgage balance certificate if the property is mortgaged',
            'Recent utility bills (water, electricity, gas) to facilitate transfer of accounts',
          ],
        },
        {
          type: 'h2',
          text: 'The sale process step by step',
        },
        {
          type: 'ul',
          items: [
            'Step 1 — Valuation and pricing strategy: set a realistic price based on genuine comparable sales in the Mallorca market, not on online portals that mix different qualities and locations',
            'Step 2 — Pre-sale due diligence: before marketing, verify that all documentation is complete and that there are no unexpected encumbrances that could delay or derail the sale',
            'Step 3 — Deposit contract (arras): negotiate and sign a deposit agreement. The choice between penitential and confirmatory arras matters: penitential arras allow the seller to retain double the deposit if the buyer defaults',
            'Step 4 — Notary preparation: the notary needs several days to prepare the deed. The seller must coordinate with the mortgage lender (if applicable) for simultaneous cancellation at the notary',
            'Step 5 — Signing at the notary: execution of the public title deed. Keys are handed over and payment of the price is made at the same time (typically by banker\'s draft or SWIFT bank transfer)',
            'Step 6 — Tax settlement: within 30 business days of signing, the seller must settle the municipal capital gains tax. IRPF/IRNR is declared within the stated deadlines',
          ],
        },
        {
          type: 'h2',
          text: 'Tax planning before signing: key points to avoid overpaying',
        },
        {
          type: 'p',
          text: 'The most important message of this guide is that tax planning must take place before signing the deed, not after. Once the escritura is executed, the tax liability is fixed and the options for optimisation are very limited. Before signing, it is essential to review: (1) whether improvements made to the property — new kitchen, bathrooms, windows, installations — are backed by receipts that can increase the acquisition value and reduce the taxable gain; (2) whether all acquisition costs from the original purchase are properly documented; (3) for sellers over 65, whether the conditions for the primary residence exemption are met; (4) for non-residents, whether the 3% withholding will be sufficient or whether a refund or additional payment is expected; (5) whether the timing of signing can be structured to be most tax-efficient relative to the end of the fiscal year.',
        },
        {
          type: 'cta',
          title: 'Are you selling your property in Mallorca?',
          body: 'We calculate all taxes before you sign and manage the entire sale from start to finish: deposit contract, notary, municipal tax and IRPF/IRNR. First consultation at no charge.',
          button: 'Speak with an adviser',
        },
        {
          type: 'links',
          title: 'Related services and resources',
          items: [
            { label: 'Property Sales in Mallorca', href: '/en/servicios/vender-piso-mallorca', desc: 'Complete sale management: pricing, buyers, contracts, notary and taxes.' },
            { label: 'Real Estate Tax Advisory', href: '/en/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'IRPF, IRNR, municipal tax planning and full fiscal optimisation of your transaction.' },
            { label: 'Municipal Capital Gains Tax in Mallorca: how it is calculated', href: '/en/blog/plusvalia-municipal-mallorca-como-se-calcula-2026', desc: 'Complete guide: objective vs. real method and when it can be zero.' },
          ],
        },
        {
          type: 'h2',
          text: 'Frequently asked questions about selling a property in Mallorca',
        },
        {
          type: 'h3',
          text: 'How long does it take to sell a property in Mallorca in 2026?',
        },
        {
          type: 'p',
          text: 'In the current Mallorca market (2026), a property priced correctly for its market segment typically takes two to four months from listing to signing. The period between signing the deposit contract (arras) and the final notary deed is typically six to ten weeks, though it can extend if the buyer requires mortgage financing (banks may take four to eight weeks to formalise the mortgage). Luxury properties — above €1.5 million — may take six to twelve months to find the right buyer, given the lower volume of demand in that segment.',
        },
        {
          type: 'h3',
          text: 'I am a non-resident selling my property in Mallorca. When do I get the 3% back if a refund is due?',
        },
        {
          type: 'p',
          text: 'The buyer must pay the 3% of the sale price to AEAT within one month of the signing date using Modelo 211. The non-resident seller must then file Modelo 210 (the IRNR return) within three months of the deed date. If the effective tax calculation shows a liability below the 3% retained, the seller is entitled to a refund of the difference. AEAT typically takes between six and eighteen months to process these refunds, which are made by bank transfer to the account specified in Modelo 210. It is important to have an active Spanish bank account or to appoint a tax representative in Spain to receive the refund without complications.',
        },
        {
          type: 'h3',
          text: 'Can I sell if the mortgage has not been paid off?',
        },
        {
          type: 'p',
          text: 'Yes, this is a very common situation. The mortgage is cancelled at the same notary appointment as the sale: the buyer\'s payment is applied first to settle the outstanding mortgage balance, with the remainder going to the seller. To do this, the seller\'s bank must issue an outstanding debt certificate and send a representative to the notary to sign the formal cancellation of the mortgage charge in the same act. The seller must coordinate with their bank well in advance — at least two weeks before the signing date — to avoid any last-minute delays.',
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // POST — Mejores zonas para comprar casa en Mallorca 2026
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'mejores-zonas-comprar-casa-mallorca-2026',
    date: '2026-03-21',
    readingTime: 9,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/31934689/pexels-photo-31934689.jpeg',
      alt: 'Cala de aguas turquesas en Mallorca — mejores zonas para comprar casa en Mallorca 2026',
    },
    es: {
      seoTitle: 'Mejores zonas para comprar casa en Mallorca en 2026: precios y tendencias',
      metaDescription: 'Guía por zonas del mercado inmobiliario en Mallorca en 2026: precios por m², demanda, perfil de comprador y qué esperar en Palma, Andratx, Pollensa, Sóller y más.',
      h1: 'Mejores zonas para comprar casa en Mallorca en 2026: precios y tendencias por zona',
      category: 'Mercado Inmobiliario',
      tags: ['zonas Mallorca', 'precio m2 Mallorca', 'comprar casa Mallorca', 'mercado inmobiliario Mallorca', 'inmobiliaria Mallorca'],
      excerpt: 'El precio de la vivienda en Mallorca varía enormemente según la zona. Desde los 2.500 €/m² en municipios del interior hasta más de 8.000 €/m² en el suroeste de lujo. Esta guía analiza zona por zona qué esperar en 2026.',
      blocks: [
        {
          type: 'p',
          text: 'El mercado inmobiliario de Mallorca no es uniforme. Hablar de "el precio de la vivienda en Mallorca" sin especificar la zona es tan impreciso como hablar del precio de la vivienda en toda España con un único número. La isla concentra mercados muy distintos en apenas 3.640 km²: desde urbanizaciones de lujo en el suroeste con villas que superan los diez millones de euros, hasta municipios del interior con propiedades rústicas por debajo del medio millón. Entender esta geografía de precios es el primer paso antes de buscar cualquier propiedad. En este artículo analizamos las principales zonas de Mallorca, su comportamiento de mercado en 2026, el perfil de comprador predominante y qué tipo de propiedades encontrarás en cada una.',
        },
        {
          type: 'h2',
          text: 'Palma de Mallorca: capital con mercados dentro del mercado',
        },
        {
          type: 'p',
          text: 'Palma concentra aproximadamente el 40% de la población de la isla y ofrece la mayor diversidad de tipologías y precios. No es un mercado homogéneo: dentro de la ciudad conviven submercados muy distintos que responden a lógicas diferentes.',
        },
        {
          type: 'h3',
          text: 'Centro histórico y Casc Antic',
        },
        {
          type: 'p',
          text: 'El centro histórico de Palma —con sus palacetes, patios mallorquines y calles empedradas— es uno de los mercados más exclusivos de la isla. Los inmuebles reformados con criterios de lujo alcanzan fácilmente los 5.000-7.000 €/m². La demanda proviene principalmente de compradores nacionales de alto poder adquisitivo y de extranjeros que buscan una base urbana en la isla. La oferta es muy limitada dado el pequeño número de inmuebles susceptibles de reforma de calidad y las restricciones del planeamiento del conjunto histórico-artístico.',
        },
        {
          type: 'h3',
          text: 'Son Vida',
        },
        {
          type: 'p',
          text: 'La urbanización de Son Vida, situada en las colinas al noroeste de Palma, es la zona residencial de más alto standing de la ciudad. Villas de gran superficie con vistas panorámicas y parcelas amplias. El precio medio oscila entre 4.000 y 8.000 €/m² según el estado y la calidad de la reforma. El perfil de comprador es predominantemente internacional —alemán, centroeuropeo y latinoamericano de alto poder adquisitivo— y el mercado es muy selecto, con pocas transacciones anuales pero de importe muy elevado.',
        },
        {
          type: 'h3',
          text: 'Santa Catalina y Nou Camp',
        },
        {
          type: 'p',
          text: 'Santa Catalina es el barrio más dinámico de Palma en términos de demanda residencial. Muy popular entre residentes nacionales y extranjeros que buscan una base urbana activa. Pisos reformados de 60-100 m² se venden habitualmente entre 350.000 y 550.000 €. Es un mercado con alta rotación y demanda sostenida todo el año, sin la estacionalidad tan marcada de las zonas costeras.',
        },
        {
          type: 'h2',
          text: 'Suroeste: Andratx, Puerto Andratx, Camp de Mar y Santa Ponça',
        },
        {
          type: 'p',
          text: 'El suroeste de Mallorca es la zona de mayor concentración de demanda internacional de lujo en la isla. Puerto Andratx en particular es referencia europea en inmobiliaria de alta gama: villas con vistas al mar, puerto deportivo y privacidad a precios que oscilan entre los 2 y los 20 millones de euros. El precio medio de las transacciones en esta zona supera con frecuencia los 5.000-8.000 €/m² en propiedades de primera línea.',
        },
        {
          type: 'ul',
          items: [
            'Andratx pueblo: propiedades más asequibles, entre 2.500 y 4.000 €/m², con fuerte demanda alemana',
            'Puerto Andratx: zona prime del suroeste, villas desde 1,5 M€ hasta 20 M€, compradores de toda Europa',
            'Camp de Mar: más tranquilo, propiedades entre 600.000 € y 2,5 M€, muy demandado por familias',
            'Santa Ponça: alta densidad residencial, buen nivel de servicios, entre 2.500 y 4.500 €/m²',
            'Calvià y Nova Santa Ponça: municipio con buenas infraestructuras, perfil mixto nacional-internacional',
          ],
        },
        {
          type: 'h2',
          text: 'Norte: Puerto Pollensa, Pollensa, Alcúdia y Artà',
        },
        {
          type: 'p',
          text: 'El norte de Mallorca ofrece un paisaje distinto al suroeste: menos densificado, más verde, con la Serra de Tramuntana como telón de fondo y bahías de aguas turquesas. Puerto Pollensa es una de las zonas más demandadas por compradores británicos y escandinavos, que valoran la tranquilidad, la calidad de vida y el carácter más local del mercado frente al bullicio de las zonas del suroeste.',
        },
        {
          type: 'ul',
          items: [
            'Puerto Pollensa: villas y casas cerca de la playa entre 600.000 € y 3,5 M€, alta demanda británica y alemana',
            'Pollensa pueblo: propiedades con carácter, precios más contenidos (2.000-3.500 €/m²)',
            'Alcúdia: propiedades familiares y apartamentos, entre 200.000 y 600.000 €, perfil mixto',
            'Artà y Can Picafort: interior y costa norte, precios más asequibles, mercado en crecimiento',
          ],
        },
        {
          type: 'h2',
          text: 'Serra de Tramuntana: Sóller, Deià y Valldemossa',
        },
        {
          type: 'p',
          text: 'La Sierra de Tramuntana, declarada Patrimonio Mundial de la UNESCO en 2011, concentra algunos de los inmuebles más especiales y cotizados de la isla: fincas históricas, casas de piedra restauradas y propiedades únicas en un entorno de belleza singular. Sóller —accesible por el famoso tren de madera— tiene un mercado muy activo con fuerte presencia de compradores alemanes y franceses. Deià es uno de los pueblos más cotizados de toda Mallorca, con propiedades que alcanzan cifras de siete dígitos. La oferta es escasa y la demanda es constante, lo que mantiene los precios al alza.',
        },
        {
          type: 'table',
          headers: ['Zona', 'Precio medio €/m²', 'Perfil comprador predominante', 'Tipología más buscada'],
          rows: [
            ['Palma centro / Son Vida', '4.000 – 7.500', 'Nacional + internacional alto standing', 'Palacete reformado / villa'],
            ['Santa Catalina / Palma', '3.500 – 5.500', 'Nacional + residente extranjero', 'Piso reformado'],
            ['Puerto Andratx', '5.000 – 9.000+', 'Internacional europeo lujo', 'Villa con vistas al mar'],
            ['Santa Ponça / Calvià', '2.500 – 4.500', 'Nacional + centroeuropeo', 'Chalet / adosado'],
            ['Puerto Pollensa', '3.000 – 6.000', 'Británico / alemán / escandinavo', 'Villa / casa tradicional'],
            ['Sóller / Deià', '4.000 – 8.000+', 'Alemán / francés / internacional', 'Finca / casa de piedra'],
            ['Alcúdia / norte', '1.800 – 3.500', 'Nacional + centroeuropeo', 'Apartamento / chalet'],
            ['Interior (Inca, Sineu)', '1.500 – 2.800', 'Nacional / residente', 'Finca rústica / casa pueblo'],
          ],
        },
        {
          type: 'h2',
          text: 'Qué tener en cuenta antes de elegir zona en Mallorca',
        },
        {
          type: 'p',
          text: 'La zona no solo determina el precio: determina también la liquidez futura del activo, el tipo de demanda de alquiler si buscas rentabilidad, las restricciones urbanísticas aplicables y la vida cotidiana si la propiedad es para uso propio. Algunas consideraciones prácticas que conviene analizar antes de decidir:',
        },
        {
          type: 'ul',
          items: [
            'Uso previsto: uso propio todo el año, segunda residencia estacional o inversión para alquiler. Cada objetivo apunta a zonas distintas',
            'Liquidez: zonas con mayor demanda internacional (suroeste, norte) tienen mayor liquidez en caso de futura reventa',
            'Restricciones turísticas: no todos los inmuebles en Mallorca pueden obtener licencia de alquiler turístico. Verificar antes de comprar si ese es el objetivo',
            'Suelo rústico vs urbano: las fincas en suelo rústico tienen limitaciones de edificabilidad importantes que afectan al valor y a las posibilidades de reforma',
            'Infraestructuras: la distancia al aeropuerto, a Palma o a los servicios médicos puede ser relevante según el perfil del comprador',
          ],
        },
        {
          type: 'cta',
          title: '¿Buscas propiedad en Mallorca y no sabes por qué zona empezar?',
          body: 'En Benavides Real Estate llevamos más de 10 años asesorando compradores en toda la isla. Te ayudamos a encontrar la zona y la propiedad que mejor encajan con tu objetivo, con análisis fiscal y legal incluido.',
          button: 'Hablar con un asesor',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes sobre las zonas de Mallorca',
          items: [
            {
              q: '¿Cuál es la zona más cara de Mallorca?',
              a: 'Las zonas más caras de Mallorca son el suroeste (Puerto Andratx, Andratx, Camp de Mar), Son Vida en Palma y los pueblos de la Serra de Tramuntana como Deià y Valldemossa. En estas zonas, los precios de villas de lujo superan habitualmente los 5.000-9.000 €/m², y las propiedades más exclusivas pueden alcanzar los 15-20 millones de euros. El precio no solo refleja la calidad del inmueble sino también la escasez de la oferta: en zonas protegidas como la Tramuntana apenas existe suelo para nuevas construcciones.',
            },
            {
              q: '¿Qué zona de Mallorca es mejor para vivir todo el año?',
              a: 'Para vivir todo el año en Mallorca, las zonas más recomendadas son Palma (con toda la oferta de servicios, educación y sanidad de la capital), los municipios del Raiguer como Inca o Binissalem (bien comunicados, con servicios completos y precios más asequibles) y algunas zonas del norte como Pollensa pueblo o Alcúdia. Las zonas costeras más turísticas (Magaluf, S\'Arenal, Can Picafort) son menos adecuadas para residencia permanente por su marcada estacionalidad.',
            },
            {
              q: '¿En qué zona de Mallorca puedo comprar con menos de 300.000 euros?',
              a: 'Por debajo de 300.000 € es posible encontrar propiedades en municipios del interior como Inca, Sineu, Llucmajor, Sa Pobla o Muro. En Palma, el precio de entrada para un piso razonable en barrios intermedios está actualmente en torno a los 200.000-280.000 €. En las zonas costeras prime (Andratx, Puerto Pollensa, Sóller) es prácticamente imposible encontrar propiedades por debajo de 400.000-500.000 €. El mercado de Mallorca ha experimentado una apreciación significativa en los últimos años, especialmente desde 2020.',
            },
            {
              q: '¿Es mejor comprar en el norte o en el sur de Mallorca?',
              a: 'Depende del perfil y los objetivos. El sur y suroeste (Palma, Calvià, Andratx) tienen mejor conectividad con el aeropuerto (25-45 minutos), mayor densidad de servicios y una demanda internacional más consolidada. El norte (Pollensa, Alcúdia, Artà) ofrece paisajes más vírgenes, precios algo más asequibles en las zonas no premium, y una mayor proporción de demanda británica y alemana que busca tranquilidad. Ambas zonas tienen mercados muy activos; la elección depende principalmente del estilo de vida buscado.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Recursos relacionados',
          items: [
            { label: 'Inmobiliaria en Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Conócenos: cómo trabajamos y qué nos diferencia como agencia en Mallorca.' },
            { label: 'Comprar Casa en Mallorca', href: '/es/comprar-casa-mallorca', desc: 'Due diligence, análisis fiscal y representación independiente del comprador.' },
            { label: 'Invertir en Inmobiliario en Mallorca', href: '/es/invertir-inmobiliario-mallorca', desc: 'Rentabilidad, estructura jurídica y gestión de portfolio inmobiliario.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'Best areas to buy property in Mallorca in 2026: prices and market trends by zone',
      metaDescription: 'Zone-by-zone guide to the Mallorca property market in 2026: price per m², demand, buyer profiles and what to expect in Palma, Andratx, Pollensa, Sóller and more.',
      h1: 'Best areas to buy property in Mallorca in 2026: prices and trends by zone',
      category: 'Property Market',
      tags: ['Mallorca zones', 'price per m2 Mallorca', 'buy property Mallorca', 'Mallorca real estate market'],
      excerpt: 'Property prices in Mallorca vary enormously by area. From €2,500/m² in inland municipalities to over €8,000/m² in the luxury southwest. This guide analyses each zone and what to expect in 2026.',
      blocks: [
        {
          type: 'p',
          text: 'The Mallorca property market is not uniform. Referring to "the price of property in Mallorca" without specifying the area is as imprecise as quoting a single average price for the whole of Spain. In just 3,640 km², the island contains remarkably different markets: from luxury developments in the southwest with villas exceeding ten million euros, to inland rural municipalities where properties sell for under half a million. Understanding this price geography is the essential first step before beginning any property search. This article analyses the main zones of Mallorca, their market behaviour in 2026, the predominant buyer profile and the types of property you will find in each.',
        },
        {
          type: 'h2',
          text: 'Palma de Mallorca: a capital with markets within markets',
        },
        {
          type: 'p',
          text: 'Palma is home to approximately 40% of the island\'s population and offers the greatest diversity of property types and price points. It is not a homogeneous market: within the city several very different sub-markets coexist, each responding to its own logic.',
        },
        {
          type: 'h2',
          text: 'Southwest: Andratx, Puerto Andratx, Camp de Mar and Santa Ponça',
        },
        {
          type: 'p',
          text: 'The southwest of Mallorca has the highest concentration of international luxury demand on the island. Puerto Andratx in particular is a European benchmark for high-end real estate: villas overlooking the sea, a yacht marina and privacy at prices ranging from €2 million to €20 million. The average transaction price in this area frequently exceeds €5,000–8,000/m² for seafront properties.',
        },
        {
          type: 'h2',
          text: 'North: Puerto Pollensa, Pollensa, Alcúdia and Artà',
        },
        {
          type: 'p',
          text: 'Northern Mallorca offers a different landscape from the southwest: less densely developed, greener, with the Serra de Tramuntana as a backdrop and turquoise bays. Puerto Pollensa is one of the most sought-after areas among British and Scandinavian buyers, who value its tranquillity, quality of life and more local character compared to the busier southwest resorts.',
        },
        {
          type: 'h2',
          text: 'Serra de Tramuntana: Sóller, Deià and Valldemossa',
        },
        {
          type: 'p',
          text: 'The Tramuntana mountain range, declared a UNESCO World Heritage Site in 2011, is home to some of the island\'s most special and sought-after properties: historic fincas, restored stone houses and unique homes in an outstandingly beautiful setting. Sóller — accessible via the famous vintage wooden train — has a very active market with a strong German and French buyer presence. Deià is one of the most prestigious villages in all of Mallorca, with properties reaching seven-figure sums.',
        },
        {
          type: 'cta',
          title: 'Looking for property in Mallorca but unsure which area to start with?',
          body: 'At Benavides Real Estate we have been advising buyers across the island for over 10 years. We help you identify the area and property that best match your objectives, with tax and legal analysis included.',
          button: 'Speak to an advisor',
        },
        {
          type: 'links',
          title: 'Related resources',
          items: [
            { label: 'Real Estate Agency in Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Learn about us: how we work and what sets us apart as a Mallorca agency.' },
            { label: 'Buy Property in Mallorca', href: '/en/buy-property-mallorca', desc: 'Due diligence, tax analysis and independent buyer representation.' },
            { label: 'Invest in Mallorca Real Estate', href: '/en/invest-mallorca-real-estate', desc: 'Yield, legal structure and property portfolio management.' },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // POST — Cuánto cobra una inmobiliaria en Mallorca
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'cuanto-cobra-inmobiliaria-mallorca-comisiones-honorarios',
    date: '2026-03-21',
    readingTime: 7,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/12229121/pexels-photo-12229121.jpeg',
      alt: 'Catedral de Mallorca — comisiones y honorarios de inmobiliaria en Mallorca',
    },
    es: {
      seoTitle: '¿Cuánto cobra una inmobiliaria en Mallorca? Comisiones y honorarios en 2026',
      metaDescription: 'Todo sobre lo que cobra una inmobiliaria en Mallorca en 2026: comisión sobre el precio de venta, honorarios fijos, quién paga y cómo comparar antes de firmar un mandato.',
      h1: '¿Cuánto cobra una inmobiliaria en Mallorca? Comisiones, honorarios y qué preguntar antes de firmar',
      category: 'Guías para Vendedores',
      tags: ['comisión inmobiliaria Mallorca', 'honorarios inmobiliaria', 'inmobiliaria Mallorca', 'vender propiedad Mallorca', 'mandato de venta'],
      excerpt: 'Antes de firmar con una inmobiliaria en Mallorca, conviene entender exactamente cuánto te va a costar y qué recibes a cambio. Las comisiones varían entre el 3% y el 6%, pero el modelo de honorarios importa tanto como el porcentaje.',
      blocks: [
        {
          type: 'p',
          text: 'Una de las primeras preguntas que cualquier propietario se hace cuando decide vender en Mallorca es cuánto le va a costar la inmobiliaria. La respuesta honesta es: depende del modelo de negocio que tenga esa agencia, y entender ese modelo es fundamental antes de firmar cualquier mandato de venta. No todas las inmobiliarias cobran igual, ni ofrecen lo mismo, ni trabajan con los mismos incentivos. En este artículo explicamos los distintos modelos de honorarios que existen en el mercado mallorquín, qué incluyen realmente, quién paga y qué preguntas conviene hacer antes de comprometerse.',
        },
        {
          type: 'h2',
          text: 'El modelo de comisión: lo más habitual en Mallorca',
        },
        {
          type: 'p',
          text: 'El modelo más extendido entre las agencias inmobiliarias tradicionales en Mallorca es el de comisión sobre el precio de venta. La agencia no cobra nada hasta que se cierra la operación y cobra un porcentaje del precio escriturado. Este porcentaje varía según la agencia, el segmento de precio y el tipo de mandato (exclusivo o no exclusivo):',
        },
        {
          type: 'ul',
          items: [
            'Mandato no exclusivo (multiagencia): entre el 4% y el 6% sobre el precio de venta',
            'Mandato exclusivo: entre el 3% y el 5%, con mayor implicación de la agencia en la comercialización',
            'Segmento de lujo (por encima de 2 M€): puede negociarse a la baja, generalmente entre el 2% y el 3,5%',
            'La comisión la paga habitualmente el vendedor, aunque en algunas operaciones se reparte entre vendedor y comprador',
          ],
        },
        {
          type: 'p',
          text: 'Para una propiedad de 500.000 €, una comisión del 5% supone 25.000 € que el vendedor paga a la inmobiliaria en el momento del cierre. Sobre ese importe, el vendedor también paga IVA (21%), lo que eleva la factura real a 30.250 €. No incluir el IVA en el análisis previo es un error frecuente.',
        },
        {
          type: 'h2',
          text: 'El conflicto de interés del modelo de comisión',
        },
        {
          type: 'p',
          text: 'El modelo de comisión sobre precio genera un conflicto de interés estructural que conviene entender: la agencia tiene incentivo económico en que la venta se cierre rápido, porque cada mes sin venta es un coste de oportunidad para ella. Esto puede traducirse en presión hacia el vendedor para aceptar ofertas por debajo del precio óptimo. Por otro lado, una comisión que depende del precio final puede generar el efecto contrario: sobrevalorar el inmueble en la captación para ganar el mandato frente a otra agencia, lo que resulta en meses sin vender y posterior reducción de precio. Reconocer este incentivo no significa que las agencias de comisión actúen siempre con mala fe — significa que el propietario debe entenderlo para filtrar mejor los consejos que recibe.',
        },
        {
          type: 'h2',
          text: 'El modelo de honorarios fijos: una alternativa diferente',
        },
        {
          type: 'p',
          text: 'Algunas agencias especializadas — como Benavides Real Estate — trabajan con honorarios fijos acordados desde el inicio, independientemente del precio de venta. Este modelo elimina el conflicto de interés inherente a la comisión: la agencia no tiene ningún incentivo para empujar el precio a la baja ni para sobrevaluar en la captación. El importe se acuerda antes de iniciar la comercialización y cubre servicios definidos: valoración, revisión legal y fiscal, comercialización, negociación y cierre. La transparencia es total desde el primer momento.',
        },
        {
          type: 'h2',
          text: 'Mandato exclusivo vs. no exclusivo: ¿cuál conviene?',
        },
        {
          type: 'p',
          text: 'Muchos propietarios creen que dar el piso a varias agencias simultáneamente aumenta las posibilidades de venta. En la práctica, ocurre con frecuencia lo contrario: las agencias sin exclusiva tienen poco incentivo para invertir en la comercialización de ese inmueble (fotografía profesional, publicidad pagada, visitas acompañadas) porque saben que otra agencia puede cerrar la venta y llevarse la comisión. El resultado es que el inmueble aparece listado en los portales con distintos precios, distintas fotografías y distintas descripciones —lo que genera confusión en el comprador y puede depreciar la percepción de la propiedad—.',
        },
        {
          type: 'ul',
          items: [
            'Mandato no exclusivo: mayor exposición teórica, pero menor implicación real de cada agencia',
            'Mandato exclusivo: una única agencia se responsabiliza de toda la comercialización con incentivo claro',
            'El mandato exclusivo debe ser por un período limitado (3-6 meses) con posibilidad de rescisión si los resultados no acompañan',
            'Conviene incluir en el mandato qué acciones concretas se van a realizar: portales, redes, fotografía, visitas, etc.',
          ],
        },
        {
          type: 'h2',
          text: 'Qué preguntar antes de firmar con una inmobiliaria en Mallorca',
        },
        {
          type: 'p',
          text: 'Antes de firmar ningún mandato, estas son las preguntas que deberías hacer y cuyas respuestas deberían quedar por escrito:',
        },
        {
          type: 'ul',
          items: [
            '¿El honorario está sujeto a IVA? (Sí, siempre: 21% adicional)',
            '¿Cuándo se devenga el honorario? ¿Al firmar arras, al firmar escritura, o en ambos momentos?',
            '¿Qué pasa si la venta no se cierra? ¿Tengo algún coste igualmente?',
            '¿El mandato es exclusivo? ¿Por cuánto tiempo? ¿Hay penalización por rescisión anticipada?',
            '¿Qué acciones concretas de marketing están incluidas?',
            '¿Quién paga los gastos de fotografía, vídeo, publicidad en portales de pago o traducción de documentos?',
            '¿La agencia revisa la documentación del inmueble antes de comercializar?',
            '¿Tienen asesoría fiscal para calcular mi beneficio neto antes de fijar el precio?',
          ],
        },
        {
          type: 'cta',
          title: '¿Quieres saber cuánto te costaría vender con Benavides Real Estate?',
          body: 'Trabajamos con honorarios fijos y transparentes, sin comisiones ocultas ni IVA sorpresa. Primera consulta gratuita: te explicamos exactamente qué incluye nuestro servicio y cuánto cuesta.',
          button: 'Solicitar información',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes sobre honorarios inmobiliarios en Mallorca',
          items: [
            {
              q: '¿Quién paga la comisión de la inmobiliaria en Mallorca, el comprador o el vendedor?',
              a: 'En la práctica habitual del mercado mallorquín, la comisión la paga el vendedor. Algunas agencias, especialmente en el segmento de lujo, cobran también al comprador una tarifa por su servicio de búsqueda y representación. Cuando ambas partes de una operación están representadas por la misma agencia (lo que en el sector se llama "doble agencia"), conviene revisar con especial cuidado el contrato, ya que puede existir un conflicto de interés al representar simultáneamente intereses contrapuestos.',
            },
            {
              q: '¿Qué debe incluir el servicio de una inmobiliaria en Mallorca?',
              a: 'Un servicio inmobiliario completo en Mallorca debe incluir como mínimo: valoración de mercado del inmueble, elaboración de material comercial (fotografía profesional, descripción, plano), difusión en portales inmobiliarios y red de contactos, gestión de visitas y filtrado de compradores, acompañamiento en la negociación, revisión o coordinación de los contratos (arras y escritura) y seguimiento hasta la firma notarial. Un servicio de mayor valor añadido incluye además due diligence legal, análisis fiscal previo y liquidación de impuestos post-venta.',
            },
            {
              q: '¿Qué es un mandato de exclusiva y cuándo conviene firmarlo?',
              a: 'Un mandato de exclusiva es un contrato por el que el propietario se compromete a comercializar su propiedad únicamente a través de una agencia durante un período determinado (habitualmente 3-6 meses). A cambio, la agencia se compromete a invertir en la comercialización activa del inmueble. Conviene firmarlo cuando la agencia tiene una propuesta de valor clara y diferenciada, cuando el plazo es razonable y cuando el contrato incluye cláusula de rescisión anticipada si no se alcanzan los resultados comprometidos. No conviene cuando las condiciones no están bien definidas o el plazo es excesivamente largo.',
            },
            {
              q: '¿Puedo negociar la comisión con una inmobiliaria en Mallorca?',
              a: 'Sí, la comisión es negociable, especialmente en propiedades de precio elevado. Para propiedades por encima de 1-1,5 millones de euros, es habitual negociar la comisión a la baja, ya que el importe absoluto es significativo incluso con un porcentaje reducido. Para propiedades de menor valor, la negociación es más difícil porque la comisión debe cubrir los costes fijos de la agencia. En todo caso, el criterio principal no debe ser solo el porcentaje de comisión sino el valor real que aporta la agencia: una agencia que vende rápido al precio correcto con comisión del 5% puede ser más beneficiosa que una que vende mal o tarde con comisión del 3%.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Lecturas relacionadas',
          items: [
            { label: 'Inmobiliaria en Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Cómo trabajamos y en qué nos diferenciamos de las agencias tradicionales.' },
            { label: 'Vender Casa en Mallorca', href: '/es/vender-casa-mallorca', desc: 'Valoración independiente, revisión jurídica y planificación fiscal previa.' },
            { label: 'Asesoría Fiscal Inmobiliaria', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'Calcula tu beneficio neto real antes de decidir el precio de venta.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'How much does a real estate agent charge in Mallorca? Fees and commissions in 2026',
      metaDescription: 'Everything about what a Mallorca estate agent charges in 2026: percentage commission, fixed fees, who pays and what to ask before signing a mandate.',
      h1: 'How much does a real estate agent charge in Mallorca? Commissions, fees and what to ask before signing',
      category: 'Seller Guides',
      tags: ['real estate commission Mallorca', 'estate agent fees Mallorca', 'selling property Mallorca', 'Mallorca real estate agent'],
      excerpt: 'Before signing with a real estate agent in Mallorca, it is worth understanding exactly what it will cost and what you get in return. Commissions range from 3% to 6%, but the fee model matters as much as the percentage.',
      blocks: [
        {
          type: 'p',
          text: 'One of the first questions any property owner asks when deciding to sell in Mallorca is how much the estate agent will charge. The honest answer is: it depends on the business model that agency operates, and understanding that model is essential before signing any sales mandate. Not all estate agents charge the same, offer the same services or work with the same incentives. This article explains the different fee models in the Mallorcan market, what they actually include, who pays and what questions to ask before committing.',
        },
        {
          type: 'h2',
          text: 'The commission model: the most common in Mallorca',
        },
        {
          type: 'p',
          text: 'The most widespread model among traditional estate agents in Mallorca is a commission on the sale price. The agent charges nothing until the transaction closes, at which point they take a percentage of the price recorded in the notarial deed. This percentage varies depending on the agency, the price segment and the type of mandate (exclusive or non-exclusive): between 3% and 6% of the sale price, plus 21% VAT on the commission.',
        },
        {
          type: 'h2',
          text: 'The conflict of interest in the commission model',
        },
        {
          type: 'p',
          text: 'Commission-based models generate a structural conflict of interest worth understanding: the agency has a financial incentive to close the sale quickly, because every month without a sale is an opportunity cost. This can translate into pressure on the vendor to accept offers below the optimal price. Understanding this incentive does not mean commission-based agents always act in bad faith — it means the owner should factor it in when weighing the advice they receive.',
        },
        {
          type: 'h2',
          text: 'The fixed-fee model: a different approach',
        },
        {
          type: 'p',
          text: 'Some specialist agencies — such as Benavides Real Estate — work with fixed fees agreed from the outset, regardless of the final sale price. This model eliminates the inherent conflict of interest: the agency has no incentive to push the price down or to overprice in order to win the mandate. The amount is agreed before marketing begins and covers defined services: valuation, legal and tax review, marketing, negotiation and completion.',
        },
        {
          type: 'cta',
          title: 'Want to know what it would cost to sell with Benavides Real Estate?',
          body: 'We work with fixed, transparent fees — no hidden commissions. Free first consultation: we explain exactly what our service includes and what it costs.',
          button: 'Request information',
        },
        {
          type: 'links',
          title: 'Related reading',
          items: [
            { label: 'Real Estate Agency in Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'How we work and what sets us apart from traditional agencies.' },
            { label: 'Sell Property in Mallorca', href: '/en/sell-property-mallorca', desc: 'Independent valuation, legal review and pre-sale tax planning.' },
            { label: 'Property Tax Advisory', href: '/es/servicios/asesoria-fiscal-inmobiliaria-mallorca', desc: 'Calculate your real net proceeds before setting the asking price.' },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // POST — Cuánto vale mi casa en Mallorca
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'cuanto-vale-mi-casa-mallorca-valoracion-inmobiliaria',
    date: '2026-03-21',
    readingTime: 8,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/19765743/pexels-photo-19765743.jpeg',
      alt: 'Catedral de Palma de Mallorca — valoración inmobiliaria precio de mercado viviendas Mallorca',
    },
    es: {
      seoTitle: '¿Cuánto vale mi casa en Mallorca? Cómo se calcula el valor de mercado en 2026',
      metaDescription: 'Aprende cómo se valora una propiedad en Mallorca: qué factores determinan el precio de mercado, por qué los portales online no son fiables y cómo obtener una valoración real.',
      h1: '¿Cuánto vale mi casa en Mallorca? Cómo se calcula el valor de mercado y por qué importa hacerlo bien',
      category: 'Guías para Vendedores',
      tags: ['valoración inmobiliaria Mallorca', 'cuánto vale mi casa', 'precio mercado Mallorca', 'inmobiliaria Mallorca', 'tasación vivienda Mallorca'],
      excerpt: 'Saber cuánto vale tu propiedad en Mallorca es el primer paso antes de cualquier decisión: vender, refinanciar, donar o planificar una herencia. Una valoración bien fundamentada puede marcar una diferencia de decenas de miles de euros.',
      blocks: [
        {
          type: 'p',
          text: 'La pregunta "¿cuánto vale mi casa en Mallorca?" parece sencilla, pero tiene una respuesta más compleja de lo que la mayoría de propietarios esperan. El valor de una propiedad no es un número único y fijo: depende del objetivo de la valoración, del momento del mercado, de la comparativa con operaciones reales recientes y de factores que las herramientas automáticas online no saben detectar. Fijar un precio incorrecto desde el principio —ya sea por exceso o por defecto— es uno de los errores más costosos que puede cometer un propietario antes de vender. En este artículo explicamos cómo se calcula realmente el valor de mercado de una propiedad en Mallorca y qué factores determinan que dos pisos en el mismo edificio puedan valer sumas muy distintas.',
        },
        {
          type: 'h2',
          text: 'Por qué las valoraciones online no son fiables en Mallorca',
        },
        {
          type: 'p',
          text: 'Los portales inmobiliarios y las herramientas de valoración automática (AVMs — Automated Valuation Models) ofrecen estimaciones basadas en los precios de oferta publicados en sus plataformas, no en los precios reales de cierre de las operaciones. Esta distinción es crítica: en Mallorca, la diferencia entre el precio de salida al mercado y el precio final escriturado puede oscilar entre un 5% y un 20% dependiendo del segmento y la zona. Un portal te dice a cuánto está listado algo similar. No te dice a cuánto se ha vendido realmente.',
        },
        {
          type: 'ul',
          items: [
            'Los portales mezclan propiedades de distintas calidades, estados y orientaciones dentro de la misma zona',
            'No ponderan el tiempo que llevan en el mercado (una propiedad listada a precio elevado durante 18 meses distorsiona la media)',
            'No conocen las condiciones específicas de la venta: urgencia del vendedor, financiación del comprador, fecha de entrega',
            'En el segmento de lujo, muchas operaciones se cierran off-market y nunca aparecen en los portales',
          ],
        },
        {
          type: 'h2',
          text: 'Factores que determinan el valor de una propiedad en Mallorca',
        },
        {
          type: 'h3',
          text: '1. Ubicación y microubicación',
        },
        {
          type: 'p',
          text: 'La zona importa, pero la microubicación dentro de esa zona importa aún más. En Puerto Pollensa, una villa con vistas directas al mar puede valer el doble que otra a 300 metros tierra adentro con las mismas características. En Palma, un piso en la segunda planta con ascensor y orientación sur puede valer un 20-30% más que otro idéntico en el mismo portal pero en primera planta sin ascensor y con orientación norte. La proximidad a servicios, la tranquilidad de la calle, el nivel del vecindario y la exposición al sol son variables que los algoritmos capturan con mucha dificultad.',
        },
        {
          type: 'h3',
          text: '2. Superficie y distribución',
        },
        {
          type: 'p',
          text: 'La superficie construida es el punto de partida, pero no el único factor. La superficie útil (sin muros), la distribución funcional, el número y tamaño de las habitaciones y la relación entre zonas de día y de noche son variables que el comprador valora al ver el inmueble. Una distribución óptima puede justificar un precio por m² significativamente superior al de una propiedad de mayor superficie pero con distribución poco práctica. Además, en Mallorca los espacios exteriores —terrazas, jardines, piscinas— tienen un peso muy relevante en el precio final, especialmente en propiedades de uso vacacional.',
        },
        {
          type: 'h3',
          text: '3. Estado de conservación y calidad de la reforma',
        },
        {
          type: 'p',
          text: 'El estado del inmueble es uno de los factores con mayor impacto en el precio. Una propiedad llave en mano con cocina y baños reformados, instalaciones renovadas y certificado energético elevado puede valer entre un 25% y un 40% más que la misma propiedad sin reformar en el mismo edificio. En Mallorca, especialmente en el segmento de compradores internacionales, la preferencia por propiedades llave en mano es muy marcada: el comprador no quiere enfrentarse a una obra, especialmente si no reside en la isla.',
        },
        {
          type: 'h3',
          text: '4. Documentación urbanística y registral',
        },
        {
          type: 'p',
          text: 'Una propiedad con cargas registrales, problemas urbanísticos (obras sin legalizar, exceso de edificabilidad, situación en suelo no consolidado) o documentación incompleta vale menos —o directamente es invendible— aunque esté físicamente en perfectas condiciones. En Mallorca, la situación urbanística es especialmente compleja en propiedades rústicas, en zonas ANEI (Área Natural de Especial Interés) y en inmuebles con ampliaciones históricas no legalizadas. La due diligence documental es parte inseparable de cualquier valoración rigurosa.',
        },
        {
          type: 'h3',
          text: '5. Comparables reales recientes',
        },
        {
          type: 'p',
          text: 'El método más fiable para valorar una propiedad en Mallorca es el método de comparación: analizar las transacciones efectivamente cerradas en la misma zona y tipología en los últimos 6-12 meses, ajustando por las diferencias objetivas entre los comparables y el inmueble a valorar (superficie, estado, planta, orientación, extras). El acceso a datos de transacciones reales —no de precios de oferta— es lo que distingue una valoración profesional de una estimación automática. Los datos del Notariado, los registros del Colegio de Registradores y las bases de datos de operaciones cerradas son las fuentes primarias de referencia.',
        },
        {
          type: 'table',
          headers: ['Factor', 'Impacto sobre el precio', 'Comentario'],
          rows: [
            ['Zona / microubicación', 'Muy alto (±40%)', 'El factor con mayor peso individual'],
            ['Vistas al mar (costa)', 'Alto (±20-35%)', 'Especialmente en suroeste y norte'],
            ['Estado reforma / calidad', 'Alto (±20-40%)', 'Llave en mano vs. a reformar'],
            ['Superficie exterior (jardín, piscina)', 'Alto en segunda residencia (±15-30%)', 'Menor peso en uso urbano habitual'],
            ['Documentación en regla', 'Crítico (puede bloquear la venta)', 'Cargas o urbanística irregular'],
            ['Certificado energético', 'Moderado (±5-10%)', 'Creciente importancia para compradores europeos'],
            ['Orientación y luz', 'Moderado (±10-20%)', 'Sur vs norte, planta, sombras'],
          ],
        },
        {
          type: 'h2',
          text: 'Cuándo necesitas una valoración y cuándo una tasación',
        },
        {
          type: 'p',
          text: 'Conviene distinguir entre dos conceptos que se usan a veces de forma indistinta pero que tienen propósitos diferentes. La valoración de mercado es un análisis profesional del precio al que un inmueble puede venderse en las condiciones actuales del mercado. La elabora un agente inmobiliario o un asesor especializado y sirve para fijar el precio de venta, planificar una donación o herencia o tomar decisiones de inversión. La tasación hipotecaria es un informe homologado elaborado por una sociedad de tasación regulada (ECO) que sirve específicamente para que el banco calcule el importe máximo de financiación que concederá. Tiene validez de seis meses y su coste es de 300-600 € dependiendo del inmueble. Si tu objetivo es vender, necesitas una valoración de mercado, no necesariamente una tasación hipotecaria.',
        },
        {
          type: 'cta',
          title: '¿Quieres saber cuánto vale tu propiedad en Mallorca?',
          body: 'En Benavides Real Estate elaboramos valoraciones de mercado basadas en transacciones reales recientes, sin el sesgo de quien quiere captar el mandato de venta a cualquier precio. Sin coste y sin compromiso.',
          button: 'Solicitar valoración gratuita',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes sobre valoración de propiedades en Mallorca',
          items: [
            {
              q: '¿Cuánto tarda en hacerse una valoración de una propiedad en Mallorca?',
              a: 'Una valoración de mercado elaborada por una agencia inmobiliaria o asesor especializado suele estar lista en 48-72 horas desde la visita al inmueble o la revisión de la documentación. Una tasación hipotecaria oficial (elaborada por una sociedad de tasación homologada) suele tardar entre 5 y 10 días hábiles desde la solicitud. Para propiedades complejas (fincas rústicas, inmuebles con problemas urbanísticos, propiedades singulares sin comparables directos) el plazo puede extenderse.',
            },
            {
              q: '¿Cuánto cuesta tasar una propiedad en Mallorca?',
              a: 'La valoración de mercado que elabora una inmobiliaria o asesor especializado suele ser gratuita como parte del proceso comercial (si están interesados en gestionar la venta). Una tasación hipotecaria oficial, necesaria para solicitar financiación bancaria, tiene un coste de entre 300 y 600 € dependiendo de la superficie y tipología del inmueble. En Benavides Real Estate elaboramos valoraciones de mercado sin coste y sin compromiso para propietarios que están considerando vender.',
            },
            {
              q: '¿Puede el valor catastral usarse como referencia del precio de mercado?',
              a: 'No, el valor catastral y el valor de mercado son conceptos completamente distintos. El valor catastral es un valor administrativo fijado por el Catastro que sirve de base imponible para tributos como el IBI. En la mayoría de los municipios de Mallorca, el valor catastral está muy por debajo del valor de mercado real (habitualmente entre el 20% y el 50% del precio al que se vendería la propiedad). La base imponible del ITP, sin embargo, no es el valor catastral sino el "valor de referencia" que fija el Catastro y que puede ser más cercano al mercado.',
            },
            {
              q: '¿Qué diferencia hay entre tasación y valoración inmobiliaria?',
              a: 'La valoración de mercado es un análisis profesional del precio al que un inmueble puede venderse en las condiciones actuales del mercado, elaborado por un agente o asesor inmobiliario. No tiene valor legal vinculante pero es la referencia más útil para fijar el precio de venta. La tasación hipotecaria es un informe oficial elaborado por una sociedad de tasación regulada y homologada por el Banco de España, que sirve específicamente para que la entidad bancaria determine el importe máximo de hipoteca que concederá. Tiene validez de 6 meses y su metodología está regulada por la Orden ECO/805/2003.',
            },
            {
              q: '¿Cuánto ha subido el precio de la vivienda en Mallorca en los últimos años?',
              a: 'El mercado inmobiliario de Mallorca ha experimentado una apreciación sostenida durante la última década, con aceleración especialmente notable entre 2020 y 2024. Según datos del Colegio de Registradores, el precio medio en Baleares ha aumentado entre un 40% y un 60% en los últimos cinco años en las zonas más demandadas. En el segmento prime (Andratx, Deià, Son Vida), las revalorizaciones han sido aún más pronunciadas. Esta tendencia está impulsada por la limitación estructural de la oferta (suelo escaso y protegido), la demanda internacional consolidada y Mallorca como activo refugio en periodos de incertidumbre.',
            },
          ],
        },
        {
          type: 'links',
          title: 'Recursos relacionados',
          items: [
            { label: 'Inmobiliaria en Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Conócenos: más de 10 años asesorando compraventas en toda la isla.' },
            { label: 'Vender Casa en Mallorca', href: '/es/vender-casa-mallorca', desc: 'Gestión completa de la venta: valoración, juridico, fiscal y cierre.' },
            { label: 'Mejores zonas para comprar en Mallorca', href: '/es/blog/mejores-zonas-comprar-casa-mallorca-2026', desc: 'Análisis por zonas: precios, demanda y perfil de comprador en 2026.' },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'How much is my property in Mallorca worth? How market value is calculated in 2026',
      metaDescription: 'Learn how a property in Mallorca is valued: the factors that determine market price, why online portals are unreliable and how to get a genuine valuation.',
      h1: 'How much is my property in Mallorca worth? How market value is calculated and why getting it right matters',
      category: 'Seller Guides',
      tags: ['property valuation Mallorca', 'how much is my house worth Mallorca', 'Mallorca market price', 'real estate valuation Mallorca'],
      excerpt: 'Knowing what your property in Mallorca is worth is the essential first step before any decision: selling, refinancing, gifting or estate planning. A well-founded valuation can make a difference of tens of thousands of euros.',
      blocks: [
        {
          type: 'p',
          text: 'The question "how much is my property in Mallorca worth?" seems straightforward, but the answer is more complex than most owners expect. The value of a property is not a single fixed number: it depends on the purpose of the valuation, the state of the market, comparable recent transactions and factors that automated online tools cannot detect. Setting the wrong price from the outset — whether too high or too low — is one of the most costly mistakes a vendor can make. This article explains how market value is actually calculated for a property in Mallorca, and what factors mean two flats in the same building can be worth very different amounts.',
        },
        {
          type: 'h2',
          text: 'Why online valuations are unreliable in Mallorca',
        },
        {
          type: 'p',
          text: 'Property portals and automated valuation tools (AVMs) produce estimates based on listed asking prices on their platforms — not on actual transaction prices. This distinction is critical: in Mallorca, the gap between the initial asking price and the final price recorded in the notarial deed can range from 5% to 20% depending on the segment and area. A portal tells you what something similar is listed for. It does not tell you what it actually sold for.',
        },
        {
          type: 'h2',
          text: 'Key factors determining property value in Mallorca',
        },
        {
          type: 'ul',
          items: [
            'Location and micro-location: often the single most important variable — sea views, street tranquillity, sun exposure',
            'Floor area and layout: useful area (excluding walls), functional distribution, indoor-outdoor relationship',
            'Condition and quality of refurbishment: turnkey vs. in need of renovation — gap of 25–40% in price',
            'Legal and planning documentation: unresolved urbanistic issues can block a sale entirely',
            'Recent comparable transactions: closed sale prices, not listing prices, are the reference',
          ],
        },
        {
          type: 'cta',
          title: 'Want to know what your property in Mallorca is worth?',
          body: 'At Benavides Real Estate we produce market valuations based on actual recent transactions, free from the bias of someone seeking the sales mandate at any price. No cost, no commitment.',
          button: 'Request a free valuation',
        },
        {
          type: 'links',
          title: 'Related resources',
          items: [
            { label: 'Real Estate Agency in Mallorca', href: '/es/inmobiliaria-mallorca', desc: 'Over 10 years advising property transactions across the whole island.' },
            { label: 'Sell Property in Mallorca', href: '/en/sell-property-mallorca', desc: 'Full sale management: valuation, legal, tax and completion.' },
            { label: 'Best areas to buy property in Mallorca', href: '/es/blog/mejores-zonas-comprar-casa-mallorca-2026', desc: 'Zone-by-zone analysis: prices, demand and buyer profiles in 2026.' },
          ],
        },
      ],
    },
  },
  {
    slug: 'ayuda-10000-euros-jovenes-comprar-vivienda-mallorca-2026',
    date: '2026-03-21',
    readingTime: 7,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/26832624/pexels-photo-26832624.jpeg',
      alt: 'Cala de Mallorca — ayuda de 10.000 euros para jóvenes que compran vivienda en Baleares 2026',
    },
    es: {
      seoTitle: 'Ayuda de 10.000 € para jóvenes que compran vivienda en Mallorca: requisitos 2026',
      metaDescription: 'El Govern Balear reserva 6 millones en ayudas directas de 10.000 € para jóvenes menores de 40 años que compren su primera vivienda en Mallorca. Requisitos, límites de precio e ITP reducido.',
      h1: 'Ayuda de 10.000 euros para jóvenes que compran vivienda en Mallorca: requisitos, fiscalidad e Hipoteca Joven (2026)',
      category: 'Actualidad',
      tags: ['ayuda jóvenes vivienda mallorca', 'subvención 10000 euros baleares', 'ITP jóvenes mallorca', 'hipoteca joven mallorca', 'comprar vivienda mallorca 2026'],
      excerpt: 'El Govern Balear ha activado una ayuda directa de 10.000 euros a fondo perdido para jóvenes menores de 40 años que compren su primera vivienda en Mallorca. Te explicamos los requisitos exactos, los límites de precio y las ventajas fiscales complementarias.',
      blocks: [
        {
          type: 'p',
          text: 'El Govern de les Illes Balears ha activado en marzo de 2026 una ayuda directa de 10.000 euros a fondo perdido destinada a jóvenes menores de 40 años que compren su primera vivienda habitual en el archipiélago. La medida, respaldada por un presupuesto de 6 millones de euros, se enmarca en un paquete más amplio de políticas de acceso a la vivienda que incluye también beneficios fiscales en el Impuesto de Transmisiones Patrimoniales y un programa de aval público para hipotecas. En un mercado donde los precios subieron un 13,4% de media en 2025, estas ayudas pueden marcar la diferencia entre poder o no poder comprar.',
        },
        {
          type: 'h2',
          text: '¿En qué consiste la ayuda directa del Govern?',
        },
        {
          type: 'p',
          text: 'Se trata de una subvención directa —no un préstamo— de 10.000 euros que el Govern Balear entrega a fondo perdido al comprador joven elegible. El dinero puede destinarse a cubrir parte de la entrada, los gastos de escritura, el ITP u otros costes asociados a la compra. El presupuesto total reservado es de 6 millones de euros, lo que implica que la medida puede beneficiar a aproximadamente 600 compradores mientras haya fondos disponibles.',
        },
        {
          type: 'ul',
          items: [
            'Importe: 10.000 euros a fondo perdido',
            'Presupuesto total: 6 millones de euros (≈ 600 beneficiarios)',
            'Destino: primera vivienda habitual en Baleares',
            'No es un préstamo: no se devuelve',
            'Compatible con otras ayudas estatales y autonómicas vigentes',
          ],
        },
        {
          type: 'h2',
          text: 'Requisitos para acceder a la ayuda',
        },
        {
          type: 'p',
          text: 'Los requisitos publicados por el Govern fijan condiciones tanto para el comprador como para la vivienda. Es importante verificar el cumplimiento de todos antes de iniciar el proceso de compra.',
        },
        {
          type: 'ul',
          items: [
            'Edad: menor de 40 años en el momento de la solicitud',
            'Residencia: empadronado en Baleares durante al menos los últimos 5 años',
            'Primera vivienda: no puede ser propietario de otra vivienda en ningún lugar de España',
            'Uso: la vivienda adquirida debe ser residencia habitual y permanente',
            'Precio máximo en Mallorca: 307.000 euros (Eivissa: 370.000 €; Menorca: 285.000 €)',
          ],
        },
        {
          type: 'h2',
          text: 'Límites de precio de la vivienda según isla',
        },
        {
          type: 'p',
          text: 'El precio máximo de la vivienda elegible varía por isla, reflejando las diferencias de mercado del archipiélago. Para Mallorca, el límite fijado es de 307.000 euros, lo que excluye gran parte del mercado de obra nueva y de las zonas más prime de la isla, pero cubre una parte significativa del mercado de segunda mano en núcleos residenciales del interior y municipios periféricos.',
        },
        {
          type: 'ul',
          items: [
            'Mallorca: máximo 307.000 euros',
            'Eivissa: máximo 370.000 euros',
            'Menorca: máximo 285.000 euros',
          ],
        },
        {
          type: 'h2',
          text: 'Ventajas fiscales adicionales: ITP reducido o exento',
        },
        {
          type: 'p',
          text: 'Además de la ayuda directa, el paquete del Govern incluye una reducción significativa del Impuesto de Transmisiones Patrimoniales (ITP), que habitualmente se sitúa en el 8% del precio de compra en Baleares. Para los compradores jóvenes, las condiciones son notablemente más favorables:',
        },
        {
          type: 'ul',
          items: [
            'Menores de 30 años: exención total del ITP (ahorro de hasta 24.560 € en una vivienda de 307.000 €)',
            'Entre 30 y 36 años: ITP reducido al 4%, la mitad del tipo general',
            'Condición: debe ser primera vivienda habitual y cumplir los requisitos generales',
          ],
        },
        {
          type: 'p',
          text: 'Este beneficio fiscal es especialmente relevante porque el ITP es uno de los mayores costes al comprar una vivienda de segunda mano. A 307.000 euros, el ITP general supondría 24.560 euros; con la exención para menores de 30 años, ese gasto desaparece completamente. Combinado con los 10.000 euros de ayuda directa, un comprador menor de 30 años podría ahorrarse más de 34.000 euros en los costes de adquisición.',
        },
        {
          type: 'h2',
          text: 'Hipoteca Joven: financiación hasta el 90% con aval público',
        },
        {
          type: 'p',
          text: 'El tercer pilar del paquete es el programa Hipoteca Joven, a través del cual el Institut Balear de l\'Habitatge (IBAVI) actúa como avalista público para que los compradores jóvenes puedan acceder a financiación de hasta el 90% del valor del inmueble. La barrera habitual de los bancos —que financian como máximo el 80%— obliga a disponer del 20% del precio más gastos de antemano. Con el aval público, ese porcentaje baja al 10%, lo que reduce sustancialmente el ahorro previo necesario.',
        },
        {
          type: 'ul',
          items: [
            'Cobertura del aval: hasta el 90% del valor de tasación',
            'Gestionado a través del Institut Balear de l\'Habitatge (IBAVI)',
            'Compatible con las ayudas directas de 10.000 euros',
            'Permite acceder a la compra con menos ahorro previo acumulado',
          ],
        },
        {
          type: 'h2',
          text: 'Contexto: Baleares, la segunda comunidad con vivienda más cara de España',
        },
        {
          type: 'p',
          text: 'Estas medidas llegan en un momento en que el acceso a la vivienda en Baleares se ha convertido en uno de los principales problemas sociales del archipiélago. Según los datos publicados junto al anuncio, Baleares registró en 2025 un incremento medio de precios del 13,4% respecto a 2024, convirtiéndose en la segunda comunidad autónoma con las viviendas más caras de España, solo por detrás de Madrid. En Mallorca, la combinación de alta demanda internacional, oferta limitada de suelo y restricciones urbanísticas ha creado un mercado estructuralmente tensionado donde los perfiles locales con ingresos medios tienen dificultades crecientes para comprar en la isla donde trabajan y viven.',
        },
        {
          type: 'faq',
          eyebrow: 'Preguntas frecuentes',
          items: [
            {
              q: '¿Cuándo se puede solicitar la ayuda de 10.000 euros para jóvenes en Mallorca?',
              a: 'El Govern ha activado el programa en marzo de 2026 con 6 millones de euros reservados. Las solicitudes se tramitan a través del Institut Balear de l\'Habitatge (IBAVI). Es recomendable solicitarla cuanto antes dado que el presupuesto es limitado y cubre aproximadamente 600 beneficiarios.',
            },
            {
              q: '¿Se puede combinar la ayuda de 10.000 euros con la exención del ITP?',
              a: 'Sí. Ambas medidas son compatibles entre sí. Un comprador menor de 30 años puede acceder simultáneamente a los 10.000 euros de ayuda directa, a la exención total del ITP y al programa Hipoteca Joven de aval público. La combinación puede suponer un ahorro total superior a 34.000 euros en los costes de adquisición.',
            },
            {
              q: '¿El límite de precio de 307.000 euros en Mallorca incluye gastos e impuestos?',
              a: 'El límite de 307.000 euros se refiere al precio de compra escriturado de la vivienda, sin incluir gastos notariales, registro ni impuestos. Es importante verificar que el precio acordado con el vendedor no supere ese umbral antes de formalizar la operación.',
            },
            {
              q: '¿Qué pasa si tengo entre 36 y 40 años? ¿Tengo derecho a la ayuda directa pero no a la rebaja del ITP?',
              a: 'Sí. La ayuda directa de 10.000 euros aplica a todos los menores de 40 años que cumplan los requisitos. La reducción del ITP al 4% aplica entre 30 y 36 años, y la exención total del ITP aplica a menores de 30 años. Entre 36 y 40 años, se mantiene el ITP general del 8% pero se puede acceder a los 10.000 euros de subvención y al programa Hipoteca Joven.',
            },
            {
              q: '¿Los 5 años de empadronamiento en Baleares tienen que ser continuados?',
              a: 'El requisito publicado indica residencia mínima de 5 años en Baleares, sin especificar si deben ser continuados o acumulados. Para obtener confirmación oficial sobre este punto, es recomendable consultar directamente con el IBAVI o con un asesor especializado antes de iniciar la solicitud.',
            },
          ],
        },
        {
          type: 'cta',
          title: '¿Buscas vivienda en Mallorca dentro de este rango de precios?',
          body: 'En Benavides Real Estate trabajamos el mercado residencial de Mallorca en todos los segmentos. Si estás buscando tu primera vivienda y quieres aprovechar estas ayudas, podemos ayudarte a encontrar propiedades elegibles y acompañarte en todo el proceso de compra.',
          button: 'Ver propiedades disponibles',
        },
        {
          type: 'links',
          title: 'Recursos relacionados',
          items: [
            {
              label: 'Comprar casa en Mallorca siendo no residente: guía legal',
              href: '/es/blog/comprar-casa-mallorca-no-residente-guia-legal',
              desc: 'Proceso completo de compra para extranjeros: NIE, fiscalidad y pasos legales.',
            },
            {
              label: 'Impuestos al comprar una vivienda en Mallorca',
              href: '/es/blog/impuestos-comprar-vivienda-mallorca-no-residentes',
              desc: 'ITP, IVA, AJD y costes totales desglosados.',
            },
            {
              label: 'Servicios de compra en Mallorca',
              href: '/es/comprar-casa-mallorca',
              desc: 'Cómo te ayudamos a encontrar y comprar la propiedad adecuada.',
            },
          ],
        },
      ],
    },
    en: {
      seoTitle: '10,000-euro grant for young buyers in Mallorca: requirements 2026',
      metaDescription: 'The Balearic Government has reserved 6 million euros in direct grants of 10,000 euros for people under 40 buying their first home in Mallorca. Requirements, price limits and reduced transfer tax explained.',
      h1: '10,000-euro grant for young people buying property in Mallorca: requirements, tax benefits and young mortgage scheme (2026)',
      category: 'Market News',
      tags: ['grant young buyers mallorca', 'first home grant balearics 2026', 'transfer tax reduction mallorca', 'young mortgage mallorca', 'buy property mallorca 2026'],
      excerpt: 'The Balearic Government has activated a direct grant of 10,000 euros for people under 40 buying their first home in Mallorca. Here are the exact requirements, price limits and additional tax benefits available.',
      blocks: [
        {
          type: 'p',
          text: 'The Government of the Balearic Islands has activated in March 2026 a direct non-repayable grant of 10,000 euros for people under 40 buying their first habitual residence in the archipelago. The measure, backed by a budget of 6 million euros, is part of a broader housing access package that also includes tax benefits on Property Transfer Tax (ITP) and a public mortgage guarantee scheme. In a market where prices rose an average of 13.4% in 2025, these grants could make the difference between being able or unable to buy.',
        },
        {
          type: 'h2',
          text: 'What does the direct grant consist of?',
        },
        {
          type: 'p',
          text: 'This is a direct grant — not a loan — of 10,000 euros that the Balearic Government pays outright to eligible young buyers. The money can be used to cover part of the deposit, notary fees, transfer tax or other acquisition costs. The total budget of 6 million euros means the measure can benefit approximately 600 buyers while funds remain available.',
        },
        {
          type: 'ul',
          items: [
            'Amount: 10,000 euros, non-repayable',
            'Total budget: 6 million euros (≈ 600 beneficiaries)',
            'Purpose: first habitual residence in the Balearic Islands',
            'Not a loan: no repayment required',
            'Compatible with other national and regional housing grants',
          ],
        },
        {
          type: 'h2',
          text: 'Requirements to qualify',
        },
        {
          type: 'p',
          text: 'The requirements published by the Government set conditions for both the buyer and the property. It is important to verify compliance with all of them before starting the purchase process.',
        },
        {
          type: 'ul',
          items: [
            'Age: under 40 at the time of application',
            'Residency: registered in the Balearic Islands for at least the last 5 years',
            'First home: must not own any other property anywhere in Spain',
            'Use: the property must become the buyer\'s permanent habitual residence',
            'Maximum price in Mallorca: 307,000 euros (Ibiza: 370,000 €; Menorca: 285,000 €)',
          ],
        },
        {
          type: 'h2',
          text: 'Property price limits by island',
        },
        {
          type: 'p',
          text: 'The maximum eligible property price varies by island, reflecting the different market conditions across the archipelago. For Mallorca, the limit is set at 307,000 euros, which excludes most of the new-build market and prime areas of the island, but covers a significant portion of the second-hand market in residential towns and peripheral municipalities.',
        },
        {
          type: 'ul',
          items: [
            'Mallorca: maximum 307,000 euros',
            'Ibiza: maximum 370,000 euros',
            'Menorca: maximum 285,000 euros',
          ],
        },
        {
          type: 'h2',
          text: 'Additional tax benefits: reduced or zero transfer tax',
        },
        {
          type: 'p',
          text: 'In addition to the direct grant, the package includes a significant reduction in Property Transfer Tax (ITP — Impuesto de Transmisiones Patrimoniales), which normally stands at 8% of the purchase price in the Balearic Islands. For young buyers, the conditions are considerably more favourable:',
        },
        {
          type: 'ul',
          items: [
            'Under 30 years old: full ITP exemption (saving up to 24,560 € on a 307,000 € property)',
            'Between 30 and 36 years old: ITP reduced to 4%, half the standard rate',
            'Condition: must be a first habitual residence meeting the general eligibility requirements',
          ],
        },
        {
          type: 'p',
          text: 'This tax benefit is particularly significant because ITP is one of the largest costs when buying a second-hand property. On a 307,000-euro property, standard ITP would amount to 24,560 euros; with the full exemption for under-30s, that cost disappears entirely. Combined with the 10,000-euro direct grant, a buyer under 30 could save over 34,000 euros in acquisition costs.',
        },
        {
          type: 'h2',
          text: 'Young Mortgage Scheme: up to 90% financing with public guarantee',
        },
        {
          type: 'p',
          text: 'The third pillar of the package is the Hipoteca Joven (Young Mortgage) programme, through which the Institut Balear de l\'Habitatge (IBAVI) acts as a public guarantor, enabling young buyers to access financing of up to 90% of the property value. The standard bank requirement — a maximum of 80% financing — means buyers must have 20% of the price plus costs saved in advance. With the public guarantee, that figure drops to 10%, substantially reducing the savings required upfront.',
        },
        {
          type: 'ul',
          items: [
            'Guarantee coverage: up to 90% of the assessed value',
            'Managed through the Institut Balear de l\'Habitatge (IBAVI)',
            'Compatible with the 10,000-euro direct grant',
            'Allows buyers to purchase with less upfront savings',
          ],
        },
        {
          type: 'h2',
          text: 'Context: the Balearic Islands, Spain\'s second most expensive housing market',
        },
        {
          type: 'p',
          text: 'These measures come at a time when housing access in the Balearic Islands has become one of the archipelago\'s most pressing social issues. According to data published alongside the announcement, the Balearics recorded an average price increase of 13.4% in 2025 compared to 2024, making it the second most expensive autonomous community in Spain for residential property, behind only Madrid. In Mallorca, the combination of high international demand, limited land supply and planning restrictions has created a structurally stressed market where local profiles with median incomes face growing difficulty buying on the island where they live and work.',
        },
        {
          type: 'faq',
          eyebrow: 'Frequently asked questions',
          items: [
            {
              q: 'When can I apply for the 10,000-euro grant for young buyers in Mallorca?',
              a: 'The Government activated the programme in March 2026 with 6 million euros reserved. Applications are processed through the Institut Balear de l\'Habitatge (IBAVI). It is advisable to apply as early as possible given the limited budget covering approximately 600 beneficiaries.',
            },
            {
              q: 'Can the 10,000-euro grant be combined with the ITP tax exemption?',
              a: 'Yes. Both measures are compatible. A buyer under 30 can simultaneously access the 10,000-euro direct grant, the full ITP exemption and the Young Mortgage public guarantee scheme. The combined saving can exceed 34,000 euros in total acquisition costs.',
            },
            {
              q: 'Does the 307,000-euro price limit in Mallorca include taxes and fees?',
              a: 'The 307,000-euro limit refers to the purchase price stated in the deed, not including notary fees, land registry costs or taxes. It is important to confirm that the agreed price with the seller does not exceed this threshold before formalising the transaction.',
            },
            {
              q: 'I am between 36 and 40 years old. Can I get the direct grant but not the ITP reduction?',
              a: 'Yes. The 10,000-euro direct grant applies to all buyers under 40 who meet the requirements. The 4% reduced ITP applies to buyers aged 30–36, and the full ITP exemption applies to under-30s. Between 36 and 40, the standard 8% ITP rate applies, but you can still access the 10,000-euro grant and the Young Mortgage scheme.',
            },
            {
              q: 'Do the 5 years of Balearic residency need to be continuous?',
              a: 'The published requirement states a minimum residency of 5 years in the Balearic Islands, without specifying whether these must be continuous or cumulative. For official clarification on this point, it is advisable to consult directly with the IBAVI or a specialist adviser before starting the application.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Looking for a property in Mallorca within this price range?',
          body: 'At Benavides Real Estate we cover the Mallorca residential market across all segments. If you are looking for your first home and want to take advantage of these grants, we can help you find eligible properties and guide you through the entire purchase process.',
          button: 'View available properties',
        },
        {
          type: 'links',
          title: 'Related resources',
          items: [
            {
              label: 'Buying property in Mallorca as a non-resident: legal guide',
              href: '/en/blog/comprar-casa-mallorca-no-residente-guia-legal',
              desc: 'Complete purchase process for foreign buyers: NIE, taxes and legal steps.',
            },
            {
              label: 'Taxes when buying property in Mallorca',
              href: '/en/blog/impuestos-comprar-vivienda-mallorca-no-residentes',
              desc: 'ITP, VAT, stamp duty and total costs broken down.',
            },
            {
              label: 'Buying services in Mallorca',
              href: '/en/buy-property-mallorca',
              desc: 'How we help you find and buy the right property.',
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // POST — Cómo instalar el certificado digital en Windows
  // ─────────────────────────────────────────────────────────────────
  {
    slug: 'como-instalar-certificado-digital-windows',
    date: '2026-03-24',
    readingTime: 8,
    authorKey: 'gonzalo',
    image: {
      src: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      alt: 'Certificado digital en ordenador Windows — trámites fiscales e inmobiliarios en España',
    },
    es: {
      seoTitle: 'Cómo instalar el certificado digital en Windows: guía paso a paso',
      metaDescription:
        'Aprende a instalar el certificado digital de la FNMT en tu ordenador Windows para realizar trámites con Hacienda, el Registro de la Propiedad y otras administraciones españolas.',
      h1: 'Cómo instalar el certificado digital en Windows: guía paso a paso',
      category: 'Trámites y Gestiones',
      tags: ['certificado digital', 'FNMT', 'Windows', 'trámites', 'Hacienda', 'NIE'],
      excerpt:
        'El certificado digital es imprescindible para realizar cualquier trámite telemático con la Agencia Tributaria, el Registro de la Propiedad o el Catastro. En esta guía te explicamos cómo obtenerlo e instalarlo en Windows paso a paso.',
      blocks: [
        {
          type: 'p',
          text: 'Si estás tramitando la compra o venta de una propiedad en España, o si necesitas presentar declaraciones fiscales ante la Agencia Tributaria, el certificado digital es una herramienta imprescindible. Permite identificarte de forma segura ante cualquier administración pública española desde tu ordenador, sin necesidad de desplazarte a ninguna oficina. En esta guía te explicamos cómo obtener e instalar el certificado digital de la FNMT (Fábrica Nacional de Moneda y Timbre) en un ordenador con Windows, paso a paso.',
        },
        {
          type: 'h2',
          text: '¿Qué es el certificado digital y para qué sirve?',
        },
        {
          type: 'p',
          text: 'El certificado digital es un archivo electrónico que acredita tu identidad en internet. Lo emite la FNMT-RCM, organismo oficial del Estado español. Con él puedes realizar trámites como presentar la declaración de la renta, consultar o pagar impuestos como el ITP o el modelo 210 (IRNR), inscribir documentos en el Registro de la Propiedad, gestionar el NIE o el NIF, y acceder a la Sede Electrónica de cualquier administración pública española.',
        },
        {
          type: 'h2',
          text: 'Requisitos previos',
        },
        {
          type: 'ul',
          items: [
            'DNI o NIE en vigor.',
            'Ordenador con Windows 10 u 11.',
            'Navegador compatible: Internet Explorer, Edge o Firefox (recomendado Firefox para la solicitud inicial).',
            'Acceso a una oficina de registro (puede ser una oficina de la AEAT, ayuntamiento o consulado para residentes en el extranjero).',
          ],
        },
        {
          type: 'h2',
          text: 'Paso 1: Solicitar el certificado en la web de la FNMT',
        },
        {
          type: 'p',
          text: 'Accede a la página oficial de la FNMT (www.sede.fnmt.gob.es) y selecciona "Certificados > Persona Física > Obtener certificado software". Introduce tu DNI o NIE y tu correo electrónico. La FNMT te enviará un código de solicitud a ese email. Guarda ese código: lo necesitarás en los pasos siguientes. Es importante realizar todo el proceso desde el mismo ordenador y el mismo navegador. No formatees el equipo ni cambies el navegador hasta terminar.',
        },
        {
          type: 'h2',
          text: 'Paso 2: Acreditar tu identidad en una oficina de registro',
        },
        {
          type: 'p',
          text: 'Con el código de solicitud en mano, debes acudir en persona a una oficina de registro habilitada (oficinas de la Agencia Tributaria, Seguridad Social, ayuntamientos, consulados españoles en el extranjero, entre otras). Allí verificarán tu identidad con tu documento de identidad original. Este trámite presencial es obligatorio y no puede realizarse de forma telemática en la modalidad de certificado software. Una vez acreditado, recibirás confirmación y podrás continuar el proceso online.',
        },
        {
          type: 'h2',
          text: 'Paso 3: Descargar e instalar el certificado',
        },
        {
          type: 'p',
          text: 'Una vez que hayas ido a la oficina y te hayan dado el visto bueno, ya puedes volver a casa y terminar el proceso desde tu ordenador. No te preocupes: es más sencillo de lo que parece. Solo tienes que seguir estos pasos con calma, uno por uno.',
        },
        {
          type: 'h3',
          text: '1. Abre el mismo navegador que usaste al principio',
        },
        {
          type: 'p',
          text: 'El navegador es el programa que usas para entrar a internet. Puede ser Firefox (tiene un logo naranja y morado), Edge (logo azul, viene con Windows) o Internet Explorer. Es muy importante que abras exactamente el mismo que usaste cuando pediste el certificado en el Paso 1. Si no lo recuerdas, prueba primero con Firefox.',
        },
        {
          type: 'h3',
          text: '2. Entra en la página web de la FNMT',
        },
        {
          type: 'p',
          text: 'En la barra de arriba del navegador (donde pone la dirección de la página) escribe: www.sede.fnmt.gob.es y pulsa la tecla Intro (o Enter). Se abrirá la página oficial de la Fábrica Nacional de Moneda y Timbre, que es el organismo del Estado que emite los certificados digitales.',
        },
        {
          type: 'h3',
          text: '3. Busca la opción "Descargar certificado"',
        },
        {
          type: 'p',
          text: 'Una vez dentro de la página, busca en el menú la opción que dice "Certificados" y después "Persona Física". Verás varias opciones: busca la que dice "Descargar certificado" y haz clic sobre ella. Si no la encuentras a primera vista, mira en la parte de arriba de la página, donde suele haber un menú con varias palabras.',
        },
        {
          type: 'h3',
          text: '4. Introduce tus datos',
        },
        {
          type: 'p',
          text: 'La página te pedirá dos cosas: tu DNI o NIE (el número que aparece en tu documento de identidad, por ejemplo: 12345678A) y el código de solicitud que te enviaron por correo electrónico en el Paso 1. Escríbelos con cuidado, sin espacios de más, y luego pulsa el botón que dice "Descargar certificado" o "Aceptar".',
        },
        {
          type: 'h3',
          text: '5. El certificado se instala solo',
        },
        {
          type: 'p',
          text: 'Si todo va bien, el ordenador te preguntará si quieres abrir o guardar un archivo. Haz clic en "Abrir" o "Ejecutar". En ese momento Windows instalará el certificado automáticamente. Puede que aparezca una ventana preguntando si confirmas la instalación: haz clic en "Sí" o "Aceptar". Cuando termine verás un mensaje que dice que el certificado se ha instalado correctamente. ¡Ya está! Ya tienes tu certificado digital funcionando.',
        },
        {
          type: 'h3',
          text: '6. Comprueba que funciona',
        },
        {
          type: 'p',
          text: 'Para asegurarte de que todo ha ido bien, entra en la página web de la Agencia Tributaria (www.agenciatributaria.es), busca el apartado "Sede Electrónica" y trata de identificarte con tu certificado. El navegador te mostrará una ventana con tu nombre y te pedirá que confirmes. Si lo ves, enhorabuena: el certificado está instalado y listo para usar.',
        },
        {
          type: 'h2',
          text: 'Cómo exportar el certificado para hacer una copia de seguridad',
        },
        {
          type: 'ul',
          items: [
            'Abre el Panel de Control de Windows y busca "Administrar certificados de usuario".',
            'En la carpeta "Personal > Certificados" encontrarás tu certificado instalado.',
            'Haz clic derecho > Todas las tareas > Exportar.',
            'Selecciona exportar la clave privada y elige formato .pfx.',
            'Establece una contraseña segura y guarda el archivo en un lugar seguro (USB, disco externo o nube cifrada).',
          ],
        },
        {
          type: 'h2',
          text: 'Cómo importar el certificado en otro ordenador',
        },
        {
          type: 'p',
          text: 'Si necesitas usar el certificado en otro equipo o navegador, solo tienes que copiar el archivo .pfx y ejecutarlo en el nuevo ordenador. Windows abrirá el asistente de importación: acepta las condiciones, introduce la contraseña que estableciste al exportar y confirma. El certificado quedará disponible en el nuevo equipo sin necesidad de repetir el proceso con la FNMT.',
        },
        {
          type: 'h2',
          text: 'Preguntas frecuentes',
        },
        {
          type: 'faq',
          items: [
            {
              q: '¿Cuánto tiempo tarda el proceso completo?',
              a: 'El trámite online es inmediato. La visita presencial a la oficina de registro suele resolverse el mismo día. Si acudes a una oficina de la AEAT sin cita, puede haber espera; es recomendable pedir cita previa en la web de la Agencia Tributaria.',
            },
            {
              q: '¿Tiene algún coste el certificado digital de la FNMT?',
              a: 'No. El certificado de persona física emitido por la FNMT es completamente gratuito.',
            },
            {
              q: '¿Cuánto tiempo es válido el certificado?',
              a: 'El certificado de persona física tiene una validez de 4 años. Pasado ese plazo deberás renovarlo. La FNMT te avisará por email con antelación y podrás renovarlo de forma telemática sin necesidad de acudir presencialmente, siempre que lo hagas antes de que caduque.',
            },
            {
              q: '¿Puedo usar el certificado digital desde el extranjero?',
              a: 'Sí. Una vez instalado en tu ordenador, puedes acceder a la Sede Electrónica de la AEAT o cualquier otro organismo español desde cualquier país. Esto es especialmente útil para no residentes que necesitan gestionar impuestos como el modelo 210 (IRNR) o consultar su situación fiscal en España.',
            },
            {
              q: '¿Qué pasa si pierdo el certificado o formateo el ordenador?',
              a: 'Si tienes una copia de seguridad en formato .pfx, simplemente impórtala en el nuevo equipo. Si no tienes copia, deberás solicitar un nuevo certificado repitiendo el proceso completo desde el paso 1, incluyendo la visita presencial.',
            },
          ],
        },
        {
          type: 'cta',
          title: '¿Necesitas ayuda con trámites fiscales o inmobiliarios en España?',
          body: 'En Benavides Real Estate contamos con asesores fiscales y abogados especializados en operaciones inmobiliarias en Mallorca. Si tienes dudas sobre impuestos, certificado digital, NIE u otros trámites relacionados con tu propiedad, contáctanos.',
          button: 'Contactar con un asesor',
        },
        {
          type: 'links',
          title: 'Artículos relacionados',
          items: [
            {
              label: 'Impuestos al comprar una vivienda en Mallorca',
              href: '/es/blog/impuestos-comprar-vivienda-mallorca-no-residentes',
              desc: 'ITP, IVA, AJD y costes totales desglosados para no residentes.',
            },
            {
              label: 'Comprar casa en Mallorca como no residente: guía legal',
              href: '/es/blog/comprar-casa-mallorca-no-residente-guia-legal',
              desc: 'NIE, notaría, registro y todo el proceso de compra explicado.',
            },
          ],
        },
      ],
    },
    en: {
      seoTitle: 'How to install a digital certificate on Windows: step-by-step guide',
      metaDescription:
        'Learn how to install the FNMT digital certificate on your Windows computer to carry out tax and property procedures with Spanish authorities.',
      h1: 'How to install a digital certificate on Windows: step-by-step guide',
      category: 'Procedures & Admin',
      tags: ['digital certificate', 'FNMT', 'Windows', 'tax procedures', 'NIE', 'Spain'],
      excerpt:
        'A digital certificate is essential for any online procedure with the Spanish Tax Agency, the Land Registry or the Catastro. This guide walks you through obtaining and installing it on Windows.',
      blocks: [
        {
          type: 'p',
          text: 'If you are buying or selling a property in Spain, or need to file tax returns with the Spanish Tax Agency (AEAT), a digital certificate is an essential tool. It allows you to identify yourself securely to any Spanish public authority from your computer, without having to visit any office in person. This guide explains how to obtain and install the FNMT (Royal Mint of Spain) digital certificate on a Windows computer, step by step.',
        },
        {
          type: 'h2',
          text: 'What is a digital certificate and what is it used for?',
        },
        {
          type: 'p',
          text: 'A digital certificate is an electronic file that verifies your identity online. It is issued by the FNMT-RCM, an official Spanish state body. With it you can file your income tax return, pay taxes such as ITP or Modelo 210 (IRNR for non-residents), register documents with the Land Registry, manage your NIE or NIF, and access the electronic headquarters of any Spanish public authority.',
        },
        {
          type: 'h2',
          text: 'Prerequisites',
        },
        {
          type: 'ul',
          items: [
            'Valid DNI or NIE.',
            'Computer running Windows 10 or 11.',
            'Compatible browser: Internet Explorer, Edge or Firefox (Firefox recommended for the initial request).',
            'Access to a registration office (AEAT office, town hall or Spanish consulate for residents abroad).',
          ],
        },
        {
          type: 'h2',
          text: 'Step 1: Request the certificate on the FNMT website',
        },
        {
          type: 'p',
          text: 'Go to the official FNMT website (www.sede.fnmt.gob.es) and select "Certificates > Individual > Obtain software certificate". Enter your DNI or NIE and your email address. The FNMT will send a request code to that email. Keep that code: you will need it in the following steps. It is important to complete the entire process on the same computer and the same browser. Do not reformat the computer or change the browser until the process is finished.',
        },
        {
          type: 'h2',
          text: 'Step 2: Verify your identity at a registration office',
        },
        {
          type: 'p',
          text: 'With your request code, you must visit a registered office in person (AEAT offices, Social Security offices, town halls, or Spanish consulates abroad). They will verify your identity using your original identity document. This in-person step is mandatory and cannot be completed online for the software certificate. Once verified, you will receive confirmation and can continue the process online.',
        },
        {
          type: 'h2',
          text: 'Step 3: Download and install the certificate',
        },
        {
          type: 'p',
          text: 'Once you have visited the office and received confirmation, you can go home and finish the process from your computer. Do not worry: it is simpler than it sounds. Just follow these steps calmly, one at a time.',
        },
        {
          type: 'h3',
          text: '1. Open the same browser you used at the beginning',
        },
        {
          type: 'p',
          text: 'The browser is the programme you use to access the internet. It could be Firefox (orange and purple logo), Edge (blue logo, comes with Windows) or Internet Explorer. It is very important to open exactly the same one you used when you requested the certificate in Step 1. If you cannot remember, try Firefox first.',
        },
        {
          type: 'h3',
          text: '2. Go to the FNMT website',
        },
        {
          type: 'p',
          text: 'In the address bar at the top of the browser (where the website address is shown), type: www.sede.fnmt.gob.es and press the Enter key. The official website of the Spanish Royal Mint, which issues digital certificates, will open.',
        },
        {
          type: 'h3',
          text: '3. Find the "Download certificate" option',
        },
        {
          type: 'p',
          text: 'Once on the page, look in the menu for "Certificates" and then "Individual". You will see several options: find the one that says "Download certificate" and click on it. If you cannot find it straight away, look at the top of the page where there is usually a menu with several words.',
        },
        {
          type: 'h3',
          text: '4. Enter your details',
        },
        {
          type: 'p',
          text: 'The page will ask for two things: your DNI or NIE (the number on your identity document, for example: 12345678A) and the request code sent to your email in Step 1. Type them carefully, with no extra spaces, then click the button that says "Download certificate" or "Accept".',
        },
        {
          type: 'h3',
          text: '5. The certificate installs itself',
        },
        {
          type: 'p',
          text: 'If everything goes well, the computer will ask whether you want to open or save a file. Click "Open" or "Run". Windows will then install the certificate automatically. A window may appear asking you to confirm the installation: click "Yes" or "Accept". When it finishes you will see a message saying the certificate has been installed successfully. That is it — your digital certificate is now working.',
        },
        {
          type: 'h3',
          text: '6. Check that it works',
        },
        {
          type: 'p',
          text: 'To make sure everything went correctly, go to the Spanish Tax Agency website (www.agenciatributaria.es), find the "Electronic Office" section and try to identify yourself with your certificate. The browser will show a window with your name and ask you to confirm. If you see it, congratulations: the certificate is installed and ready to use.',
        },
        {
          type: 'h2',
          text: 'How to export the certificate as a backup',
        },
        {
          type: 'ul',
          items: [
            'Open the Windows Control Panel and search for "Manage user certificates".',
            'Under "Personal > Certificates" you will find your installed certificate.',
            'Right-click > All tasks > Export.',
            'Select to export the private key and choose .pfx format.',
            'Set a strong password and save the file in a safe place (USB drive, external hard drive or encrypted cloud storage).',
          ],
        },
        {
          type: 'h2',
          text: 'How to import the certificate on another computer',
        },
        {
          type: 'p',
          text: 'If you need to use the certificate on another device or browser, simply copy the .pfx file and run it on the new computer. Windows will launch the import wizard: accept the terms, enter the password you set when exporting, and confirm. The certificate will be available on the new computer without needing to repeat the process with the FNMT.',
        },
        {
          type: 'h2',
          text: 'Frequently asked questions',
        },
        {
          type: 'faq',
          items: [
            {
              q: 'How long does the whole process take?',
              a: 'The online steps are immediate. The in-person visit to the registration office is usually resolved the same day. If you go to an AEAT office without an appointment there may be a wait; it is recommended to book an appointment in advance on the Tax Agency website.',
            },
            {
              q: 'Is the FNMT digital certificate free?',
              a: 'Yes. The individual digital certificate issued by the FNMT is completely free of charge.',
            },
            {
              q: 'How long is the certificate valid?',
              a: 'The individual certificate is valid for 4 years. After that period you must renew it. The FNMT will notify you by email in advance and you can renew it online without an in-person visit, as long as you do so before it expires.',
            },
            {
              q: 'Can I use the digital certificate from abroad?',
              a: 'Yes. Once installed on your computer, you can access the AEAT electronic headquarters or any other Spanish authority from any country. This is particularly useful for non-residents who need to manage taxes such as Modelo 210 (IRNR) or check their tax status in Spain.',
            },
            {
              q: 'What happens if I lose the certificate or reformat my computer?',
              a: 'If you have a backup in .pfx format, simply import it on the new device. If you do not have a backup, you will need to apply for a new certificate by repeating the entire process from step 1, including the in-person visit.',
            },
          ],
        },
        {
          type: 'cta',
          title: 'Need help with tax or property procedures in Spain?',
          body: 'At Benavides Real Estate we have tax advisors and lawyers specialised in real estate transactions in Mallorca. If you have questions about taxes, digital certificates, NIE or other procedures related to your property, get in touch.',
          button: 'Contact an advisor',
        },
        {
          type: 'links',
          title: 'Related articles',
          items: [
            {
              label: 'Taxes when buying property in Mallorca',
              href: '/en/blog/impuestos-comprar-vivienda-mallorca-no-residentes',
              desc: 'ITP, VAT, stamp duty and total costs broken down for non-residents.',
            },
            {
              label: 'Buying property in Mallorca as a non-resident: legal guide',
              href: '/en/blog/comprar-casa-mallorca-no-residente-guia-legal',
              desc: 'NIE, notary, land registry and the full purchase process explained.',
            },
          ],
        },
      ],
    },
  },
];
