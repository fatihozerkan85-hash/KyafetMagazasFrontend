import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PaymentSuccess } from "./pages/PaymentSuccess";
import { PaymentFailed } from "./pages/PaymentFailed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/odeme-basarili",
    element: <PaymentSuccess />,
  },
  {
    path: "/odeme-basarisiz",
    element: <PaymentFailed />,
  },
]);