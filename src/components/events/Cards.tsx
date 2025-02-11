import { SpeakerCardProps } from '../../constants/links';

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  image,
  title,
  date,
  time,
  language,
  location,
  speaker,
  topics,
}) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center transform transition duration-300 hover:scale-105'>
      <img
        src={image}
        alt={speaker}
        className='w-32 h-32 rounded-full object-cover border-4 border-gray-200'
      />
      <h2 className='text-xl font-semibold mt-4 text-center'>{title}</h2>
      <p className='text-gray-500'>
        {date} | {time}
      </p>
      <p className='text-gray-700 font-medium mt-2'>
        {language} - {location}
      </p>
      <p className='text-gray-600 mt-2'>{speaker}</p>
      <ul className='mt-4 text-right list-disc list-inside text-gray-700'>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <div className='mt-4 flex gap-4'>
        <button className='bg-rose-950 text-white px-4 py-2 rounded-lg shadow hover:bg-rose-900 transition'>
          عرض الألبوم
        </button>
        <button className='bg-fuchsia-950 text-white px-4 py-2 rounded-lg shadow hover:bg-fuchsia-900 transition'>
          عرض المحتوى
        </button>
      </div>
    </div>
  );
};

export default SpeakerCard;
