import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Capacitor } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";

export const AUTH_STORAGE_KEY = "aimry-auth";

function getEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

const supabaseUrl = getEnv("VITE_SUPABASE_URL");
const supabaseAnonKey = getEnv("VITE_SUPABASE_ANON_KEY");

const localStorageStorage = {
  getItem: async (key: string) => {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // ignore
    }
  },
  removeItem: async (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // ignore
    }
  },
};

const nativeStorage = Capacitor.isNativePlatform()
  ? {
    getItem: async (key: string) => {
      try {
        const { value } = await Preferences.get({ key });
        if (typeof value === "string") return value;
        return null;
      } catch {
        return localStorageStorage.getItem(key);
      }
    },
    setItem: async (key: string, value: string) => {
      try {
        await Preferences.set({ key, value });
      } catch {
        await localStorageStorage.setItem(key, value);
      }
    },
    removeItem: async (key: string) => {
      try {
        await Preferences.remove({ key });
      } catch {
        await localStorageStorage.removeItem(key);
      }
    },
  }
  : undefined;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: "pkce",
        detectSessionInUrl: false,
        storageKey: AUTH_STORAGE_KEY,
        storage: nativeStorage ?? localStorageStorage,
      },
    })
    : null;
