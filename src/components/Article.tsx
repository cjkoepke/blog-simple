import type { FC, PropsWithChildren } from "react";

export const Article: FC<PropsWithChildren> = ({ children }) => (
  <article className="article">{children}</article>
);
