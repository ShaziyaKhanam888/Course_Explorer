export default function CourseCard({ course, onClick }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition cursor-pointer bg-white">
      <h2 className="font-bold text-xl">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.subtitle}</p>
    </div>
  );
}
