import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const NotFound = lazy(() => import("./pages/website/NotFound"));

const Login = lazy(() => import("./pages/admin/auth/Login"));
const Signup = lazy(() => import("./pages/admin/auth/Signup"));
const ResetPass = lazy(() => import("./pages/admin/auth/ResetPass"));
const ForgotPass = lazy(() => import("./pages/admin/auth/ForgotPass"));

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Profile = lazy(() => import("./pages/admin/Profile"));
const User = lazy(() => import("./pages/admin/User"));

const Home = lazy(() => import("./pages/website/Home"));
const About = lazy(() => import("./pages/website/About"));

const AdminLayout = lazy(() => import("./pages/layouts/AdminLayout"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Admin Auth Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<Signup />} />
          <Route path="/admin/forgot-password" element={<ForgotPass />} />
          <Route path="/admin/reset-password" element={<ResetPass />} />

          {/* Admin Protected Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="profile" element={<Profile />} />

            <Route path="users" element={<User />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
