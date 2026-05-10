import Card from "../../components/Card";
import Table from "../../components/Table";
import { Edit, Trash2 } from "lucide-react";

const User = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "[EMAIL_ADDRESS]",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "[EMAIL_ADDRESS]",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "[EMAIL_ADDRESS]",
      role: "Editor",
      status: "Active",
    },
  ];

  const headers = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: (item: any) => (
        <span className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/10 text-primary">
          {item.role}
        </span>
      ),
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: (item: any) => (
        <span
          className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {item.status}
        </span>
      ),
    },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: () => (
        <div className="flex gap-3">
          <button
            className="text-primary hover:text-blue-700 transition-colors"
            title="Edit"
          >
            <Edit size={18} />
          </button>
          <button
            className="text-red-500 hover:text-red-700 transition-colors"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Users Management</h1>
      <Card>
        <div className="overflow-x-hidden">
          <Table headers={headers} data={data} />
        </div>
      </Card>
    </div>
  );
};

export default User;
