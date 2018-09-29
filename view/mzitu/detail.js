import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import { MZITU_DETAIL } from '@/graphql/schema/mzitu';

const styles = theme => ({
  root: {
    '& > img': {
      width: '100%',
      marginBottom: theme.spacing.unit * 2,
      // boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.05)',
      borderRadius: theme.spacing.unit,
    },
  },
});
@withStyles(styles)
export default class MeizituDetail extends PureComponent {
  render() {
    const { classes, id } = this.props;
    return (
      <Query query={MZITU_DETAIL} variables={{ _id: id }}>
        {({ loading, error, data = {} }) => {
          const { detail = {} } = data;
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <div className={classes.root}>
              {detail.title}
              {detail.pictures.map(i => (
                <LazyLoad
                  debounce={300}
                  key={i}
                  height={300}
                  // placeholder={<div style={{ minHeight: 300 }} />}
                >
                  <img src={i} alt="" />
                </LazyLoad>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
