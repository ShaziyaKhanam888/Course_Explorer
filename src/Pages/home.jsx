export default function Home() {
  return (
    <div className="bg-white p-6 rounded-md shadow">
      <h1 className="text-3xl font-bold mb-2">Welcome to Course Explorer</h1>
      <p className="text-gray-600">
        Select a course from the sidebar to begin. This app renders course
        topics and lesson content (learning objectives, key concepts, example
        code and detailed notes).
      </p>

      <div className="mt-6 text-sm text-gray-500">
        Tip: Collapse the sidebar on narrow screens to get more reading area.
      </div>
    </div>
  );
}
