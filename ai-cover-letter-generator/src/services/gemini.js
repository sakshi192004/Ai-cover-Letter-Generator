


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${API_KEY}`;
export const generateCoverLetterAI = async (formData) => {
 const prompt = `
You are an expert HR professional.

Generate a professional ATS-friendly cover letter.

Candidate Details:
- Name: ${formData.name}
- Job Role: ${formData.role}
- Company: ${formData.company}
- Skills: ${formData.skills}

Rules:
- Return ONLY the cover letter.
- Do NOT use Markdown.
- Do NOT use **, #, ---, or bullet points.
- Do NOT include tips, explanations, notes, or customization suggestions.
- Do NOT add placeholders like [Your City] or [Email].
- Start directly with:
  Dear Hiring Manager,
- End with:
  Sincerely,
  ${formData.name}
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