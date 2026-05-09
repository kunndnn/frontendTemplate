import { NavLink } from "react-router-dom";

const adminSidebarLinks = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/users", label: "Users" },
  { to: "/admin/settings", label: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-5">
      <h1 className="text-xl font-bold mb-5">Admin Panel</h1>

      <nav className="flex flex-col gap-3">
        {adminSidebarLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
