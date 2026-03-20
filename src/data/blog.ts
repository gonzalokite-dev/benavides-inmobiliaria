export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'cta'; title: string; body: string; button: string }

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
      ],
    },
  },
];
