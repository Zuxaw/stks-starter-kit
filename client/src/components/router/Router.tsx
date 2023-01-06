import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { isAuth } from '~/lib/firebase';
import DashboardHeader from '../header/DashboardHeader';
import Dashboard from '../screens/dashboard/dashboard';
import RedirectTo from './RedirectTo';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const connected = isAuth()
  const routes: RouteObject[] = [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
    {
      path: '/home',
      element: <DashboardHeader />,
      children: [
        {
          index: true,
          element: connected ? <Dashboard /> : <RedirectTo url="/" />,
        },
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
