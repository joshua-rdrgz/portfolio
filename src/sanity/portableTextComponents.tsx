import Image from 'next/image';
import { PortableTextComponents } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import AppImage from '@/components/ui/AppImage';

export const components: PortableTextComponents = {
  types: {
    image: (props) => <AppImage src={props.value} alt={props.value.alt} />,
  },
};
