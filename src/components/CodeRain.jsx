import { useMemo } from "react";

const codeSnippets = [
  "import numpy as np;",
  "def train_model(data):",
  "model.fit(X, y)",
  "neural_network.forward()",
  "const future = AI;",
  "system.learn();",
  "console.log('AI');",
  "public static void main()",
  "vector<int> data;",
  "std::cout << AI;",
  "class NeuralNetwork",
  "return prediction;",
  "if (accuracy > 0.90)",
  "for(int i = 0; i < n; i++)",
  "import torch",
  "from sklearn import",
  "model.predict(X)",
  "async function runAI()",
  "const model = await loadModel()",
  "<div class='neural'>",
  "</AI_SYSTEM>",
  "display: flex;",
  "background: #050507;",
  "SELECT * FROM neural_data;",
  "CREATE MODEL intelligence;",
  "while (learning) {",
  "agent.observe();",
  "agent.reason();",
  "agent.act();",
  "AI.initialize();",
  "knowledge += experience;",
  "01001001 01001001",
  "10110100 01101010",
  "11001001 10110101",
];

function CodeRain() {
  const columns = useMemo(() => {
    return Array.from({ length: 28 }, (_, index) => ({
      id: index,

      left: `${index * 3.7 + Math.random() * 2}%`,

      delay: `${Math.random() * 8}s`,

      duration: `${12 + Math.random() * 15}s`,

      opacity: 0.08 + Math.random() * 0.12,

      size: 8 + Math.random() * 3,

      snippets: Array.from(
        { length: 7 },
        () =>
          codeSnippets[
            Math.floor(Math.random() * codeSnippets.length)
          ]
      ),
    }));
  }, []);

  return (
    <div className="code-rain" aria-hidden="true">
      {columns.map((column) => (
        <div
          className="code-rain-column"
          key={column.id}
          style={{
            left: column.left,
            animationDelay: column.delay,
            animationDuration: column.duration,
            opacity: column.opacity,
            fontSize: `${column.size}px`,
          }}
        >
          {column.snippets.map((code, index) => (
            <div
              className="code-rain-line"
              key={index}
            >
              {code}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default CodeRain;
