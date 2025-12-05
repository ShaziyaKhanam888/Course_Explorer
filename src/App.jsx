// src/App.jsx
import { useState } from "react";
import Sidebar from "./Components/sidebar.jsx";
import Breadcrumbs from "./Components/breadcrumbs.jsx";
import MainContent from "./Components/main-content.jsx";
import Home from "./Pages/home.jsx";
import CourseDetail from "./Pages/coursedetails.jsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  return (
    <div className="flex h-screen md:flex-row sm:flex-col">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        setSelectedTopic={setSelectedTopic}
        setSelectedSubtopic={setSelectedSubtopic}
      />

      <main className="flex-1 overflow-auto bg-gray-50 md:p-6 sm:p-2">
        <MainContent
          selectedTopic={selectedTopic}
          selectedSubtopic={selectedSubtopic}
          setSelectedSubtopic={setSelectedSubtopic}
          setSelectedTopic={setSelectedTopic}
        />
      </main>

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Breadcrumbs
              course={selectedCourse}
              topic={selectedTopic}
              subtopic={selectedSubtopic}
            />
          </div>
        </div>

        {!selectedCourse ? (
          <Home setSelectedCourse={setSelectedCourse} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3  sm:grid-cols-2 gap-6">
            <div className="lg:col-span-2">
              <CourseDetail course={selectedCourse} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
