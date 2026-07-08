"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionFadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionFadeIn({
  className,
  delay = 0,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5, delay },
  children,
  ...props
}: MotionFadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerItemProps = HTMLMotionProps<"div"> & {
  index?: number;
  staggerDelay?: number;
};

export function MotionStaggerItem({
  className,
  index = 0,
  staggerDelay = 0.1,
  initial = { opacity: 0, y: 16 },
  animate = { opacity: 1, y: 0 },
  transition,
  children,
  ...props
}: MotionStaggerItemProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition ?? { duration: 0.4, delay: index * staggerDelay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerArticleProps = HTMLMotionProps<"article"> & {
  index?: number;
  staggerDelay?: number;
};

export function MotionStaggerArticle({
  className,
  index = 0,
  staggerDelay = 0.1,
  initial = { opacity: 0, y: 16 },
  animate = { opacity: 1, y: 0 },
  transition,
  children,
  ...props
}: MotionStaggerArticleProps) {
  return (
    <motion.article
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition ?? { duration: 0.4, delay: index * staggerDelay }}
      {...props}
    >
      {children}
    </motion.article>
  );
}

type MotionProgressFillProps = {
  width: string;
  className?: string;
  duration?: number;
};

export function MotionProgressFill({
  width,
  className,
  duration = 0.8,
}: MotionProgressFillProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width }}
      transition={{ duration, ease: "easeOut" }}
      className={cn(
        "h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6]",
        className
      )}
    />
  );
}

type MotionMainProps = HTMLMotionProps<"main">;

export function MotionMain({
  className,
  initial = { opacity: 0, y: 12 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.4, ease: "easeOut" },
  children,
  ...props
}: MotionMainProps) {
  return (
    <motion.main
      className={cn(className)}
      initial={initial}
      animate={animate}
      transition={transition}
      {...props}
    >
      {children}
    </motion.main>
  );
}

type MotionButtonProps = HTMLMotionProps<"button">;

export function MotionButton({
  className,
  whileHover = { scale: 1.02 },
  whileTap = { scale: 0.98 },
  children,
  ...props
}: MotionButtonProps) {
  return (
    <motion.button
      className={cn(className)}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {children}
    </motion.button>
  );
}
