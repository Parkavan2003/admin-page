import { useState } from "react";
import { toast } from "react-toastify";
import { MdAddCircleOutline, MdDeleteOutline, MdEdit } from "react-icons/md";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      name: "Administrator",
      usersCount: 22,
      riskMeters: 126,
      applications: 308,
      permissions: "Admin",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    },
    {
      name: "Marketing",
      usersCount: 0,
      riskMeters: 2,
      applications: 0,
      permissions: "Custom",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    },
    {
      name: "Manager",
      usersCount: 0,
      riskMeters: 1,
      applications: 0,
      permissions: "Custom",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    },
    {
      name: "Editor",
      usersCount: 1,
      riskMeters: 1,
      applications: 0,
      permissions: "Custom",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    },
    {
      name: "Viewer",
      usersCount: 0,
      riskMeters: 0,
      applications: 0,
      permissions: "Custom",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    },
    {
      name: "Compliance Officer",
      usersCount: 1,
      riskMeters: 2,
      applications: 1,
      permissions: "Custom",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showAddRoleModal, setShowAddRoleModal] = useState(false);
  const [newRole, setNewRole] = useState({
    name: "",
    usersCount: 0,
    riskMeters: 0,
    applications: 0,
    permissions: "Custom",
    viewHomePage: "Yes",
    viewAppSecReporting: "Yes",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle adding a new role
  const handleAddRole = () => {
    setUsers([...users, newRole]);
    setNewRole({
      name: "",
      usersCount: 0,
      riskMeters: 0,
      applications: 0,
      permissions: "Custom",
      viewHomePage: "Yes",
      viewAppSecReporting: "Yes",
    });
    setShowAddRoleModal(false);
  };

  // Handle editing a user
  const handleEditUser = (index) => {
    setIsEditing(true);  // Mark as editing
    setEditIndex(index);  // Set the index of the user being edited
    const userToEdit = users[index];
    setNewRole(userToEdit);  // Pre-fill the form with the user's data
    setShowAddRoleModal(true);  // Show the modal for editing
  };

  const handleSaveEdit = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = newRole;  // Update the user in the users array
    setUsers(updatedUsers);  // Set the updated users state
    setIsEditing(false);  // Reset editing state
    setEditIndex(null);  // Reset the edit index
    toast.success("Role updated successfully!");
    setShowAddRoleModal(false);  // Close the modal after saving
  };

  // Handle deleting a user
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    toast.success("Role deleted successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      {/* Search and Add Role Button */}
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search by role or risk meter name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-96"
        />
        <button
          onClick={() => setShowAddRoleModal(true)}
          className="flex items-center px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <div className="mr-1">
          <MdAddCircleOutline/>
          </div>
          Add Role
        </button>
      </div>

      {/* Add Role Modal */}
      {showAddRoleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Role" : "Add New Role"}
            </h3>
            <input
              type="text"
              placeholder="Role Name"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="number"
              placeholder="Users Count"
              value={newRole.usersCount}
              onChange={(e) => setNewRole({ ...newRole, usersCount: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="number"
              placeholder="Risk Meters"
              value={newRole.riskMeters}
              onChange={(e) => setNewRole({ ...newRole, riskMeters: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <input
              type="number"
              placeholder="Applications"
              value={newRole.applications}
              onChange={(e) => setNewRole({ ...newRole, applications: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            />
            <select
              value={newRole.permissions}
              onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value })}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="Custom">Custom</option>
              <option value="Admin">Admin</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddRoleModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={isEditing ? handleSaveEdit : handleAddRole}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {isEditing ? "Save" : "Add Role"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* User Table */}
      <table className="min-w-full bg-white border-collapse border rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-100 text-left text-sm font-semibold text-gray-600">
            <th className="px-6">Name</th>
            <th className="px-6">Users</th>
            <th className="px-6">Risk Meters</th>
            <th className="px-6">Applications</th>
            <th className="px-6">Permissions</th>
            <th className="px-6">View Home Page</th>
            <th className="px-6">View AppSec Reporting Page</th>
            <th className="px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="px-6 text-gray-800 font-medium">{user.name}</td>
                <td className="px-6 text-gray-600">{user.usersCount}</td>
                <td className="px-6 text-gray-600">{user.riskMeters}</td>
                <td className="px-6 text-gray-600">{user.applications}</td>
                <td className="px-6">
                  <span
                    className={`px-3 rounded-full text-sm font-semibold ${
                      user.permissions === "Admin"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.permissions}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.viewHomePage}</td>
                <td className="px-6 py-4 text-gray-600">{user.viewAppSecReporting}</td>

                <td className="px-6 py-4 text-center space-x-2 flex">
                  <button
                    onClick={() => handleEditUser(index)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    
                    <MdEdit />
                   
                  </button>
                  <button
                    onClick={() => handleDeleteUser(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    
                    <MdDeleteOutline />
            
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
