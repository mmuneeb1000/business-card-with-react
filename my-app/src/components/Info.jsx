import profile from "../images/profile-id.jpg";

export default function Info() {
  return (
    <section className="head-section">
      <img src={profile} alt="colorful background, developer at work" />
      <h1>M. Muneeb</h1>
      <h3>Frontend Developer</h3>
      <a className="website-link" href="https://www.webdevpk.store">
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
