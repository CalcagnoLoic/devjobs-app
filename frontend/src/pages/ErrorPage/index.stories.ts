import type { Meta, StoryObj } from "@storybook/react";

import ErrorPage from ".";

const meta = {
  title: "Pages/ErrorPage",
  component: ErrorPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBox: Story = {};
