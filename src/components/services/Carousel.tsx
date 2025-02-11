import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { dataItems } from '../../constants/links';
import { FaCheckCircle } from 'react-icons/fa';
// import MainHeading from '../main-heading.tsx';

const CarouselTest = () => {
  return (
    <section className='bg-slate-300 text-black'>
      {/* <div className='mt-7 mb-2 text-2xl'>
        <MainHeading subTitle='' title='تقنية المعلومات والتحول الرقمي' />
      </div> */}
      <div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView='auto'
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className='w-full max-w-3xl pt-12 pb-36'
        >
          {dataItems.map((slide, index) => (
            <SwiperSlide
              key={index}
              className='relative w-[300px] h-[250px] bg-center bg-cover rounded-xl shadow-lg saturate-[1.2] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[40px] before:bg-gradient-to-t before:from-black/20 before:to-transparent'
            >
              <div className='flex justify-between items-start my-8 mx-8'>
                <div>
                  <div className='flex justify-start items-center font-medium text-lg'>
                    <FaCheckCircle />
                    <h3 className='ms-2'>{slide.text}</h3>
                  </div>
                  <div>
                    <p className='ms-5 pt-'>{slide.description}</p>
                  </div>
                </div>
                <div>
                  <img
                    src={slide.image}
                    alt={slide.text}
                    width='60px'
                    height='60px'
                    className='rounded'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CarouselTest;
