import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gray-200 text-center px-6'>
      <h1 className='text-9xl font-bold text-gray-700'>404</h1>
      <h2 className='text-3xl font-semibold text-gray-800 mt-4'>
        الصفحة غير موجودة
      </h2>
      <p className='text-gray-600 mt-2'>
        عذرًا، الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها.
      </p>

      <Link
        to='/'
        className='mt-6 px-6 py-3 bg-primary text-dark rounded-lg shadow-md hover:bg-primary-dark transition'
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
