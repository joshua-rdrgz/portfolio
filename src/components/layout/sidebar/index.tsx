'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import { SidebarQueryResult } from '@/sanity/types';
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

interface SidebarProps {
  sidebarData: SidebarQueryResult;
}

export default function Sidebar({ sidebarData }: SidebarProps) {
  const matches = useMediaQuery('(min-width: 1024px)');

  if (matches === null) {
    return null;
  }

  return (
    <>
      {matches ? (
        <DesktopSidebar sidebarData={sidebarData} />
      ) : (
        <MobileSidebar sidebarData={sidebarData} />
      )}
    </>
  );
}
