import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./Dropdown";

const meta: Meta<typeof DropDown>={
	title: "Components/DropDown",
	component: DropDown,
	tags: ['autodocs'],
	args:{
		intent: "click",
		options: ["Aleks","Adi", "Martin", "Adam"],
		size: "small",
		placeholder: "select..."
	}
};

export default meta; 
type Story = StoryObj<typeof DropDown>;

export const DefaultDrop: Story = {};

export const HoverDrop: Story = {
	args:{
		intent: "hover",
		size: "small"
	}
};
