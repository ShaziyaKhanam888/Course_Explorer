export default function Breadcrumbs({ course, topic, subtopic }) {
  return (
    <div className="text-sm text-gray-600 mb-3">
      <span className="text-blue-600 font-medium">Course Explorer</span>
      {course && <span className="mx-2">/</span>}
      {course && <span className="font-semibold">{course.title}</span>}
      {topic && <span className="mx-2">/</span>}
      {topic && <span>{topic.title}</span>}
      {subtopic && <span className="mx-2">/</span>}
      {subtopic && <span className="text-gray-800">{subtopic.title}</span>}
    </div>
  );
}
