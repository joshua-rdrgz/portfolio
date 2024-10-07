'use client';

import { SidebarQueryResult } from '@/sanity/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface SidebarHeaderProps {
  profilePic: NonNullable<SidebarQueryResult>[0]['profilePic'];
}

export default function SidebarHeader({ profilePic }: SidebarHeaderProps) {
  return (
    <section className='flex flex-col gap-4'>
      {profilePic ? (
        <Image
          className='w-full aspect-[800/400]'
          src={urlFor(profilePic.url!)
            .width(800)
            .height(400)
            .quality(80)
            .auto('format')
            .url()}
          alt={profilePic.alt!}
          width='800'
          height='400'
          priority // above the fold
        />
      ) : null}
      <div className='font-bold text-5xl text-wrap'>Joshua Rodriguez</div>
    </section>
  );
}
