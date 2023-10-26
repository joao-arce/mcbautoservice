import { Card } from "./Card";
import { CardJetSky } from "./CardJetSky";

export const Services = () => {
  return (
    <section>
      <div className="w-full mt-12 sm:mt-20">
        <h2 className="w-full mb-8 text-2xl font-semibold text-center md:text-4xl text-textHeroBlue ">
          Serviços Automotivos
        </h2>
        <div className="grid gap-8 place-items-center md:grid-cols-2 min-[450px]:px-12 sm:px-32 md:px-20 lg:px-32">
          <Card />
        </div>
      </div>

      <div className="w-full mt-12 sm:mt-20">
        <h2 className="w-full mb-8 text-2xl font-semibold text-center md:text-4xl text-textHeroBlue ">
          Serviços Náuticos
        </h2>
        <div className="grid gap-8 place-items-center md:grid-cols-2 min-[450px]:px-12 sm:px-32 md:px-20 lg:px-32">
          <CardJetSky />
        </div>
      </div>
    </section>
  );
};
