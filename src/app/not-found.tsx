"use client";

import Link from "next/link";
import { FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div
        className="flex flex-col items-center gap-4"
      >
        <FiAlertCircle className="w-14 h-14 text-red-500" />

        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-gray-500 max-w-md">
          Halaman yang kamu cari nggak ditemukan.
        </p>

        <Link
          href="/"
          className="mt-4 px-5 py-2 rounded-xl bg-black text-white hover:opacity-80 transition"
        >
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}
