import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import auth from "../../../firebase.init"
import useAllUser from "../../../hooks/useAllUser"

const MyProfile = () => {
  const [user] = useAuthState(auth);
  // const { userId } = useParams();
  const [info] = useAllUser();
  // const [info ] = useUser({})

  const { register, handleSubmit, reset } = useForm();

  console.log(info);

  const onSubmit = (data, e) => {
    const email = user?.email;
    const userName = user?.displayName;
    const getAddress = data.address;
    const getPhone = data.phone;
    const getEducation = data.education;
    const getLinkedIn = data.linkedIn;

    const ownData = {
      user: email,
      name: userName,
      address: getAddress,
      phone: getPhone,
      education: getEducation,
      linkedIn: getLinkedIn,
    };
    console.log(getAddress);

    // if()

    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ownData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    // setInfo(data)

    console.log(data);
    e.target.reset();
    //toast
    toast.info(`Add ${user.displayName} Information Successfully`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  };
  return (
    <>
      <div className=" justify-center items-center">
        {info.map(
          (i,index) =>
          
            i?.email === user?.email && (
              <div key={index}>
             
                <form  onSubmit={handleSubmit(onSubmit)} className="lg:my-8 mb-64 lg:mb-8 md:mx-28 mx-8 lg:mx-28">
                  <div className="py-8 px-10 m-8 sm:m-0 sm:py-12 sm:px-12 bg-white  rounded-2xl shadow-xl ">
                    <div>
                      <h1 className="text-3xl text-center mb-6 text-transparent bg-clip-text font-bold bg-gradient-to-br from-amber-500 to-gray-500  cursor-pointe">
                        Please add your Own Details!
                      </h1>
                    </div>
                    <div className="space-y-4">
                      <input
                        placeholder="Name"
                        readOnly
                        value={user?.displayName}
                        className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                        {...register("name", { required: true, maxLength: 20 })}
                      />
                      <input
                        readOnly
                        placeholder="Email"
                        value={user?.email}
                        className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                        {...register("email", { required: true })}
                      />

                      <input
                        placeholder={i?.address ? i?.address : "Address"}
                        className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                        type="text"
                        value={i?.address}
                        {...register("address", { required: true })}
                      />
                      <input
                        placeholder={i?.phone ? i?.phone : "Phone"}
                        className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                        type="number"
                        {...register("phone", { required: true })}
                      />
                      <input
                        placeholder={i?.education ? i?.education : "Education"}
                        className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                        type="text"
                        {...register("education", { required: true })}
                      />
                      <input
                        // value={i?.linkedIn}
                        placeholder={
                          i?.linkedIn
                            ? i?.linkedIn
                            : "Enter Your Linked In Profile"
                        }
                        className="block text-sm py-3 px-4  rounded-lg w-full border outline-none"
                        type="text"
                        {...register("linkedIn", { required: true })}
                      />

                      <div className="text-center mt-6">
                        {
                          <input
                            className="font-bold  py-4 px-14 text-gray-800 rounded-full  bg-gradient-to-r from-slate-300 via-amber-200 to-gray-300 hover:bg-gradient-to-r hover:text-white hover:from-slate-400 hover:via-blue-400 hover:to-gray-400 "
                            type="submit"
                          />
                        }
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default MyProfile;
