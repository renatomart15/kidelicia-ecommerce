import React from "react";
import ProductCard from "../ui/ProductCard";

const Catalog = () => {
  return (
    <section>
      <div className="px-5 py-3">
        <p className="text-vermelho font-body font-semibold text-sm flex gap-2 items-center">
          <span>NOSSO CATÁLOGO</span>
          <span className="h-1 bg-vermelho rounded-4xl flex-1 md:hidden"></span>
        </p>
        <h1 className="font-heading text-2xl font-extrabold mt-2">
          Canecas para cada momento
        </h1>
      </div>
      <div className="flex px-8 scroll-pl-17 gap-8 overflow-x-scroll scroll-smooth snap-x snap-mandatory min-[1130px]:[&::-webkit-scrollbar]:hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Catalog;
