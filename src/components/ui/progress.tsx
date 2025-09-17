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
    VariantProps<typeof progressVariants> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, ...props }, ref) => {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-blue-600 fill-blue-600 drop-shadow-sm" />
      case "exceeds":
        return <Zap className="h-4 w-4 text-blue-600 fill-blue-600 drop-shadow-sm" />
      default:
        return <Target className="h-4 w-4 text-blue-600 fill-blue-600 drop-shadow-sm" />
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
        className={cn(progressVariants({ variant }), "flex items-center justify-end pr-1")}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      >
        {(value || 0) > 15 && getIcon()}
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
