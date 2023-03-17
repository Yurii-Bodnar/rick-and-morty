import LoaderSpinier from 'component/LoaderSpinier/LoaderSpinier';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Suspense fallback={<LoaderSpinier />}>
      <Outlet />
    </Suspense>
  );
};

export default SharedLayout;
