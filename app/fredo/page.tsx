'use client';

import { useState, useEffect } from 'react';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { AdminLogin } from '@/components/AdminLogin';
import { authHelpers } from '@/lib/supabase/client';
import { defaultContent } from '@/lib/default-content';
import type { SiteContent } from '@/types/content';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [siteContent, setSiteContent] = useState<SiteContent>(defaultContent);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await authHelpers.getSession();
      if (result.success && result.session) {
        setIsAuthenticated(true);
        setCurrentUser(result.session.user);
      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
      setIsCheckingAuth(false);
    };

    checkAuth();

    const { data: authListener } = authHelpers.onAuthStateChange(
      async (_event: string, session: any) => {
        if (session) {
          setIsAuthenticated(true);
          setCurrentUser(session.user);
        } else {
          setIsAuthenticated(false);
          setCurrentUser(null);
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const result = await authHelpers.signIn(email, password);
      if (result.success) {
        setIsAuthenticated(true);
        setCurrentUser(result.user);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const handleLogout = async () => {
    await authHelpers.signOut();
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  if (isCheckingAuth) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: '#FEFBF8' }}
      >
        <div className="text-center">
          <div
            className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: '#184A5A', borderTopColor: 'transparent' }}
          />
          <p
            className="font-sans text-sm"
            style={{ color: '#1E2A45', opacity: 0.7 }}
          >
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <AdminDashboard
      siteContent={siteContent}
      onUpdateContent={setSiteContent}
      onNavigateToSite={() => (window.location.href = '/')}
      onLogout={handleLogout}
      currentUser={currentUser}
    />
  );
}
