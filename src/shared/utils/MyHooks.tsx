import React from 'react';

export function useIsMounted() {
  const [isMounted, setIsmounted] = React.useState(false);

  React.useEffect(() => {
    setIsmounted(true);
  }, []);

  return [isMounted];
}
