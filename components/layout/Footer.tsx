import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { CgCreditCard } from "react-icons/cg";
import { Clock2, CreditCard } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-vermelho px-5 py-3 text-white/90 text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      <div>
        <h1 className="text-white font-heading text-2xl md:text-3xl font-extrabold">
          Ki-Delícia
        </h1>
        <p className="text-xs font-body text-white/40">O LADO DOCE DA VIDA</p>
        <div className="mt-5">
          <p className="max-w-70">
            Canecas personalizadas feitas com carinho em Limoeiro do Norte - CE.
          </p>
        </div>
        <div className="flex mt-5 gap-4 text-white">
          <Link href="https://www.instagram.com/kidelicia.personalizados/">
            <div className="p-2 rounded-lg bg-white/12">
              <FaInstagram size={26} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/kidelicia.personalizados/">
            <div className="p-2 rounded-lg bg-white/12">
              <FaWhatsapp size={26} />
            </div>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-white font-mono font-bold tracking-widest text-sm mt-8">
          NAVEGUE
        </h2>
        <div className="flex flex-col mt-3 gap-3">
          <Link href="#">Início</Link>
          <Link href="#">Canecas</Link>
          <Link href="#">Como funciona</Link>
          <Link href="#">Pedidos corporativos</Link>
        </div>
      </div>
      <div>
        <h2 className="text-white font-mono font-bold tracking-widest text-sm mt-8">
          ATENDIMENTO
        </h2>
        <div className="flex items-center gap-2 mt-3">
          <Clock2 size={18} /> Segunda à Sábado, 8h às 18h
        </div>

        <h2 className="text-white font-mono font-bold tracking-widest text-sm mt-8">
          FORMAS DE PAGAMENTO
        </h2>
        <div className="flex mt-3 mb-8 gap-2 text-white">
          <div className="flex gap-2 items-center bg-white/10 px-3 py-2 rounded-md border border-white/20">
            {" "}
            <FaPix />
            Pix
          </div>
          <div className="flex gap-2 items-center bg-white/10 px-3 py-2 rounded-md border border-white/20">
            <CreditCard size={18} />
            Crédito
          </div>
          <div className="flex gap-2 items-center bg-white/10 px-3 py-2 rounded-md border border-white/20">
            <CgCreditCard size={17} />
            Débito
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
