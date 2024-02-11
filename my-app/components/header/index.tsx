/** Headerコンポーネント */

import React from "react";

// ナビゲーションの定数
// title href
const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <a href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
