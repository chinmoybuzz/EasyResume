import { useTheme } from "../../context/ThemeContext";

const AdminProducts = () => {
  const { isDark } = useTheme();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "$1200",
      stock: "In Stock",
    },
    {
      id: 2,
      name: "Headphones",
      price: "$200",
      stock: "Out of Stock",
    },
    {
      id: 3,
      name: "Mobile",
      price: "$800",
      stock: "In Stock",
    },
  ];

  return (
    <div className={`transition-colors duration-300 ${isDark ? "text-white" : "text-black"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>

        <button className={`px-5 py-2 rounded-lg font-medium transition ${isDark ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>+ Add Product</button>
      </div>

      {/* Table Container */}
      <div className={`rounded-xl shadow overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <table className="w-full text-left">
          <thead className={`${isDark ? "bg-gray-700 text-gray-200" : "bg-gray-200"}`}>
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className={`border-t transition ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-100"}`}>
                {/* Product Info */}
                <td className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                  <span className="font-medium">{product.name}</span>
                </td>

                {/* Price */}
                <td className="p-4">{product.price}</td>

                {/* Stock Badge */}
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${product.stock === "In Stock" ? (isDark ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700") : isDark ? "bg-red-900 text-red-300" : "bg-red-100 text-red-700"}`}>{product.stock}</span>
                </td>

                {/* Actions */}
                <td className="p-4 text-center space-x-3">
                  <button className={`px-3 py-1 rounded-md text-sm transition ${isDark ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-yellow-400 hover:bg-yellow-500"}`}>Edit</button>

                  <button className={`px-3 py-1 rounded-md text-sm transition ${isDark ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600 text-white"}`}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;
