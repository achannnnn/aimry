import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes.tsx';
import { GoalsProvider } from './context/GoalsContext';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <GoalsProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </GoalsProvider>
    </AuthProvider>
  );
}