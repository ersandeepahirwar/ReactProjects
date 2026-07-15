export default function Footer() {
  const time = new Date().toLocaleString();

  return <div className="footer">{time}</div>;
}
