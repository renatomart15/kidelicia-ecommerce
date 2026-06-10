import { Gift, Home, Check, ShoppingCart } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const CorporateOrders = () => {
  return (
    <section className="px-5 py-3 flex flex-col items-center">
      <span className="font-body text-vermelho rounded-md border-2 font-semibold text-xs py-1 px-3 tracking-widest">
        PEDIDOS CORPORATIVOS
      </span>
      <h2 className="font-heading text-2xl font-extrabold my-4 text-center">
        Sua marca em cada caneca
      </h2>
      <p className="text-center text-gray-700">
        Atendemos empresas, eventos e revendedores com preços especiais e arte
        personalizada com a identidade da sua marca.
      </p>

      <div className="shadow border border-gray-200 rounded-sm w-full p-4 my-4">
        <span className="bg-vermelho/10 p-3 inline-block rounded-sm">
          <Gift className="text-vermelho" size={20} />
        </span>
        <h3 className="font-heading text-xl font-extrabold my-2">
          Presentes corporativos
        </h3>
        <p className="text-gray-700">
          Presenteie sua equipe ou clientes com canecas personalizadas com o
          logo da sua empresa.
        </p>
        <div className="border border-gray-200 rounded-xs w-full my-4 text-sm">
          <div className="flex justify-between items-center px-3 py-2">
            <div>
              <p className="text-xs font-body  text-gray-600">1 UNIDADE</p>
              <p className="font-body font-extrabold text-base mt-1">
                R$ 30,00
              </p>
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
              <p className="font-body font-extrabold text-base mt-1">
                R$ 25,00
              </p>
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
              <p className="font-body font-extrabold text-base mt-1">
                R$ 23,00
              </p>
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
        <button className="flex gap-2 items-center bg-vermelho text-white rounded-sm py-3 w-full justify-center active:scale-98 transition">
          <IoLogoWhatsapp />
          <p className="text-sm font-semibold">
            Solicitar orçamento pelo Whatsapp
          </p>
        </button>
      </div>

      <div className="shadow border border-gray-200 rounded-sm w-full p-4 my-4">
        <span className="bg-vermelho/10 p-3 inline-block rounded-sm">
          <Home className="text-vermelho" size={20} />
        </span>
        <h3 className="font-heading text-xl font-extrabold my-2">
          Quero revender
        </h3>
        <p className="text-gray-700">
          Quer vender canecas personalizadas no seu ponto comercial? Temos
          condições especiais pra revendedores. Fale com a gente e monte seu
          próprio negócio.
        </p>
        <div className="flex flex-col gap-2 mt-4 font-semibold text-sm text-gray-700">
          <div className="flex gap-2 items-center">
            <div className="bg-vermelho/10 p-1 rounded-full">
              <Check className="text-vermelho" size={10} />
            </div>
            <p>Preços exclusivos para revendedores</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-vermelho/10 p-1 rounded-full">
              <Check className="text-vermelho" size={10} />
            </div>
            <p>Suporte dedicado e prazo garantido</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-vermelho/10 p-1 rounded-full">
              <Check className="text-vermelho" size={10} />
            </div>
            <p>Arte aprovada antes da produção</p>
          </div>
        </div>
        <button className="flex mt-4 gap-3 text-vermelho border-3 border-vermelho rounded-sm w-full py-2  items-center justify-center active:scale-98 transition bg-vermelho/10">
          <ShoppingCart size={18} />
          <span className="font-semibold text-sm">Negociar preço de revenda</span>
        </button>
      </div>
    </section>
  );
};

export default CorporateOrders;
