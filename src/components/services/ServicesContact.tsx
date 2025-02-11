import { Link } from 'react-router-dom';

const ServicesContact = () => {
  return (
    <div className='flex w-full justify-center items-center'>
      <ul className='w-full flex justify-center items-center flex-wrap gap-3'>
        <li className='my-2'>
          <Link
            to={''}
            className='border border-gray-300 bg-zinc-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition'
          >
            الخطة التدريبية
          </Link>
        </li>
        <li className='my-2'>
          <Link
            to={''}
            className='border border-gray-300 bg-zinc-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition'
          >
            خطوات اعداد الخطة التدريبية
          </Link>
        </li>
        <li className='my-2'>
          <Link
            to={''}
            className='border border-gray-300 bg-zinc-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition'
          >
            الاعتمادات
          </Link>
        </li>
        <li className='my-2'>
          <Link
            to={''}
            className='border border-gray-300 bg-zinc-300 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 transition'
          >
            الدورات التدريبية
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesContact;
