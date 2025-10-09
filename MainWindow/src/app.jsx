import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import CreateClass from './Pages/CreateClass.jsx'
import EditClass from './Pages/EditClass.jsx'
import ManageClass from './Pages/ManageClass.jsx'
import Classroom from './Pages/Classroom.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createclass" element={<CreateClass />} />
        <Route path="/editclass" element={<EditClass />} />
        <Route path="/manageclass" element={<ManageClass />} />
        <Route path="/classroom" element={<Classroom />} />
      </Routes>
    </Router>
  );
}

export default App;
