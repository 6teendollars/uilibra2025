import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const button: (props?: ({
    intent?: "primary" | "secondary" | "unavailable" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
}

declare const card: (props?: ({
    intent?: "unavailable" | "available" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {
    imageSrc: string;
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick?: () => void;
}

declare const box: (props?: ({
    intent?: "radio" | "check" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface BoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof box> {
    text: string;
    size?: "small" | "medium" | "large";
}

declare const dropdown: (props?: ({
    intent?: "click" | "hover" | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface DropDownProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdown> {
    options: string[];
    placeholder?: string;
}

declare const input: (props?: ({
    intent?: "default" | null | undefined;
    size?: "small" | "medium" | "large" | "full" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof input> {
}

declare const backdrop: (props?: ({
    open?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const modal: (props?: ({
    open?: boolean | null | undefined;
    size?: "small" | "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ModalProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof backdrop>, VariantProps<typeof modal> {
    open: boolean;
    onClose: () => void;
    imageSrc?: string;
    title: string;
    description: string;
    children: React.ReactNode;
}

declare const sideb: (props?: ({
    intent?: "min" | "full" | null | undefined;
    screen?: "auto" | "page" | null | undefined;
    size?: "medium" | "large" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface SideProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof sideb> {
}

declare const notification: (props?: ({
    intent?: "info" | "success" | "error" | "warning" | null | undefined;
    condition?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notification> {
    message: string;
    duration?: number;
    onClose: () => void;
    condition: boolean;
}

export type { BoxProps, ButtonProps, CardProps, DropDownProps, InputProps, ModalProps, SideProps, ToastProps };
