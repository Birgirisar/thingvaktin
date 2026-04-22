import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "glass-sm";
  as?: "div" | "article" | "section";
};

export function Card({
  children,
  className,
  variant = "glass",
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag className={cn("rounded-2xl", variant, className)}>{children}</Tag>
  );
}
