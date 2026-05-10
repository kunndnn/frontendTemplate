import { User, LayoutDashboard, Users, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";

const adminSidebarLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { to: "/admin/users", label: "Users", icon: <Users /> },
  { to: "/admin/profile", label: "Profile", icon: <User /> },
];

const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <aside
      className={`w-40 bg-primary text-white p-5 ${open ? "block fixed inset-y-0 left-0 z-50 min-h-screen" : "hidden"} md:block md:relative`}
    >
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        {open && (
          <Button
            className="md:hidden text-white"
            onClick={() => setOpen(false)}
          >
            <X />
          </Button>
        )}
      </div>
      <nav className="flex flex-col gap-3">
        {adminSidebarLinks.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            <div className="flex gap-2 text-white  p-1">
              {link.icon} {link.label}
            </div>
          </NavLink>
        ))}
      </nav>
      <Button className="bg-red-600">Logout</Button>
    </aside>
  );
};

export default Sidebar;
