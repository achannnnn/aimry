import { createHashRouter } from "react-router";
import GoalListPage from "./pages/GoalListPage";
import GoalCreatePage from "./pages/GoalCreatePage";
import GoalDetailPage from "./pages/GoalDetailPage";
import GoalEditPage from "./pages/GoalEditPage";
import AccountCreatePage from "./pages/AccountCreatePage";
import LoginPage from "./pages/LoginPage";
import AccountInfoPage from "./pages/AccountInfoPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createHashRouter([
  {
    path: "/",
    Component: () => (
      <ProtectedRoute>
        <GoalListPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/goal/:id",
    Component: () => (
      <ProtectedRoute>
        <GoalDetailPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/goal/create",
    Component: () => (
      <ProtectedRoute>
        <GoalCreatePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/goal/edit/:id",
    Component: () => (
      <ProtectedRoute>
        <GoalEditPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/account",
    Component: () => (
      <ProtectedRoute>
        <AccountInfoPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    Component: AccountCreatePage,
  },
]);