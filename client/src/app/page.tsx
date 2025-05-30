export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-neutral-800 text-white p-8">
      <h1 className="text-5xl font-bold mb-6">🎵 Welcome to StreamHive</h1>
      <p className="text-lg text-gray-300 max-w-md text-center">
        A collaborative platform to listen, vibe, and analyze music in real-time.
        Built for developers, creators, and music lovers.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="#"
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Join a Room
        </a>
        <a
          href="#"
          className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Create a Room
        </a>
      </div>
    </main>
  );
}
