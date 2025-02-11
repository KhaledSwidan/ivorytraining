import { fieldsWorkItems } from '../../constants/links';
import FieldWorkItem from './FieldWorkItem';

function FieldsWork() {
  return (
    <div className='mt-6 w-full flex flex-col justify-center items-center px-4'>
      <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10'>
        {fieldsWorkItems.map((item) => (
          <FieldWorkItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default FieldsWork;
