import { Outlet, useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <nav className="mb-4 space-x-4">
        <Link to="profile" className="text-blue-600 hover:underline">
          Profile
        </Link>
        <Link to="students" className="text-blue-600 hover:underline">
          Students
        </Link>
      </nav>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}
