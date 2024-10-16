'use client';

import { SidebarQueryResult } from '@/sanity/types';
import { ModeToggle } from '@/components/theme/mode-toggle';
import * as SH from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import SidebarHeader from './SidebarHeader';
import SidebarLinks from './SidebarLinks';
import SidebarNavigation from './SidebarNavigation';
import { useState } from 'react';

interface MobileSidebarProps {
  sidebarData: SidebarQueryResult;
}

export default function MobileSidebar({ sidebarData }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [theSidebarData] = sidebarData;

  const profilePic = theSidebarData.profilePic;
  const navProperties = theSidebarData.navListProperties;
  const linkProperties = theSidebarData.linkListProperties;

  return (
    <header className='lg:hidden sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary'>
      <div className='mx-4 sm:mx-8 flex h-14 items-center'>
        <div className='flex items-center space-x-4 lg:space-x-0'>
          <SH.Root open={isOpen} onOpenChange={setIsOpen}>
            <SH.Trigger asChild>
              <Button
                className='h-8 flex items-center justify-center'
                variant='outline'
                size='icon'
              >
                <MenuIcon size={20} />
              </Button>
            </SH.Trigger>
            <SH.Content
              className='w-72 px-3 h-full flex flex-col border-2'
              side='left'
            >
              <SH.Title className='sr-only'>Navigation Menu</SH.Title>
              <div className='h-full flex flex-col gap-5 justify-between py-16 text-center'>
                <SidebarHeader profilePic={profilePic} />
                <SidebarNavigation
                  navProperties={navProperties}
                  onNavItemClick={() => setIsOpen(false)}
                />
                <SidebarLinks linkProperties={linkProperties} />
              </div>
            </SH.Content>
          </SH.Root>
          <h1 className='font-bold'>Joshua Rodriguez</h1>
        </div>
        <div className='flex flex-1 items-center justify-end'>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
