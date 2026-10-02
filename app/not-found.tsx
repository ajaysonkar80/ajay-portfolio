import Link from "next/link";
import styles from "./not-found.module.css";

const destinations = [
  { href: "/services", label: "Services", description: "What I offer", icon: "✦" },
  { href: "/work", label: "Work", description: "My projects", icon: "◆" },
  { href: "/pricing", label: "Pricing", description: "Simple plans", icon: "◈" },
  { href: "/blog", label: "Blog", description: "Articles & updates", icon: "▤" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9.5V21h14V9.5M9 21v-6h6v6" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.heroMedia} aria-hidden="true">
        <div
          className={`${styles.bg} ${styles.bgDesktop}`}
          style={{ backgroundImage: "url(/404-169.webp)" }}
        />
        <div
          className={`${styles.bg} ${styles.bgMobile}`}
          style={{ backgroundImage: "url(/404-916.webp)" }}
        />
        <div className={styles.scrim} />
      </div>

      <section className={styles.shell} aria-labelledby="not-found-title">
        <div className={styles.copy}>
          <p className={styles.code}>404</p>

          <h1 id="not-found-title">
            Looks like you&apos;ve
            <br />
            left the <span>orbit.</span>
          </h1>

          <p className={styles.description}>
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
            <br className={styles.desktopBreak} />
            Let&apos;s get you back on track.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryButton}>
              <HomeIcon />
              <span>Go to Homepage</span>
              <ArrowIcon />
            </Link>

            <Link href="/blog" className={styles.outlineButton}>
              Browse Blog
            </Link>
          </div>

          <div className={styles.popular}>
            <div className={styles.popularTitle}>
              <span aria-hidden="true">/</span>
              <span>Or explore popular pages</span>
            </div>

            <div className={styles.grid}>
              {destinations.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.card}
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    {item.icon}
                  </span>

                  <span className={styles.cardCopy}>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                  </span>

                  <span className={styles.cardArrow} aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
