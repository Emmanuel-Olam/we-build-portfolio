import { ReadonlyURLSearchParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const usePrevious = <T,>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

interface NavigationEvents {
  routeChanged?: ({
    pathname,
    searchParams,
  }: {
    pathname: string | null;
    searchParams: ReadonlyURLSearchParams | null;
  }) => void;
}

export const useNavigationEvent = ({ on, off }: {
  on?: NavigationEvents,
  off?: NavigationEvents,
}) => {
  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);

  const searchParams = useSearchParams();
  const prevSearchParams = usePrevious(searchParams);

  const { routeChanged } = on || {};

  const [route, setRoute] = useState({ pathname, searchParams });

  useEffect(() => {
    if (searchParams?.toString() !== prevSearchParams?.toString() || pathname !== prevPathname) {
      setRoute({ pathname, searchParams });
      routeChanged?.({ pathname, searchParams });
    }
    return () => {
      const { routeChanged } = off || {};

      if (searchParams?.toString() !== prevSearchParams?.toString() || pathname !== prevPathname) {
        routeChanged?.({ pathname, searchParams });
      }
    }
  }, [pathname, prevPathname, prevSearchParams, routeChanged, searchParams, off]);

  return { route };
};
