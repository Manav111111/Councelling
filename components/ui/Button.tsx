import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "bg-ipu-blue text-white hover:bg-blue-900",
  secondary: "bg-white text-ipu-blue border border-blue-100 hover:bg-ipu-mist",
  ghost: "bg-transparent text-ipu-blue hover:bg-ipu-mist"
};

export function Button({ href, variant = "primary", className = "", children, ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
