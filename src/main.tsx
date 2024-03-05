import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./providers/ProductsProvider.tsx";
import { CartProvider } from "./providers/CartProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
