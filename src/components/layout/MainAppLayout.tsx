import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MainAppLayout provides the base layout for the application.
 * It centers its content both vertically and horizontally within the viewport
 * and applies the application's background color.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center min-h-screen bg-background',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
