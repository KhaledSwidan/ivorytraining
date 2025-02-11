import { Link } from 'react-router-dom';
import { FieldWorkItemProps } from '../../constants/links';
import { FaArrowLeft } from 'react-icons/fa';

export const FieldWorkItem: React.FC<FieldWorkItemProps> = ({
  image,
  title,
  description,
}) => (
  <div className='flex items-center justify-between w-3/4 max-w-sm p-6 mx-auto bg-stone-300 rounded-3xl shadow-lg text-white flex-col sm:text-center'>
    <div className='flex justify-start items-center flex-col'>
      <img
        src={image}
        alt={title}
        className='w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-lg shadow-md sm:mb-4'
      />
      <div className='ml-6 sm:ml-0'>
        <h2 className='text-2xl font-semibold mb-2 text-slate-800'>{title}</h2>
        <ul className='mt-2 text-gray-300 list-disc list-inside text-sm sm:text-base text-right'>
          {description.map((desc, index) => (
            <li key={index} className='mb-1 text-slate-700'>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Link
      to={''}
      className='border border-gray-300 bg-gradient-to-r from-red-50 to-red-100 text-slate-800 px-4 py-2 rounded-md shadow-sm hover:bg-red-300 transition flex justify-between items-center mt-4'
    >
      تعرف على المزيد
      <FaArrowLeft className='ms-4 mt-1' />
    </Link>
  </div>
);

export default FieldWorkItem;
