import Link from "next/link";
import Image from "next/image";

function generateSeeds(count: number) {
  return Array.from({ length: count }, () =>
    Math.random().toString(36).substring(2, 10)
  );
}

export default function GalleryPage() {
  const seeds = generateSeeds(20);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Galeri Inspirasi Dicemoji
      </h1>

      <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {seeds.map((seed) => (
          <Link key={seed} href={`/avatar/${seed}`}>
            <Image
              src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${seed}`}
              alt={`Dicemoji ${seed}`}
              width={96}
              height={96}
              unoptimized
              className="rounded-lg bg-white shadow-sm hover:scale-105 transition"
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
