import About from '@/components/layout/portfolio/About';
import Contact from '@/components/layout/portfolio/Contact';
import Experience from '@/components/layout/portfolio/Experience';
import Herobox from '@/components/layout/portfolio/Herobox';
import Projects from '@/components/layout/portfolio/Projects';
import Skills from '@/components/layout/portfolio/Skills';
import { sanityFetch } from '@/sanity/lib/client';
import { portfolioContentQuery } from '@/sanity/lib/queries';
import { PortfolioContentQueryResult } from '@/sanity/types';

export default async function Page() {
  const portfolioData = await sanityFetch<PortfolioContentQueryResult>({
    query: portfolioContentQuery,
    tags: [
      'pageBuilder',
      'skillList',
      'skill',
      'jobProperties',
      'projectList',
      'project',
      'linkList',
      'link',
    ],
  });

  return (
    <>
      {portfolioData?.pageContent?.map((section, idx) => {
        switch (section._type) {
          case 'heroboxSection':
            return <Herobox key={`${section._type}-${idx}`} data={section} />;
          case 'skillSection':
            return <Skills key={`${section._type}-${idx}`} data={section} />;
          case 'timelineSection':
            return (
              <Experience key={`${section._type}-${idx}`} data={section} />
            );
          case 'projectSection':
            return <Projects key={`${section._type}-${idx}`} data={section} />;
          case 'aboutSection':
            return <About key={`${section._type}-${idx}`} data={section} />;
          case 'contactSection':
            return <Contact key={`${section._type}-${idx}`} data={section} />;
        }
      })}
    </>
  );
}
