import type { FC } from "react";

import { Layout } from "@/components/Layout";

export const NotFound: FC = () => {
  return (
    <Layout>
      <h2>Not Found!</h2>
      <p>Whoopos, this page doens't exist!</p>
    </Layout>
  );
};
