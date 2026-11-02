import type { FC } from "react";

export const Nav: FC = () => (
  <nav className="nav">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About Me</a>
      </li>
      <li>
        <a href="https://linkedin.com/u/cjkoepke">Resumé</a>
      </li>
    </ul>
  </nav>
);
