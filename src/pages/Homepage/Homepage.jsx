import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router';

const Users = () => {
  const history = useHistory();

  return (
    <div className="user">
      <button
        className="user__btn user__btn--1"
        onClick={(e) => {
          e.preventDefault();
          history.push('/register');
        }}
      >
        Register
      </button>
      <button
        className="user__btn user__btn--2"
        onClick={(e) => {
          e.preventDefault();
          history.push('/users');
        }}
      >
        Get Users
      </button>
      <button
        className="user__btn user__btn--3"
        onClick={(e) => {
          e.preventDefault();
          history.push('/');
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default Users;
