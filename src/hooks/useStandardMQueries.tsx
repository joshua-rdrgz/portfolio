import useMQuery from "./useMQuery";

const useStandardMQueries = () => {
  const biggerThanSmallPhone = useMQuery({
    initMatch: window.innerWidth >= 350 ? true : false,
    mediaQueryExp: '(min-width: 21.875em)',
  });

  const biggerThanBigPhone = useMQuery({
    initMatch: window.innerWidth >= 650 ? true : false,
    mediaQueryExp: '(min-width: 40.625em)',
  });

  const biggerThanBigDesktop = useMQuery({
    initMatch: window.innerWidth >= 2000 ? true : false,
    mediaQueryExp: '(min-width: 125em)',
  });

  return {
    biggerThanSmallPhone,
    biggerThanBigPhone,
    biggerThanBigDesktop,
  }
}

export default useStandardMQueries;