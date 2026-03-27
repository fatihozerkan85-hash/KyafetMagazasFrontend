import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function Main() {
  return <RouterProvider router={router} />;
}
