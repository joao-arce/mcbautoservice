import whatsAppYellow from "../assets/img/whatsAppYellow.png";
import faceYellow from "../assets/img/faceYellow.png";
import localMark from "../assets/img/local_mark.png";
import local from "../assets/img/mapa.png";

export const Contact = () => {
  return (
    <div>
      <div className="px-4 py-8 mt-8 rounded-md bg-textHeroBlue ">
        <h2 className="text-5xl font-bold text-center text-bgYellow ">
          Contato
        </h2>
        <div className="flex flex-col w-full gap-6 mt-10 sm:flex-row ">
          {/* <div className="h-96"> */}
          <div>
            <img
              className="object-cover w-full rounded-md md:h-72 "
              src={local}
              alt="MCBautoservice local image"
            />
          </div>
          <div className="px-0 text-white sm:px-4 text-start ">
            <p className="mb-4">
              Estamos disponíveis nestes canais de atendimento. <br />
            </p>
            <p>
              Entre em contato para agendar a melhor data e horário para você
            </p>
            <div className="flex flex-col items-start justify-center gap-4 px-2 mt-8 mb-8">
              <div className="flex items-center gap-4">
                <a href="https://wa.me/55629981861380">
                  <img src={whatsAppYellow} alt="whatsApp icon" />
                </a>
                <p className="text-lg">62 98186 1380</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={faceYellow} alt="" />
                <p className="text-lg">MCBautoservice</p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.google.com/maps/place//@-16.72186,-49.31912,19.54z?entry=ttu"
                  aria-label="MCB auto service"
                  rel="noopener"
                  target="_blank"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={localMark}
                      alt="local mark icon"
                      className="self-start"
                    />
                    <p className="text-lg">
                      Av. Eng. José M. Filho <br />
                      nº 340 Novo Horizonte <br />
                      Goiânia-GO
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
