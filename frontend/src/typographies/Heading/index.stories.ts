import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./index";

const meta = {
  title: "typographies/Heading",
  tags: ["autodocs"],
  component: Heading,
  argTypes: {
    kind: { description: "The type of heading" },
    content: { description: "The content of heading" },
    css: { description: "The design" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeadingH1: Story = {
  args: {
    kind: "h1",
    content: "Devjobs",
    css: "text-black text-3xl font-extrabold",
  },
};

export const HeadingH2: Story = {
  args: {
    kind: "h2",
    content: "Midlevel Back End Engineer",
    css: "text-2xl font-bold text-mirage",
  },
};
