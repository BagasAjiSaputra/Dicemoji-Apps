import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

function generateSeed() {
  return Math.random().toString(36).substring(2, 10);
}

export default function Home() {
  const seed = generateSeed();
  const avatarUrl = `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${seed}`;

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <section className="w-full max-w-md text-center">
        {/* Avatar Preview */}
        <div className="flex justify-center mb-6">
          <Image
            src={avatarUrl}
            alt="DiceBear Avatar"
            width={120}
            height={120}
            unoptimized
            className="w-28 h-28 rounded-lg bg-white shadow"
          />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-2">
          Dicemoji Generator
        </h1>

        <p className="text-gray-500 text-sm mb-6">
          Buat avatar emoji unik hanya dengan satu klik.
        </p>

        {/* CTA */}
        <Link
          href="/dicemoji"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          Mulai Generate
          <FiArrowRight />
        </Link>
      </section>
    </main>
  );
}
