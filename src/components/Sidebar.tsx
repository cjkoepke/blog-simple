import type { FC } from "react";

export const Sidebar: FC = () => (
  <header className="sidebar">
    <h1 className="title">Calvin Koepke</h1>
    <p>Notes on artificial intelligence, software, and the human spirit.</p>
    <hr />
    <nav className="nav">
      <ul>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./about.html">About Me</a>
        </li>
        <li>
          <a href="https://linkedin.com/u/cjkoepke">Resumé</a>
        </li>
      </ul>
    </nav>
  </header>
);
