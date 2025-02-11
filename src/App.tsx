import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './pages/header-index';
import Footer from './pages/footer-index';

const Home = lazy(() => import('./pages/home-index'));
const Services = lazy(() => import('./pages/services-index'));
const NotFound = lazy(() => import('./NotFound'));
const Events = lazy(() => import('./pages/event-index'));

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-zinc-200 text-gray-900'>
      <Header />
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-screen text-xl'>
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Events />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
