"use client";

import React from "react";
import { forwardRef, useState } from "react";

import { Eye, EyeOff } from "@/assets/icons/icons";
import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      rightIcon,
      fullWidth = true,
      id,
      type = "text",
      disabled,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType = isPassword && showPassword ? "text" : type;

    const inputId = id || props.name;

    return (
      <div className={cn("space-y-2", fullWidth && "w-full")}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold mb-2 text-foreground"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            "interactive flex h-10  items-center gap-4 rounded-md border border-border bg-input px-3",
            "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20",
            error &&
              "border-destructive focus-within:border-destructive focus-within:ring-destructive/20",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            disabled={disabled}
            className={cn(
              "w-full bg-transparent text-sm text-foreground  outline-none",
              "placeholder:text-muted-foreground",
              "disabled:cursor-not-allowed",
              className,
            )}
            {...props}
          />
          {rightIcon && (
            <span className="text-muted-foreground">{rightIcon}</span>
          )}
          {isPassword && (
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              className="interactive text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          )}
        </div>

        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-muted-foreground">{helperText}</p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
