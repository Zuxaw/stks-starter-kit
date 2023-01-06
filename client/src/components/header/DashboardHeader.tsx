import Avvvatars from 'avvvatars-react';
import { User } from 'firebase/auth';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUser, useAuth } from '~/lib/firebase';

const DashboardHeader = () => {
  const { data, isLoading } = useQuery<User | null, Error>('user', getUser);
  const navigate = useNavigate();
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
    navigate('/');
  };

  return (
    <div>
      <div className="navbar m-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">STKS</a>
          </div>
        </div>
        <div className="flex-none gap-2 navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {!isLoading ? (
                <div className="w-10 rounded-full">
                  {!data?.photoURL ? (
                    <Avvvatars value={data?.email || 'error'} size={40} />
                  ) : (
                    <img src={data.photoURL} />
                  )}
                </div>
              ) : (
                <div className="w-10 rounded-full">
                  <Avvvatars value="Loading..." size={40} />
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="mt-5 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a className="hover:bg-red-500 hover:text-white" onClick={handleClick}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardHeader;
