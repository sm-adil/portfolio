import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Image
          priority
          width={100}
          height={45}
          alt="SMA."
          src="/images/logo.svg"
        />
        <nav>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
