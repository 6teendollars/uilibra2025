import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  args: {
    size: "medium",
    imageSrc: "https://cdn.myshoptet.com/usr/www.iphonarna.cz/user/shop/big/16227_apple-iphone-15-pro-128-gb-natural-titanium.png?65019989", // пример изображения
    title: "Here is Titile",
    description: "here is description",
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalExample = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setOpen(true)}>Open Modal</Button> */}
      <Modal open={open} onClose={() => setOpen(false)} imageSrc="https://via.placeholder.com/300" {...args}>
      </Modal>
    </>
  );
};


  export const Default: Story = {
    render: (args) => <ModalExample {...args}/>
  };

