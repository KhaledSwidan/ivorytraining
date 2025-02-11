import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Socialmedia = () => {
  return (
    <div className='flex justify-end space-x-4 mt-[20px]'>
      <a
        href='https://facebook.com'
        target='_blank'
        className='text-red-100 hover:text-blue-500'
      >
        <FaFacebookF className='w-6 h-6' />
      </a>
      <a
        href='https://twitter.com'
        target='_blank'
        className='text-red-100 hover:text-blue-400'
      >
        <FaTwitter className='w-6 h-6' />
      </a>
      <a
        href='https://linkedin.com'
        target='_blank'
        className='text-red-100 hover:text-blue-600'
      >
        <FaLinkedinIn className='w-6 h-6' />
      </a>
      <a
        href='https://instagram.com'
        target='_blank'
        className='text-red-100 hover:text-pink-500'
      >
        <FaInstagram className='w-6 h-6' />
      </a>
      <a
        href='tel:+966533993220'
        target='_blank'
        className='text-red-100 hover:text-green-500'
      >
        <FaWhatsapp className='w-6 h-6' />
      </a>
    </div>
  );
};

export default Socialmedia;
