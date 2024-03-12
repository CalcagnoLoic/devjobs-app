import type { Meta, StoryObj } from "@storybook/react";

import DarkModeIcon from "./index";

const meta = {
  title: "Icons/DarkModeIcon",
  tags: ["autodocs"],
  component: DarkModeIcon,
  parameters: {
    backgrounds: {
      default: "Dark",
      values: [
        { name: "Dark", value: "#131313" },
      ],
    },
  },
  argTypes: {
    kind: {description: "The type of icon"}
  }
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
