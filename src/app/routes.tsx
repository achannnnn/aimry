import { useEffect } from "react";
import { createHashRouter, Outlet, useLocation } from "react-router";
import GoalListPage from "./pages/GoalListPage";
import GoalCreatePage from "./pages/GoalCreatePage";
import GoalDetailPage from "./pages/GoalDetailPage";
import GoalEditPage from "./pages/GoalEditPage";
import MyPage from "./pages/MyPage";

function ScrollToTopOnNavigate() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search, hash]);

  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Outlet />
    </>
  );
}

export const router = createHashRouter([
  {
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: GoalListPage,
      },
      {
        path: "/goal/:id",
        Component: GoalDetailPage,
      },
      {
        path: "/goal/create",
        Component: GoalCreatePage,
      },
      {
        path: "/goal/edit/:id",
        Component: GoalEditPage,
      },
      {
        path: "/mypage",
        Component: MyPage,
      },
    ],
  },
]);