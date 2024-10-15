import AppImage from '@/components/ui/AppImage';
import { PortableTextComponents } from 'next-sanity';

export const components: PortableTextComponents = {
  types: {
    image: (props) => <AppImage src={props.value} alt={props.value.alt} />,
  },
};
