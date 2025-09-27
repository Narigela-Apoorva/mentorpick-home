import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/HomePage";
import CoursesPage from "./Components/Courses/CoursesPage";
import Events from "./Components/Home/Events";
import Testimonals from "./Components/Home/Testimonals";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* add your other routes */}
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Testimonals" element={<Testimonals />} />
      </Routes>
    </>
  );
}

export default App;
