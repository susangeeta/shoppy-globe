const Hero = () => {
  return (
    <div className=" md:main-container ">
      <div class="bg-[url('/src/assets/item-1.jpg')] flex flex-col gap-3 items-center justify-center bg-cover bg-center h-[500px] w-full bg-blend-overlay bg-black/50">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
          Shop the Best Deals
        </h1>
        <p className="text-white text-base text-center  md:text-lg">
          Discover top-quality products at unbeatable prices. Your perfect
          choice is just a click away.
        </p>
      </div>
    </div>
  );
};

export default Hero;
