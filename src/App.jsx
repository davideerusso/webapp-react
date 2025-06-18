import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import MovieCard from "./pages/MovieCard";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/movies">
            <Route index element={<MoviesList />} />
            <Route path=":id" element={<MovieCard />} />
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
