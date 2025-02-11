import SpeakerCard from '../components/events/Cards.tsx';
import MainHeading from '../components/main-heading.tsx';
import FeaturedHeading from '../components/main-heading.tsx/index-feature.tsx';
import { Routes } from '../constants/enums';
import { speakerscard } from '../constants/links.ts';

const Events = () => {
  return (
    <main className='w-full'>
      <section
        className='relative flex justify-center items-center section-gap h-full w-full bg-[url(https://ivorytraining.com/public/ivory-general-series/img/ramadan-with-ivory-ksa.jpg)] bg-fixed bg-center bg-no-repeat bg-cover py-[50px]'
        id={Routes.EVENTS}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-red-50 to-red-200 opacity-[0.2] z-0'></div>
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
        <div className='text-accent max-w-4xl md:max-w-3xl sm:max-w-full ml-auto px-6 sm:px-4 text-right'>
          <p className='text-slate-600 text-2xl sm:text-xl font-medium leading-relaxed break-words py-[20px] px-[25px]'>
            أمسيات رمضـان الاثـرائـيـة من آيفوري تقدم مزيـجًا غنيًـا من الأفكار
            والاستراتيجيات حيث نجمع خبراء في مجالات متنوعـة لتقديـم رؤى فـريـدة،
            كل أمسيـة تـوفـر فرصـة للتعلم والإلهام، مـصـممـة خصيصًـا لتـمكيـن
            المهنيين والقادة من تحقيق النجاح في عالم متغير.
          </p>
        </div>
        <div className='container mx-auto px-4 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {speakerscard.map((speaker) => (
              <SpeakerCard key={speaker.id} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
