'use client';

import { createBrowserClient } from '@supabase/ssr';

export function createClientSupabaseClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Singleton for client-side usage
let clientInstance: ReturnType<typeof createClientSupabaseClient> | null = null;

export function getSupabaseClient() {
  if (!clientInstance) {
    clientInstance = createClientSupabaseClient();
  }
  return clientInstance;
}

// Auth helpers for client components
export const authHelpers = {
  async signIn(email: string, password: string) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Sign in error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user, session: data.session };
  },

  async getSession() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Get session error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, session: data.session };
  },

  async getUser() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Get user error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, user: data.user };
  },

  async signOut() {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Sign out error:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  },

  async isAuthenticated() {
    const { session } = await this.getSession();
    return !!session;
  },

  onAuthStateChange(callback: (event: string, session: any) => void) {
    const supabase = getSupabaseClient();
    return supabase.auth.onAuthStateChange(callback);
  },
};
