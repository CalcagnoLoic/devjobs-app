import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from "./index";

const meta = {
  title: "typographies/Paragraph",
  tags: ["autodocs"],
  component: Paragraph,
  argTypes: {
    kind: { description: "The type of heading" },
    content: { description: "The content of heading" },
    css: { description: "The design" },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraphs: Story = {
  args: {
    kind: "p",
    content: "https://example.com/coffeeroasters",
    css: "mt-1 break-all text-base text-lynch md:mt-3",
  },
};
