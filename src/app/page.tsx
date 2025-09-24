export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">AlpineBridgeFinance</h1>
      <p className="text-lg text-center">
        <span className="text-red-500 font-semibold">Fiat</span> ↔{" "}
        <span className="text-green-500 font-semibold">Crypto</span> ↔{" "}
        <span className="text-yellow-500 font-semibold">Gold</span> —{" "}
        <span className="text-blue-500">Lugano, Switzerland</span>
      </p>
      <p className="mt-2 text-gray-500 text-sm">
        Official platform coming soon
      </p>
    </main>
  );
}
