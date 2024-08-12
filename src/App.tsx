import {
  FeatureListPage,
  ImageCropperPage,
  InfiniteScrollPage,
  ModalPage
} from "@/page";
import { Route, Routes } from "react-router-dom";
import { EventDelegation } from "./page/EventDelegation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeatureListPage />} />
      <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
      <Route path="/modal" element={<ModalPage />} />
      <Route path="/image-cropper" element={<ImageCropperPage />} />
      <Route path="/event-delegation" element={<EventDelegation />} />
    </Routes>
  );
}

export default App;
