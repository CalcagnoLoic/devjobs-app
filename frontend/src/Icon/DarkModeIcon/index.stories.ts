import type { Meta, StoryObj } from "@storybook/react";

import DarkModeIcon from "./index";

const meta = {
  title: "Icons/DarkModeIcon",
  tags: ["autodocs"],
  component: DarkModeIcon,
} satisfies Meta<typeof DarkModeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MoonIcon: Story = {
  args: {
    kind: "moon",
  },
};

export const SunIcon: Story = {
  args: {
    kind: "sun",
  },
};
