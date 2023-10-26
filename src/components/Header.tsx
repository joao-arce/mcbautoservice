import logo from "../assets/img/logo.png";
import whatsApp from "../assets/img/whatsApp.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";

export const Header = () => {
  return (
    <header className="px-4 pb-6 border-b border-bgYellow">
      <nav className="h-4 sm:h-8 ">
        <ul className="flex items-center justify-between">
          <li className="w-8 sm:w-10 ">
            <img src={logo} alt="Logo image" />
          </li>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/55629981861380">
              <img src={whatsApp} alt="whatsApp icon" />
            </a>
            <a href="https://wa.me/5562992484676">
              <img src={facebook} alt="facebook icon" />
            </a>
            <a href="https://wa.me/5562992484676">
              <img src={instagram} alt="instagram icon" />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};
