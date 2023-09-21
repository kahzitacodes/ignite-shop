import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary" | "ghost";
  icon?: boolean;
  size?: "xl" | "lg" | "md";
  className?: string;
}