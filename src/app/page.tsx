import { Header } from "@/src/components/layout/Header/header.component";
import { Products } from "@/src/components/layout/Products/products.component";
import { Footer } from "@/src/components/layout/Footer/footer.component";

import "@/src/styles/globals.css";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Products />
      <Footer />
    </div>
  );
}
