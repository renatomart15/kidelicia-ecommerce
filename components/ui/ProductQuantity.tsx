"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex max-w-max shadow font-body font-semibold my-2">
      <button
        onClick={() => {
          if (quantity > 1) setQuantity(quantity - 1);
        }}
        className="border border-gray-200 px-3 py-2 bg-vermelho/10 cursor-pointer"
      >
        <Minus />
      </button>
      <div className="border-t border-gray-200 border-b w-13 text-center py-2">
        {quantity}
      </div>
      <button
        onClick={() => setQuantity(quantity + 1)}
        className="border border-gray-200 px-3 py-2 bg-vermelho/10 cursor-pointer"
      >
        <Plus />
      </button>
    </div>
  );
};

export default ProductQuantity;
