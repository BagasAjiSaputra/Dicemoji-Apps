"use client";

type Props = {
  seed: string;
};

export default function DownloadButton({ seed }: Props) {
  const handleDownload = async () => {
    const res = await fetch(`/api/avatar/${seed}`);
    const blob = await res.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `avatar-${seed}.svg`;
    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="text-sm px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
    >
      Download
    </button>
  );
}
