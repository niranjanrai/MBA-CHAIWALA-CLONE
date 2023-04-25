const Footer = () => {
  /**  Footer Function */
  const footerLinks = (element) => {
    const allFooterLink = document.querySelectorAll(".footerLinks");

    /** Switch statement */

    switch (element) {
      case 0:
        allFooterLink.forEach((item, index) =>
          index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 1:
        allFooterLink.forEach((item, index) =>
          index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 2:
        allFooterLink.forEach((item, index) =>
          index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 3:
        allFooterLink.forEach((item, index) =>
          index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 4:
        allFooterLink.forEach((item, index) =>
          index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;
      case 5:
        allFooterLink.forEach((item, index) =>
          index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
        );
        break;

      /** -------------------------------------------------- */
      default:
        allFooterLink.forEach((item) => (item.style.opacity = 1));

        break;
    }
  };
  /**LinkBacktoNormal Funcion */
  const linkBackToNormal = () => {
    const allFooterLink = document.querySelectorAll(".footerLinks");
    allFooterLink.forEach((item) => (item.style.opacity = 1));
  };
  return (
    <>
      <footer>
        <h1>
          Let's <br /> #ConnectOnCutting?
        </h1>
        <aside onMouseLeave={linkBackToNormal}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)}
          >
            Home
          </a>

          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
          >
            Story
          </a>

          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
          >
            Media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => footerLinks(3)}
          >
            Franchise
          </a>
          <a
            href="/events"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
          >
            EventsFranchise
          </a>
          <a
            href="/chaiwalacares"
            className="footerLinks"
            onMouseOver={() => footerLinks(5)}
          >
            Chaiwala- Cares
          </a>
        </aside>
        <div>
          <h5>Phone</h5>
          <a href="mailto:info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mailto:franchise@mbachaiwala.com">
            Franchise@mbachaiwala.com
          </a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel: +91722905222">+91722905222</a>
        </div>
        <p> ©️ COPYRIGHT {new Date().getFullYear()} MBA CHAIWALA. MADE BY </p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
