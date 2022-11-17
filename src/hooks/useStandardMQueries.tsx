import useMQuery from "./useMQuery";

const useStandardMQueries = () => {
  const biggerThanSmallPhone = useMQuery({
    initMatch: window.innerWidth >= 450 ? true : false,
    mediaQueryExp: '(min-width: 28.125em)',
  });

  const biggerThanPhone = useMQuery({
    initMatch: window.innerWidth >= 600 ? true : false,
    mediaQueryExp: '(min-width: 40.625em)', // 650px
  });

  const biggerThanTablet = useMQuery({
    initMatch: window.innerWidth >= 2000 ? true : false,
    mediaQueryExp: '(min-width: 125em)',
  });

  return {
    biggerThanSmallPhone,
    biggerThanPhone,
    biggerThanTablet,
  }
}

export default useStandardMQueries;