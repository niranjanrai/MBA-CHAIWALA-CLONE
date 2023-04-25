import logo from "../assets/logo.png";
import { BsMouse } from "react-icons/bs";

const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" data-curserpointer={true} />
      </a>

      <a href="/franchise" className="franchiseBtn" data-curserpointer={true}>
        GET A FRANCHISE
      </a>
      <BsMouse className="scrollBtn" data-curserpointer={true} />
    </>
  );
};

export default Misc;
