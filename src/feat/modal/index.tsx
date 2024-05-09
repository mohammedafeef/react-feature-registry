import { cn } from "@/shared/lib/cn";
import { FC, memo, ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  hideBackdrop?: boolean;
  disableBackdropClick?: boolean;
  className?: string;
  isOpen:boolean;
};

export const Modal: FC<ModalProps> = memo(
  ({ hideBackdrop, disableBackdropClick, onClose, className, children,isOpen }) => {
    const handleBackdropClick = () => {
      if (disableBackdropClick) {
        return;
      }
      onClose();
    };

    if(!isOpen){
        return;
    }
    return (
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
        <div
          className={cn("fixed z-[1] inset-0", {
            "bg-black/20": !hideBackdrop
          })}
          onClick={handleBackdropClick}
        />
        <div className={cn("flex p-6 rounded bg-slate-500/90", className)}>
          {children}
        </div>
      </div>
    );
  }
);
