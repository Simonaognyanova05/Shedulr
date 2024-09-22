import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Tasks from './components/Tasks';
import Home from './components/Home';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create-task' element={<Create />} />
        <Route path='/task-list' element={<Tasks />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
