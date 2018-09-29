
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import SearchBar from '@/view/mzitu/searchBar';
import Tags from '@/view/mzitu/tagsSmall';
import Detail from '@/view/mzitu/detail';
import { withRouter } from 'next/router';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  body: {
    maxWidth: 760,
    width: '100%',
    margin: '0 auto',
  },
  container: {
    boxSizing: 'border-box',
    margin: 0,
    // border: '1px red solid',
    width: '100%',
    '@media (max-width: 960px)': {
      margin: 0,
    },
  },
});

@withRouter
@withStyles(styles)
export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { classes, router } = this.props;
    const { id } = router.query;
    return (
      <div className={classes.root}>
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={16}>
            <Grid item xs={12} sm={12} md={8}>
              <div className={classes.body}>
                <Detail id={id} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className={classes.body}>

                <Card>
                  <CardContent>
                    <SearchBar />
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Tags />
                  </CardContent>
                </Card>

              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}