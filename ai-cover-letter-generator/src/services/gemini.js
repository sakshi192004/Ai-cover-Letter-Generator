


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${API_KEY}`;
export const generateCoverLetterAI = async (formData, resumeText) => {
 const prompt = `
Write a professional ATS-friendly cover letter.

Candidate Name: ${formData.name}
Job Role: ${formData.role}
Target Company: ${formData.company}
Skills: ${formData.skills}

Resume:
${resumeText}

Instructions:
- Use the resume information wherever possible.
- Highlight relevant skills and projects.
- Do not use placeholders like [Your Name].
- Return only the cover letter.
`;
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    }),
  });

  const data = await response.json();

console.log("Status:", response.status);
console.log("Response:", data);

if (!response.ok) {
  throw new Error(data.error?.message || "API Error");
}

return data.candidates[0].content.parts[0].text;
};