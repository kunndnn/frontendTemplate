import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./admin/Sidebar";
import Header from "./admin/Header";
import Footer from "./admin/Footer";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Overlay for mobile */}
      {open && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setOpen(false)}></div>}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header open={open} setOpen={setOpen} />

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
