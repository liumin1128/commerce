import Container from "@material-ui/core/Container";
import Header from "@/components/Layouts/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/container/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Breadcrumbs
          title="Blog"
          routes={[
            {
              title: "Home",
              pathname: "/",
            },
            {
              title: "Blog",
              pathname: "/blog",
            },
          ]}
        />

        <Footer />
      </Container>
      {/* <Box p={20}></Box> */}
    </div>
  );
}
