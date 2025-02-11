import MainHeading from '../components/main-heading.tsx';
import FeaturedHeading from '../components/main-heading.tsx/index-feature.tsx';
import { Routes } from '../constants/enums';

const Events = () => {
  return (
    <main className='w-full'>
      <section
        className='relative flex justify-center items-center section-gap h-full w-full bg-[url(https://ivorytraining.com/public/ivory-general-series/img/ramadan-with-ivory-ksa.jpg)] bg-fixed bg-center bg-no-repeat bg-cover py-[50px]'
        id={Routes.EVENTS}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-red-50 to-red-200 opacity-[0.3] z-0'></div>
        <div className='container text-center relative z-10'>
          <MainHeading subTitle='Ivory Events' title='الفعاليات' />
          <div className='text-accent max-w-4xl md:max-w-3xl sm:max-w-full mx-auto mt-4 px-6 sm:px-4 text-center'>
            <p className='text-2xl sm:text-xl font-medium leading-relaxed break-words py-[40px] px-[25px]'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              nihil perspiciatis placeat nostrum laborum iure aliquid vel,
              minima reprehenderit libero sed veniam fugiat dolorem, quaerat
              excepturi velit odit ullam! Animi.
            </p>
          </div>
        </div>
      </section>

      <section className='relative py-[50px] section-gap h-full w-full'>
        <FeaturedHeading subTitle='' title='أمسيات رمضان الإثرائية من آيفوري' />
      </section>
    </main>
  );
};

export default Events;
