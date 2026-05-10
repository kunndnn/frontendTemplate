import { ArrowUpNarrowWide, PersonStanding, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "100",
      icon: Users,
    },
    {
      title: "Active Users",
      value: "100",
      icon: Users,
    },
    {
      title: "Inactive Users",
      value: "100",
      icon: Users,
    },
  ];
  return (
    <div className="max-w-8xl w-full mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 border-primary border-b-4"
          >
            <div className="flex flex-col  justify-center">
              <div className="flex justify-between">
                <stat.icon
                  className="text-primary bg-blue-100 p-1.5 rounded"
                  size={30}
                />
                <div className="flex  items-center text-green-500">
                  <ArrowUpNarrowWide size={20} />
                  100%
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-500">{stat.title}</span>
                <p className="font-bold text-xl">{stat.value}</p>
              </div>
            </div>
            {/* <h2 className="text-lg font-medium text-gray-900">Total Users</h2>
          <p className="text-2xl font-medium text-gray-900">100</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
