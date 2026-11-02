import { Fragment, type FC } from "react";
import { readFile } from "fs/promises";
import path from "path";

import { Layout } from "@/components/Layout";
import { Article } from "@/components/Article";

export const Post: FC<{ id: string }> = async ({ id }) => {
  const content = await readFile(
    path.resolve(__dirname, "../posts", `${id}.md`),
  );
  return (
    <Layout titleTag="h2">
      <Article>{Bun.markdown.react(content)}</Article>
    </Layout>
  );
};
