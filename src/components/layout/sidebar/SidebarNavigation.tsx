'use client';

import { SidebarQueryResult } from '@/sanity/types';
import Link from 'next/link';
import React from 'react';

interface SidebarNavigationProps {
  navProperties: NonNullable<SidebarQueryResult>[0]['navList'];
}

export default function SidebarNavigation({
  navProperties,
}: SidebarNavigationProps) {
  return (
    <section className='flex flex-col gap-3'>
      <div className='font-raleway underline text-sm'>
        {navProperties?.navListName}
      </div>
      <nav>
        <ul className='flex flex-col gap-3'>
          {navProperties?.list?.map((navItem, idx) => (
            <li
              key={idx}
              className='cursor-pointer hover:bg-secondary text-2xl font-medium py-1'
            >
              <Link href={`#${navItem.slug?.current}`}>{navItem.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
