import type { Meta, StoryObj } from "@storybook/react";

import InputField from ".";

const meta = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "Light Gray",
      values: [
        { name: "Light Gray", value: "#DEDEDE" },
        { name: "Dark", value: "#131313" },
      ],
    },
  },
  argTypes: {
    type: { description: "The type of the input field" },
    css: { description: "Content for design" },
    value: { description: "The content for input submit" },
    id: { description: "The content for link input checkbox to his label" },
    placeholder: { description: "The text content for input text" },
    onClick: { description: "Function to swipe the darkmode" },
    reference: { description: "Reference to the toggle button" },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputSubmit: Story = {
  args: {
    type: "submit",
    value: "Search",
    css: "w-[48px] cursor-pointer rounded bg-royalBlue px-8 py-3 font-bold text-white transition duration-300 hover:bg-portage md:w-[123px]",
  },
};

export const InputCheckbox: Story = {
  args: {
    type: "checkbox",
    id: "fullTimeOnly",
    css: "transition-[background, opacity] hidden h-[24px] w-[24px] cursor-pointer appearance-none self-center rounded bg-athensGray duration-300 checked:bg-royalBlue checked:bg-checkbox checked:bg-[length:15px] checked:bg-center checked:bg-no-repeat hover:bg-royalBlue hover:opacity-25 checked:hover:opacity-100 md:block",
  },
};

export const InputText: Story = {
  args: {
    type: "text",
    placeholder: "Filter by location, ...",
    css: "bg-transparent",
  },
};
