import type { Meta, StoryObj } from "@storybook/react";
import DropDown from "./Dropdown";

const meta: Meta<typeof DropDown>={
	title: "Components/DropDown",
	component: DropDown,
	args:{
		intent: "click"
	}
};

export default meta; 
type Story = StoryObj<typeof DropDown>;

export const DefaultDrop: Story = {};