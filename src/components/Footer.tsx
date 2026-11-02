import type { FC } from "react";

export const Footer: FC = () => (
  <footer className="footer">
    <p>
      OI {">"} AI. &copy; {new Date().getFullYear()}
    </p>
  </footer>
);
