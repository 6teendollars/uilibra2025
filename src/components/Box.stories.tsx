import type { Meta, StoryObj } from "@storybook/react"
import Box from "./Box"


const meta: Meta<typeof Box> = {
	title: "Components/Box",
	component: Box,
	tags: ['autodocs'],
	args:{
		intent: "check",
		text: "pls click here...",
		size: "small", 
	}
}

export default meta;
type Story = StoryObj<typeof Box>;

export const Checkbox: Story= {
	args:{
		intent: "check",
		size: "medium"
	}
};

export const Radio: Story= {
	args:{
		intent: "radio",
		size: "medium"
	}
}