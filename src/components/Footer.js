function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <p class="footer__copyright">&copy;&nbsp;{currentYear <= 2023 ? '2023' : `2022&ndash;${currentYear}`} Mesto Russia</p>
    </footer>
  );
}

export default Footer;