import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Skip to Content Link - Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">{children}</main>

      <Footer />

      <CookieConsent />
    </>
  );
}
