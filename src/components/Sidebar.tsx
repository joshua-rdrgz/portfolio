'use client';

import { SidebarQueryResult } from '@/sanity/types';

interface SidebarProps {
  data: SidebarQueryResult;
}

export default function Sidebar({ data }: SidebarProps) {
  const [sidebarData] = data;
  console.log('data: ', sidebarData);

  return <div>this is a sidebar.</div>;
}
