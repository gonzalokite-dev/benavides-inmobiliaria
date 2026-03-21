import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { posts, authors, type Block } from '@/data/blog';

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(dateStr: string, locale: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const es = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const en = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (locale === 'es') return `${day} de ${es[month - 1]} de ${year}`;
  return `${day} ${en[month - 1]} ${year}`;
}

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return ['es', 'en'].flatMap(locale =>
    posts.map(post => ({ locale, slug: post.slug }))
  );
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

const BASE_URL = 'https://www.benavidesrealestate.es';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  const tr = post[locale as 'es' | 'en'] ?? post.es;
  const author = authors[post.authorKey];
  return {
    title: tr.seoTitle,
    description: tr.metaDescription,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: {
        'es': `${BASE_URL}/es/blog/${slug}`,
        'en': `${BASE_URL}/en/blog/${slug}`,
        'x-default': `${BASE_URL}/es/blog/${slug}`,
      },
    },
    openGraph: {
      title: tr.seoTitle,
      description: tr.metaDescription,
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      siteName: 'Benavides Real Estate',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      authors: [author.name],
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      tags: tr.tags,
    },
  };
}

// ─── Block renderer ───────────────────────────────────────────────────────────

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p style={{ fontSize: '17px', lineHeight: 2, color: '#4a4540', marginBottom: '24px', fontWeight: 300 }}>
          {block.text}
        </p>
      );

    case 'h2':
      return (
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 2.2vw, 28px)', fontWeight: 400, color: '#1a2332', marginTop: '56px', marginBottom: '20px', lineHeight: 1.25, paddingBottom: '14px', borderBottom: '1px solid #e8e4de', position: 'relative' }}>
          <span style={{ position: 'absolute', left: 0, bottom: '-1px', width: '40px', height: '2px', backgroundColor: '#b8964a' }} />
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3 style={{ fontSize: '17px', fontWeight: 600, color: '#1a2332', marginTop: '36px', marginBottom: '12px', lineHeight: 1.4, letterSpacing: '0.01em' }}>
          {block.text}
        </h3>
      );

    case 'ul':
      return (
        <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ fontSize: '16px', lineHeight: 1.8, color: '#4a4540', fontWeight: 300, paddingLeft: '24px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: '0.55em', width: '6px', height: '1px', backgroundColor: '#b8964a', display: 'block' }} />
              {item}
            </li>
          ))}
        </ul>
      );

    case 'table':
      return (
        <div style={{ overflowX: 'auto', margin: '28px 0 36px', borderRadius: '2px', border: '1px solid #e8e4de', boxShadow: '0 2px 12px rgba(26,35,50,0.04)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a2332' }}>
                {block.headers.map((h, i) => (
                  <th key={i} style={{ padding: '14px 18px', textAlign: 'left', color: '#fff', fontWeight: 400, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? '#faf8f5' : '#fff', transition: 'background-color 0.15s' }}>
                  {row.map((cell, ci) => (
                    <td key={ci} style={{ padding: '13px 18px', color: ci === 0 ? '#1a2332' : '#5c5650', fontWeight: ci === 0 ? 500 : 300, borderBottom: '1px solid #e8e4de', lineHeight: 1.5, fontSize: '14px' }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case 'cta':
      return (
        <div style={{ position: 'relative', margin: '56px 0', backgroundColor: '#faf8f5', border: '1px solid #e8e4de', borderLeft: '4px solid #b8964a', padding: '40px 44px' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 300, color: '#1a2332', marginBottom: '12px', lineHeight: 1.3 }}>
            {block.title}
          </h3>
          <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.8, color: '#5c5650', marginBottom: '28px' }}>
            {block.body}
          </p>
          <a href="https://cal.com/benavides-asociados/consulta-asesor-fiscal" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#1a2332', color: '#fff', textDecoration: 'none', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 28px', transition: 'background-color 0.2s' }} className="cta-btn">
            {block.button}
            <span style={{ fontSize: '14px' }}>→</span>
          </a>
        </div>
      );

    default:
      return null;
  }
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const tr = post[locale as 'es' | 'en'] ?? post.es;
  const author = authors[post.authorKey];
  const authorRole = locale === 'en' ? author.role_en : author.role_es;
  const relatedPosts = posts.filter(p => p.slug !== slug).slice(0, 2);

  const labels = {
    home: locale === 'es' ? 'Inicio' : 'Home',
    back: locale === 'es' ? '← Volver al blog' : '← Back to blog',
    related: locale === 'es' ? 'Artículos relacionados' : 'Related articles',
    readMore: locale === 'es' ? 'Leer artículo' : 'Read article',
    readingTime: locale === 'es' ? 'min de lectura' : 'min read',
    writtenBy: locale === 'es' ? 'Escrito por' : 'Written by',
  };

  const postUrl = `${BASE_URL}/${locale}/blog/${slug}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: tr.h1,
      description: tr.metaDescription,
      url: postUrl,
      datePublished: post.date,
      dateModified: post.updatedDate ?? post.date,
      author: {
        '@type': 'Person',
        name: author.name,
        jobTitle: authorRole,
        worksFor: { '@type': 'Organization', name: 'Benavides Real Estate' },
      },
      publisher: {
        '@type': 'Organization',
        name: 'Benavides Real Estate',
        url: BASE_URL,
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
      inLanguage: locale === 'es' ? 'es' : 'en',
      keywords: tr.tags.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: locale === 'es' ? 'Inicio' : 'Home',
          item: `${BASE_URL}/${locale}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${BASE_URL}/${locale}/blog`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: tr.h1,
          item: postUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />


      <main style={{ backgroundColor: '#faf8f5', paddingTop: '76px' }}>

        {/* ── Breadcrumb ── */}
        <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #e8e4de', padding: '13px 24px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <Link href={`/${locale}`} style={{ fontSize: '12px', color: '#9b9590', textDecoration: 'none' }}>{labels.home}</Link>
            <span style={{ color: '#b8964a', fontSize: '11px' }}>›</span>
            <Link href={`/${locale}/blog`} style={{ fontSize: '12px', color: '#9b9590', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: '#b8964a', fontSize: '11px' }}>›</span>
            <span style={{ fontSize: '12px', color: '#1a2332', fontWeight: 400, maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{tr.h1}</span>
          </div>
        </div>

        {/* ── Post header ── */}
        <header style={{ backgroundColor: '#1a2332', padding: '64px 24px 56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(184,150,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,74,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
            <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b8964a', border: '1px solid rgba(184,150,74,0.4)', padding: '4px 12px', borderRadius: '2px', marginBottom: '24px' }}>
              {tr.category}
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 3.8vw, 46px)', fontWeight: 300, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>
              {tr.h1}
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginBottom: '40px', maxWidth: '660px' }}>
              {tr.excerpt}
            </p>
            {/* Author row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '2px solid rgba(184,150,74,0.5)' }}>
                <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="44px" />
              </div>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#fff', lineHeight: 1.3 }}>{author.name}</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.3 }}>{authorRole}</p>
              </div>
              <div style={{ width: '1px', height: '36px', backgroundColor: 'rgba(255,255,255,0.12)', margin: '0 4px' }} />
              <div>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{formatDate(post.date, locale)}</p>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{post.readingTime} {labels.readingTime}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Gold bar */}
        <div style={{ height: '3px', backgroundColor: '#b8964a' }} />

        {/* ── Article body ── */}
        <article style={{ maxWidth: '780px', margin: '0 auto', padding: '64px 24px 80px' }}>
          {tr.blocks.map((block, i) => (
            <RenderBlock key={i} block={block} />
          ))}
        </article>

        {/* ── Author box ── */}
        <div style={{ maxWidth: '780px', margin: '0 auto 80px', padding: '0 24px' }}>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e8e4de', padding: '32px 36px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '2px solid #e8e4de' }}>
              <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="64px" />
            </div>
            <div>
              <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b8964a', marginBottom: '6px' }}>{labels.writtenBy}</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 300, color: '#1a2332', marginBottom: '4px' }}>{author.name}</p>
              <p style={{ fontSize: '12px', color: '#9b9590', marginBottom: '12px' }}>{authorRole}</p>
              <div style={{ width: '28px', height: '1px', backgroundColor: '#b8964a' }} />
            </div>
          </div>
        </div>

        {/* ── Back to blog ── */}
        <div style={{ maxWidth: '780px', margin: '0 auto 80px', padding: '0 24px' }}>
          <Link href={`/${locale}/blog`} style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', color: '#b8964a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            {labels.back}
          </Link>
        </div>

        {/* ── Related posts ── */}
        {relatedPosts.length > 0 && (
          <section style={{ backgroundColor: '#fff', borderTop: '1px solid #e8e4de', padding: '64px 24px 80px' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8964a', marginBottom: '8px' }}>
                {labels.related}
              </p>
              <div style={{ width: '28px', height: '1px', backgroundColor: '#b8964a', marginBottom: '36px' }} />
              <div className="related-grid">
                {relatedPosts.map(rp => {
                  const rtr = rp[locale as 'es' | 'en'] ?? rp.es;
                  const rAuthor = authors[rp.authorKey];
                  return (
                    <article key={rp.slug} className="related-card" style={{ backgroundColor: '#faf8f5', border: '1px solid #e8e4de', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.25s, transform 0.25s' }}>
                      <div style={{ height: '3px', backgroundColor: '#e8e4de' }} className="related-accent" />
                      <div style={{ padding: '32px', flex: 1 }}>
                        <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8964a', backgroundColor: 'rgba(184,150,74,0.09)', padding: '3px 9px', borderRadius: '2px', marginBottom: '16px' }}>
                          {rtr.category}
                        </span>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 300, color: '#1a2332', lineHeight: 1.3, marginBottom: '12px' }}>
                          {rtr.h1}
                        </h3>
                        <p style={{ fontSize: '14px', fontWeight: 300, color: '#5c5650', lineHeight: 1.75, marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
                          {rtr.excerpt}
                        </p>
                      </div>
                      <div style={{ height: '1px', backgroundColor: '#e8e4de', margin: '0 32px' }} />
                      <div style={{ padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                            <Image src={rAuthor.photo} alt={rAuthor.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="28px" />
                          </div>
                          <p style={{ fontSize: '11px', color: '#9b9590' }}>{formatDate(rp.date, locale)} · {rp.readingTime} {labels.readingTime}</p>
                        </div>
                        <Link href={`/${locale}/blog/${rp.slug}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8964a', textDecoration: 'none' }}>
                          {labels.readMore} →
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        .cta-btn:hover { background-color: #b8964a !important; color: #1a2332 !important; }
        .related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .related-card:hover { box-shadow: 0 8px 32px rgba(26,35,50,0.08); transform: translateY(-2px); }
        .related-card:hover .related-accent { background-color: #b8964a !important; }
        @media (max-width: 640px) { .related-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
