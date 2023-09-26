import React, { useState } from "react";
import axios from "axios";

export default function GithubUserData() {
  // State variables
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Telling page not to refresh!!
    console.log("Form Was SUbmitted");
    fetchData()
  };

  const fetchData = async () => {
    // Clear previous error and user data
    setError(null);
    setUserData(null);

    // Set loading to true
    setLoading(true);

    try {
      // Make a request to GitHub API
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
      console.log(response)
    } catch (err) {
      setError(err.message);
    } finally {
      // Set loading to false
      setLoading(false);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">GitHub Username: </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Fetch User</button>
    </form>
    {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h2>{userData.login}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
        </div>
      )}
    </div>
  );
}
