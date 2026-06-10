import React from "react";

const Hero = () => {
  return (
    <section className="px-5 py-17 text-center flex flex-col items-center">
      <span className="flex items-center gap-2 bg-amarelo/10 rounded-md border-2 border-amarelo px-2 py-1">
        {" "}
        <div className="bg-amarelo h-2 w-2 rounded-full"></div>
        <span className="text-xs font-body font-semibold text-amber-950/70">ARTE EXCLUSIVA EM CADA PEÇA</span>
      </span>
      <h1 className="font-heading text-3xl font-extrabold my-4">
        Presentes que contam <span className="text-vermelho">a sua história</span>
      </h1>
      <p className="text-gray-700">
        Personalize com fotos, frases e artes exclusivas. Presentes únicos para
        momentos inesquecíveis.
      </p>
    </section>
  );
};

export default Hero;
