import React from "react";

type Image = `./assets/${string}.webp`;
type Text = React.ReactNode | string;
interface Challenge {
  img: Image;
  summary: Text;
  details: Text[],
}

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
  modal: {
    overview: {
      img: Image;
      text: Text;
      skills: string[];
    };
    approach: {
      img: Image;
      text: Text[];
    };
    challenges: Challenge[];
    updates: {
      imgs: Image[];
      items: Text[];
    };
  };
}
