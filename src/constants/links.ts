export interface Link {
  id: number;
  value: string;
}

export interface FieldWorkItemProps {
  id: number;
  title: string;
  image: string;
  description: string[];
}

export interface DataItemProps {
  id: number;
  text: string;
  description: string;
  image: string;
}

export const normalLinks: Link[] = [
  { id: 1, value: 'المهارات العملية لإدارة المبيعات' },
  { id: 2, value: 'شريك محترف في إدارة الموارد البشرية' },
  { id: 3, value: 'تصميم خطة التدريب للشركات (رفع كفاءة الأعمال بالتدريب)' },
  {
    id: 4,
    value:
      'محترف وممارس معتمد في مؤشرات الأداء الرئيسية (C-KPIs) - Certified KPI Professional and Practitioner',
  },
];

export const importantLinks: Link[] = [
  { id: 1, value: 'التحقق من الشهادة' },
  { id: 2, value: 'سياسة الخصوصية' },
];

export const fieldsWorkItems: FieldWorkItemProps[] = [
  {
    id: 1,
    title: 'التطوير التنظيمى',
    image: 'https://ivorytraining.com/new_pages/images/new2.png',
    description: [
      'الهيكلة والتصميم',
      'االتفاعلات الإنسانية',
      'الموارد البشرية',
      'التغير الإستراتيجى',
      'القيادة',
    ],
  },
  {
    id: 2,
    title: 'إدارة الثروة و الاستثمار',
    image: 'https://ivorytraining.com/new_pages/images/new1.png',
    description: [
      'التأمين',
      'البنوك',
      'المصارف الإسلامية',
      'الأصول والإستثمار',
      'سوق المال',
    ],
  },
  {
    id: 3,
    title: 'التطوير الشخصى',
    image: 'https://ivorytraining.com/new_pages/images/new3.png',
    description: [
      'إدارة الذات',
      'التواصل و التأثير',
      'مناهج التفكير',
      'القيادة',
    ],
  },
  {
    id: 4,
    title: 'إدارة المشتريات وسلاسل المشتريات',
    image: 'https://ivorytraining.com/new_pages/images/new5.png',
    description: [
      'التسويق',
      'المبيعات',
      'العلاقات والسمعة والعلامة',
      'تجربة العميل',
      'الصورة الذهنية وإدارة السمعه',
      'العلاقات العامة',
    ],
  },
  {
    id: 5,
    title: 'تطوير الأداء التشغيلى',
    image: 'https://ivorytraining.com/new_pages/images/new4.png',
    description: [
      ' إدارة عمليات الصيانة',
      'إدارة الأصول والمنشآت',
      'إدارة العمليات والمشروعات',
      'الصحة والأمن والسلامة',
      'الجودة والامتثال',
    ],
  },
  {
    id: 6,
    title: 'الإتصال التجارى',
    image: 'https://ivorytraining.com/new_pages/images/new6.png',
    description: [
      'التسويق',
      'المبيعات',
      'العلاقات والسمعة والعلامة',
      'تجربة العميل',
      'العلاقات العامة',
      'خدمة العملاء',
      'الصورة الذهنية وإدارة السمعة',
    ],
  },
];

export const dataItems: DataItemProps[] = [
  {
    id: 1,
    text: 'البيئة الافتراضية',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 2,
    text: 'الصوت عبر الانترنت',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 3,
    text: 'برامج امن الشبكات',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 4,
    text: 'برامج امن المعلومات',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 5,
    text: 'تقنية المعلومات',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 6,
    text: 'هندسة كيماوية',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 7,
    text: 'هندسة الكترونية',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 8,
    text: 'التحقيق فى امن المعلومات',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 9,
    text: 'مزودو الخدمات',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
  {
    id: 10,
    text: 'الصوت عبر الانترنت',
    description: 'نص قصير يشرح العنوان',
    image:
      'https://velog.velcdn.com/images/real-bird/post/806a2ae4-121d-427d-9cfc-be8fa6a618fa/image.jpg',
  },
];
