import Navbar from "@components/navbar";
import Footer from "@components/footer";
import Header from "@components/home/header";
import Skills from "@components/home/skills";
import Projects from "@components/home/projects";

const App = () => {
  return (
    <>
      <Navbar />
      <div role="main">
        <Header />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default App;
