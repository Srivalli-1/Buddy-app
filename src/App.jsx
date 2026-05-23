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
          element={<Dashboard />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/calendar"
          element={<Calendar />}
        />

        <Route
          path="/bucketlist"
          element={<BucketList />}
        />

        <Route
          path="/buddies"
          element={<Buddies />}
        />

      </Routes>

    </BrowserRouter>

  );
}