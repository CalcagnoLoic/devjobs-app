import type { Meta, StoryObj } from "@storybook/react";

import FilterBar from ".";

const meta = {
  title: "Components/FilterBar",
  component: FilterBar,
  tags: ["autodocs"],
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBox: Story = {};
