import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Services from './components/services';
import NotFound from './NotFound';


const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900'>
      <Header />
      <Routes>
        <Route path='/' element={''} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
