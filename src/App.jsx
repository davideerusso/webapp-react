import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import MovieCard from "./pages/MovieCard";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/">
            <Route index element={<MoviesList />} />
            <Route path=":id" element={<MovieCard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
