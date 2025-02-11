import { Link } from 'react-router-dom';
import Socialmedia from '../components/footer/Socialmedia';
import { importantLinks, normalLinks } from '../constants/links';

const Footer = () => {
  return (
    <footer className='grid lg:grid-cols-4 min-[600px]:grid-cols-2 max-[580px]:grid-cols-1 gap-10 items-start max-[1000px]:px-3 px-10 py-10 bg-[#6a2e38] w-full'>
      <div>
        <div className='placeholder w-full h-[70px] relative'>
          <img
            className='absolute w-auto h-full object-cover '
            src='https://ivorytraining.com/assets/site/images/logofoot.png'
            alt=''
          />
        </div>
        <p className='text-[#a1a1a1] my-2'>
          تسعي ايفوري للتدريب و الاستشارات لتحقيق مستوي عالي من التميز في
          برامجها التدريبيه
        </p>
      </div>
      <ul className='text-white list-disc px-3'>
        <h3 className='text-white font-medium text-xl mb-4'>
          الدورات الاكثر طلبا
        </h3>
        {normalLinks.map((link) => (
          <li key={link.id} className='hover:text-red-200'>
            <Link to={''}>{link.value}</Link>
          </li>
        ))}
      </ul>
      <ul className='text-white list-disc px-3'>
        <h3 className='text-white font-medium text-xl mb-4'>روابط تهمك</h3>
        {importantLinks.map((link) => (
          <li key={link.id} className='hover:text-red-200'>
            <Link to={''}>{link.value}</Link>
          </li>
        ))}
      </ul>
      <div className='text-white list-disc px-3'>
        <h2 className='text-white font-medium text-xl mb-4'>ابق على اتصال</h2>
        <address className='not-italic mb-4'>
          <p>الرياض، المرسلات، طريق أبو بكر الصديق</p>
          <p>الإمارات العربية المتحدة - دبي</p>
          <p>جمهورية مصر العربية - القاهرة</p>
        </address>
        <Socialmedia />
      </div>
    </footer>
  );
};

export default Footer;
