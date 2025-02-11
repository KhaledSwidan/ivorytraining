import { Routes } from '../constants/enums.ts';
import MainHeading from '../components/main-heading.tsx/index.tsx';
import { AccordionContact } from '../components/services/AccordionContact.tsx';
import CarouselTest from '../components/services/Carousel.tsx';
import FieldsWork from '../components/services/FieldsWork.tsx';
// import ServicesContact from './ServicesContact.tsx';

async function Services() {
  return (
    <main className='w-full'>
      <section
        className='relative flex justify-center items-center section-gap h-full w-full bg-[url(https://ivorytraining.com/new_pages/images/sec1.jpg)] bg-fixed bg-center bg-no-repeat bg-cover py-[50px]'
        id={Routes.SERVICES}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-red-50 to-red-200 opacity-[0.3] z-0'></div>

        <div className='container text-center relative z-10'>
          <MainHeading subTitle='Ivory Training' title='التدريب' />
          <div className='text-accent max-w-4xl md:max-w-3xl sm:max-w-full mx-auto mt-4 px-6 sm:px-4 text-center'>
            <p className='text-2xl sm:text-xl font-medium leading-relaxed break-words py-[40px] px-[25px]'>
              فـي عصـرِ النهضـة التكنولوجيـة تقـدم آيفورى حقيبـة تدريبيـة ذات
              موضوعـات تفاعلية ومؤثـرة، تـم إعدادهـا على نحِو إسـتراتيجي لتلائم
              طبيعـة التحديـات التـي يواجههـا العالـم فـي الفتـرة الحاليـة.
              نهـدف مـن تلـك الموضوعـات التدريبيـة سـد الفجـوة ومعالجـة نقــاط
              الضعــف لــدى الأفــراد والعمــل علــى تنميــة مواهبهــم وتوســيع
              مداركهــم وتعزيــز مهاراتهــم بشــكل ملائم لســوق العمــل. عـلاوة
              علـى تحسـين أداء المؤسسـات والشـركات بهـدف الوصـول بهـم نحـو أعلـى
              معـدلات النمـو والإزدهـار.
            </p>
          </div>
        </div>
      </section>

      <section className='relative py-[50px] section-gap h-full w-full'>
        <div className='container mx-auto w-full text-center'>
          <MainHeading subTitle='' title='مجالات التدريب والتطوير' />
          <FieldsWork />
        </div>
      </section>

      <CarouselTest />

      <section className='hidden min-[800px]:block relative py-[50px] section-gap h-full w-full'>
        <div className='container mx-auto w-full text-center mb-2'>
          <MainHeading
            subTitle=''
            title='تواصل مع مستشارينا فى التدريب لخدمتك'
          />
        </div>
        <AccordionContact />
      </section>

      {/* <section className='my-4'>
        <ServicesContact />
      </section> */}
    </main>
  );
}

export default Services;
