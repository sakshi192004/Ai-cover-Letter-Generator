import React from 'react'
import Form from "./components/Form";

console.log(import.meta.env);
console.log(import.meta.env.VITE_GEMINI_API_KEY);


function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-5 py-12">
      <Form />
    </main>
  );
}

export default App;