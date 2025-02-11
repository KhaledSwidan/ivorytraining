import { ImageAccordion } from './ImageAccordion';

type AccordionItem = {
  id: number;
  title: string;
  image: string;
  description: string[];
};

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'التطوير الإداري',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: [
      'الإدارة و الإستراتيجية',
      'القطاع العام والإدارة الحكومية',
      'المنظمات الغير هادفة للربح',
      'المخاطر و الأزمات',
      'الجودة والامتثال',
    ],
  },
  {
    id: 2,
    title: 'إدارة الرعــاية الطــبية',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: [
      'القيادة والاستراتيجية',
      'الإدارة والتشغيل',
      'الرعاية الطبية',
      'الجودة والامتثال',
    ],
  },
  {
    id: 3,
    title: 'إدارة الخدمات التعليمية',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: [
      'تطوير هيئة التدريس',
      'منهجيات التعليم ونقل المعرفة',
      'الجودة والامتثال',
      'التعليم الأكاديمي',
      'الجودة في الخدمات التعليمية',
    ],
  },
  {
    id: 4,
    title: 'الجودة والتميز المؤسسي',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: ['االجودة', 'الجودة والامتثال'],
  },
  {
    id: 5,
    title: 'الهندسة',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: [
      'الهندسة - المعمارية والمدنية والإدارة',
      'الهندسة - الهندسة الكيميائية',
      'الهندسة - الكهربائية والأجهزة',
      'الهندسة - الميكانيكية وعلوم الصيانة',
      'الهندسة - الطاقة والبترول والنفط والغاز',
    ],
  },
  {
    id: 6,
    title: 'إدارة المكاتب و البيانات',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: ['إدارة المكاتب', 'إدارة الوثائق و البيانات'],
  },
  {
    id: 7,
    title: 'الأمن والسلامة و الصحة المهنية',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
    description: ['الأمن', 'الصحة و السلامة'],
  },
];

export const AccordionContact = () => (
  <section className='bg-zinc-200'>
    <ImageAccordion items={accordionData} />
  </section>
);
