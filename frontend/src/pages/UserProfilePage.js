// components/UserProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`BASE_URL/api/users/${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  //   return (
  //     // Render the user profile
  //   );
};

export default UserProfile;
