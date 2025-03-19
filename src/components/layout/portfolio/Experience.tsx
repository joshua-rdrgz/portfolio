'use client';

import * as TL from '@/components/ui/timeline';
import { TimelineItemType, TimelineSectionType } from '@/types/sanity';
import { PortableText } from 'next-sanity';

interface ExperienceProps {
  data: TimelineSectionType;
}

interface ContentProps {
  job: TimelineItemType;
}

const MainContent = ({ job }: ContentProps) => (
  <div className='flex flex-col gap-1 text-left'>
    <div className='font-bold text-2xl'>{job.title}</div>
    <div className='italic text-xl'>{job.companyName}</div>
    <div className='prose prose-invert text-lg prose-strong:font-[700]'>
      <PortableText value={job.description!} />
    </div>
  </div>
);

const MetaContent = ({ job }: ContentProps) => (
  <div className='flex flex-col gap-1'>
    <div className='font-bold text-lg'>{job.dates}</div>
    <div className='italic text-base'>{job.location}</div>
  </div>
);

const MobileContent = ({ job }: ContentProps) => (
  <div className='flex flex-col gap-1 text-left'>
    <div className='font-bold text-2xl'>{job.title}</div>
    <div className='italic text-xl'>{job.companyName}</div>
    <div className='font-bold text-lg'>{job.dates}</div>
    <div className='italic text-base'>{job.location}</div>
    <div className='prose prose-invert text-lg prose-strong:font-[700]'>
      <PortableText value={job.description!} />
    </div>
  </div>
);

export default function Experience({ data }: ExperienceProps) {
  return (
    <section
      id={data.navItemRef?.slug!}
      className='mt-12 flex flex-col gap-4 px-4 text-white'
    >
      <h2 className='text-4xl md:text-5xl font-bold text-center mb-8'>
        {data.header}
      </h2>
      <TL.Root>
        {data.timeline?.map((job, idx, arr) => (
          <TL.Item key={`${job.title}-${idx}`}>
            <TL.LeftContent className='hidden md:block'>
              {idx % 2 === 0 ? (
                <MetaContent job={job} />
              ) : (
                <MainContent job={job} />
              )}
            </TL.LeftContent>
            <TL.Center>
              <TL.Dot />
              <TL.Line isLast={idx === arr.length - 1} />
            </TL.Center>
            <TL.RightContent>
              {/* Mobile View */}
              <div className='md:hidden flex flex-col gap-2'>
                <MobileContent job={job} />
              </div>

              {/* Desktop View */}
              <div className='hidden md:block'>
                {idx % 2 === 0 ? (
                  <MainContent job={job} />
                ) : (
                  <MetaContent job={job} />
                )}
              </div>
            </TL.RightContent>
          </TL.Item>
        ))}
      </TL.Root>
    </section>
  );
}
