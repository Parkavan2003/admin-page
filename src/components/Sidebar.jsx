import { FaExpeditedssl, FaUsers } from "react-icons/fa";
import { MdRebaseEdit } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Get the current route
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-gray-300 flex flex-col">
      {/* Title */}
      <h1 className="text-xl font-semibold px-4 py-4 text-center">Admin Dashboard</h1>

      <nav className="mt-2 flex-1 mx-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className={`px-4 py-2 flex items-center rounded ${
                location.pathname === "/" ? "bg-blue-600 text-white" : "hover:bg-gray-800"
              }`}
            >
              <div className="mr-2 text-2xl">
              <FaUsers />
              </div>
              Manage Users
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/roles"
              className={`px-4 py-2 flex items-center rounded ${
                location.pathname === "/roles" ? "bg-blue-600 text-white" : "hover:bg-gray-800"
              }`}
            >
              <div className="mr-2 text-2xl">
              <MdRebaseEdit />
              </div>
              Manage Roles
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/permissions"
              className={`px-4 py-2 flex items-center rounded ${
                location.pathname === "/permissions" ? "bg-blue-600 text-white" : "hover:bg-gray-800"
              }`}
            >
              <div className="mr-2 text-2xl">
              <FaExpeditedssl />
              </div>
              Manage Permissions
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
