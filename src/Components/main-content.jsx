import { useState, useEffect } from "react";
import {
  getProgress,
  toggleSubtopicProgress,
} from "../Components/progress.jsx";

export default function MainContent({ selectedTopic, setSelectedTopic }) {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  if (!selectedTopic)
    return (
      <div className="p-6 text-gray-500">Select a topic to view details.</div>
    );

  const completedCount = Object.values(progress[selectedTopic.id] || {}).filter(
    Boolean
  ).length;
  const total = selectedTopic.subtopics.length;
  const percent = Math.round((completedCount / total) * 100);

  return (
    <div className="p-6 space-y-6">
      <button
        className="text-blue-600 underline text-sm"
        onClick={() => setSelectedTopic(null)}
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold">{selectedTopic.title}</h2>
      <p className="text-gray-600 mb-4">{selectedTopic.description}</p>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between text-sm font-semibold mb-1">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            style={{ width: `${percent}%` }}
            className="h-full bg-blue-600 transition-all"
          ></div>
        </div>
      </div>

      {selectedTopic.subtopics.map((sub) => (
        <div
          key={sub.id}
          className="border p-4 rounded bg-white shadow space-y-3"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{sub.title}</h3>

            <input
              type="checkbox"
              checked={progress[selectedTopic.id]?.[sub.id] || false}
              onChange={() =>
                setProgress(toggleSubtopicProgress(selectedTopic.id, sub.id))
              }
            />
          </div>

          <p className="text-gray-700">{sub.content}</p>

          <strong className="block">Learning Objectives:</strong>
          <ul className="list-disc ml-6 text-gray-700">
            {sub.objectives.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>

          <strong className="block">Example Code:</strong>
          <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-x-auto">
            {sub.codeExample}
          </pre>
        </div>
      ))}
    </div>
  );
}
