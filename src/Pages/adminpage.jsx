import { useState } from "react";
import courses from "../Data/courses.json";

export default function Sidebar({
  sidebarOpen = true,
  setSidebarOpen = () => {},
  selectedCourse,
  setSelectedCourse,
  setSelectedTopic,
  setSelectedSubtopic,
}) {
  const [expandedCourseId, setExpandedCourseId] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 overflow-hidden ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      {sidebarOpen && (
        <div className="p-3">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full p-2 border rounded mb-3 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {sidebarOpen && (
        <nav className="p-3 pt-0">
          {courses
            .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()))
            .map((course) => {
              const isExpanded = expandedCourseId === course.id;
              const isSelected = selectedCourse?.id === course.id;

              return (
                <div key={course.id} className="mb-3">
                  <button
                    className={`w-full flex justify-between items-center text-left p-2 text-sm rounded hover:bg-gray-100 ${
                      isSelected ? "bg-blue-50 border-l-4 border-blue-500" : ""
                    }`}
                    onClick={() => {
                      setSelectedCourse(course);
                      setSelectedTopic(null);
                      setSelectedSubtopic(null);
                      setExpandedCourseId(isExpanded ? null : course.id);
                    }}
                  >
                    <div>
                      <div className="font-semibold">{course.title}</div>
                      <div className="text-xs text-gray-600">
                        {course.subtitle}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
        </nav>
      )}
    </aside>
  );
}
