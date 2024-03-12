import type { Meta, StoryObj } from "@storybook/react";

import LogoIcon from "./index";

const meta = {
  title: "Icons/LogoIcon",
  tags: ["autodocs"],
  component: LogoIcon,
  parameters: {
    backgrounds: {
      default: "Dark",
      values: [{ name: "Dark", value: "#131313" }],
    },
  },
} satisfies Meta<typeof LogoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DevjobsIcon: Story = {};
