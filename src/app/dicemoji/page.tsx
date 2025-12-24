"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DicemojiGenerator() {
  const [seed, setSeed] = useState("");

  const avatarUrl = `https://api.dicebear.com/9.x/fun-emoji/svg?seed=${seed}`;

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4">
      <section
        className="
          bg-white
          w-full
          max-w-sm
          sm:max-w-md
          p-5
          sm:p-6
          rounded-xl
          shadow-md
          text-center
        "
      >
        <h1 className="text-lg sm:text-xl font-semibold">
          Dicemoji Creator
        </h1>

        <Link
          href={seed ? `/avatar/${seed}` : "#"}
          className="flex justify-center mt-4"
        >
          <Image
            src={avatarUrl}
            alt="Dicemoji Avatar"
            width={120}
            height={120}
            unoptimized
            className="w-24 h-24 sm:w-28 sm:h-28"
          />
        </Link>

        <input
          type="text"
          placeholder="Masukkan nama / seed"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          className="
            mt-4
            w-full
            rounded-lg
            px-3
            py-2
            text-sm
            text-center
            placeholder:text-center
            border-none
            focus:outline-none
            focus:ring
            focus:ring-blue-300
          "
        />

        <p className="text-xs text-gray-500 mt-3">
          Avatar berubah otomatis saat kamu mengetik
        </p>
      </section>
    </main>
  );
}
