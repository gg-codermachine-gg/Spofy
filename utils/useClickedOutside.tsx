import { useState, useEffect, useRef } from "react";

function useDropdownMenu(initialState = false, ): {
  menuDropped: boolean;
  nodeRef: React.RefObject<HTMLButtonElement>;
  toggleDropdownMenu: () => void;
} {
  const [menuDropped, setMenuDropped] = useState<boolean>(initialState);
  const nodeRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => { // Updated type to MouseEvent
    if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
      setMenuDropped(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdownMenu = () => {
    setMenuDropped(!menuDropped);
  };

  return { menuDropped, nodeRef, toggleDropdownMenu };
}

export default useDropdownMenu;
