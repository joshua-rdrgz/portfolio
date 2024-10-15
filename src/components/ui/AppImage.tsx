'use client';

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

interface ImageProps {
  src?: string | null;
  alt?: string | null;
  priority?: boolean;
  width?: number;
  height?: number;
  className?: string;
  wrapperClassName?: string;
}

export default function AppImage({
  src,
  alt,
  priority = false,
  width = 800,
  height = 400,
  className,
  wrapperClassName,
}: ImageProps) {
  return (
    <div className={wrapperClassName}>
      {src ? (
        <Image
          className={className}
          src={urlFor(src)
            .width(width)
            .height(height)
            .quality(80)
            .auto('format')
            .url()}
          alt={alt!}
          width={width}
          height={height}
          priority={priority}
        />
      ) : null}
    </div>
  );
}
