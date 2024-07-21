import Header from "@/components/header/Header";
import Info from "@/components/info/Info";
import Products from "@/components/products/Products";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Info />
      <Products />
    </div>
  );
}
