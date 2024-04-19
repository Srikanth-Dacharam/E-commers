import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/CartSlice";
import toast from "react-hot-toast";

export default function ProductPage() {
  const { id } = useParams();
  const Url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchProducts() {
    setLoading(true);
    const responce = await fetch(Url);
    const data = await responce.json();
    setProduct(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchProducts();
  }, [id]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast("Item added to cart successfully!  ");
    navigate("/CartPage");
  };

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-wrap gap-8 justify-between ">
      {loading ? (
        "loading..."
      ) : (
        <div className="flex">
          <div className="w-1/2">
            <img src={product.image} alt={product.title} className=" w-full" />
          </div>
          <div className="">
            <p className="text-2xl font-bold pl-0px">{product.title}</p>

            <div className="flex justify-between mt-10">
              <p className=" text-2xl font-bold">$ : {product.price}</p>
              <div>
                <p className="text-gray-700 flex bg-teal-500 rounded-md text-white px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  {product?.rating?.rate}
                </p>
              </div>
            </div>

            <p>{product.description}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-cart-btn m-4 bg-teal-500 rounded-md shadow-md px-4 py-2 hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapDispatchToProps = (state) => {
  return {
    addToCart: state.addToCart,
  };
};
