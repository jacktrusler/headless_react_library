import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

type Props = {
  setOverlay: Dispatch<SetStateAction<boolean>>;
}

function createOverlay(): HTMLDivElement {
  const overlayRoot = document.createElement('div');
  overlayRoot.setAttribute('id', 'overlay');

  return overlayRoot;
}

export default function Overlay({ setOverlay }: Props) {
  const bodyRef = useRef<HTMLBodyElement>(document.querySelector('body'));
  const overlayRootRef = useRef(document.getElementById('overlay') || createOverlay());

  useEffect(() => {
    if (bodyRef.current !== null) {
      bodyRef.current.append(overlayRootRef.current);
      const portal = overlayRootRef.current;

      return () => {
        // Clean up the portal when component unmounts
        portal.remove();
      };
    }
  }, []);

  return createPortal(
    <div
      onClick={() => setOverlay(false)}
      className='fixed top-0 left-0 z-30 h-full w-full'
    >
    </div>,
    overlayRootRef.current
  );

}
