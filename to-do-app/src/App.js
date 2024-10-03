import { Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import Tasks from './components/Tasks/Tasks';
import Home from './components/Home';
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout';


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

        </Routes>
        <Footer />
      </AuthProvider>

    </>
  );
}

export default App;
