import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
} from "../components/CartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckOutForm = () => {
    navigate("/CheckOutForm");
  };

  const totalCartAmount = cart.cartItems.reduce((total, cartItems) => {
    return total + (cartItems.price || 0) * cartItems.cartTotalQuantity;
  }, 0);
  return (
    <div>
      <h2 className="text-2xl font-bold text-gold-500">Shoping cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="flex justify-evenly  mt-20">
          <p className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded shadow-md">
            Your Cart is Empty
          </p>
          <div>
            <Link to="/">
              <span className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-yellow-500 shadow-md ">
                {" "}
                Go to Shoping
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between text-2xl font-bold mt-8">
            <p>Image</p>
            <h3>Title</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
            {/* <span>remove</span>
            
            
            */}
          </div>
          <div>
            {cart.cartItems?.map((cartItem) => (
              <div
                key={cartItem}
                className="border flex p-2 justify-between items-center mt-5 shadow-md rounded-md"
              >
                <div>
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="h-40 p-6"
                  />

                  {/* <p>{cartItem.price}</p> */}
                </div>
                <h3>{cartItem.title}</h3>
                <div>${cartItem.price}</div>
                <div className="flex gap-5 border border-solid border-gray-400 p-4 rounded-lg">
                  <button
                    className="px-4 py-2 bg-pink-200 text-white font-semibold rounded hover:bg-pink-600 shadow-md"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  <div>Quantity : {cartItem.cartTotalQuantity}</div>
                  <button
                    className="px-4 py-2 bg-pink-200 text-white font-semibold rounded hover:bg-pink-600 shadow-md"
                    onClick={() => handleIncreaseQuantity(cartItem)}
                  >
                    +
                  </button>
                </div>
                <div>
                  Total :$ {cartItem.price * cartItem.cartTotalQuantity}
                </div>
                <button
                  onClick={() => handleRemoveFromCart(cartItem)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-blue-600"
                >
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-8 mb-4">
            <button
              onClick={() => handleClearCart()}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-blue-600 shadow-md "
            >
              Clear Total cart
            </button>

            <button
              onClick={() => handleCheckOutForm()}
              className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-blue-600"
            >
              Check out
            </button>

            <div className="">
              Total Cart Amount: $ {totalCartAmount.toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
