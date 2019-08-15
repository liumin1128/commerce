import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  iframe: {
    width: '100%',
    // maxWidth: 300,
    height: 0,
    paddingTop: '50%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: '0 10px 20px 0 rgba(0,0,0,0.3)',
    '& iframe': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
}));
