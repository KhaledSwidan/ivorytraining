import { useState } from 'react';

interface Item {
  id: number;
  title: string;
  image: string;
  description: string[];
}

interface ImageAccordionProps {
  items: Item[];
}

export const ImageAccordion = ({ items }: ImageAccordionProps) => {
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = (index: number): void =>
    setActive(index === active ? null : index);

  return (
    <section className='flex justify-center items-center flex-wrap gap-6 cursor-pointer p-4 w-full'>
      {items.map((item, index) => {
        const isActive = active === index;
        return (
          <div
            key={item.id}
            className={`relative overflow-hidden h-[400px] rounded flex items-end transition-all duration-500 opacity-50 hover:opacity-100 ${
              isActive ? 'w-[400px] opacity-100' : 'w-[80px]'
            }`}
            onClick={() => handleToggle(index)}
          >
            {/* <div
              className="absolute inset-0 flex justify-center items-center 
     before:content-['تجريبي\0020نص'] before:text-lg before:font-medium 
     before:text-zinc-900 before:rotate-90 before:absolute before:z-50"
            /> */}
            <img
              src={item.image}
              alt={item.title}
              className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] h-[150%] grayscale'
            />
            <div
              className={`absolute bottom-0 left-0 w-[400px] z-10 opacity-50 invisible p-5 flex items-center gap-3 bg-gradient-to-r from-transparent to-black transition-opacity duration-300 ${
                isActive ? 'opacity-100 visible' : ''
              }`}
            >
              <div className='ms-5'>
                <h2 className='text-2xl font-normal text-red-200'>
                  {item.title}
                </h2>
                <ul className='mt-2'>
                  {item.description.map((des, i) => (
                    <li key={i} className='text-slate-200'>
                      {des}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
