import { useEffect, useRef } from 'react';
import cn from 'classnames';
import { createPortal } from 'react-dom';
import '../_css/Drawer.css';

type DrawerProps = {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  className?: string;
  onClose?: () => void;
  position?: 'right' | 'left';
};

function createDrawerPortalRoot() {
  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');

  return drawerRoot;
}

export default function Drawer({
  children,
  isOpen,
  className,
  onClose,
  position = "right",
}: DrawerProps) {
  const bodyRef = useRef<HTMLBodyElement>(document.querySelector('body'));
  const drawerPortalRootRef = useRef(
    document.getElementById('drawer-root') || createDrawerPortalRoot()
  );

  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current !== null) {
        isOpen
          ? (bodyRef.current.style.overflow = 'hidden')
          : (bodyRef.current.style.overflow = '');
      }
    };
    updatePageScroll();
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current !== null) {
      bodyRef.current.append(drawerPortalRootRef.current);
      const portal = drawerPortalRootRef.current;
      const bodyEl = bodyRef.current;

      return () => {
        // Clean up the portal when drawer component unmounts
        portal.remove();
        // Ensure scroll overflow is removed
        bodyEl.style.overflow = '';
      };
    }
  }, []);

  return createPortal(
    <div
      aria-hidden={isOpen ? 'false' : 'true'}
      className={`drawer-container 
      ${isOpen ? 'open' : ''} 
      ${className ? className : ''} 
      `}
    >
      <div className={cn('drawer', position)} role='right drawer'>
        {children}
      </div>
      <div className="backdrop" onClick={onClose} />
    </div>,
    drawerPortalRootRef.current
  );
}
