'use client';

import { SidebarQueryResult } from '@/sanity/types';
import SidebarHeader from './SidebarHeader';
import SidebarLinks from './SidebarLinks';
import SidebarNavigation from './SidebarNavigation';

interface DesktopSidebarProps {
  sidebarData: SidebarQueryResult;
}

export default function DesktopSidebar({ sidebarData }: DesktopSidebarProps) {
  const [theSidebarData] = sidebarData;

  const profilePic = theSidebarData.profilePic;
  const navProperties = theSidebarData.navList;
  const linkProperties = theSidebarData.linkList;

  return (
    <aside className='sticky top-0 left-0 h-screen w-72 px-3 bg-background/95 text-foreground border-r border-border shadow-xl'>
      <div className='h-full flex flex-col gap-5 justify-between py-16 text-center'>
        <SidebarHeader profilePic={profilePic} />
        <SidebarNavigation navProperties={navProperties} />
        <SidebarLinks linkProperties={linkProperties} />
      </div>
    </aside>
  );
}
