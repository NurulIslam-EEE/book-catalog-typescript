import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import AddBook from "./pages/books/AddBook";
import NotFound from "./pages/notFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/common/Navigation";
import LoginForm from "./components/common/LoginForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
