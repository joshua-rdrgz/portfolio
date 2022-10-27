import React from 'react'

interface Props {
  children?: string | React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>{children}</>
  )
}

export default Wrapper;