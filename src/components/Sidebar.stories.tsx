import type { Meta, StoryObj } from "@storybook/react"
import SideBar from "./Sidebar"

const meta: Meta<typeof SideBar> = {
	title: "Components/SideBar",
	component: SideBar, 
	args:{
		intent: "full",
		size: "medium",
		screen: "page"
	}
}

export default meta;
type Story = StoryObj<typeof SideBar>;

export const SideBare: Story = {
}