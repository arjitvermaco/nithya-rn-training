import React, { useEffect, useState } from "react";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        console.log(response);
        // console.log(response.json())
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      }).catch((error)=>{
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              {user.login}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
