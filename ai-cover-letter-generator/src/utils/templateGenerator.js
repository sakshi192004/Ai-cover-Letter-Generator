export const generateTemplate = (formData) => {
  return `
Dear Hiring Manager at ${formData.company},

My name is ${formData.name}, and I am excited to apply for the ${formData.role} position at your company.

I have experience with ${formData.skills} and enjoy building modern, scalable, and user-friendly applications.

I believe my technical skills, problem-solving ability, and willingness to learn make me a strong candidate for this role.

Thank you for considering my application. I look forward to discussing how I can contribute to your team.

Sincerely,
${formData.name}
`;
};