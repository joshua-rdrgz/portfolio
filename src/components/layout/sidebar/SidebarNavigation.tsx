'use client';

import { SidebarQueryResult } from '@/sanity/types';
import Link from 'next/link';
import React from 'react';

interface SidebarNavigationProps {
  navProperties: NonNullable<SidebarQueryResult>[0]['navListProperties'];
  onNavItemClick?: () => void;
}

export default function SidebarNavigation({
  navProperties,
  onNavItemClick,
}: SidebarNavigationProps) {
  const handleNavClick = (e: React.MouseEvent, slug: string | null) => {
    e.preventDefault();

    const targetElement = document.querySelector(`#${slug}`);
    if (targetElement) {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        const mobileHeader = document.querySelector('header');
        const headerHeight = mobileHeader ? mobileHeader.offsetHeight : 0;

        const elementPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - headerHeight,
          behavior: 'smooth',
        });
      } else {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      if (onNavItemClick) {
        onNavItemClick();
      }
    }
  };

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
              className='cursor-pointer rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors text-2xl font-medium py-1'
            >
              <Link
                href={`#${navItem.slug}`}
                className='block'
                onClick={(e) => handleNavClick(e, navItem.slug)}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
