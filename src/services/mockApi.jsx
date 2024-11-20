// Mock API for CRUD operations on users and roles

let users = [
    { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' },
  ];
  
  let roles = [
    { id: 1, name: 'Admin', permissions: ['read', 'write', 'delete'] },
    { id: 2, name: 'User', permissions: ['read'] },
  ];
  
  // Simulate API call to fetch users
  export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(users), 500); // Mock delay
    });
  };
  
  // Simulate API call to create a new user
  export const createUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = { ...user, id: users.length + 1 };
        users.push(newUser);
        resolve(newUser);
      }, 500); // Mock delay
    });
  };
  
  // Simulate API call to update an existing user
  export const updateUser = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          users[index] = user;
          resolve(user);
        }
      }, 500); // Mock delay
    });
  };
  
  // Simulate API call to delete a user
  export const deleteUser = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        users = users.filter((user) => user.id !== id);
        resolve(id);
      }, 500); // Mock delay
    });
  };
  
  // Simulate API call to fetch roles
  export const fetchRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(roles), 500); // Mock delay
    });
  };
  
  // Simulate API call to create a new role
  export const createRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRole = { ...role, id: roles.length + 1 };
        roles.push(newRole);
        resolve(newRole);
      }, 500); // Mock delay
    });
  };
  
  // Simulate API call to update an existing role
  export const updateRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = roles.findIndex((r) => r.id === role.id);
        if (index !== -1) {
          roles[index] = role;
          resolve(role);
        }
      }, 500); // Mock delay
    });
  };
  
  // Simulate API call to delete a role
  export const deleteRole = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.filter((role) => role.id !== id);
        resolve(id);
      }, 500); // Mock delay
    });
  };
  