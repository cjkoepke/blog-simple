import type { FC } from "react";
import { Nav } from "./Nav";

export const Header: FC<{ titleTag: "h1" | "h2" }> = ({
  titleTag: TitleTag = "h1",
}) => (
  <header className="header">
    <TitleTag className="title">CK</TitleTag>
    <Nav />
  </header>
);
