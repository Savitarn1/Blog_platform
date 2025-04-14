const Blog_Page = () => {
  return (
    <div className="flex flex-col gap-10 py-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className='flex lg:gap-15 max-lg:flex-col justify-between'>
        <img
          className='lg:w-[40%] object-cover aspect-video'
          src='../../src/assets/nature.jpg'
          alt='Image'
        />
        <div>
          <h1 className='max-sm:text-2xl sm:text-4xl font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, esse!
          </h1>
          <div className='sm:text-lg flex gap-5 my-2'>
            <span className='text-slate-600 font-bold'>Savitar</span>
            <time dateTime='2025-04-08T11:00:00.000Z'>2025:04:08 11:58:52</time>
          </div>
          <p className='sm:text-lg font-semibold'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
            tempore molestiae? Tempora rem facilis, dicta eos impedit accusamus
            quaerat ab cumque sed! Molestiae dolorum porro eaque cumque
            doloribus eligendi eum.
          </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Blog_Page;
