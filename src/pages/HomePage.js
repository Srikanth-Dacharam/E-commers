import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilterProducts] = useState(products);

  const productUrl = "https://fakestoreapi.com/products";
  async function fetchProducts() {
    setLoading(true);
    const responce = await fetch(productUrl);
    const data = await responce.json();
    setFilterProducts(data);
    // console.log(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(result);
  }, [searchTerm]);

  return (
    <div>
      <div className="max-w-md mx-auto mt-10">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="w-full px-4 py-2 border  rounded-lg"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-wrap gap-8 justify-between">
        {loading
          ? "Loading..."
          : filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
      </div>
    </div>
  );
}

export default HomePage;
