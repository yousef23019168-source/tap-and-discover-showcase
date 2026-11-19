export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <strong className="footer-brand">E-Guard</strong>
          <br />
          Smarter Care. Safer Living.
        </div>
        <div>
          <a href="#about">About</a>
          <a href="#solution">Solution</a>
          <a href="#explore">Explore</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-legal">
          E-Guard is currently under development. It is not a commercially available product and is not a medical
          device.
          <br />© {new Date().getFullYear()} E-Guard Team
        </div>
      </div>
    </footer>
  );
}
