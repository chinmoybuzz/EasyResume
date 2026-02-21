import { useTheme } from "../../context/ThemeContext";

const Dashboard = () => {
  const { isDark } = useTheme();

  const cardStyle = isDark ? "bg-gray-800 text-white" : "bg-white text-black";

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl shadow ${cardStyle}`}>
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className={`p-6 rounded-xl shadow ${cardStyle}`}>
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-3xl font-bold mt-2">450</p>
        </div>

        <div className={`p-6 rounded-xl shadow ${cardStyle}`}>
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl font-bold mt-2">$12,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
