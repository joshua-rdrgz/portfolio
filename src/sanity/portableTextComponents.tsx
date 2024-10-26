import AppImage from '@/components/ui/AppImage';
import { PortableTextComponents } from 'next-sanity';
import Link from 'next/link';

export const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className='my-8'>
        <AppImage
          src={value}
          alt={value.alt}
          className='rounded-lg'
          width={800}
          height={450}
        />
      </div>
    ),
  },
  block: {
    normal: ({ children }) => <p className='mb-6'>{children}</p>,
    h1: ({ children }) => (
      <h1 className='mb-4 text-4xl font-bold'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='mb-4 text-3xl font-bold'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='mb-4 text-2xl font-bold'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='mb-4 text-xl font-bold'>{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className='border-l-4 border-accent/50 pl-4 italic'>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='mb-6 ml-6 list-disc space-y-2'>{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        className='text-accent underline hover:text-accent/80'
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </Link>
    ),
  },
};
