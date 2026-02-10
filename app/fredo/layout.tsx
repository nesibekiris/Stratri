import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel | STRATRI',
  description: 'STRATRI content management system.',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
