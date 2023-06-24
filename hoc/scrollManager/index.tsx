import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const withScrollToPosition = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithScrollToPosition: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const pageKey = `scrollPosition-${router.asPath}`;

      const scrollPosition = sessionStorage.getItem(pageKey);
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        sessionStorage.removeItem(pageKey);
      }

      const handleScroll = () => {
        sessionStorage.setItem(pageKey, window.scrollY.toString());
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [router.asPath]);

    return <WrappedComponent {...props} />;
  };

  return WithScrollToPosition;
};

export default withScrollToPosition;
