import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckCircle2, Target, Zap } from "lucide-react"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "h-full w-full flex-1 transition-all",
  {
    variants: {
      variant: {
        default: "bg-green-500",
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
  showIcon?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, showIcon = true, ...props }, ref) => {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-white fill-white drop-shadow-sm" />
      case "exceeds":
        return <Zap className="h-5 w-5 text-white fill-white drop-shadow-sm" />
      default:
        return <Target className="h-5 w-5 text-white fill-white drop-shadow-sm" />
    }
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
      {showIcon && (value || 0) > 15 && (
        <div 
          className="absolute top-0 -translate-y-full -translate-x-1/2 mb-1"
          style={{ left: `${value || 0}%` }}
        >
          {getIcon()}
        </div>
      )}
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
