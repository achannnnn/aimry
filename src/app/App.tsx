import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes.tsx';
import { GoalsProvider } from './context/GoalsContext';

export default function App() {
  return (
    <GoalsProvider>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" />
    </GoalsProvider>
  );
}