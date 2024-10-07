'use client';

import { Button } from '@/components/ui/button';
import * as SH from '@/components/ui/sheet';
import { SidebarQueryResult } from '@/sanity/types';
import { MenuIcon } from 'lucide-react';
import SidebarHeader from './SidebarHeader';
import SidebarLinks from './SidebarLinks';
import SidebarNavigation from './SidebarNavigation';

interface SidebarSheetMenuProps {
  sidebarData: SidebarQueryResult;
}

export default function SidebarSheetMenu({
  sidebarData,
}: SidebarSheetMenuProps) {
  const [theSidebarData] = sidebarData;

  const profilePic = theSidebarData.profilePic;
  const navProperties = theSidebarData.navList;
  const linkProperties = theSidebarData.linkList;

  return (
    <SH.Root>
      <SH.Trigger className='lg:hidden' asChild>
        <Button className='h-8' variant='outline' size='icon'>
          <MenuIcon size={20} />
        </Button>
      </SH.Trigger>
      <SH.Content className='w-72 px-3 h-full flex flex-col' side='left'>
        <div className='h-full flex flex-col gap-5 justify-between py-16 text-center'>
          <SidebarHeader profilePic={profilePic} />
          <SidebarNavigation navProperties={navProperties} />
          <SidebarLinks linkProperties={linkProperties} />
        </div>
      </SH.Content>
    </SH.Root>
  );
}
