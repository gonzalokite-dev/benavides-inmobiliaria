import Image from "next/image";
import { useTranslations } from "next-intl";

const photos = [
  "/alfonso-benavides.jpg",
  "/german-alvarez.jpg",
  "/gonzalo-benavides.jpg",
];

export default function Team() {
  const t = useTranslations("team");
  const members = t.raw("members") as Array<{
    name: string;
    role: string;
    bio: string[];
  }>;

  return (
    <section id="equipo" style={{ backgroundColor: "#faf8f5", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8964a",
            marginBottom: "14px",
          }}>
            {t("eyebrow")}
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 300,
            color: "#1a2332",
            lineHeight: 1.18,
            maxWidth: "560px",
          }}>
            {t("title")}
          </h2>
        </div>

        {/* Members */}
        <div className="team-grid">
          {members.map((member, index) => (
            <div key={member.name} className="team-card">
              {/* Photo */}
              <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <Image
                  src={photos[index]}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>

              {/* Info */}
              <div style={{ paddingTop: "24px" }}>
                <div style={{ width: "32px", height: "1px", backgroundColor: "#b8964a", marginBottom: "20px" }} />
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(18px, 1.6vw, 24px)",
                  fontWeight: 300,
                  color: "#1a2332",
                  lineHeight: 1.2,
                  marginBottom: "8px",
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#b8964a",
                  marginBottom: "20px",
                }}>
                  {member.role}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {member.bio.map((paragraph, i) => (
                    <p key={i} style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "#5c5650",
                    }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          align-items: start;
        }
        .team-card {
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          #equipo { padding: 64px 24px !important; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          #equipo { padding: 48px 16px !important; }
        }
      `}</style>
    </section>
  );
}
