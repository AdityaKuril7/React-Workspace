import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);

        return () => {};
      } catch (e) {
        console.log(e);
      }
    };
    get();
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <div className=" flex flex-col text-black w-[100vw] h-[100vh]">
          <header className="text-white flex justify-center items-center font-serif bg-black m-10 bg-gray-900 h-70">
            <p className="text-8xl font-s flex text-center justify-center items-center">
              Summer Essential
              <br /> Sale-UTO 50% OFF!
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {products.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Home
