import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/swiper-bundle.css';

const slides = [
  'https://th.bing.com/th/id/OIP.HxV79tFMPfBAIo0BBF-sOgHaEy?rs=1&pid=ImgDetMain',
  'https://th.bing.com/th/id/R.18f14463a91f8316ec8daea09ab5baaf?rik=1ONxPv6onaga7A&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/R.ee318f01abac5b231578d8c21e6022e5?rik=a47%2fnRp%2foxXe2g&riu=http%3a%2f%2fwebfacil.tinet.org%2fusuaris%2fdavidgil%2fAMANECER_20090122135158.jpg&ehk=8adyw%2bATTghfQd3VNxdTkvZAyHPgNgcUUr1LbDuG%2fJQ%3d&risl=&pid=ImgRaw&r=0',
];

const EventAlbumCarousel: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null
  );
  const [currentID, setCurrentID] = useState(0);

  const nextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      setCurrentID((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      setCurrentID((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
      setCurrentID(index);
    }
  };

  return (
    <section className='relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg h-[50vh]'>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        grabCursor
        centeredSlides
        slidesPerView='auto'
        effect='coverflow'
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className='pt-[50px] pb-[140px] w-full h-full'
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className='bg-center bg-cover rounded-[10px] w-[300px] h-[250px] filter saturate-[1.2]'
            style={{
              backgroundImage: `url(${slide})`,
              WebkitBoxReflect:
                'below 1px linear-gradient(transparent, transparent, #0006)',
            }}
          />
        ))}
        <div className='swiper-pagination'></div>
      </Swiper>

      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition cursor-pointer z-[3]'
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition cursor-pointer z-[3]'
      >
        ❯
      </button>
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-[4] '>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              currentID === index ? 'bg-rose-900' : 'bg-gray-400'
            } cursor-pointer `}
          />
        ))}
      </div>
    </section>
  );
};

export default EventAlbumCarousel;
