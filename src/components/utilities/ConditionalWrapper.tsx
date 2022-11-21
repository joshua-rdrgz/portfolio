import React from 'react';

interface Props {
  if: boolean;
  with: (children: React.ReactElement) => React.ReactElement;
  children: React.ReactElement;
}

const ConditionalWrapper: React.FC<Props> = ({
  if: condition,
  with: wrapper,
  children,
}) => (condition ? wrapper(children) : children);

export default ConditionalWrapper;
