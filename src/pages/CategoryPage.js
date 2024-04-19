import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {
  const { id } = useParams();

  const Url = `https://fakestoreapi.com/products/category/${id}`;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const responce = await fetch(Url);
    const data = await responce.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <div cclassName=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-wrap gap-8 justify-between">
      {loading
        ? "loading..."
        : products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
    </div>
  );
}
