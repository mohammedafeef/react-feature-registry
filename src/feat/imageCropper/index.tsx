import { FC, useMemo, useRef, useState } from "react";
import { useGesture } from "react-use-gesture";

type ImageCropperProps = {
  src: string;
};
export const ImageCropper: FC<ImageCropperProps> = ({ src }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const imageTransitionStyle = useMemo(() => {
    return {
      top: crop.y,
      left: crop.x,
      scale: scale
    };
  }, [scale, crop]);

  useGesture(
    {
      onDrag: ({ offset: [x, y] }) => {
        setCrop({ x: x, y: y });
      },
      onPinch: ({ offset: [s] }) => {
        setScale(Math.min(1 + s / 50, 3));
      },
      onDragEnd: maybeAdjustImage,
      onPinchEnd: maybeAdjustImage
    },
    {
      drag: {
        initial: () => [crop.x, crop.y]
      },
      pinch: {
        distanceBounds: { min: 0 }
      },
      domTarget: imageRef,
      eventOptions: { passive: false }
    }
  );
  function maybeAdjustImage() {
    if (!imageRef.current || !imageContainerRef.current) return;
    const newCrop = crop;
    const imageBounds = imageRef.current.getBoundingClientRect();
    const containerBounds = imageContainerRef.current.getBoundingClientRect();
    const originalWidth = imageRef.current.clientWidth;
    const widthOverhang = (imageBounds.width - originalWidth) / 2;
    const originalHeight = imageRef.current.clientHeight;
    const heightOverhang = (imageBounds.height - originalHeight) / 2;

    if (imageBounds.left > containerBounds.left) {
      newCrop.x = widthOverhang;
    } else if (imageBounds.right < containerBounds.right) {
      newCrop.x = -(imageBounds.width - containerBounds.width) + widthOverhang;
    }

    if (imageBounds.top > containerBounds.top) {
      newCrop.y = heightOverhang;
    } else if (imageBounds.bottom < containerBounds.bottom) {
      newCrop.y =
        -(imageBounds.height - containerBounds.height) + heightOverhang;
    }

    setCrop(newCrop);
  }

  return (
    <div
      ref={imageContainerRef}
      className="aspect-square rounded ring-1 ring-slate-700 border border-slate-700 overflow-hidden"
    >
      <img
        alt="Cropping image"
        src={src}
        ref={imageRef}
        style={imageTransitionStyle}
        className="relative w-auto h-full max-w-none max-h-none touch-none"
      />
    </div>
  );
};
