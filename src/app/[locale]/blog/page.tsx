import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { posts, authors } from '@/data/blog';

function formatDate(dateStr: string, locale: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const monthNamesEs = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const monthNamesEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if (locale === 'es') return `${day} de ${monthNamesEs[month - 1]} de ${year}`;
  return `${day} ${monthNamesEn[month - 1]} ${year}`;
}

const meta = {
  es: {
    title: 'Blog | Fiscalidad e Inversión Inmobiliaria en Mallorca — Benavides Real Estate',
    description: 'Artículos especializados sobre fiscalidad inmobiliaria, inversión en Mallorca y derecho inmobiliario para no residentes, escritos por abogados y asesores fiscales.',
    eyebrow: 'Blog',
    h1: 'Fiscalidad e Inversión\nInmobiliaria en Mallorca',
    subtitle: 'Guías y análisis escritos por nuestros abogados y asesores fiscales para ayudarte a tomar decisiones informadas.',
    readMore: 'Leer artículo',
    readingTime: 'min de lectura',
    featured: 'Artículo destacado',
    allArticles: 'Más artículos',
  },
  en: {
    title: 'Blog | Real Estate Law & Taxation in Mallorca — Benavides Real Estate',
    description: 'Specialist articles on real estate taxation, investment in Mallorca and property law for non-residents, written by lawyers and tax advisors.',
    eyebrow: 'Blog',
    h1: 'Real Estate Law &\nTaxation in Mallorca',
    subtitle: 'Guides and analysis written by our lawyers and tax advisors to help you make informed decisions.',
    readMore: 'Read article',
    readingTime: 'min read',
    featured: 'Featured article',
    allArticles: 'More articles',
  },
};

const BASE_URL = 'https://www.benavidesrealestate.com';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale as 'es' | 'en'] ?? meta.es;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        'es': `${BASE_URL}/es/blog`,
        'en': `${BASE_URL}/en/blog`,
        'x-default': `${BASE_URL}/es/blog`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${BASE_URL}/${locale}/blog`,
      siteName: 'Benavides Real Estate',
      locale: locale === 'es' ? 'es_ES' : 'en_GB',
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = meta[locale as 'es' | 'en'] ?? meta.es;

  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: '#faf8f5', minHeight: '100vh', paddingTop: '76px' }}>

        {/* ── Hero header ── */}
        <section style={{ backgroundColor: '#1a2332', padding: '80px 24px 72px', position: 'relative', overflow: 'hidden' }}>
          {/* Decorative grid lines */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(184,150,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,74,0.05) 1px, transparent 1px)', backgroundSize: '80px 80px', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
            <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#b8964a', marginBottom: '20px' }}>
              {t.eyebrow}
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(32px, 4.5vw, 58px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '20px', maxWidth: '720px', whiteSpace: 'pre-line' }}>
              {t.h1}
            </h1>
            <div style={{ width: '40px', height: '1px', backgroundColor: '#b8964a', marginBottom: '20px' }} />
            <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', maxWidth: '500px' }}>
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Gold rule */}
        <div style={{ height: '3px', backgroundColor: '#b8964a' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '72px 24px 96px' }}>

          {/* ── Featured post ── */}
          {featured && (() => {
            const tr = featured[locale as 'es' | 'en'] ?? featured.es;
            const author = authors[featured.authorKey];
            const authorRole = locale === 'en' ? author.role_en : author.role_es;
            return (
              <div style={{ marginBottom: '64px' }}>
                <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8964a', marginBottom: '24px' }}>
                  {t.featured}
                </p>
                <Link href={`/${locale}/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }} className="featured-card">
                  <article style={{ backgroundColor: '#fff', border: '1px solid #e8e4de', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', transition: 'box-shadow 0.3s, transform 0.3s' }} className="featured-article">
                    {/* Left: content */}
                    <div style={{ padding: '52px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#b8964a', backgroundColor: 'rgba(184,150,74,0.09)', padding: '4px 12px', borderRadius: '2px', marginBottom: '24px' }}>
                          {tr.category}
                        </span>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(22px, 2.4vw, 32px)', fontWeight: 300, color: '#1a2332', lineHeight: 1.25, marginBottom: '20px' }}>
                          {tr.h1}
                        </h2>
                        <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.85, color: '#5c5650', marginBottom: '36px' }}>
                          {tr.excerpt}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '2px solid #e8e4de' }}>
                            <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="38px" />
                          </div>
                          <div>
                            <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2332', lineHeight: 1.3 }}>{author.name.split(' ').slice(0, 2).join(' ')}</p>
                            <p style={{ fontSize: '11px', color: '#9b9590', lineHeight: 1.3 }}>{formatDate(featured.date, locale)} · {featured.readingTime} {t.readingTime}</p>
                          </div>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8964a' }}>
                          {t.readMore} →
                        </span>
                      </div>
                    </div>
                    {/* Right: decorative panel */}
                    <div style={{ backgroundColor: '#1a2332', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(184,150,74,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,74,0.07) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      <div style={{ position: 'relative', textAlign: 'center' }}>
                        <div style={{ width: '1px', height: '60px', backgroundColor: '#b8964a', margin: '0 auto 24px' }} />
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 300, color: '#b8964a', lineHeight: 1, marginBottom: '8px' }}>{featured.readingTime}</p>
                        <p style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{t.readingTime}</p>
                        <div style={{ width: '1px', height: '60px', backgroundColor: 'rgba(184,150,74,0.3)', margin: '24px auto 0' }} />
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            );
          })()}

          {/* ── Rest of posts ── */}
          {rest.length > 0 && (
            <>
              <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8964a', marginBottom: '24px' }}>
                {t.allArticles}
              </p>
              <div className="blog-grid">
                {rest.map((post) => {
                  const tr = post[locale as 'es' | 'en'] ?? post.es;
                  const author = authors[post.authorKey];
                  return (
                    <article key={post.slug} className="blog-card" style={{ backgroundColor: '#fff', border: '1px solid #e8e4de', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.25s, transform 0.25s' }}>
                      {/* Top accent */}
                      <div style={{ height: '3px', backgroundColor: '#e8e4de', transition: 'background-color 0.25s' }} className="card-accent" />
                      <div style={{ padding: '32px 32px 0', flex: 1 }}>
                        <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8964a', backgroundColor: 'rgba(184,150,74,0.09)', padding: '4px 10px', borderRadius: '2px', marginBottom: '18px' }}>
                          {tr.category}
                        </span>
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '21px', fontWeight: 300, color: '#1a2332', lineHeight: 1.3, marginBottom: '14px' }}>
                          {tr.h1}
                        </h2>
                        <p style={{ fontSize: '14px', fontWeight: 300, lineHeight: 1.85, color: '#5c5650', marginBottom: '28px' }}>
                          {tr.excerpt}
                        </p>
                      </div>
                      <div style={{ height: '1px', backgroundColor: '#e8e4de', margin: '0 32px' }} />
                      <div style={{ padding: '20px 32px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ width: '34px', height: '34px', borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, border: '1.5px solid #e8e4de' }}>
                            <Image src={author.photo} alt={author.name} fill style={{ objectFit: 'cover', objectPosition: 'top' }} sizes="34px" />
                          </div>
                          <div>
                            <p style={{ fontSize: '12px', fontWeight: 500, color: '#1a2332', lineHeight: 1.3 }}>{author.name.split(' ').slice(0, 2).join(' ')}</p>
                            <p style={{ fontSize: '11px', color: '#9b9590', lineHeight: 1.3 }}>{formatDate(post.date, locale)} · {post.readingTime} {t.readingTime}</p>
                          </div>
                        </div>
                        <Link href={`/${locale}/blog/${post.slug}`} style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8964a', textDecoration: 'none' }}>
                          {t.readMore} →
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />

      <style>{`
        .featured-article:hover { box-shadow: 0 16px 60px rgba(26,35,50,0.12); transform: translateY(-3px); }
        .blog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .blog-card:hover { box-shadow: 0 8px 40px rgba(26,35,50,0.09); transform: translateY(-2px); }
        .blog-card:hover .card-accent { background-color: #b8964a !important; }
        @media (max-width: 900px) {
          .featured-article { grid-template-columns: 1fr !important; }
          .featured-article > div:last-child { min-height: 180px; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
