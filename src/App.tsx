import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <Typography variant="h6" color="black">
        PokeDex
      </Typography>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/favorites"}>Favoritos</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
