import type { FC } from "react";

export const Footer: FC = () => (
  <footer className="footer">
    <p>Organic intelligence only. &copy; {new Date().getFullYear()}</p>
  </footer>
);
