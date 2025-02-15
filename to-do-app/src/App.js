import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Tasks from './components/Tasks/Tasks';
import Home from './components/Home';
import Logout from './components/Logout';
import Delete from './components/Delete';
import Update from './components/Update';


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-task' element={<Create />} />
          <Route path='/task-list' element={<Tasks />} />
          <Route path='/remove/:taskId' element={<Delete />} />
          <Route path='/update/:taskId' element={<Update />} />
        </Routes>
        <Footer />
      </AuthProvider>

    </>
  );
}

export default App;
