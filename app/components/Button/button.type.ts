export type ButtonProps = {
  title?: string;
  variants?: "primary" | "secondary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  loadging?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};
