import Catalog from "@/components/sections/ProductsCatalog";
import CorporateOrders from "@/components/sections/CorporateOrders";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Catalog />
      <CorporateOrders />
    </div>
  );
}
