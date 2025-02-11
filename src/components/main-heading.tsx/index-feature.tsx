function FeaturedHeading({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="mr-2">
      <span className='text-accent text-base font-normal antialiased text-[#6a2e38] leading-4 italic'>
        {subTitle}
      </span>
      <h2 className='text-primary font-extrabold text-5xl before:content-["|"] before:text-amber-900 before:mr-2 before:ml-1 text-gray-700 text-right before:bottom-2 before:relative'>
        {title}
      </h2>
    </div>
  );
}

export default FeaturedHeading;
