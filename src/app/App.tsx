import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes.tsx';
import { GoalsProvider } from './context/GoalsContext';
import { AuthProvider } from './context/AuthContext';
import AuthCallbackPage from './pages/AuthCallbackPage';

export default function App() {
  const isAuthCallback = typeof window !== "undefined" && window.location.pathname === "/auth/callback";

  return (
    <AuthProvider>
      <GoalsProvider>
        {isAuthCallback ? <AuthCallbackPage /> : <RouterProvider router={router} />}
        <Toaster position="top-center" />
      </GoalsProvider>
    </AuthProvider>
  );
}