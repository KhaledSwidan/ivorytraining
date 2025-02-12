import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import EventAlbumCarousel from './EventAlbumCarousel';

interface EventAlbumProps {
  title: string;
  modalTitle: string;
  description: string;
}

const EventAlbum: React.FC<EventAlbumProps> = ({
  title,
  modalTitle,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='bg-rose-950 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-900 transition cursor-pointer'
      >
        {title}
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll'
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
            <p className='pb-2'>{description}</p>
            <EventAlbumCarousel />
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

export default EventAlbum;
