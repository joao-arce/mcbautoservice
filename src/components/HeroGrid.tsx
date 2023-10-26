import carHero from "../assets/img/car.png";
import whatsApp from "../assets/img/whatsApp.png";
import brand from "../assets/img/brand.png";

export const HeroGrid = () => {
  return (
    <div>
      <div className="mx-auto mt-10 grid-wrapper md:px-12 md:grid-cols-2 ">
        <div className="w-11/12 mt-8 md:mb-0 md:w-full md:order-1 ">
          <img src={brand} alt="brand image" className="mb-2" />

          <div className="flex justify-center w-full">
            <div className="flex flex-col items-center px-10 text-lg sm:text-xl sm:mt-4">
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

        <div className="order-first px-2 md:order-none place-self-center ">
          {/* <img className="w-11/12" src={carHero} alt="" /> */}
          <img className="w-11/12 md:w-full " src={carHero} alt="" />
        </div>
      </div>
    </div>
  );
};
