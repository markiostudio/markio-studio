import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type SupabaseEnv = {
  url: string;
  publishableKey: string;
};

function getSupabaseEnv(): SupabaseEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url?.trim()) {
    throw new Error(
      "Missing environment variable: NEXT_PUBLIC_SUPABASE_URL. Add it to .env.local."
    );
  }

  if (!publishableKey?.trim()) {
    throw new Error(
      "Missing environment variable: NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY. Add it to .env.local."
    );
  }

  return {
    url: url.trim(),
    publishableKey: publishableKey.trim(),
  };
}

let browserClient: SupabaseClient | undefined;

/**
 * Returns a singleton Supabase client for browser/client-side usage.
 * Uses the publishable key only — never use service_role here.
 */
export function getSupabaseBrowserClient(): SupabaseClient {
  if (!browserClient) {
    const { url, publishableKey } = getSupabaseEnv();
    browserClient = createClient(url, publishableKey);
  }

  return browserClient;
}

/**
 * Creates a new Supabase browser client instance.
 * Prefer getSupabaseBrowserClient() unless you need a fresh instance.
 */
export function createSupabaseBrowserClient(): SupabaseClient {
  const { url, publishableKey } = getSupabaseEnv();
  return createClient(url, publishableKey);
}
