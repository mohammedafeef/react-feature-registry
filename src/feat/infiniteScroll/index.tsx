import { cn } from "@/shared/lib/cn";
import { FC, ReactNode, useEffect, useRef } from "react";

type InfiniteScrollListProps = {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
};
export const InfiniteScrollList: FC<InfiniteScrollListProps> = ({
  children,
  onScrollEnd,
  className
}) => {
  const observerTargetRef = useRef(null);
  
  useEffect(() => {
    const observerTargetNode = observerTargetRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onScrollEnd?.();
        }
      },
      { threshold: 1 }
    );

    if (observerTargetNode) {
      observer.observe(observerTargetNode);
    }

    return () => {
      if (observerTargetNode) {
        observer.unobserve(observerTargetNode);
      }
    };
  }, [observerTargetRef, onScrollEnd]);

  return (
    <div className={cn("flex flex-col", className)}>
      {children}
      <div ref={observerTargetRef} />
    </div>
  );
};
