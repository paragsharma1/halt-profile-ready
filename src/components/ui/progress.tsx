import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "h-full w-full flex-1 transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        success: "bg-green-500",
        exceeds: "bg-gradient-to-r from-green-500 to-emerald-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  target?: number
  currentCount?: number
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, target = 5, currentCount = 0, ...props }, ref) => {
  const targetProgress = target > 0 ? Math.min((target / Math.max(target, currentCount)) * 100, 100) : 100
  const milestonePosition = target > 0 ? (target / Math.max(target, currentCount)) * 100 : 100
  
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-6 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      {/* Milestone marker at target */}
      <div 
        className="absolute top-0 h-full w-0.5 bg-foreground/60 z-10"
        style={{ left: `${Math.min(milestonePosition, 100)}%` }}
      />
      
      {/* Target achievement indicator */}
      {currentCount >= target && (
        <div 
          className="absolute top-1 left-0 w-2 h-2 bg-green-500 rounded-full animate-pulse z-20"
          style={{ left: `${Math.min(milestonePosition - 1, 99)}%` }}
        />
      )}
      
      <ProgressPrimitive.Indicator
        className={cn(progressVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      
      {/* Progress text overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-foreground/80">
        {currentCount >= target ? (
          currentCount > target ? (
            <span className="text-green-600 font-bold">🎯 Target Exceeded! {currentCount}/{target}</span>
          ) : (
            <span className="text-green-600 font-bold">🎯 Target Achieved! {currentCount}/{target}</span>
          )
        ) : (
          <span>{currentCount}/{target}</span>
        )}
      </div>
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
