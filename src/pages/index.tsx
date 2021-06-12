import Container from "@material-ui/core/Container";
import Header from "@/components/Layouts/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/container/About";
import Contact from "@/container/Contact";
import Footer from "@/container/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Breadcrumbs
          title="About"
          routes={[
            {
              title: "Home",
              pathname: "/",
            },
            {
              title: "About",
              pathname: "/about",
            },
          ]}
        />

        <About />

        <Contact />

        <Footer />
      </Container>
    </div>
  );
}
