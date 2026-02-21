import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div className={`space-y-12 transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
      {/* Product Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className={`p-6 rounded-xl shadow transition hover:shadow-lg ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
              <h3 className="text-lg font-semibold mb-2">Product {item}</h3>

              <p className={`${isDark ? "text-gray-300" : "text-gray-500"}`}>Product description goes here.</p>

              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">View</button>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Categories</h2>

        <div className="flex flex-wrap gap-10 justify-between">
          <div className={`rounded-full w-40 h-40 flex items-center justify-center text-lg font-semibold shadow transition ${isDark ? "bg-blue-900 text-white" : "bg-blue-200 text-black"}`}>Category 1</div>

          <div className={`rounded-full w-40 h-40 flex items-center justify-center text-lg font-semibold shadow transition ${isDark ? "bg-green-900 text-white" : "bg-green-200 text-black"}`}>Category 2</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
