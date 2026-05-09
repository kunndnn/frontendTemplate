import { Outlet } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import Header from "./admin/Header";
import Footer from "./admin/Footer";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-5">
          <Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
