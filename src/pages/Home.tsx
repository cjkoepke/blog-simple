import type { FC } from "react";

import { Layout } from "@/components/Layout";
import { Article } from "@/components/Article";

export const Home: FC = () => {
  return (
    <Layout>
      <Article>
        <h2 className="title" style={{ marginBottom: 0 }}>
          OI {">"} AI
        </h2>
        <p className="lead" style={{ textAlign: "center" }}>
          Notes on artificial intelligence, software, and the human spirit —
          from an actual person.{" "}
          <a href="/posts/organic-intelligence">What is OI?</a>
        </p>
      </Article>
    </Layout>
  );
};
