"use client";

import { Image, ArrowUpFromLine } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const CustomizationOption = () => {
  const [customizationOption, setCustomizationOption] = useState("");
  return (
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 my-2 select-none">
      <div className="flex flex-col gap-3 max-w-100">
        <div
          onClick={() => {
            if (customizationOption === "catalogo") setCustomizationOption("");
            else setCustomizationOption("catalogo");
          }}
          className={`${customizationOption === "catalogo" ? "border-vermelho bg-vermelho/10" : "border-gray-300"} font-body font-semibold border-2  rounded-sm  p-4 flex gap-4 items-center shadow cursor-pointer active:scale-99 transition`}
        >
          <div
            className={`${customizationOption === "catalogo" ? "bg-vermelho" : "bg-gray-200"} bg-gray-200 max-w-max p-3 rounded-sm`}
          >
            <Image
              className={`${customizationOption === "catalogo" ? "text-white" : " text-gray-400"}`}
            />
          </div>
          <div>
            <p className="text-sm mb-1">Escolher do catálogo</p>
            <p className="font-medium text-gray-600  text-xs">
              Escolha uma arte pronta e veja como fica na sua caneca
            </p>
          </div>
        </div>
        {customizationOption === "catalogo" && (
          <>
            <div className="font-body font-semibold border border-gray-300 rounded-sm p-4 gap-4 items-center shadow">
              <h2 className="font-body tracking-wider text-xs text-gray-500 font-medium mb-4">
                ARTE SELECIONADA
              </h2>
              <div className="flex items-center gap-4">
                <div className="bg-vermelho/10 p-2 border-2 rounded-sm border-vermelho">
                  <Image className="text-vermelho" />
                </div>
                <div>
                  <h3 className="text-sm mb-0.5">Floral Rosa</h3>
                  <p className="text-xs text-gray-400 font-medium">Tema arte</p>
                </div>
              </div>
            </div>
            <button className="flex justify-center bg-vermelho text-white rounded-sm py-3 active:scale-99 transition cursor-pointer ">
              <p className="text-sm font-semibold flex items-center gap-2">
                <ArrowUpFromLine size={20} />
                Abrir catálogo de artes
              </p>
            </button>
          </>
        )}
      </div>

      <div className="max-w-100">
        <div
          onClick={() => {
            if (customizationOption === "personalizado")
              setCustomizationOption("");
            else setCustomizationOption("personalizado");
          }}
          className={`${customizationOption === "personalizado" ? "border-vermelho bg-vermelho/10" : "border-gray-300"} font-body font-semibold border-2 rounded-sm p-4 flex gap-4 items-center shadow cursor-pointer active:scale-99 transition`}
        >
          <div
            className={`${customizationOption === "personalizado" ? "bg-vermelho" : "bg-gray-200"} bg-gray-200 max-w-max p-3 rounded-sm`}
          >
            <FaWhatsapp
              className={`${customizationOption === "personalizado" ? "text-white" : " text-gray-400"}`}
              size={24}
            />
          </div>
          <div>
            <p className="text-sm mb-1">Arte personalizada</p>
            <p className="font-medium text-gray-600  text-xs">
              Quer algo único? Combine a arte com a gente pelo Whatsapp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizationOption;
