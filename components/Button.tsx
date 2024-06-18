import { forwardRef } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "primary" | "outline";
};

export const Button: React.FC<ButtonProps> = forwardRef<
  TouchableOpacity,
  ButtonProps
>(({ title, variant = "primary", ...props }, ref) => {
  return (
    <TouchableOpacity
      {...props}
      className={`
        p-4 items-center bg-primary rounded
        ${props.disabled && "opacity-25"}
        ${variant === "outline" && "border border-primary bg-transparent"}
      `}
      ref={ref}
    >
      <Text
        className={`
          text-white
          ${variant === "outline" && "text-primary"}
        `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
});
