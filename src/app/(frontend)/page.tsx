import About from '@/components/layout/portfolio/About';
import Contact from '@/components/layout/portfolio/Contact';
import Experience from '@/components/layout/portfolio/Experience';
import Herobox from '@/components/layout/portfolio/Herobox';
import Projects from '@/components/layout/portfolio/Projects';
import Skills from '@/components/layout/portfolio/Skills';
import { client } from '@/sanity/lib/client';
import { PortfolioContentQuery } from '@/sanity/lib/queries/portfolioContentQuery';

export default async function Page() {
  const portfolioData = await client.fetch(PortfolioContentQuery);

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
