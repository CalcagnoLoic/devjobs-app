import type { Preview } from "@storybook/react";
import autodocTemplate from "./autodocTemplate.mdx";

const preview: Preview = {
  parameters: {
    docs: {
      page: autodocTemplate,
    },
  },
};

export default preview;
