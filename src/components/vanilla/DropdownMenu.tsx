import { useRef, useState } from "react";
import '@/components/vanilla/_css/DropdownMenu.css';

export default function DropdownMenu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="menu-container">
      <button onClick={() => setIsActive(!isActive)} className="menu-trigger">
        <span>User</span>
        <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`${isActive ? 'menu' : 'hidden'}`}>
        <ul>
          <li><a href="/messages">Messages</a></li>
          <li><a href="/trips">Trips</a></li>
          <li><a href="/saved">Saved</a></li>
        </ul>
      </nav>
    </div>
  )
};
