import React, { useState, useEffect } from 'react';

interface UseMQueryProps {
  initMatch: boolean;
  mediaQueryExp: string;
}

const useMQuery = ({ initMatch, mediaQueryExp }: UseMQueryProps) => {
  const [mQuery, setMQuery] = useState({
    matches: initMatch,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia(mediaQueryExp);
    mediaQuery.addEventListener('change', setMQuery);

    return () => {
      mediaQuery.removeEventListener('change', setMQuery);
    };
  }, []);

  return mQuery.matches;
};

export default useMQuery;
