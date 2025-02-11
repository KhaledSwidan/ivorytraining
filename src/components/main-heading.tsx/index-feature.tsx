function FeaturedHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <>
      <span className='text-accent text-base font-normal antialiased text-[#6a2e38] leading-4 italic'>
        {subTitle}
      </span>
      <h2 className='text-primary font-extrabold text-5xl before:content-["|"] before:text-amber-900 before:mr-2 text-gray-700 text-right w-full'>
        {title}
      </h2>
    </>
  );
}

export default FeaturedHeading;
