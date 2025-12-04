export default function CourseDetail({
  course,
  selectedTopic,
  setSelectedTopic,
  selectedSubtopic,
  setSelectedSubtopic,
}) {
  if (!course) return null;

  // Show course overview + topic list if no topic selected
  if (!selectedTopic) {
    return (
      <div className="bg-white p-6 rounded-md shadow">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        {course.subtitle && (
          <p className="text-gray-600 mt-1">{course.subtitle}</p>
        )}
        {course.description && (
          <p className="text-gray-700 mt-4">{course.description}</p>
        )}

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Topics</h3>
          <div className="mt-3 space-y-3">
            {Array.isArray(course.topics) && course.topics.length > 0 ? (
              course.topics.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTopic(t);
                    setSelectedSubtopic(null);
                  }}
                  className="w-full text-left p-3 border rounded hover:bg-gray-50"
                >
                  <div className="font-medium">{t.title}</div>
                  {t.description && (
                    <div className="text-sm text-gray-500 mt-1">
                      {t.description}
                    </div>
                  )}
                </button>
              ))
            ) : (
              <div className="text-gray-500">No topics available</div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // If a topic is selected, a header is shown here; MainContent will show subtopics/subtopic detail.
  return (
    <div className="bg-white p-6 rounded-md shadow">
      <h2 className="text-2xl font-bold">{selectedTopic.title}</h2>
      {selectedTopic.description && (
        <p className="text-gray-600 mt-1">{selectedTopic.description}</p>
      )}
      <div className="mt-4 text-sm text-gray-500">
        Select a lesson on the right to start.
      </div>
    </div>
  );
}
