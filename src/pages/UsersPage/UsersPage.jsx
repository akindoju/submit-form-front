import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <h4>{user.email}</h4>
      ))}
      <button
        className="printBtn"
        onClick={(event) => {
          event.preventDefault();
          window.print();
        }}
      >
        Print
      </button>
    </div>
  );
};

export default UsersPage;
