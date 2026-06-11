import CustomizationOption from "@/components/ui/CustomizationOption";
import ProductDetails from "@/components/ui/ProductDetails";
import ProductQuantity from "@/components/ui/ProductQuantity";

import { MoveHorizontal } from "lucide-react";

const page = () => {
  return (
    <div className="px-5 py-3 flex flex-col gap-1">
      <div className="bg-vermelho/10 h-70 w-full rounded-sm"></div>
      <div className="text-gray-300 text-xs flex items-center gap-1 justify-center my-1 font-body font-semibold">
        <MoveHorizontal size={14} /> Arraste para girar
      </div>
      <h1 className="font-heading text-xl font-extrabold">
        Caneca Clássica Personalizada
      </h1>
      <div className="font-body">
        <span className="text-vermelho font-bold text-2xl">R$ 49,90 </span>
        <span className="text-gray-500 text-sm font-light">R$ 69,90</span>
      </div>
      <p className="font-body text-gray-500 text-xs font-light">
        ou 3x de R$ 16,53 sem juros
      </p>

      <div className="h-0.5 bg-gray-100 my-1 rounded-2xl"></div>

      <h2 className="font-body font-semibold text-xs tracking-wider mt-1">
        QUANTIDADE{" "}
      </h2>
      <ProductQuantity />

      <h2 className="font-body font-semibold text-xs tracking-wider mt-4">
        COMO VOCÊ QUER PERSONALIZAR?
      </h2>
      <CustomizationOption />
      <ProductDetails />
    </div>
  );
};

export default page;
