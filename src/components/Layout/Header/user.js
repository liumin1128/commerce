import React, { PureComponent, Fragment } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Query, graphql } from 'react-apollo';
import dynamic from 'next/dynamic';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { clearStorage } from '@/utils/store';
import { USERINFO } from '@/graphql/schema/user';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/container/login/modal'), {
  loading: () => null,
});


@graphql(USERINFO, { ssr: false })
export default class user extends PureComponent {
  state = {
    showLoginModal: false,
    anchorEl: null,
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLgout = async () => {
    const { data: { refetch } } = this.props;
    this.handleClose();
    clearStorage();
    // refetch();
    window.location.href = '/';
  }

  handleProfile = async () => {
    this.handleClose();
    Router.push('/user/profile');
  }


  refetch = () => {}

  onLoginSuccess = () => {
    const { data: { refetch } } = this.props;
    this.setState({ showLoginModal: false });
    refetch();
  }

  toogleModal = () => {
    this.setState(({ showLoginModal }) => ({ showLoginModal: !showLoginModal }));
  }

  renderLoginForm() {
    return (
      <DynamicComponentWithCustomLoading
        onLoginSuccess={this.onLoginSuccess}
        onClose={this.toogleModal}
      />
    );
  }

  renderUser() {
    const { data: { loading, error, userInfo = {} } } = this.props;

    if (loading) return null;
    if (userInfo._id) {
      const { anchorEl } = this.state;
      return (
        <Fragment>
          <ButtonBase
            centerRipple
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <Avatar style={{ background: 'rgba(0,0,0,0.1)' }} src={userInfo.avatarUrl}>{userInfo.nickname}</Avatar>
          </ButtonBase>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleProfile}>个人中心</MenuItem>
            {/* <MenuItem
              onClick={() => {
                this.handleClose();
                Router.push('/user/setting/info');
              }}
            >
              我的资料
            </MenuItem> */}
            <MenuItem
              onClick={() => {
                this.handleClose();
                Router.push('/user/setting');
              }}
            >
              设置
            </MenuItem>
            <MenuItem onClick={this.handleLgout}>注销登录</MenuItem>
          </Menu>
        </Fragment>

      );
    }
    // console.log(error);
    return (
      <Fragment>
        <Link href="/login/register"><Button color="inherit">注册</Button></Link>
        <Link href="/login"><Button style={{ background: 'rgba(255,255,255,0.1)' }} color="inherit">登录</Button></Link>


        {
          // <Button
          //   color="inherit"
          //   style={{ background: 'rgba(255,255,255,0.1)' }}
          //   onClick={this.toogleModal}
          // >
          //   登录
          // </Button>
          }
      </Fragment>
    );
  }

  render() {
    // console.log(this.props);
    const { showLoginModal } = this.state;
    return (
      <Fragment>
        {this.renderUser()}
        {showLoginModal && this.renderLoginForm()}
      </Fragment>
    );
  }
}
