import type { FC, PropsWithChildren } from "react";

export const Content: FC<PropsWithChildren> = ({ children }) => (
  <main className="content">{children}</main>
);
