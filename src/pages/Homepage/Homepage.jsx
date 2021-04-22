import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router';

const Users = () => {
  const history = useHistory();

  return (
    <div className="homepageContainer">
      <div className="row">
        <button
          className="col-1-of-4 btn"
          onClick={(e) => {
            e.preventDefault();
            history.push('/register');
          }}
        >
          Register
        </button>
        <button
          className="col-1-of-4 btn"
          onClick={(e) => {
            e.preventDefault();
            history.push('/users');
          }}
        >
          Get Users
        </button>
        <button
          className="col-1-of-4 btn"
          onClick={(e) => {
            e.preventDefault();
            history.push('/');
          }}
        >
          Sign In
        </button>
        <button
          className="col-1-of-4 btn"
          onClick={(e) => {
            e.preventDefault();
            history.push('/log');
          }}
        >
          Log
        </button>
      </div>
    </div>
  );
};

export default Users;
