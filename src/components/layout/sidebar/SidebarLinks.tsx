'use client';

import AppImage from '@/components/ui/AppImage';
import { SidebarQueryResult } from '@/sanity/types';
import Link from 'next/link';

interface SidebarLinksProps {
  linkProperties: NonNullable<SidebarQueryResult>[0]['linkListProperties'];
}

export default function SidebarLinks({ linkProperties }: SidebarLinksProps) {
  return (
    <section className='flex flex-col gap-3'>
      <div className='font-raleway underline text-sm'>
        {linkProperties?.linkListName}
      </div>
      <ul className='flex flex-col gap-2'>
        {linkProperties?.list?.map((linkItem, idx) => {
          return (
            linkItem.url && (
              <li key={idx} className='cursor-pointer hover:bg-secondary'>
                <Link
                  href={`${linkItem.url}`}
                  target='_blank'
                  className='flex items-center justify-center gap-2'
                >
                  <AppImage
                    src={linkItem.linkIcon?.src}
                    alt={linkItem.linkIcon?.alt}
                    width={25}
                    height={25}
                    wrapperClassName='w-8 h-8'
                    className='w-auto'
                  />
                  <div className='text-lg font-medium'>{linkItem.label}</div>
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </section>
  );
}
