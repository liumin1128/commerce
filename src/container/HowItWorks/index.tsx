import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Image from "@/components/Image";
import NavTabsVertical from "@/components/NavTabsVertical";
import { useStyles } from "./styles";

function SimpleTabs() {
  const classes = useStyles();

  const handleGoto = (anchorName: string) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <NavTabsVertical
            navList={[
              {
                label: "Assess The Product Idea",
                value: "1",
              },
              {
                label: "Bring Into Project Schedule",
                value: "2",
              },
              {
                label: "Analyze Material & Techniques",
                value: "3",
              },
              {
                label: "Start Manufacturing",
                value: "4",
              },
              {
                label: "Accept Orders",
                value: "5",
              },
              {
                label: "Sell By Our Own Shop",
                value: "6",
              },
              {
                label: "Ship To End Customers",
                value: "7",
              },
            ]}
            onChange={(value) => {
              console.log(value);
              handleGoto(value);
            }}
          />
        </Grid>

        <Grid
          item
          style={{
            flex: 1,
            borderLeft: "1px #ddd solid",
            marginLeft: -3,
            paddingLeft: 40,
          }}
        >
          <div>
            <Grid container spacing={3} id="1">
              <Grid item xs={12} md={6}>
                <Image
                  src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s02-img-1.jpg"
                  style={{ paddingTop: "125%", borderRadius: 20 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h3">
                      Assess the Product Idea
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      We might be inspired in the consulting process by you or
                      any other creative seller.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Dowch understands that on researching the viability of a
                      product, nothing can go wrong in your product research!
                      Once we detect a product that is in the rising stage of
                      its life cycle, we will have a series of analysis with our
                      metrics within our development team, supply chain team and
                      sales team.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box p={6} />

            <Grid container spacing={3} id="2">
              <Hidden smUp>
                <Grid item xs={12} md={6}>
                  <Image
                    src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s03-img-1.jpg"
                    style={{ paddingTop: "125%", borderRadius: 20 }}
                  />
                </Grid>
              </Hidden>

              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h2">
                      Bring into Project Schedule
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Bring into Project Schedule In our product planning
                      procedure, if the product idea is fully assessed as a good
                      one worthy of mass production, we will bring it on our
                      project schedule and arrange everything before it can be
                      put into mass production.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      t is our early stage of preparing a product that allows
                      you to get in-stock winning products before anyone else
                      can do. By doing so, Dowch bears your risk of overstock
                      and brings you more chances to boost the sales.
                    </Typography>
                    <Box p={2} />
                  </Box>
                </Box>
              </Grid>

              <Hidden smDown>
                <Grid item xs={12} md={6}>
                  <Image
                    src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s03-img-1.jpg"
                    style={{ paddingTop: "125%", borderRadius: 20 }}
                  />
                </Grid>
              </Hidden>
            </Grid>
            <Box p={6} />

            <Grid container spacing={3} id="3">
              <Grid item xs={12} md={6}>
                <Image
                  src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s04-img-1.jpg"
                  style={{ paddingTop: "125%", borderRadius: 20 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h2">
                      Analyze Material & Techniques
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Before we can start mass production, it is critical to
                      study on the materials of the launching product. This
                      enables us to negotiate the price and lead time with our
                      vetted suppliers, which is important to you.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      We will reach out to qualified suppliers for all materials
                      and receive multiple quotations to compare and select the
                      most cost-effective one. Learn more about our supplier
                      management.
                    </Typography>
                    <Box p={2} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box p={6} />

            <Grid container spacing={3} id="4">
              <Hidden smUp>
                <Grid item xs={12} md={6}>
                  <Image
                    src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s05-img.jpg"
                    style={{ paddingTop: "125%", borderRadius: 20 }}
                  />
                </Grid>
              </Hidden>

              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h2">
                      Assemble-to-Order Production
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Traditional factories would never catch up with the pace
                      of E-commerce, while Dowch's flexible manufacturing makes
                      it possible to enter the market at the right time.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      We will make sure that all materials needed for assembling
                      the product are in adequate stock, therefore when you
                      place an order, no matter how high the volume is and how
                      urgent it is, we can assemble them at once, as well as
                      making sure of the product quality.
                    </Typography>
                    <Box p={2} />
                  </Box>
                </Box>
              </Grid>

              <Hidden smDown>
                <Grid item xs={12} md={6}>
                  <Image
                    src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s05-img.jpg"
                    style={{ paddingTop: "125%", borderRadius: 20 }}
                  />
                </Grid>
              </Hidden>
            </Grid>
            <Box p={6} />

            <Grid container spacing={3} id="5">
              <Grid item xs={12} md={6}>
                <Image
                  src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s06-img-1.jpg"
                  style={{ paddingTop: "125%", borderRadius: 20 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h2">Accept Orders</Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      In a few clicks you can place an order and enjoy all the
                      services offered by Dowch.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Sit back in your chair and study how to promote your SKU.
                      Dowch takes care of all the tricky jobs for you, which
                      include:
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body2">
                      Package design and supplies sourcing
                    </Typography>

                    <Typography variant="body2">
                      Photography and video for marketing
                    </Typography>

                    <Typography variant="body2">
                      Package design and supplies sourcing
                    </Typography>

                    <Typography variant="body2">FBA preparations</Typography>

                    <Typography variant="body2">Warehousing</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box p={6} />

            <Grid container spacing={3} id="6">
              <Hidden smUp>
                <Grid item xs={12} md={6}>
                  <Image
                    src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s07-img.jpg"
                    style={{
                      paddingTop: "125%",
                      borderRadius: 20,
                      boxShadow: "0 20px 32px 8px rgb(152 159 174 / 20%)",
                    }}
                  />
                </Grid>
              </Hidden>

              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h2">
                      Sold Through Our Own Shop
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Dowch sells all products we develop to end customers in
                      our own shop, just as you do.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      We never fight a price war with you and do harm to your
                      business. Instead, we gain the first-hand sales data and
                      instant feedback that helps to optimize our product
                      portfolio.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      With all this information on hand and our in-house
                      assembly lines, adjusting our productivity can be done in
                      pace with the actual market demand.
                    </Typography>
                    <Box p={2} />
                  </Box>
                </Box>
              </Grid>

              <Hidden smDown>
                <Grid item xs={12} md={6}>
                  <Image
                    src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s07-img.jpg"
                    style={{
                      paddingTop: "125%",
                      borderRadius: 20,
                      boxShadow: "0 20px 32px 8px rgb(152 159 174 / 20%)",
                    }}
                  />
                </Grid>
              </Hidden>
            </Grid>
            <Box p={6} />

            <Grid container spacing={3} id="7">
              <Grid item xs={12} md={6}>
                <Image
                  src="https://www.dowch.com/wp-content/themes/mml-theme/dist/img/p03/p03-s08-img.jpg"
                  style={{ paddingTop: "125%", borderRadius: 20 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Hidden smUp>
                  <Box p={2} />
                </Hidden>

                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  height="100%"
                >
                  <Box maxWidth={506}>
                    <Typography variant="h2">
                      Shipping to End Customers
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Dowch manages more than just supply chain. Helping all our
                      clients to deal with logistics is our great honor as a
                      one-stop E-commerce supply chain solution provider.
                    </Typography>
                    <Box p={2} />

                    <Typography variant="body1">
                      Our logistics services include shipping the goods to the
                      Amazon FBA warehouse and directly shipping the package to
                      your customers' address. With our logistic service, you
                      don't even need to fill in a single express form but still
                      result in higher customer satisfaction.
                    </Typography>
                    <Box p={2} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box p={6} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SimpleTabs;
