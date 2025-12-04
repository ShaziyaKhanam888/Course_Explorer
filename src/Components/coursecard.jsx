export default function CourseCard({ title, description, category }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
        {category}
      </span>
    </div>
  );
}
