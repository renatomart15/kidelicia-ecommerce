import { Gift } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const GiftPriceList = () => {
  return (
    <div className="shadow border border-gray-200 rounded-sm w-full p-4 my-4 max-w-lg">
      <span className="bg-vermelho/10 p-3 inline-block rounded-sm">
        <Gift className="text-vermelho" size={20} />
      </span>
      <h3 className="font-heading text-xl font-extrabold my-2">
        Presentes corporativos
      </h3>
      <p className="text-gray-700">
        Presenteie sua equipe ou clientes com canecas personalizadas com o logo
        da sua empresa.
      </p>
      <div className="border border-gray-200 rounded-xs w-full my-4 text-sm">
        <div className="flex justify-between items-center px-3 py-2">
          <div>
            <p className="text-xs font-body  text-gray-600">1 UNIDADE</p>
            <p className="font-body font-extrabold text-base mt-1">R$ 30,00</p>
          </div>
          <p className="text-xs text-right font-body text-gray-500">
            por unidade
          </p>
        </div>
        <div className="flex justify-between items-center px-3 py-2 border-t border-gray-200 bg-vermelho/7">
          <div>
            <p className="text-xs font-body text-gray-700">
              A PARTIR DE 15 UNIDADES
            </p>
            <p className="font-body font-extrabold text-base mt-1">R$ 25,00</p>
          </div>
          <p className="text-xs text-right font-body bg-vermelho text-white px-2 py-1 rounded-sm font-semibold">
            POPULAR
          </p>
        </div>
        <div className="flex justify-between items-center px-3 py-2 border-t border-gray-200">
          <div>
            <p className="text-xs font-body  text-gray-700">
              A PARTIR DE 50 UNIDADES
            </p>
            <p className="font-body font-extrabold text-base mt-1">R$ 23,00</p>
          </div>
          <p className="text-xs text-right font-body bg-amarelo text-black font-semibold px-2 py-1 rounded-sm">
            MELHOR PREÇO
          </p>
        </div>
      </div>
      <p className="flex gap-2 items-center bg-amarelo/10 py-2 px-4 border border-amarelo max-w-max rounded-sm mb-4">
        <FaStar className="text-amarelo" />{" "}
        <span className="text-xs font-semibold text-amber-900">
          Arte com logo inclusa
        </span>
      </p>
      <div className="flex justify-center">
          <button className="flex gap-2 items-center bg-vermelho text-white rounded-sm py-3 w-full justify-center active:scale-98 transition cursor-pointer md:max-w-90">
            <IoLogoWhatsapp />
            <p className="text-sm font-semibold">
              Solicitar orçamento pelo Whatsapp
            </p>
          </button>
      </div>
    </div>
  );
};

export default GiftPriceList;
