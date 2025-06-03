import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ['autodocs'],
  args: {
    intent: "available",
    size: "medium",
    imageSrc: "https://cdn.myshoptet.com/usr/www.iphonarna.cz/user/shop/big/16227_apple-iphone-15-pro-128-gb-natural-titanium.png?65019989",
    title: "Example Card",
    description: "This is an example description.",
    buttonLabel: "Click Me",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const AvailableCard: Story = {};

export const UnavailableCard: Story = {
  args: {
    intent: "unavailable",
  },
};
