'use client';

import styled from 'styled-components';
import DOMPurify from 'dompurify';

interface SvgRendererProps {
  svg: string;
}

export default function SvgRenderer({ svg }: SvgRendererProps) {
  return (
    <SvgWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(svg),
        }}
      />
    </SvgWrapper>
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
