'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';

export default function Container({ children }: { children: React.ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const pathname = usePathname();

  return (
    <>
      <Particles />
      <nav className="sticky top-0 z-10 mx-auto flex w-full max-w-[900px] flex-row items-center justify-between p-8 mt-0 sm:mt-8 mb-8">
        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {mounted && resolvedTheme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white"
              aria-label="Light mode"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-label="Dark mode"
            >
              <path
                fillRule="evenodd"
                d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div className="gap-2 flex">
          <Link
            href="/"
            className={`inline-flex items-center h-10 rounded-md px-3 sm:px-4 py-2 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 ${pathname === '/' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            Me
          </Link>
          <Link
            href="/work"
            className={`inline-flex items-center h-10 rounded-md px-3 sm:px-4 py-2 font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 ${pathname === '/work' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
          >
            Work
          </Link>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center px-4 sm:px-8 text-black dark:text-white">
        {children}
        <Footer />
      </main>
    </>
  );
}
