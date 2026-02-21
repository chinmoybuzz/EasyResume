import { useTheme } from "../../context/ThemeContext";

const Users = () => {
  const { isDark } = useTheme();

  return (
    <div className={`transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <div className={`rounded-xl shadow overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <table className="w-full text-left">
          <thead className={`${isDark ? "bg-gray-700 text-gray-200" : "bg-gray-200"}`}>
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3].map((user) => (
              <tr key={user} className={`border-t transition ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-100"}`}>
                <td className="p-4">User {user}</td>
                <td className="p-4">user{user}@mail.com</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${isDark ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"}`}>User</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
