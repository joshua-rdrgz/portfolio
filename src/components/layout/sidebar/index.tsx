'use client';

import { SidebarQueryResult } from '@/sanity/types';
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

interface SidebarProps {
  sidebarData: SidebarQueryResult;
}

export default function Sidebar({ sidebarData }: SidebarProps) {
  return (
    <>
      <DesktopSidebar sidebarData={sidebarData} />
      <MobileSidebar sidebarData={sidebarData} />
    </>
  );
}
