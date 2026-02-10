import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#FEFBF8' }}
    >
      <div className="text-center max-w-lg">
        <h1
          className="font-serif text-6xl font-medium mb-4"
          style={{ color: '#1E2A45' }}
        >
          404
        </h1>
        <h2
          className="font-serif text-2xl font-medium mb-4"
          style={{ color: '#1E2A45' }}
        >
          Page not found
        </h2>
        <p
          className="font-sans text-base mb-8 leading-relaxed"
          style={{ color: '#1E2A45', opacity: 0.7 }}
        >
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-sm font-sans text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
          style={{
            backgroundColor: '#184A5A',
            color: '#FEFBF8',
          }}
        >
          Return to homepage
        </Link>
      </div>
    </div>
  );
}
