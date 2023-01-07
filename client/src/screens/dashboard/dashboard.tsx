import Postfield from '~/components/PostInput';
import TabsCard from '~/appkit/TabsCard';
import DashboardHeader from '~/components/header/DashboardHeader';
import Post from '~/components/Post';

function Dashboard() {
  return (
    <>
      <div className="relative">
        <DashboardHeader />
        <div className="grid grid-cols-10">
          <div className="sm:col-span-2 ">{/* Left content goes here */}</div>
          <div className="sm:col-span-4 col-span-8 w-full mb-5">
            <div className="sm:visible sm:static invisible absolute">
              <Postfield />
            </div>
            <Post
              posts={[
                {
                  id: 1,
                  content: 'Hello world',
                  author: 'John Doe',
                  createdAt: '2021-01-01',
                  likes: 0,
                  shares: 0,
                  comments: 0,
                  images: ['https://picsum.photos/200/300'],
                },
                {
                  id: 2,
                  content: 'Hello world',
                  author: 'John Doe',
                  createdAt: '2021-01-01',
                  likes: 0,
                  shares: 0,
                  comments: 0,
                },
                {
                  id: 3,
                  content: 'Hello world',
                  author: 'John Doe',
                  createdAt: '2021-01-01',
                  likes: 0,
                  shares: 0,
                  comments: 0,
                },
                {
                  id: 4,
                  content: 'Hello world',
                  author: 'John Doe',
                  createdAt: '2021-01-01',
                  likes: 0,
                  shares: 0,
                  comments: 0,
                  images: [
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                    'https://picsum.photos/200/300',
                  ],
                },
                {
                  id: 5,
                  content: 'Hello world',
                  author: 'John Doe',
                  createdAt: '2021-01-01',
                  likes: 0,
                  shares: 0,
                  comments: 0,
                },
              ]}
            />
          </div>
          <div className="col-span-2 px-5 sm:visible invisible">
            <div className="sticky" style={{ top: '70px' }}>
              <input type="text" placeholder="Search" className="input input-bordered w-full mb-5 max-w-xs" />
              <TabsCard
                tabs={[
                  { label: 'Trending', content: <div>Trending</div> },
                  { label: 'Suggestion', content: <div>Suggestion</div> },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
