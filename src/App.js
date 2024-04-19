import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";
import CheckoutForm from "./pages/CheckOutForm";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        {/* <Route path="AboutPage" element={<AboutPage />} /> */}
        {/* <Route path="ContactPage" element={<ContactPage />} /> */}
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="CartPage" element={<CartPage />} />
        <Route path="CheckOutForm" element={<CheckoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
