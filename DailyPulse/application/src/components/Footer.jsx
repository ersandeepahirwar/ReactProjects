import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5 border-top border-secondary">
      <Container>
        <div className="text-center">
          <small style={{ letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} DailyPulse • Developed by CodeySandeep
          </small>
        </div>
      </Container>
    </footer>
  );
}
