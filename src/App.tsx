import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import AddBook from "./pages/books/AddBook";
import NotFound from "./pages/notFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/common/Navigation";
import LoginForm from "./components/common/LoginForm";
import SignInForm from "./components/common/SignInForm";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "./redux/features/user/userSlice";
import { auth } from "./firebase/firebase";
import AllBooks from "./pages/books/AllBooks";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./routes/PrivateRoutes";
import BookDetails from "./pages/books/BookDetails";
import Footer from "./components/common/Footer";
import EditBook from "./pages/books/EditBook";

function App() {
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector((state) => state.user);

  console.log("appppp", user, isLoading);

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/add-book" element={<AddBook />} />
          <Route path="/all-book" element={<AllBooks />} />
          <Route path="/edit-book" element={<EditBook />} />

          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignInForm />} />
          <Route path="/:id" element={<BookDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
