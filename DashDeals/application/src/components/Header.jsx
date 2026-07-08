import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="shadow-sm"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://i.ibb.co/DzQ2fdN/Logo.png"
            alt="DashDeals Logo"
            width={40}
            height={40}
            className="me-2"
          />
          <span className="fw-bold text-white">DashDeals</span>
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown
              title="Explore"
              id="explore-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#new-arrivals">
                New Arrivals
              </NavDropdown.Item>
              <NavDropdown.Item href="#best-sellers">
                Best Sellers
              </NavDropdown.Item>
              <NavDropdown.Item href="#collections">
                Collections
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#special-offers">
                Special Offers
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#about">About Us</Nav.Link>

            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
