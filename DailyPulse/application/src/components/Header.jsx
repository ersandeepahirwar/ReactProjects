import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
} from "react-bootstrap";

import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [q, setQ] = useState("all");
  const [language, setLanguage] = useState("hi");

  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function searchNewsFromQuery(event) {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) return;

    navigate(`/?q=${query}&language=${language}`);
    setSearchQuery("");
  }

  useEffect(() => {
    let q = searchParams.get("q") ?? "all";
    let language = searchParams.get("language") ?? "hi";
    setQ(q);
    setLanguage(language);
  }, [searchParams]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to={`/?q=all&language=${language}`}
          className="d-flex align-items-center"
        >
          <img
            src="https://i.ibb.co/DgsKkwYH/Logo.png"
            alt="News Logo"
            width="42"
            height="42"
            className="me-2 rounded-circle"
          />
          <span className="fw-bold fs-5">DailyPulse</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="news-navbar" />

        <Navbar.Collapse id="news-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=all&language=${language}`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=politics&language=${language}`}
            >
              Politics
            </Nav.Link>

            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=crime&language=${language}`}
            >
              Crime
            </Nav.Link>

            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=education&language=${language}`}
            >
              Education
            </Nav.Link>

            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=jobs&language=${language}`}
            >
              Jobs
            </Nav.Link>

            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=science&language=${language}`}
            >
              Science
            </Nav.Link>

            <Nav.Link
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              as={Link}
              to={`/?q=technology&language=${language}`}
            >
              Technology
            </Nav.Link>

            <NavDropdown
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              title="Other"
              id="other-dropdown"
            >
              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=entertainment&language=${language}`}
              >
                Entertainment
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=cricket&language=${language}`}
              >
                Cricket
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=fifa&language=${language}`}
              >
                Fifa
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=sports&language=${language}`}
              >
                Sports
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=economics&language=${language}`}
              >
                Economics
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=world&language=${language}`}
              >
                World
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=india&language=${language}`}
              >
                India
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=jokes&language=${language}`}
              >
                Jokes
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              title="Language"
              id="language-dropdown"
            >
              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=${q}&language=en`}
              >
                English
              </NavDropdown.Item>

              <NavDropdown.Item
                style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                as={Link}
                to={`/?q=${q}&language=hi`}
              >
                हिन्दी
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form
            className="d-flex ms-lg-3 mt-3 mt-lg-0"
            onSubmit={searchNewsFromQuery}
          >
            <Form.Control
              style={{ fontSize: "14px", letterSpacing: "0.05em" }}
              type="search"
              placeholder="Search news..."
              className="me-2"
              name="searchQuery"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <Button variant="outline-info" type="submit">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
