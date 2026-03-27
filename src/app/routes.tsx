import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { PaymentFailed } from "./pages/PaymentFailed";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { NotFound } from "./pages/NotFound";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { OrderTracking } from "./pages/OrderTracking";
import { FAQ } from "./pages/FAQ";
import { Account } from "./pages/Account";
import { Login } from "./pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/urun/:id",
    element: <ProductDetail />,
  },
  {
    path: "/sepet",
    element: <Cart />,
  },
  {
    path: "/favoriler",
    element: <Favorites />,
  },
  {
    path: "/hakkimizda",
    element: <About />,
  },
  {
    path: "/iletisim",
    element: <Contact />,
  },
  {
    path: "/siparis-takip",
    element: <OrderTracking />,
  },
  {
    path: "/sss",
    element: <FAQ />,
  },
  {
    path: "/hesabim",
    element: <Account />,
  },
  {
    path: "/giris",
    element: <Login />,
  },
  {
    path: "/odeme",
    element: <Checkout />,
  },
  {
    path: "/odeme-basarili",
    element: <PaymentSuccess />,
  },
  {
    path: "/odeme-basarisiz",
    element: <PaymentFailed />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);