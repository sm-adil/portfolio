import Image from "next/image";

const Header = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-column">
          <Image
            priority
            width={540}
            height={400}
            alt="Hero"
            src="/images/avatar.svg"
          />
        </div>
        <div className="hero-column">
          <h1 className="hero-title">
            Hi, I'm Adil{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="hero-paragraph">
            I’m a free software <strong>hacktivist</strong>,{" "}
            <strong>developer</strong> and <strong>designer</strong> from
            Bangalore, India{" "}
            <span role="img" aria-label="indian flag">
              🇮🇳
            </span>
            I build free and open source projects and also focus on UI/UX
            designing and development.
          </p>
          <a className="button" href="#skills">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
