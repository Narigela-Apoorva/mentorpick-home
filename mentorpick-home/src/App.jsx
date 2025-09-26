import { Routes, Route } from 'react-router-dom';

import { Navbar } from './Components/Navbar/Navbar';
import HomePage from './Components/Home/HomePage';
import CoursesPage from './Components/Courses/CoursesPage';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* add your other routes */}
        <Route path='/Courses' element={<CoursesPage/>}/>
        
      </Routes>
    </>
  );
}

export default App;
