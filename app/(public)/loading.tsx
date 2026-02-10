export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#FEFBF8' }}
    >
      <div className="text-center">
        <div
          className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
          style={{ borderColor: '#184A5A', borderTopColor: 'transparent' }}
        />
        <p
          className="font-sans text-sm"
          style={{ color: '#1E2A45', opacity: 0.7 }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
