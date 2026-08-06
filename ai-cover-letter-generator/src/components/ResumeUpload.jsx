import { Upload } from "lucide-react";

const ResumeUpload = ({ onFileChange, file }) => {
  return (
    <div className="mb-8">

      <label className="block text-sm font-semibold text-slate-700 mb-3">
        Upload Resume (PDF)
      </label>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-2xl p-8 cursor-pointer hover:bg-indigo-50 transition">

        <Upload className="text-indigo-600 mb-3" size={40} />

        <p className="font-medium text-slate-700">
          Click to Upload Resume
        </p>

        <p className="text-sm text-slate-500 mt-1">
          PDF files only
        </p>

        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={onFileChange}
        />

        {file && (
  <p className="mt-3 text-center text-green-600 font-medium">
    ✅ {file.name}
  </p>
)}

      </label>

    </div>
  );
};

export default ResumeUpload;