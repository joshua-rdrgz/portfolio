import * as React from 'react';
import { cn } from '@/lib/utils';

const Root = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol ref={ref} className={cn('max-w-5xl mx-auto', className)} {...props} />
));
Root.displayName = 'Timeline';

const Item = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      'flex gap-4 mb-8 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8',
      className
    )}
    {...props}
  />
));
Item.displayName = 'TimelineItem';

const LeftContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('md:text-right', className)} {...props} />
));
LeftContent.displayName = 'TimelineLeftContent';

const RightContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex-1', className)} {...props} />
));
RightContent.displayName = 'TimelineRightContent';

const Center = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative flex flex-col items-center w-4', className)}
    {...props}
  />
));
Center.displayName = 'TimelineCenter';

const Line = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isLast: boolean }
>(({ className, isLast, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'w-px bg-primary my-2 flex-1',
      isLast ? 'h-8' : '-mb-6',
      className
    )}
    {...props}
  />
));
Line.displayName = 'TimelineLine';

const Dot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('w-4 h-4 rounded-full bg-primary', className)}
    {...props}
  />
));
Dot.displayName = 'TimelineDot';

export { Root, Item, LeftContent, RightContent, Center, Line, Dot };
