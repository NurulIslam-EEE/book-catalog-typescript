import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../redux/features/user/userSlice";

function Navigation() {
  const { user, error } = useAppSelector((state) => state.user);

  const disPatch = useAppDispatch();

  const navigate = useNavigate();
  const handleLogin = (data: string) => {
    navigate(data);
  };

  const handleLogOut = () => {
    disPatch(logOutUser());
  };

  // console.log("uuuuuu", user);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Book Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/all-book">
              All Books
            </Nav.Link>
            {user?.email && (
              <Nav.Link as={Link} to="/add-book">
                Add Book
              </Nav.Link>
            )}

            {!user?.email && (
              <button className="btn-all" onClick={() => handleLogin("/login")}>
                Login
              </button>
            )}
            {user?.email && (
              <button className="btn-all" onClick={handleLogOut}>
                Logout
              </button>
            )}
            {!user?.email && (
              <button
                className="btn-all"
                onClick={() => handleLogin("/sign-up")}
              >
                Sign Up
              </button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
