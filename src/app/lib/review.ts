import { Capacitor, registerPlugin } from "@capacitor/core";

interface ReviewPlugin {
  requestReview: () => Promise<void>;
}

const Review = registerPlugin<ReviewPlugin>("Review");

function getEnv(name: string): string | undefined {
  const value = import.meta.env[name];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function buildAppStoreReviewUrl(appId: string): string | undefined {
  const trimmed = appId.trim();
  if (!/^[0-9]+$/.test(trimmed)) return undefined;
  return `https://apps.apple.com/app/id${trimmed}?action=write-review`;
}

const appStoreReviewUrl =
  getEnv("VITE_APP_STORE_REVIEW_URL") ??
  (getEnv("VITE_APP_STORE_APP_ID") ? buildAppStoreReviewUrl(getEnv("VITE_APP_STORE_APP_ID")!) : undefined);

export type RequestAppReviewResult =
  | "native"
  | "opened"
  | "missing_url"
  | "blocked"
  | "failed";

export async function requestAppReview(): Promise<RequestAppReviewResult> {
  const isNative = Capacitor.isNativePlatform();
  const platform = Capacitor.getPlatform();

  // iOSネイティブは、まずシステムのレビューUIを試す（出ない場合もあるのが仕様）
  if (isNative && platform === "ios") {
    try {
      await Review.requestReview();
      return "native";
    } catch {
      // fall through to URL fallback
    }
  }

  if (!appStoreReviewUrl) {
    return "missing_url";
  }

  // Webはポップアップブロックを避けるため、同期的に開く
  if (!isNative) {
    try {
      const opened = window.open(appStoreReviewUrl, "_blank", "noopener,noreferrer");
      return opened ? "opened" : "blocked";
    } catch {
      return "failed";
    }
  }

  // ネイティブ（iOSでrequestReviewが失敗した/Android等）はBrowserでURLを開く
  try {
    const { Browser } = await import("@capacitor/browser");
    await Browser.open({ url: appStoreReviewUrl });
    return "opened";
  } catch {
    return "failed";
  }
}
