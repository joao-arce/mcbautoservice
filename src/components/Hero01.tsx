import carHero from "../assets/img/car.png";
import whatsApp from "../assets/img/whatsApp.png";
import brand from "../assets/img/brand.png";

export const Hero01 = () => {
  return (
    <div className="container flex flex-col-reverse flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row ">
      <div className="mt-8 md:mb-0 md:w-1/2">
        <img src={brand} alt="brand image" className="mb-2" />

        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center text-lg sm:text-xl sm:mt-4 ">
            <p className="text-center text-gray-500 ">
              Especialista em automóveis e jetSki
              <br />
            </p>
            <span className="font-medium text-center text-gray-600 sm:text-start">
              Venha conhecer
            </span>

            {/* ********** WhatsApp  */}
            <div className="flex justify-center mt-4 md:justify-start ">
              <div>
                <div className="flex items-center justify-center gap-4 px-4 py-1 border-2 border-textHeroBlue rounded-2xl sm:w-full">
                  <a href="https://wa.me/55629981861380">
                    <img src={whatsApp} alt="whatsApp icon" />
                  </a>
                  <p className="text-lg sm:text-xl text-textHeroBlue ">
                    62 98186 1380
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <img src={carHero} alt="" />
      </div>
    </div>
  );
};

// bg-clip-text bg-gradient-to-bl from-amber-50 via-yellow-50 to-yellow-200
