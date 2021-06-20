import Container from "@material-ui/core/Container";
import Header from "@/components/Layouts/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import WinningProducts from "@/container/WinningProducts";
import Contact from "@/container/Contact";
import Footer from "@/container/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Breadcrumbs
          title="Winning Products"
          routes={[
            {
              title: "Home",
              pathname: "/",
            },
            {
              title: "Winning Products",
              pathname: "/winning-products",
            },
          ]}
        />

        <Contact />
        <Footer />
      </Container>
      {/* <Box p={20}></Box> */}
    </div>
  );
}
