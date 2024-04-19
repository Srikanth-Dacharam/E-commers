import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className=" card w-48 shadow-md rounded-md flex">
      <Link to={`/product/${product.id}`} className="">
        <img src={product.image} alt={product.title} className="h-36 p-6" />
        <h1 className="">Title :{product.title} </h1>
        {/* 
      <Link to={`/product${product.id}`}>{product.title}</Link> */}
        <div className="flex justify-between mt-6">
          <p className=" text-gray-700">$ :{product.price} </p>
          <p className="text-gray-700 flex bg-teal-500 rounded-md text-white px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            {product.rating.rate}
          </p>
        </div>
      </Link>
    </div>
  );
}
