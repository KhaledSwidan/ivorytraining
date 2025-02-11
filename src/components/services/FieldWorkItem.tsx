import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FieldWorkItemProps } from '../../constants/links';

const FieldWorkItem: React.FC<FieldWorkItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className='relative flex flex-col justify-between bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl'>
      <div>
        <div className='relative w-full h-40 sm:h-48 md:h-56 bg-gray-200'>
          <img src={image} alt={title} className='w-full h-full object-cover' />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent'></div>
        </div>
        <div className='p-5 flex flex-col gap-3'>
          <h2 className='text-xl font-bold text-gray-900 text-center'>
            {title}
          </h2>
          <ul className='text-gray-700 text-sm leading-relaxed space-y-2'>
            {description.map((desc, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='p-4 bg-gray-50 flex justify-center border-t'>
        <Link
          to={''}
          className='flex items-center gap-2 bg-rose-950 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition hover:bg-rose-900'
        >
          تعرف على المزيد
          <FaArrowLeft className='text-white' />
        </Link>
      </div>
    </div>
  );
};

export default FieldWorkItem;
