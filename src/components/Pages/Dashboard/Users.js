import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Spinner from "../../Local/Spinner/Spinner";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading,refetch } = useQuery("users", () =>
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
     
      <div className="overflow-x-auto mx-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow  index={index} refetch={refetch} key={user._id} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
