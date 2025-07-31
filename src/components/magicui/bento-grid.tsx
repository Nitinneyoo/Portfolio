// src/components/magicui/bento-grid.tsx

// src/components/magicui/bento-grid.tsx
import type { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Your utility for merging Tailwind classes

/**
 * This is the main grid container.
 */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[32rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

/**
 * This is the simple item wrapper you will use for each card.
 * It's not from the library; it's defined right here in this file.
 */
export const BentoGridItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div className={cn("row-span-1 h-full w-full", className)}>
      {children}
    </div>
  );
};