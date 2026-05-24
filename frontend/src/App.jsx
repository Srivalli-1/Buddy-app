import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Tasks from "./pages/Tasks";
import Buddies from "./pages/Buddies";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import BucketList from "./pages/Bucketlist";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

       <Route
           path="/dashboard"
           element={
           <ProtectedRoute>
               <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
             <ProtectedRoute>
               <Tasks />
             </ProtectedRoute>}
           
        />

        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
            <Calendar />
            </ProtectedRoute>
            }
        />

        <Route
          path="/bucketlist"
          element={
            <ProtectedRoute>
          <BucketList />
          </ProtectedRoute>
        }
        />

        <Route
          path="/buddies"
          element={
            <ProtectedRoute>
             <Buddies />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}