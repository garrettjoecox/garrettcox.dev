'use client';

import Container from '@/components/Container';

const projects = [
  {
    title: 'HexOS',
    role: 'Current Employer',
    description:
      'Building the future of self-hosted software. HexOS makes it easy to run your own cloud with a beautiful, intuitive interface.',
    url: 'https://hexos.com',
  },
  {
    title: 'Ship of Harkinian',
    role: 'Lead Contributor',
    description:
      'A PC port of The Legend of Zelda: Ocarina of Time, reverse-engineered from the ground up. Features modern rendering, modding support, and cross-platform play.',
    url: 'https://github.com/HarbourMasters/Shipwright',
  },
  {
    title: '2 Ship 2 Harkinian',
    role: 'Lead Contributor',
    description:
      "A PC port of The Legend of Zelda: Majora's Mask, built on the same engine as Ship of Harkinian. Brings the classic to modern platforms with enhanced features.",
    url: 'https://github.com/HarbourMasters/2ship2harkinian',
  },
  {
    title: 'Cloudbreak.OK',
    role: 'Owner',
    description:
      'A self-hosting service in the OKC metro area. Helps customers break free from cloud subscriptions by setting up locally-hosted alternatives they own and control.',
    url: 'https://cloudbreakok.com',
  },
];

export default function Work() {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-[700px] flex-col space-y-8">
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-[#E2E8F0] p-6 transition-colors hover:border-[#4299E1] dark:border-[#2D3748] dark:hover:border-[#63B3ED]"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-[1.5rem] font-bold tracking-tight">{project.title}</h2>
                <span className="text-sm text-[#A0AEC0] dark:text-[#718096]">{project.role}</span>
              </div>
              <p className="text-[#2D3748] dark:text-[#CBD5E0]">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
}
