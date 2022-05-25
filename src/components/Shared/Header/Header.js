import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { NavLink, useNavigate } from "react-router-dom"
import auth from "../../../firebase.init"

const Header = ({ children }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handelSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const handelSignIn = () => {
    navigate("/login");
  };
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full flex justify-between navbar bg-base-100 fixed top-0 z-50 lg:px-20">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal gap-x-2">
              <li>
                <NavLink to="/" className=" rounded-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className=" rounded-lg">
                  Blogs
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/reviews" className=" rounded-lg">
                  Reviews
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/products" className=" rounded-lg">
                  Products
                </NavLink>
              </li>
              {user && (
                <>
                  {" "}
                  <li>
                    <NavLink to="/myPortfolio" className=" rounded-lg">
                      MyPortfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard" className=" rounded-lg">
                      Dashboard
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex-end px-2 mx-2 text-2xl">
            {user ? (
              <>
                <p className=" font-bold text-amber-600">{user.displayName}</p>
                <button
                  onClick={handelSignOut}
                  className=" md:px-2 md:py-1 px-3 py-1 shadow-xl ml-3 text-white text-sm   bg-primary  rounded-full"
                >
                  signOut
                </button>
              </>
            ) : (
              <button
                onClick={handelSignIn}
                className=" md:p-1 shadow-xl text-white text-sm ml-3   bg-primary  rounded-full"
              >
                signIn
              </button>
            )}
          </div>
        </div>

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <NavLink to="/" className=" rounded-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className=" rounded-lg">
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className=" rounded-lg">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className=" rounded-lg">
              Products
            </NavLink>
          </li>
          {user && (
            <>
              {" "}
              <li>
                <NavLink to="/myPortfolio" className=" rounded-lg">
                  MyPortfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className=" rounded-lg">
                  Dashboard
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
