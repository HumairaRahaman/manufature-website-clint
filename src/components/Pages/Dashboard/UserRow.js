import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user,index,refetch }) => {
    const {email,role, name} = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make an admin!')
            }
           return res.json()})
        .then(data=> {
           if(data.modifiedCount >0){
            refetch();
            toast.success(`Make Admin Successfully`);
           }
        })
    }
  return (
    <tr>
      <th>{index +1}</th>
      <td className=" text-xs sm:text-lg">{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs  bg-amber-600 text-white">Make Admin</button>}</td>
      
    </tr>
  );
};

export default UserRow;
