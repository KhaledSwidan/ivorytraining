function MainHeading({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <>
      <span className='text-accent text-base font-bold antialiased text-[#6a2e38] leading-4 italic'>
        {subTitle}
      </span>
      <h2 className='text-primary font-extrabold text-6xl'>{title}</h2>
    </>
  );
}

export default MainHeading;
