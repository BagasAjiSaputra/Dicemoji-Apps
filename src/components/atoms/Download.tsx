"use client";

import { useEffect, useState } from "react";

type Props = {
  seed: string;
};

export default function DownloadButton({ seed }: Props) {
  const [download, setDownload] = useState(false);

  useEffect(() => {
    if (!download) return;

    fetch(`/api/avatar/${seed}`)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `avatar-${seed}.svg`;
        a.click();

        URL.revokeObjectURL(url);
        setDownload(false);
      });
  }, [download, seed]);

  return (
    <button
      onClick={() => setDownload(true)}
      className="text-sm px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
    >
      Download
    </button>
  );
}