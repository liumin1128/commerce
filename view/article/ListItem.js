import React, { PureComponent, Fragment, createRef } from 'react';
// import Waypoint from 'react-waypoint';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Html from '@/components/Html';
import { formatTime, getScrollTop } from '@/utils/common';

const styles = theme => ({
  content: {
    cursor: 'pointer',
  },
  fixed: {
    position: 'fixed',
    bottom: 0,
    boxShadow: '0 0px 12px 0px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'box-shadow 1s',
  },
  toolbar: {
    background: '#fff',
    height: 64,
    // minHeight: 64,
    // display: 'flex',
  },
});


@withStyles(styles)
export default class ListItem extends PureComponent {
  state = {
    isExpanded: false,
    isFixed: false,
    toolbarLeft: 0,
    toolbarWidth: 0,
  }

  content = createRef()

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
  }

  switch = () => {
    const { isExpanded } = this.state;
    this.setState({
      isExpanded: !isExpanded,
    }, () => {
      // 如果环境允许，创建自定义事件，触发滚动，以调整所有卡片状态
      if (document.createEvent) {
        // 创建event的对象实例。
        const event = document.createEvent('HTMLEvents');
        // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
        event.initEvent('scroll', true, false);
        // 触发自定义事件oneating
        document.dispatchEvent(event);
      }
    });
    if (!isExpanded) {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onResize);
    } else {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onResize);
    }
  }

  onScroll = () => {
    const { isExpanded, isFixed } = this.state;
    if (!isExpanded || !this.content) return;

    const st = getScrollTop();
    const sh = document.documentElement.clientHeight;
    const ot = this.content.offsetTop;
    const oh = this.content.offsetHeight;
    console.log(st, sh, ot, oh);

    if (st + sh < ot + oh && st + sh > ot + 200) {
      if (!isFixed) {
        this.setState({
          isFixed: true,
          toolbarLeft: this.content.offsetLeft,
          toolbarWidth: this.content.offsetWidth,
        });
      }
    } else if (isFixed) {
      this.setState({
        isFixed: false,
      });
    }
  }

  onResize = () => {
    const { isExpanded, isFixed } = this.state;
    if (!isExpanded || !this.content || !isFixed) return;
    // console.log('onResize');
    this.setState({
      toolbarLeft: this.content.offsetLeft,
      toolbarWidth: this.content.offsetWidth,
    });
  }

  render() {
    const { _id, title, user, createdAt, html, classes } = this.props;
    const { isExpanded, isFixed, toolbarLeft, toolbarWidth } = this.state;
    return (
      <div ref={(c) => { this.content = c; }}>

        <Card key={_id} id={_id}>
          <CardHeader
            avatar={(
              <Avatar aria-label="Recipe" className={classes.avatar} src={user.avatarUrl}>
                {user.nickname}
              </Avatar>
          )}
            action={(
              <IconButton>
                <MoreVertIcon />
              </IconButton>
          )}
            title={user.nickname}
            subheader={formatTime(createdAt, 'MM月DD日')}
          />
          {
          isExpanded
            ? (
              <Fragment>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {title}
                  </Typography>
                  <Html html={html} />
                </CardContent>

                <div style={{ height: 64 }}>
                  <div className={isFixed ? classes.fixed : undefined} style={{ width: toolbarWidth, left: toolbarLeft }}>
                    <Toolbar className={classes.toolbar}>
                      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                      </IconButton>
                      <Typography variant="h6" color="inherit" className={classes.grow}>
                          News
                      </Typography>
                      <Button color="inherit" onClick={this.switch}>收起</Button>
                    </Toolbar>
                  </div>
                </div>
              </Fragment>
            )
            : (
              <CardContent
                onClick={this.switch}
                className={classes.content}
              >
                <Typography variant="h6" component="h3">
                  {title}
                </Typography>
                <Typography component="div">
                  <p>
                    {`${html
                      .replace(/<[^>]+>/g, '')
                      .substring(0, 150)}......`}
                  </p>
                </Typography>
              </CardContent>
            )
          }
        </Card>
      </div>
    );
  }
}
