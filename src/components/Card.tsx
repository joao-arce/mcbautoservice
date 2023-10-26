import img01 from "../assets/img/oil.png";
import img02 from "../assets/img/alinhamento.png";
import img03 from "../assets/img/balanceamento.png";
import img04 from "../assets//img/batery.png";

type cardProps = {
  id: number;
  urlImg: string;
  title: string;
  description: string;
};

export const Card = () => {
  const ourServices: cardProps[] = [
    {
      id: 1,
      urlImg: "/img/car-oil.png",
      title: "Troca de Óleo",
      description:
        "O óleo do carro é essencial para lubrificar, limpar e refrigerar o motor, e tem seu desempenho prejudicado quando não é trocado no prazo correto.",
    },
    {
      id: 2,
      urlImg: "/img/mechanic-03.png",
      title: "Alinhamento",
      description:
        "O alinhamento reduz o desgaste dos pneus e contribui para aumentar a vida útil dos pneus e melhora a economia de combustível.",
    },
    {
      id: 3,
      urlImg: "/img/img01.avif",
      title: "Balanceamento",
      description:
        "Equilibra o excesso ou má distribuição de massas no conjunto pneu e roda trazendo segurança para seu carro.",
    },
    {
      id: 4,
      urlImg: "/img/mechanic.webp",
      title: "Troca de Baterias",
      description:
        "Muitas pessoas não sabem a hora ideal de trocá-la e, por isso, acabam passando por problemas, aqui realizamos o processo de instalação pra você.",
    },
  ];

  const imgs = [img01, img02, img03, img04];

  return ourServices.map((service, index) => (
    // <div
    //   key={service.id}
    //   className="p-8 text-center text-white rounded-lg cursor-pointer hover:border bg-gradient-to-b from-slate-900 to-slate-700 hover:border-amber-400 "
    // >
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

{
  /* <div
      key={service.id}
      className="p-8 text-center text-white rounded-lg cursor-pointer hover:border bg-zinc-700 hover:border-amber-400 "
    ></div> */
}
