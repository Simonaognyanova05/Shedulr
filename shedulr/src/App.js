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
import WeekPlan from './components/WeeklyShadule/WeekPlan';
import CreateWeeklyShadule from './components/CreateWeeklyShadule';
import UpdateWeekShadule from './components/UpdateWeekShadule';


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/week-plan' element={<WeekPlan />} />
          <Route path='/create-week-plan' element={<CreateWeeklyShadule />} />

          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-task' element={<Create />} />
          <Route path='/task-list' element={<Tasks />} />
          <Route path='/remove/:taskId' element={<Delete />} />
          <Route path='/update/:taskId' element={<Update />} />
          <Route path='/updateWeekPlan/:shaduleId' element={<UpdateWeekShadule />} />

        </Routes>
        <Footer />
      </AuthProvider>

    </>
  );
}

export default App;
