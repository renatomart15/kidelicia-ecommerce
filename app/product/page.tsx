import CustomizationOption from "@/components/ui/CustomizationOption";
import ProductDetails from "@/components/ui/ProductDetails";
import ProductQuantity from "@/components/ui/ProductQuantity";

import { MoveHorizontal } from "lucide-react";

const page = () => {
  return (
    <div className="px-5 py-3 flex flex-col gap-1 lg:flex-row lg:gap-8 justify-between">
      <div className="lg:w-[50%] max-w-155 flex flex-col ml-auto">
        <div className="bg-vermelho/10 h-70 w-full rounded-sm lg:min-h-150"></div>
        <div className="text-gray-300 text-xs flex items-center gap-1 justify-center my-1 font-body font-semibold">
          <MoveHorizontal size={14} /> Arraste para girar
        </div>
        <div className="hidden lg:block">
          <ProductDetails />
        </div>
      </div>
      <div className="lg:w-[50%]">
        <div className="flex flex-col lg:gap-1">
          <h1 className="font-heading text-xl md:text-2xl lg:text-3xl font-extrabold">
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
        </div>
        <h2 className="font-body font-semibold text-xs tracking-wider mt-1">
          QUANTIDADE{" "}
        </h2>
        <ProductQuantity />
        <h2 className="font-body font-semibold text-xs tracking-wider mt-4">
          COMO VOCÊ QUER PERSONALIZAR?
        </h2>
        <CustomizationOption />
        <div className="block lg:hidden">
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default page;
