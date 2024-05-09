import { FeatureListPage, InfiniteScrollPage, ModalPage } from "@/page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeatureListPage />} />
      <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
      <Route path="/modal" element={<ModalPage />} />
    </Routes>
  );
}

export default App;
