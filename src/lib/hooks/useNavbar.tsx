import { useState, useEffect, useRef } from 'react';

type UseNavbarProps = {
  initialOpen?: boolean;
};

function useNavbar({ initialOpen = false }: UseNavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({});
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => setIsOpen((prev) => !prev);
  const closeNavbar = () => setIsOpen(false);

  const toggleDropdown = (key: string) =>
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  const closeDropdown = (key: string) =>
    setDropdowns((prev) => ({ ...prev, [key]: false }));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        closeNavbar();
        setDropdowns({});
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return {
    isOpen,
    toggleNavbar,
    closeNavbar,
    dropdowns,
    toggleDropdown,
    closeDropdown,
    navbarRef,
  };
}

export default useNavbar;
