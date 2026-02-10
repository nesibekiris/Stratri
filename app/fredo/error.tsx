'use client';

import { useEffect } from 'react';

export default function AdminError({
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
          Admin Error
        </h2>
        <p
          className="font-sans text-base mb-8 leading-relaxed"
          style={{ color: '#1E2A45', opacity: 0.7 }}
        >
          An error occurred in the admin panel.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-sm font-sans text-sm font-medium transition-all duration-200"
          style={{
            backgroundColor: '#184A5A',
            color: '#FEFBF8',
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
