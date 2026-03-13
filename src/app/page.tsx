'use client';

import { useMemo } from 'react';
import Container from '@/components/Container';

export default function Home() {
  const languages: Record<string, number> = useMemo(
    () => ({
      Typescript: 5,
      Javascript: 5,
      'C++': 4,
      Ruby: 3,
      SQL: 2,
      Rust: 1,
    }),
    [],
  );

  const tools: Record<string, number> = useMemo(
    () => ({
      React: 5,
      'React Native': 4,
      Vue: 3,
      Rails: 3,
      AWS: 2,
    }),
    [],
  );

  const yearsOfExperience = useMemo(() => new Date().getFullYear() - 2015, []);

  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-[700px] flex-col space-y-8">
        <div className="flex flex-col">
          <CommandText>whoami</CommandText>
          <h1 className="mb-2 text-[2.25rem] md:text-[3rem] font-bold tracking-tight leading-tight">Garrett Cox</h1>
          <p className="text-[#2D3748] dark:text-[#CBD5E0]">
            Software Engineer with ~ {yearsOfExperience} years of professional experience, Father of 5 beautiful girls,
            Video Game Nerd, Dr. Pepper Enthusiast
          </p>
          <p className="text-[#A0AEC0] dark:text-[#718096]">Oklahoma City, Oklahoma</p>
        </div>
        <div className="mt-8 flex flex-col">
          <CommandText>cat skills.md</CommandText>
          <div className="flex flex-wrap justify-between">
            <div className="mr-4 flex-[1_1_300px]">
              <h2 className="mb-2 text-[1.5rem] md:text-[1.875rem] font-bold tracking-tight leading-tight">
                Languages
              </h2>
              {Object.keys(languages).map((language) => (
                <div key={language} className="flex items-center justify-between py-2">
                  <span>{language}</span>
                  <StarRating rating={languages[language]} />
                </div>
              ))}
            </div>
            <div className="mr-4 flex-[1_1_300px]">
              <h2 className="mb-2 text-[1.5rem] md:text-[1.875rem] font-bold tracking-tight leading-tight">
                Frameworks / Tools
              </h2>
              {Object.keys(tools).map((tool) => (
                <div key={tool} className="flex items-center justify-between py-2">
                  <span>{tool}</span>
                  <StarRating rating={tools[tool]} />
                </div>
              ))}
              <div className="py-2">And plenty more...</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function CommandText({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="pr-2 font-mono text-[20px] text-[#4299E1] dark:text-[#63B3ED]">~/dev</span>
      <span className="pr-2 font-mono text-[20px]">❯❯❯</span>
      <span className="pr-2 font-mono text-[20px] text-[#48BB78] dark:text-[#68D391]">{children}</span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`inline-block h-4 w-4 ${6 - s <= rating ? 'text-[#F6E05E]' : 'text-[#E2E8F0] dark:text-[#2D3748]'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
