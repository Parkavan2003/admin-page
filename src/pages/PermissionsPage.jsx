import { useState } from "react";

const PermissionsPage = () => {
  const [roles, setRoles] = useState([
    {
      role: "Admin",
      permissions: { read: true, create: true, update: true, delete: true, export: true },
      isEditing: false,  // Edit mode flag
    },
    {
      role: "Manager",
      permissions: { read: true, create: true, update: false, delete: false, export: false },
      isEditing: false,
    },
    {
      role: "Marketing",
      permissions: { read: false, create: true, update: true, delete: false, export: false },
      isEditing: false,
    },
    {
      role: "Editor",
      permissions: { read: true, create: true, update: true, delete: true, export: false },
      isEditing: false,
    },
    {
      role: "Viewer",
      permissions: { read: true, create: false, update: false, delete: false, export: true },
      isEditing: false,
    },
    {
      role: "HR",
      permissions: { read: true, create: false, update: false, delete: false, export: true },
      isEditing: false,
    },
  ]);

  const handlePermissionChange = (roleIndex, permission) => {
    const updatedRoles = [...roles];
    updatedRoles[roleIndex].permissions[permission] = !updatedRoles[roleIndex].permissions[permission];
    setRoles(updatedRoles);
  };

  const handleEditClick = (roleIndex) => {
    const updatedRoles = [...roles];
    updatedRoles[roleIndex].isEditing = !updatedRoles[roleIndex].isEditing; // Toggle edit mode
    setRoles(updatedRoles);
  };

  const handleSaveClick = (roleIndex) => {
    const updatedRoles = [...roles];
    updatedRoles[roleIndex].isEditing = false; // Save and exit edit mode
    setRoles(updatedRoles);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Roles & Permissions</h2>

      {/* Permissions Table */}
      <table className="min-w-full bg-white border-collapse border rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-100 text-left text-sm font-semibold text-gray-600">
            <th className="px-6 py-4">Roles</th>
            <th className="px-6 py-4 text-center">Read</th>
            <th className="px-6 py-4 text-center">Create</th>
            <th className="px-6 py-4 text-center">Update</th>
            <th className="px-6 py-4 text-center">Delete</th>
            <th className="px-6 py-4 text-center">Export</th>
            <th className="px-6 py-4 text-center">Actions</th> {/* Actions column */}
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="px-6 py-4 text-gray-800 font-medium">{role.role}</td>
              {["read", "create", "update", "delete", "export"].map((permission) => (
                <td key={permission} className="px-6 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={role.permissions[permission]}
                    onChange={() => handlePermissionChange(index, permission)}
                    disabled={!role.isEditing} // Disable checkboxes if not in edit mode
                    className="w-5 h-5 cursor-pointer accent-blue-500"
                  />
                </td>
              ))}
              <td className="px-6 py-4 text-center">
                {!role.isEditing ? (
                  <button
                    onClick={() => handleEditClick(index)}
                    className="px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={() => handleSaveClick(index)}
                    className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionsPage;
