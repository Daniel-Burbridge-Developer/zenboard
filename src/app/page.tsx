import Link from "next/link";
import ZenQuote from "./(components)/zenquote";


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1> Zenboard </h1>
      </div>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <ZenQuote />
      </div>
    </main>
  );
}
