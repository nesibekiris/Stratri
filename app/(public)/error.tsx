'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#FEFBF8' }}
    >
      <div className="text-center max-w-lg">
        <h2
          className="font-serif text-3xl font-medium mb-4"
          style={{ color: '#1E2A45' }}
        >
          Something went wrong
        </h2>
        <p
          className="font-sans text-base mb-8 leading-relaxed"
          style={{ color: '#1E2A45', opacity: 0.7 }}
        >
          We encountered an unexpected error. Please try again or return to the
          homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-sm font-sans text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#184A5A',
              color: '#FEFBF8',
            }}
          >
            Try again
          </button>
          <a
            href="/"
            className="px-6 py-3 rounded-sm font-sans text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              borderColor: '#E8E4DF',
              color: '#1E2A45',
            }}
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
