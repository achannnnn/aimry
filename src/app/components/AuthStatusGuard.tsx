import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { supabase } from "../lib/supabaseClient";

export default function AuthStatusGuard({
  children,
}: {
  children: ReactNode;
}) {
  if (!supabase) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
