'use client';

import { SidebarQueryResult } from '@/sanity/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import AppImage from '@/components/ui/AppImage';

interface SidebarHeaderProps {
  profilePic: NonNullable<SidebarQueryResult>[0]['profilePic'];
}

export default function SidebarHeader({ profilePic }: SidebarHeaderProps) {
  return (
    <section className='flex flex-col gap-4'>
      <AppImage
        src={profilePic.url}
        alt={profilePic.alt}
        className='ml-auto mr-auto rounded-sm w-[200px] shadow-lg'
        width={400}
        height={400}
        priority
      />
      <div className='font-bold text-wrap text-4xl'>Joshua Rodriguez</div>
    </section>
  );
}
