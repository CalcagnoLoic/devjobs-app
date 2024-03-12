import type { Meta, StoryObj } from "@storybook/react";

import FilterIcon from "./index";

const meta = {
  title: "Icons/FilterIcon",
  tags: ["autodocs"],
  component: FilterIcon,
  argTypes: {
    kind: { description: "The type of icon" },
  },
} satisfies Meta<typeof FilterIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchIcon: Story = {
  args: {
    kind: "search",
  },
};

export const FilterIcons: Story = {
  args: {
    kind: "filter",
  },
};

export const LocationIcon: Story = {
  args: {
    kind: "location",
  },
};
