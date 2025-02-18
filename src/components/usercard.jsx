// write the component code here
// usercard.jsx

import React from 'react';
// import './usercard.css'; // You can create a custom CSS file for styling

const Usercard = () => {
  // Static details for the user
  const profilePhoto = 'https://randomuser.me/api/portraits/men/1.jpg'; // Dummy image link
  const name = 'Boy'; // Static name
  const email = 'Boy@example.com'; // Static email
  const phone = '+1 234 567 890'; // Static phone number
  const address = '123, Random St, Example City, Country'; // Static address

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="User Profile" className="usercard__photo" />
      <div className="usercard__details">
        <h3 className="usercard__name">{name}</h3>
        <p className="usercard__email">{email}</p>
        <p className="usercard__phone">{phone}</p>
        <p className="usercard__address">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
