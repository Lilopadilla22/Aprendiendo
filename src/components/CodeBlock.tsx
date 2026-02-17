import { useState } from "react";

interface Props {
  code: string;
}

export default function CodeBlock({ code }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative bg-gray-900 text-green-400 rounded-xl p-4 font-mono text-sm">
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-white text-gray-800 px-3 py-1 rounded-md text-xs font-medium hover:bg-gray-200 transition"
      >
        {copied ? "Copiado ✓" : "Copiar"}
      </button>
    </div>
  );
}