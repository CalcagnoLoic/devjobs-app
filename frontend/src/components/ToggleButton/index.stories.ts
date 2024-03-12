import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from ".";

const meta = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBox: Story = {};
