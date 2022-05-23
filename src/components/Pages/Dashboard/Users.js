import React, { useEffect } from "react"
import { useQuery } from "react-query"
import Spinner from "../../Local/Spinner/Spinner"
import UserRow from "./UserRow"

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  useEffect(() => {
    console.log(users);
  }, [users]);
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h2> All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow refetch={refetch} index={index} key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
