import type { Meta, StoryObj } from "@storybook/react";

import HomePage from ".";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  tags: ["autodocs"],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBox: Story = {};
