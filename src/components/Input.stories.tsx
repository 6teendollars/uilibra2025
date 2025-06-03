import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input"

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input, 
	tags: ['autodocs'],
	args:{
		intent: "default",
		size: "medium",
	},
};

export default meta;
type Story = StoryObj<typeof Input>

export const DefaultInput: Story = {};

