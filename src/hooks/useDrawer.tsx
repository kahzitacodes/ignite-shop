import { useCallback, useEffect, useState } from 'react';

export const useDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen]);

  const onKeyDown = useCallback(() => {
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDrawerOpen) {
        handleDrawer();
      }
    };
  }, [handleDrawer, isDrawerOpen]);

  useEffect(() => {


    isDrawerOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');

    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [handleDrawer, isDrawerOpen, onKeyDown]);

  return {
    isDrawerOpen,
    handleDrawer,
  };
};
