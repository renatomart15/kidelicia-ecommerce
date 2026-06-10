const ProductCard = () => {
  return (
    <div
      className="rounded-sm shadow overflow-hidden w-60 my-5 snap-start snap-always shrink-0 cursor-pointer
"
    >
      <div className="flex justify-center items-center h-52 bg-red-100">
        <p className="text-vermelho font-semibold text-xl">Caneca Clássica</p>
      </div>
      <div className="font-body font-semibold p-2">
        <p>Caneca Clássica Branca</p>
        <div>
          <div className="flex gap-1 mt-1">
            <p className="text-vermelho">R$ 49,90</p>
            <p className="text-gray-400 text-xs font-medium pt-0.5">R$ 69,90</p>
          </div>
          <p className="text-xs font-medium text-gray-600 mt-1">
            ou 3x sem juros
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
