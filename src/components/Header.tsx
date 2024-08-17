import clsx from 'clsx';
import { ModeToggle } from './mode-toggle';

export default function Nav({ path }: Readonly<{ path: string }>) {
  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about/',
      text: 'About',
    },
    {
      path: '/work/',
      text: 'Work',
    },
  ];

  return (
    <div className="fixed left-0 top-5 z-50 w-full">
      <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-main p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
        {links.map((link) => {
          return (
            <a
              key={link.path}
              className={clsx(
                'hover:border-border dark:hover:border-darkBorder rounded-base border-2 px-2 py-2 transition-colors',
                path === link.path
                  ? 'border-border dark:border-darkBorder'
                  : 'border-transparent'
              )}
              href={link.path}
            >
              {link.text}
            </a>
          );
        })}
        <ModeToggle />
      </nav>
    </div>
  );
}
