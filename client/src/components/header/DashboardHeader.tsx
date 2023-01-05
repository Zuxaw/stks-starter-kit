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
      <div className="navbar bg-base-100 m-2 rounded-xl shadow-lg border">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">STKS</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {!isLoading ? <div className="w-10 rounded-full">
                {!data?.photoURL ? <Avvvatars value={data?.email || "error"} size={40} />: <img src={data.photoURL} />}
              </div>
              : <Avvvatars value="Loading..." size={40} />}
            </label>
            <ul
              tabIndex={0}
              className="mt-5 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a className='hover:bg-red-500 hover:text-white' onClick={handleClick}>Logout</a>
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
