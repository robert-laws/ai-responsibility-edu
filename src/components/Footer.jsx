function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-attribution">
          {/* PLACEHOLDER: Add institution name or attribution here */}
          AI Responsibility Education
        </p>
        <p className="footer-copyright">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
