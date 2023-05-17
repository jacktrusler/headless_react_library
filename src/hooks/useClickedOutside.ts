import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function useClickedOutside(initiallyVisible: boolean) {
  const [visible, setVisible] = useState(initiallyVisible);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, visible, setVisible };
}
