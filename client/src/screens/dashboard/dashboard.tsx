import Post from '~/components/Post';
import Postfield from '~/components/Postfield';
import TabsCard from '~/appkit/TabsCard';
import DashboardHeader from '~/components/header/DashboardHeader';

function Dashboard() {
  return (
    <>
      <div className='relative'>
        <DashboardHeader />
        <div className="grid grid-cols-10">
          <div className="col-span-2">{/* Left content goes here */}</div>
          <div className="col-span-4 w-full">
            <Postfield />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="col-span-2 px-5">
            <input type="text" placeholder="Search" className="input input-bordered w-full mb-5 max-w-xs" />
            <TabsCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
