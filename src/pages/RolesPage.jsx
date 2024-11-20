import { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState({
    viewDashboard: false,
    exportList: false,
    createSegment: false,
    campaignMaker: false,
    campaignChecker: false,
    updateIntegrations: false,
    updateDataManagement: false,
    updateSettings: false,
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle form submission for adding or editing a role
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRole = { name: roleName, permissions: { ...permissions } };

    if (editIndex !== null) {
      // Edit existing role
      const updatedRoles = [...roles];
      updatedRoles[editIndex] = newRole;
      setRoles(updatedRoles);
      setEditIndex(null);
    } else {
      // Add new role
      setRoles([...roles, newRole]);
    }

    // Reset form
    setRoleName("");
    setPermissions({
      ViewDashboard: false,
      ExportList: false,
      CreateSegment: false,
      CampaignMaker: false,
      CampaignChecker: false,
      UpdateIntegrations: false,
      UpdateDataManagement: false,
      UpdateSettings: false,
    });
  };

  // Handle permission toggle
  const handlePermissionChange = (permission) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: !prev[permission],
    }));
  };

  // Handle role edit
  const handleEdit = (index) => {
    const role = roles[index];
    setRoleName(role.name);
    setPermissions(role.permissions);
    setEditIndex(index);
  };

  // Handle role delete
  const handleDelete = (index) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Role Management</h2>

      {/* Role Form */}
      <form
        className="mb-8 p-6 border border-gray-300 rounded-lg shadow-lg bg-white max-w-3xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label className="block font-medium mb-2 text-gray-700" htmlFor="roleName">
            Role Name
          </label>
          <input
            type="text"
            id="roleName"
            value={roleName}
            placeholder="Enter the Role name"
            onChange={(e) => setRoleName(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6 flex flex-col">
          <p className="font-medium mb-2 text-gray-700">Permissions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.keys(permissions).map((perm) => (
              <label key={perm} className="flex items-center space-x-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={permissions[perm]}
                  onChange={() => handlePermissionChange(perm)}
                  className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="capitalize">{perm.replace(/([A-Z])/g, ' $1').trim()}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="px-6 mx-auto py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto"
        >
          {editIndex !== null ? "Update Role" : "Add Role"}
        </button>
      </form>

      {/* Role List */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Roles</h3>
        {roles.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                <th className="px-6 py-3">Role</th>
                {Object.keys(permissions).map((perm) => (
                  <th key={perm} className="px-6 py-3">{perm.replace(/([A-Z])/g, ' $1').trim()}</th>
                ))}
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-gray-800">{role.name}</td>
                  {Object.keys(role.permissions).map((perm) => (
                    <td
                      key={perm}
                      className={`px-6 py-4 text-center ${role.permissions[perm] ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {role.permissions[perm] ? 'YES' : 'NO'}
                    </td>
                  ))}
                  <td className="px-6 flex py-2 text-center space-x-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                    >
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center mt-6">No roles available. Add a new role above.</p>
        )}
      </div>
    </div>
  );
};

export default RolesPage;
