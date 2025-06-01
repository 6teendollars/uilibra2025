import type { Meta, StoryObj } from "@storybook/react"
import Toast from "./ToastNotification"

const meta: Meta<typeof Toast> = {
	title: "Components/Toast",
	component: Toast,
	args:{
		intent: "info",
		condition: true,
		message: "here is notification window",
		

	}
}

export default meta;
type Story = StoryObj<typeof Toast>

export const Info: Story = {
	args:{
		intent: "info",
		message: "info notificaiton"
	}
}

export const Error: Story = {
	args:{
		intent: "error",
		message: "error notificaiton"
	}
}
export const Warning: Story = {
	args:{
		intent: "warning",
		message: "warning notificaiton"
	}
}
export const Success: Story = {
	args:{
		intent: "success",
		message: "success notificaiton"
	}
}