import { Link } from "react-router-dom";
import { navlinks } from "../../config/constants";
import LanguageSwitcher from "../../components/LanguageSwitcher";

const NavItem = ({
  to,
  label,
  className,
}: {
  to: string;
  label: string;
  className?: string;
}) => {
  return (
    <Link
      className={`hover:bg-secondary hover:text-white rounded-md px-2 py-1 border border-accent md:border-0 ${className}`}
      to={to}
    >
      {label}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex flex-col md:flex-row justify-between p-4">
        <div>
          <span>AdminSuite</span>
        </div>
        <div className="flex gap-6">
          {navlinks?.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              label={link.label}
              className={link.className}
            />
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
