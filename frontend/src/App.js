import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [output, setOutput] = useState("");
  const [isDark, setIsDark] = useState(true);

  // ANALYZE CODE
   const analyzeCode = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/analyze`,
        { code }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);

      setResult({
        bug: "Backend connection failed",
        hint: "Check if backend server is running",
        suggestion: "Run node server.js",
        complexity: "-"
      });
    }
  };

  // RUN CODE
  const runCode = async () => {
    try {
      const response = await fetch(
        `${API_URL}/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ code })
        }
      );

      const data = await response.json();

      setOutput(data.output);
    } catch (error) {
      console.log(error);

      setOutput("Execution failed");
    }
  };

  return (
    <div
      className={`h-screen ${
        isDark
          ? "bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white"
          : "bg-gradient-to-br from-[#f0f4ff] via-[#ffffff] to-[#e8f0fe] text-gray-900"
      } overflow-hidden`}
    >
      {/* HEADER */}
      <div
        className={`h-16 ${
          isDark ? "bg-white/5" : "bg-white/60"
        } backdrop-blur-lg border-b flex items-center justify-between px-6`}
      >
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-indigo-500 text-3xl">
            {"<>"}
          </span>

          CodeMentor

          <span className="text-purple-500">
            AI
          </span>
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 rounded-xl bg-gray-700 text-white"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          <button
            onClick={runCode}
            className="px-5 py-2 rounded-xl bg-green-500 text-white"
          >
            Run Code
          </button>

          <button
            onClick={analyzeCode}
            className="px-5 py-2 rounded-xl bg-purple-500 text-white"
          >
            Analyze Code
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex h-[calc(100%-64px)]">
        {/* LEFT */}
        <div className="w-[65%] flex flex-col border-r border-gray-700">
          <Editor
            height="100%"
            defaultLanguage="cpp"
            theme={isDark ? "vs-dark" : "light"}
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 15
            }}
          />

          {/* TERMINAL */}
          <div className="h-40 bg-black text-green-400 p-4 overflow-auto">
            <h3 className="text-white font-bold mb-2">
              Terminal
            </h3>

            <pre>
              {output || "Run code to see output"}
            </pre>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[35%] p-5 overflow-y-auto">
          <h2 className="text-4xl font-bold mb-8">
            AI Assistant
          </h2>

          {result ? (
            <>
              <Card title="🐞 Bug" content={result.bug} />
              <Card title="💡 Hint" content={result.hint} />
              <Card title="⚡ Suggestion" content={result.suggestion} />
              <Card title="📊 Complexity" content={result.complexity} />
            </>
          ) : (
            <div className="p-6 rounded-xl border border-gray-700">
              Click Analyze to get AI feedback...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title, content }) {
  return (
    <div className="bg-[#0b1220] border border-gray-700 p-5 rounded-xl mb-4">
      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p>
        {content}
      </p>
    </div>
  );
}

export default App;