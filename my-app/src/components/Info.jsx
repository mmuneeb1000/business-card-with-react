export default function Info() {
  return (
    <section className="head-section">
      <img src="/src/images/profile-id.jpg" />
      <h1>M. Muneeb</h1>
      <h3>Frontend Developer</h3>
      <a className="website-link" href="#">
        muneeb.website
      </a>
      <div className="button-container">
        <a
          className="email-btn"
          href="mailto:muneebhashmi8@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-solid fa-at"></i>Email
        </a>
        <a
          className="linkedin-btn"
          href="https://www.linkedin.com/in/m-muneeb-a9984633b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin-in"></i>Linkedin
        </a>
      </div>
    </section>
  );
}
