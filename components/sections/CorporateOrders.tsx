import GiftPriceList from "./GiftPriceList";
import ResellerPriceList from "./ResellerPriceList";

const CorporateOrders = () => {
  return (
    <section className="px-5 py-3 flex flex-col items-center">
      <span className="font-body text-vermelho rounded-md border-2 font-semibold text-xs py-1 px-3 tracking-widest">
        PEDIDOS CORPORATIVOS
      </span>
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-extrabold my-4 text-center">
        Sua marca em cada caneca
      </h2>
      <p className="text-center text-gray-700 md:text-lg md:my-3">
        Atendemos empresas, eventos e revendedores com preços especiais e arte
        personalizada com a identidade da sua marca.
      </p>

      <div className="flex flex-col min-[900px]:flex-row gap-10">
        <GiftPriceList />
        <ResellerPriceList />
      </div>
    </section>
  );
};

export default CorporateOrders;
