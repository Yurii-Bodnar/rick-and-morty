import LoaderSpinier from 'component/LoaderSpinier/LoaderSpinier';
import { createContext, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const dataContext = createContext();
const App = () => {
  const SharedLayout = lazy(() =>
    import('./component/SharedLayout/SharedLayout')
  );
  const HomePage = lazy(() => import('pages/HomePage/HomePage'));
  const DetailsPage = lazy(() => import('pages/DetailsPage/DetailsPage'));
  return (
    <Suspense fallback={<LoaderSpinier />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
