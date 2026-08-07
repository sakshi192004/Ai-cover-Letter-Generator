import { useState } from "react";
import InputField from "./InputField";
import CoverLetter from "./CoverLetter";
import ResumeUpload from "./ResumeUpload";
import { extractResumeText } from "../utils/extractResumeText";
import { generateTemplate } from "../utils/templateGenerator";
import { generateCoverLetterAI } from "../services/gemini";
import {
  User,
  Briefcase,
  Building2,
  Code2,
  Sparkles,
} from "lucide-react";

const Form = () => {

  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    skills: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const [resumeFile, setResumeFile] = useState(null);

const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  console.log("Selected File:", file);

  setResumeFile(file);
};



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    // Resume Text Extract
    let resumeText = "";

    if (resumeFile) {
      resumeText = await extractResumeText(resumeFile);

      console.log("Resume Text:");
      console.log(resumeText);
    }

    // AI Call
    const result = await generateCoverLetterAI(formData, resumeText);

    setCoverLetter(result);

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
  className="
    w-[95%]
    sm:w-[90%]
    md:w-[85%]
    lg:max-w-[850px]
    bg-white
    rounded-3xl
    shadow-2xl
    p-5
    sm:p-8
    md:p-10
    mx-auto
    my-6
  "
>

      {/* Header */}

     <div className="text-center mb-8 sm:mb-10">

        <div className="text-4xl sm:text-5xl mb-3">
  🤖
</div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          AI Cover Letter Generator
        </h1>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-500 px-2">
          Create professional AI-powered cover letters in seconds.
        </p>

        <div className="flex justify-center mt-6">
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        </div>

      </div>

      {/* Form */}

      <form
  onSubmit={handleSubmit}
  className="mt-8 flex justify-center"
>
  <div className="w-full max-w-xl mx-auto space-y-6">

    {/* Input Fields */}
<div className="w-full max-w-[700px] px-0 sm:px-4">
    <InputField
      icon={<User size={18} className="text-indigo-600" />}
      label="Candidate Name"
      name="name"
      value={formData.name}
      placeholder="Enter your name"
      onChange={handleChange}
    />

    <InputField
      icon={<Briefcase size={18} className="text-indigo-600" />}
      label="Job Role"
      name="role"
      value={formData.role}
      placeholder="Frontend Developer"
      onChange={handleChange}
    />

    <InputField
      icon={<Building2 size={18} className="text-indigo-600" />}
      label="Target Company"
      name="company"
      value={formData.company}
      placeholder="Google"
      onChange={handleChange}
    />

    {/* Textarea */}

    <div>
      <label className="flex items-center justify-center gap-2 text-2xl  font-semibold text-slate-700 mb-3">
        <Code2 size={18} className="text-indigo-600" />
        Key Skills
      </label>

      <textarea
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        rows={5}
        placeholder="React, Node.js, Express.js, MongoDB..."
        className="
w-full
rounded-2xl
border-2
border-slate-200
bg-slate-50
px-5
py-4
text-base
sm:text-lg
outline-none
transition-all
duration-300
focus:border-indigo-500
focus:ring-4
focus:ring-indigo-100
resize-none
text-left
"
      />
    </div>


<ResumeUpload
  onFileChange={handleFileChange}
  file={resumeFile}
/>

    <button
      type="submit"
      disabled={loading}
      className="
w-full
bg-gradient-to-r
from-indigo-600
to-purple-600
text-white
py-4
sm:py-5
rounded-2xl
font-semibold
text-base
sm:text-lg
hover:scale-[1.02]
transition-all
duration-300
"
    >
      {loading ? "Generating..." : "✨ Generate Cover Letter"}
    </button>

    <CoverLetter letter={coverLetter} />

  </div>
  </div>
</form>
    </section>
  );
};

export default Form;