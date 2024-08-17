import * as React from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    'theme-light' | 'dark' | 'system'
  >('theme-light');

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'theme-light');
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <Button
      className="p-0"
      onClick={() =>
        setThemeState(theme === 'theme-light' ? 'dark' : 'theme-light')
      }
    >
      <Sun className="m500:h-4 m500:w-4 stroke-text hidden h-6 w-6 dark:inline" />
      <Moon className="m500:h-4 m500:w-4 stroke-text inline h-6 w-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
