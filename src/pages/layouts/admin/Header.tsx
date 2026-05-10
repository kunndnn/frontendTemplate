import { Menu, X } from "lucide-react";

const Header = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <header className="bg-white shadow p-4">
      <span className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </span>
      <span className="hidden md:block">Admin Header</span>
    </header>
  );
};

export default Header;
