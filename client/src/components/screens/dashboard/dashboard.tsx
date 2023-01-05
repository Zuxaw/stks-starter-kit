import {Head} from "~/components/shared/Head";

function Dashboard() {
  return (
    <>
      <Head title={'The page is not found'}></Head>
      <div className="hero h-screen">
        <div className="text-center hero-content text-3xl font-bold">
          <div>
            <h1>
              Hello world
            </h1>
            <div className='mt-4'>
              <a href='/' className='link-primary'>Top Page</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
