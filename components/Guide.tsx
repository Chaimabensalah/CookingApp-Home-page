import Image from 'next/image';

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/icon0.png" alt="icon" width={50} height={100} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the master chef application you will no longer get lost and get lost again. Step-by-step instructions with photos and videos to make cooking easy and fun!
          </p>
        </div>
      </div>

      {/* Text + Image Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 padding-container max-container w-full">
        {/* Text on the Left */}
        <div className="flex-1 max-w-lg lg:mt-48">  {/* Increased margin-top */}
  <h3 className="bold-32 text-green-50 mb-4">Explore our chefs</h3>
  <p className="regular-16 text-gray-30">
    "Our chefs are experts in their craft, combining years of experience with a passion for creating exceptional dishes. With their guidance, every recipe becomes a delightful culinary adventure."
  </p>
</div>

        {/* Image on the Right */}
        <div className="flex-1">
          <Image 
            src="/solochef0.png"
            alt="chef"
            width={1600}
            height={800}
            className="w-full max-w-[800px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
