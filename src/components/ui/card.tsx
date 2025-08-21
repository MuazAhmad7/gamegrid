import * as React from "react";
import { cn } from "@/lib/utils";

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className, ...props }: CardProps) {
  // Base card container: adjust default radius/border/bg via classes below
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/60 bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />; // header spacing
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />; // content spacing
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />; // footer spacing
}


