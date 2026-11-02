"use server";

import type { FC, PropsWithChildren } from "react";
import { readFile } from "fs/promises";
import { resolve } from "path";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";

export const Layout: FC<
  PropsWithChildren & { titleTag?: "h1" | "h2" }
> = async ({ children, titleTag = "h1" }) => {
  const normalize = await readFile(
    resolve(__dirname, "../../node_modules/normalize.css/normalize.css"),
    "utf-8",
  );

  const styles = await readFile(resolve(__dirname, "../index.css"), "utf-8");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Calvin Koepke</title>
        <meta
          name="description"
          content="Notes on artificial intelligence, software, and the human spirit."
        />
        <link rel="stylesheet" href="https://use.typekit.net/awi3ziu.css" />
        <style dangerouslySetInnerHTML={{ __html: normalize }} />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <Header titleTag={titleTag} />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
};
