import { useEffect } from 'react';

export const useClickAway = (ref: any, setIsOpen: (isOpen: boolean) => void) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const path = e.composedPath && e.composedPath();
      if (!path.includes(ref.current)) {
        setIsOpen(false);
      }
    };
    document.body.onclick = handleOutsideClick;
  }, [ref, setIsOpen]);
};
