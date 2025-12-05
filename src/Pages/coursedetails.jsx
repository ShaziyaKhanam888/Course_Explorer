export default function CourseDetail({ course, setSelectedTopic }) {
  if (!course) return null;

  return (
    <div className="bg-white p-6 rounded-md shadow">
      <h1 className="text-2xl font-bold">{course.title}</h1>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Topics</h3>

        <div className="mt-3 space-y-3">
          {course.topics.map((t) => (
            <div key={t.id} className="w-full text-left p-3 rounded bg-gray-50">
              <div className="font-medium">{t.title}</div>
              {t.description && (
                <div className="text-sm text-gray-500 mt-1">
                  {t.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
