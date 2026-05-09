import { lazy, Suspense } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Website Pages */
const Home = lazy(() => import("./pages/website/Home"));
const About = lazy(() => import("./pages/website/About"));
const NotFound = lazy(() => import("./pages/website/NotFound"));

/* Admin Auth Pages */
const Login = lazy(() => import("./pages/admin/auth/Login"));
const Signup = lazy(() => import("./pages/admin/auth/Signup"));
const ForgotPass = lazy(() => import("./pages/admin/auth/ForgotPass"));
const ResetPass = lazy(() => import("./pages/admin/auth/ResetPass"));

/* Admin Pages */
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Profile = lazy(() => import("./pages/admin/Profile"));
const User = lazy(() => import("./pages/admin/User"));

/* Layouts */
const AdminLayout = lazy(() => import("./pages/layouts/AdminLayout"));

/* Suspense Wrapper */
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

const router = createBrowserRouter([
  /* Website Routes */
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/about",
    element: (
      <SuspenseWrapper>
        <About />
      </SuspenseWrapper>
    ),
  },
  /* Admin Auth Routes */
  {
    path: "/admin/login",
    element: (
      <SuspenseWrapper>
        <Login />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/admin/signup",
    element: (
      <SuspenseWrapper>
        <Signup />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/admin/forgot-password",
    element: (
      <SuspenseWrapper>
        <ForgotPass />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/admin/reset-password",
    element: (
      <SuspenseWrapper>
        <ResetPass />
      </SuspenseWrapper>
    ),
  },
  /* Admin Layout Routes */
  {
    path: "/admin",
    element: (
      <SuspenseWrapper>
        <AdminLayout />
      </SuspenseWrapper>
    ),
    children: [
      {
        path: "dashboard",

        element: (
          <SuspenseWrapper>
            <Dashboard />
          </SuspenseWrapper>
        ),
      },

      {
        path: "profile",
        element: (
          <SuspenseWrapper>
            <Profile />
          </SuspenseWrapper>
        ),
      },

      {
        path: "users",
        element: (
          <SuspenseWrapper>
            <User />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  /* 404 */
  {
    path: "*",
    element: (
      <SuspenseWrapper>
        <NotFound />
      </SuspenseWrapper>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
