'use client';

import { SidebarQueryResult } from '@/sanity/types';
import { ModeToggle } from '@/components/theme/mode-toggle';
import SidebarSheetMenu from './SidebarSheetMenu';

interface MobileSidebarProps {
  sidebarData: SidebarQueryResult;
}

export default function MobileSidebar({ sidebarData }: MobileSidebarProps) {
  return (
    <header className='sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary'>
      <div className='mx-4 sm:mx-8 flex h-14 items-center'>
        <div className='flex items-center space-x-4 lg:space-x-0'>
          <SidebarSheetMenu sidebarData={sidebarData} />
          <h1 className='font-bold'>Joshua Rodriguez</h1>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
