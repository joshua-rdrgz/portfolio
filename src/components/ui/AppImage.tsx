'use client';

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface ImageProps {
  src?: string | null;
  alt?: string | null;
  priority?: boolean;
}

export default function AppImage({ src, alt, priority = false }: ImageProps) {
  return (
    <>
      {src ? (
        <Image
          className='w-full aspect-[800/400]'
          src={urlFor(src)
            .width(800)
            .height(400)
            .quality(80)
            .auto('format')
            .url()}
          alt={alt!}
          width='800'
          height='400'
          priority={priority}
        />
      ) : null}
    </>
  );
}
