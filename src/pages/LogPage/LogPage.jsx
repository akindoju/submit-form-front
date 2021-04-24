import React, { useEffect, useState } from 'react';
import './LogPage.css';

const LogPage = () => {
  const [users, setUsers] = useState([]);

  const getLog = () =>
    fetch(`http://localhost:5000/log`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });

  useEffect(() => {
    getLog();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Email</th>
          <th>Password</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            {users.map((user) => {
              return <div className="list">{user.email}</div>;
            })}
          </td>
          <td>
            {users.map((user) => {
              return <div className="list">{user.password}</div>;
            })}
          </td>
          <td>
            {users.map((user) => {
              return <div className="list">{user.date}</div>;
            })}
          </td>
          <td>
            {users.map((user) => {
              return <div className="list">{user.status}</div>;
            })}
          </td>
        </tr>
      </table>
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

export default LogPage;
