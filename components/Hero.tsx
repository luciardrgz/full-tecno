import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPiggyBank,
  faScrewdriverWrench,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

import "./CompanyName.css";

function Hero() {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 mb-8">
      <div className="max-w-xl mb-10 sm:mx-auto">
        <h2 className="text-center text-lg mb-5">Bienvenido a</h2>
        <h2 className="glow">Full Tecno</h2>
      </div>
      <div className="pt-10 grid gap-12 row-gap-8 lg:grid-cols-3">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-[#b4a07c]">
              <FontAwesomeIcon
                icon={faPiggyBank}
                color={"black"}
                width={"1.5em"}
                height={"1.5em"}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div>
            <h6 className="mb-1 font-semibold leading-5 text-xl text-[#b4a07c]">
              Venta de equipos electrónicos
            </h6>
            <p className="text-lg text-white">Al mejor precio del mercado</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-[#b4a07c]">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                color={"black"}
                width={"1.5em"}
                height={"1.5em"}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div>
            <h6 className="mb-1 font-semibold leading-5 text-xl text-[#b4a07c]">
              Servicio técnico de calidad
            </h6>
            <p className="text-lg text-white">A precios accesibles</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-[#b4a07c]">
              <FontAwesomeIcon
                icon={faTruckFast}
                color={"black"}
                width={"1.5em"}
                height={"1.5em"}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div>
            <h6 className="mb-1 font-semibold leading-5 text-xl text-[#b4a07c]">
              Envíos gratis
            </h6>
            <p className="text-lg text-white">
              Según zona, no dudes en consultarnos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;