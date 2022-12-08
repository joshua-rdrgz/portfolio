export default interface ProjectType {
  heading: {
    title: string;
    subtitle: string;
  };
  summary: string;
  techStack: string[];
  bgImg: {
    src: string;
    alt: string;
  };
  links: {
    liveSite: string;
    gitHub: string;
  };
  idx: number;
}