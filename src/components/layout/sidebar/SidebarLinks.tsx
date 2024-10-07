'use client';

import { SidebarQueryResult } from '@/sanity/types';
import DOMPurify from 'dompurify';
import Link from 'next/link';
import styled from 'styled-components';

interface SidebarLinksProps {
  linkProperties: NonNullable<SidebarQueryResult>[0]['linkList'];
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
                  <SvgWrapper>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(linkItem.svgIcon!),
                      }}
                    />
                  </SvgWrapper>
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

const SvgWrapper = styled.div`
  display: flex;
  max-height: 320px;
  width: 2.5rem;
  height: 2.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  svg {
    max-height: 80%;
    max-width: 80%;
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
  }
`;
