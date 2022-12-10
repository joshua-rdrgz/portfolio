import React from "react";

type Text = string;
interface Image {
  src: `./assets/${string}.webp`,
  alt: string;
};
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
