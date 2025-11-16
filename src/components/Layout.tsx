import { ReactNode, useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { usePreferences } from '@/hooks/usePreferences';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { preferences } = usePreferences();
  const [sidebarOpen, setSidebarOpen] = useState(!preferences.sidebarCollapsed);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex pt-16">
        <Sidebar isOpen={sidebarOpen} />
        <main
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'ml-0 lg:ml-64' : 'ml-0'
          }`}
        >
          <div className="container mx-auto px-4 py-8 max-w-5xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
