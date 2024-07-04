import { useState, useEffect } from 'react';

type MediaQueryMatch = {
  query: string;
  matches: boolean;
};

function useMediaQuery(queries: string | string[], defaultMatches = false) {
  const initialMatches = Array.isArray(queries)
    ? queries.map((query) => ({ query, matches: defaultMatches }))
    : [{ query: queries, matches: defaultMatches }];

  const [matches, setMatches] = useState<MediaQueryMatch[]>(initialMatches);

  useEffect(() => {
    const mediaQueryLists = matches.map((match) => ({
      query: match.query,
      mediaQueryList: window.matchMedia(match.query),
    }));

    const listener = () => {
      setMatches((prevMatches) =>
        prevMatches.map((match) => {
          const mediaQuery = mediaQueryLists.find(
            (mql) => mql.query === match.query
          );
          return {
            ...match,
            matches: mediaQuery?.mediaQueryList.matches || false,
          };
        })
      );
    };

    mediaQueryLists.forEach((mql) => {
      mql.mediaQueryList.addListener(listener);
    });

    listener(); // Check initial matches

    return () => {
      mediaQueryLists.forEach((mql) => {
        mql.mediaQueryList.removeListener(listener);
      });
    };
  }, [queries]);

  return matches;
}

export default useMediaQuery;
