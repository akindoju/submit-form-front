import React from 'react';
import { useHistory } from 'react-router';

const Profile = () => {
  const history = useHistory();

  return (
    <div className="row">
      <button
        className="col-1-of-2 btn"
        onClick={(e) => {
          e.preventDefault();
          history.push('/update');
        }}
      >
        Update Profile
      </button>
      <button
        className="col-1-of-2 btn"
        onClick={(e) => {
          e.preventDefault();
          history.push('/delete');
        }}
      >
        Delete Profile
      </button>
    </div>
  );
};

export default Profile;
