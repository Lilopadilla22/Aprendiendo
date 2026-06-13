import { useState } from "react";

interface Props {
  code: string;
  light?: boolean;
}

export default function CodeBlock({ code, light = false }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative rounded-xl p-4 font-mono text-sm ${
      light
        ? "bg-gray-50 border border-gray-200 text-gray-800"
        : "bg-gray-900 text-green-400"
    }`}>
      <pre className="overflow-x-auto">
        <code>{code}</code>
      </pre>

      <button
        onClick={handleCopy}
        className={`absolute top-2 right-2 px-3 py-1 rounded-md text-xs font-medium transition ${
          light
            ? "bg-white border border-gray-200 text-gray-500 hover:text-gray-800"
            : "bg-white text-gray-800 hover:bg-gray-200"
        }`}
      >
        {copied ? "Copiado ✓" : "Copiar"}
      </button>
    </div>
  );
}