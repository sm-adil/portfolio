import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h3>Let's work together!</h3>
        <p>
          If you’d like to reach out about a project or to chat, just drop me a
          message below{" "}
          <span role="img" aria-label="links">
            👇
          </span>
        </p>
        <div className="social-media" id="contact">
          <a href="https://www.github.com/sm-adil">
            <Image
              width={20}
              height={20}
              alt="github"
              src="/images/github.svg"
            />
          </a>
          <a href="https://twitter.com/smadil_">
            <Image
              width={20}
              height={20}
              alt="twitter"
              src="/images/twitter.svg"
            />
          </a>
          <a href="https://www.linkedin.com/in/sm-adil">
            <Image
              width={20}
              height={20}
              alt="linkedIn"
              src="/images/linkedin.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
