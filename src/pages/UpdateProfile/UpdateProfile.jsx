import React from 'react';
import { useHistory } from 'react-router';

const UpdateProfile = () => {
  const history = useHistory();

  return (
    <div className="row">
      <button
        className="col-1-of-3 btn"
        onClick={(e) => {
          e.preventDefault();
          history.push('/update-name');
        }}
      >
        Update Name
      </button>

      <button
        className="col-1-of-3 btn"
        onClick={(e) => {
          e.preventDefault();
          history.push('/update-email');
        }}
      >
        Update Email
      </button>

      <button
        className="col-1-of-3 btn"
        onClick={(e) => {
          e.preventDefault();
          history.push('/update-password');
        }}
      >
        Update Password
      </button>
    </div>
  );
};

export default UpdateProfile;
