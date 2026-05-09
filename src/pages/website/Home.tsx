import {
  PersonStandingIcon,
  PoundSterling,
  Shield,
} from "lucide-react";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Image from "../../components/Image";

const cards = [
  {
    title: "Card 1",
    description:
      "Description 1 f adfa aasd fdf afadfadsfadf asdfasdfdasfafdsaf adsf adfadfasdf asdfdasfsfdasfadsfadsfadsfasdfdasfasfadsf",
    image: <PoundSterling size={40} className="p-2" />,
  },
  {
    title: "Card 2",
    description: "Description 2",
    image: <PersonStandingIcon size={40} className="p-2" />,
  },
  {
    title: "Card 3",
    description: "Description 3",
    image: <Shield size={40} className="p-2" />,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f7f9fb]">
        <div className="m-2">sdfsdffsdfdfssf</div>
        <div className="m-2 p-4 border border-gray-200 rounded-md bg-white">
          <Image
            src="https://img.freepik.com/free-photo/professional-business-people-working-together-office_23-2151505738.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* cards       */}
      <div className="bg-[#f7f9fb] py-20">
        <h2 className="text-2xl font-semibold text-center">
          Everything you need in one place.
        </h2>
        <p className="text-center">
          Built for teams that value speed and clarity. No bloat, just essential
          features engineered for growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
          {cards?.map((card) => (
            <div
              key={card.title}
              className="border border-accent rounded-md bg-white"
            >
              <div className="p-2">{card?.image}</div>
              <h2 className="p-2 text-xl font-semibold">{card?.title}</h2>
              <p className="p-2 text-gray-600 wrap-break-word">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
