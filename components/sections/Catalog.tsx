import React from "react";
import ProductCard from "../ui/ProductCard";

const Catalog = () => {
  return (
    <section>
      <div className="px-5 py-3">
        <p className="text-vermelho font-body font-semibold text-xs">
          NOSSO CATÁLOGO
        </p>
        <h1 className="font-heading text-2xl font-extrabold">
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
