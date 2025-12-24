import Image from "next/image";
import DownloadButton from "@/components/atoms/Download";

type AvatarDetailProps = {
  params: Promise<{
    seed: string;
  }>;
};

export default async function AvatarDetailPage({
  params,
}: AvatarDetailProps) {
  const { seed } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <section className="bg-white p-6 rounded-xl shadow-md text-center space-y-4">
        <h1 className="text-xl font-semibold">Detail Avatar</h1>

        <Image
          src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${seed}`}
          alt={`Avatar ${seed}`}
          width={200}
          height={200}
          unoptimized
          className="mx-auto"
        />

        <p className="text-sm text-gray-500">
          Seed: <span className="font-mono">{seed}</span>
        </p>

        <DownloadButton seed={seed} />
      </section>
    </main>
  );
}
