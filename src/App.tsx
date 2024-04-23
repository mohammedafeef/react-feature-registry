import { FeatureListPage, InfiniteScrollPage } from "@/page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeatureListPage />} />
      <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
    </Routes>
  );
}

export default App;
