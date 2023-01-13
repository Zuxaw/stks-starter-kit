import Avvvatars from 'avvvatars-react';
import { User } from 'firebase/auth';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import Theme from '~/appkit/Theme';
import { getUser, useAuth } from '~/lib/firebase';

const DashboardHeader = () => {
  const { data, isLoading } = useQuery<User | null, Error>('user', getUser);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
    navigate('/');
  };

  return (
    <div className='sticky top-0 bg-base-100 z-50 mb-2'>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-square" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
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
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <i className="fas fa-home mr-5" />
                    Home
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fas fa-user mr-5" />
                    Portfolio
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fas fa-envelope mr-5" />
                    Messages
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">STKS</a>
          </div>
        </div>
        <div className="flex-none gap-2 navbar-end">
          <Theme />
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {!isLoading ? (
                <div className="w-10 rounded-full">
                  {!data?.photoURL ? (
                    <Avvvatars value={data?.email || 'error'} size={40} />
                  ) : (
                    <img src={data.photoURL} referrerPolicy="no-referrer"  />
                  )}
                </div>
              ) : (
                <div className="w-10 rounded-full">
                  <Avvvatars value="Loading..." size={40} />
                </div>
              )}
            </label>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="mt-2 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>
                    <i className="fa-solid fa-gear mr-5" />
                    Settings
                  </a>
                </li>
                <li>
                  <a className="hover:bg-red-500 hover:text-white" onClick={handleClick}>
                    <i className="fas fa-sign-out-alt mr-5" />
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardHeader;
