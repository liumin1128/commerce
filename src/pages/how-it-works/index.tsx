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
              title: "How It Works",
              pathname: "/how-it-works",
            },
          ]}
        />

        <About />

        <Contact />

        <Footer />
      </Container>
      {/* <Box p={20}></Box> */}
    </div>
  );
}
