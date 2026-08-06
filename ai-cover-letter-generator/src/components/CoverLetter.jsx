import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CoverLetter = ({ letter }) => {
  const [copied, setCopied] = useState(false);

  if (!letter) return null;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(letter);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 bg-white border border-slate-200 rounded-3xl shadow-xl p-8">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-slate-800">
          Generated Cover Letter
        </h2>

        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-white transition-all duration-300 ${
            copied
              ? "bg-green-600"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy"}
        </button>

      </div>

      {/* Letter */}

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-h-[500px] overflow-y-auto">

        <p className="whitespace-pre-wrap leading-8 text-slate-700 text-[17px]">
          {letter}
        </p>

      </div>

    </div>
  );
};

export default CoverLetter;