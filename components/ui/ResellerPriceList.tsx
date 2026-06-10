import { Home, Check, ShoppingCart } from "lucide-react";

const ResellerPriceList = () => {
  return (
    <div className="shadow border border-gray-200 rounded-sm w-full p-4 my-4 flex flex-col justify-between max-w-lg min-h-100">
      <div>
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
      </div>
      <div className="flex justify-center">
          <button className="flex mt-4 gap-3 text-vermelho border-3 border-vermelho rounded-sm w-full py-2  items-center justify-center active:scale-98 transition bg-vermelho/10 cursor-pointer md:max-w-90">
            <ShoppingCart size={18} />
            <span className="font-semibold text-sm">Negociar preço de revenda</span>
          </button>
      </div>
    </div>
  );
};

export default ResellerPriceList;
