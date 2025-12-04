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

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 overflow-hidden ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      {/* HEADER */}
      <div className="flex items-center gap-2 p-4 border-b">
        {/* HAMBURGER BUTTON */}
        <button
          className="p-2 rounded hover:bg-gray-100"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6 text-blue-600"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7h18M3 12h18M3 17h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* HEADING - ONLY VISIBLE WHEN SIDEBAR IS OPEN */}
        {sidebarOpen && <h3 className="text-lg font-semibold">Courses</h3>}
      </div>

      {/* COURSE LIST */}
      {sidebarOpen && (
        <nav className="p-3">
          {courses.map((course) => {
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

                  <svg
                    className={`w-4 h-4 transform transition ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* MAIN TOPICS LIST */}
                {isExpanded && (
                  <div className="pl-5 mt-2">
                    {course.topics.map((topic) => (
                      <button
                        key={topic.id}
                        className="w-full text-left text-sm p-1 hover:bg-gray-200 rounded"
                        onClick={() => {
                          setSelectedTopic(topic);
                          setSelectedSubtopic(null);
                        }}
                      >
                        {topic.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </aside>
  );
}
