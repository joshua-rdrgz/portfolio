import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { components } from '@/sanity/portableTextComponents';
import { sanityFetch } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { POST_QUERYResult } from '@/sanity/types';

type PostIndexProps = { params: { slug: string } };

const options = { next: { revalidate: 60 } };

export default async function Page({ params }: PostIndexProps) {
  const post = await sanityFetch<POST_QUERYResult>({
    query: POST_QUERY,
    tags: ['post'],
    qParams: params,
  });

  return (
    <main className='container mx-auto grid grid-cols-1 gap-6 py-12'>
      {post?.mainImage ? (
        <Image
          className='w-full aspect-[800/400]'
          src={urlFor(post.mainImage)
            .width(800)
            .height(400)
            .quality(80)
            .auto('format')
            .url()}
          alt={post?.mainImage?.alt || ''}
          width='800'
          height='400'
        />
      ) : null}
      <h1 className='text-4xl font-bold text-balance'>{post?.title}</h1>
      {post?.body ? (
        <div className='prose'>
          <PortableText value={post?.body} components={components} />
        </div>
      ) : null}
      <hr />
      <Link href='/posts'>&larr; Return to index</Link>
    </main>
  );
}
