import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  args: {
    children: "Test",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    intent: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    intent: "primary",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    intent: "primary",
    size: "large",
  },
};

export const Unavailable: Story = {
  args:{
    intent: "unavailable",
    size: "large",

  }
}
