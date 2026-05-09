import { User, LayoutDashboard, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";

const adminSidebarLinks = [
  { to: "/admin/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { to: "/admin/users", label: "Users", icon: <Users /> },
  { to: "/admin/profile", label: "Profile", icon: <User /> },
];

const Sidebar = () => {
  return (
    <aside className="w-40 bg-primary text-white p-5 hidden md:block">
      <h1 className="text-xl font-bold mb-5">Admin Panel</h1>
      <nav className="flex flex-col gap-3">
        {adminSidebarLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            <div className="flex gap-2 text-white">
              {link.icon} {link.label}
            </div>
          </NavLink>
        ))}
      </nav>
      <Button className="bg-error text-white">Logout</Button>
    </aside>
  );
};

export default Sidebar;
