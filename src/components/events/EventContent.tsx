import { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface EventContentProps {
  title: string;
  modalTitle: string;
  description: string;
}

const EventContent: React.FC<EventContentProps> = ({
  title,
  modalTitle,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-fuchsia-950 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-900 transition cursor-pointer'
      >
        {title}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 flex items-center justify-center z-50'
      >
        <div className='fixed inset-0 bg-black bg-opacity-50' />
        <div className='bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto z-10'>
          {/* header */}
          <div className='flex justify-between items-center border-b pb-2'>
            <h2 className='text-xl font-semibold'>{modalTitle}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className='text-gray-500 hover:text-gray-700 cursor-pointer'
            >
              ✖
            </button>
          </div>
          {/* body */}
          <div className='py-4'>
            <p>{description}</p>
          </div>
          {/* footer */}
          <div className='flex justify-end gap-2 mt-4'>
            <button
              onClick={() => setIsOpen(false)}
              className='px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition cursor-pointer'
            >
              اغلاق
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default EventContent;
