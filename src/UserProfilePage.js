// UserProfilePage.js
import React from 'react';

function UserProfilePage() {
  const handleLogout = () => {
    // Logic to handle logout
    alert('User has logged out');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>User Profile Page</h2>
          {/* Add user profile page content */}
          <p>This is the user profile page content.</p>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
