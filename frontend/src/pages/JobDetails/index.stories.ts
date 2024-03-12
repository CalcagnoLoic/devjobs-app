import type { Meta, StoryObj } from "@storybook/react";

import JobDetails from ".";

const meta = {
  title: "Pages/JobDetails",
  component: JobDetails,
  tags: ["autodocs"],
} satisfies Meta<typeof JobDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FilterBox: Story = {};
