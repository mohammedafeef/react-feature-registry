import { ImageCropper } from "@/feat/imageCropper";
import { AppLayout } from "@/shared/components";

export const ImageCropperPage = () => {
  return (
    <AppLayout
      title="Image Cropper"
      link="/image-cropper"
      className="flex items-center justify-center"
    >
      <ImageCropper src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </AppLayout>
  );
};
