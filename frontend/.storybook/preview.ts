import type { Preview } from "@storybook/react";
import autodocTemplate from "./autodocTemplate.mdx";
import "../public/assets/style/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      page: autodocTemplate,
      toc: true,
    },
  },
};

export default preview;
