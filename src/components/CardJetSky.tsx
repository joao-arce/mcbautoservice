import img01 from "../assets/img/jetski01.png";
import img02 from "../assets/img/jetski02.png";
import img03 from "../assets/img/jetski03.png";
import img04 from "../assets//img/jetski04.png";

type CardJetSkyProps = {
  id: number;
  urlImg: string;
  title: string;
  description: string;
};
export const CardJetSky = () => {
  const ourServices: CardJetSkyProps[] = [
    {
      id: 1,
      urlImg: "/img/jet-sk-03.png",
      title: "Troca de Óleo",
      description:
        "Troca de óleo, troca de filtro, lubrificação da turbina e muito mais.",
    },
    {
      id: 2,
      urlImg: "/img/jet-ski-01.png",
      title: "Revisão de Injeção",
      description:
        "As fábricas recomendam a revisão a cada 50 horas. Você pode, então fazer as revisões a cada 50 horas (ou 6 meses).",
    },
    {
      id: 3,
      urlImg: "/img/onda.png",
      title: "Recuperação de Painel",
      description:
        "Realizamos o conserto e recuperaçõ geral de paineis nauticos de Jet ski.",
    },
    {
      id: 4,
      urlImg: "/img/jet-ski-04.png",
      title: "Revisão Bad Full",
      description:
        "Temos todos os equipamentos de diagnósticos para atender a todos os tipos de JetSki, dos mais simples aos mais Modernos.",
    },
  ];

  const imgs = [img01, img02, img03, img04];

  return ourServices.map((service, index) => (
    <div
      key={service.id}
      className="max-w-xs px-4 py-8 text-center text-gray-500 border rounded-lg border-bgYellow hover:bg-neutral-100 "
    >
      <img className="h-16 mx-auto" src={imgs[index]} alt="car oil image" />
      <h4 className="my-8 text-lg font-semibold uppercase text-textHeroBlue ">
        {service.title}
      </h4>
      <p className="h-32 text-center">{service.description}</p>
    </div>
  ));
};
