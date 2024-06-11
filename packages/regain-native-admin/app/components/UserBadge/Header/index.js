import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Spacer from 'components/Spacer';

import Responsive from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

import UserWidget from 'containers/UserWidget';
import { CSSTransition } from 'react-transition-group';

import FastlabIconLW from 'images/Fastlab_LW.svg';
import FastlabIconLR from 'images/Fastlab_LR.svg';
import UoNLogoWhite from 'images/UoN_White.svg';
import UoNLogoBlack from 'images/UoN_Black.svg';

import { FastlabIconImg, FastlabIconImgSmall } from './FastlabIcon';
import { UoN, UoNMobile } from './UoN';

import { MobileMenu } from './MobileMenu';
import { Footer } from './Footer';
import { HeaderLink, MobileLink, DropLink } from './HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpened: false,
      dropdownMenuOpened: true,
    };
  }

  handleStateChange(state) {
    this.setState({
      mobileMenuOpened: state.isOpen,
    });
  }

  handleHover(e) {
    if (e) {
      this.setState(prevState => ({
        dropdownMenuOpened: !prevState.dropdownMenuOpened,
      }));
    }
  }

  closeMenu() {
    this.setState({
      mobileMenuOpened: false,
    });
  }

  toggleMenu() {
    this.setState(prevState => ({
      mobileMenuOpened: !prevState.mobileMenuOpened,
    }));
  }

  render() {
    const Desktop = props => <Responsive {...props} minWidth={1025} />;
    const Mobile = props => (
      <Responsive {...props} minWidth={0} maxWidth={1024} />
    );

    const { loggedIn } = this.props;

    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '50px',
        height: '50px',
        left: '25px',
        top: '25px',
      },
      bmBurgerBars: {
        background: 'white',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
      },
      bmCross: {
        background: 'white',
      },
      bmMenu: {
        background: 'black',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
      },
      bmMorphShape: {
        fill: '#373a47',
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
      },
      bmItem: {
        display: 'flex',
        flexDirection: 'column',
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.4)',
      },
    };

    return [
      <Desktop key="Desktop">
        <FastlabIconImg src={this.props.mode ? FastlabIconLR : FastlabIconLW} />
        <UoN src={this.props.mode ? UoNLogoBlack : UoNLogoWhite} />
        <div className="nav">
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <HeaderLink mode={this.props.mode} to="/">
                <FormattedMessage {...messages.about} />
              </HeaderLink>
            </li>
            <li className="nav__menu-item">
              <HeaderLink mode={this.props.mode} to="/staff">
                <FormattedMessage {...messages.researchers} />
              </HeaderLink>
            </li>
            <li className="nav__menu-item">
              <HeaderLink mode={this.props.mode} to="/projects">
                <FormattedMessage {...messages.research} />
              </HeaderLink>
            </li>
            <li
              className="nav__menu-item"
              onMouseEnter={e => this.handleHover(e)}
            >
              <HeaderLink mode={this.props.mode} to="#">
                <FormattedMessage {...messages.programs} />
              </HeaderLink>
              <div className="submenu-container" onMouseEnter={() => {}}>
                <CSSTransition
                  in={this.state.dropdownMenuOpened}
                  timeout={300}
                  classNames="slide"
                >
                  <ProgramsSubMenu onMouseEnter={() => {}} />
                </CSSTransition>
              </div>
            </li>
            <li className="nav__menu-item">
              <HeaderLink mode={this.props.mode} to="/contact">
                <FormattedMessage {...messages.contact} />
              </HeaderLink>
            </li>
            {!loggedIn ? (
              <li className="nav__menu-item">
                <HeaderLink mode={this.props.mode} to="/login">
                  <FormattedMessage {...messages.login} />
                </HeaderLink>
              </li>
            ) : (
              <li className="nav__menu-item">
                <UserWidget mode={this.props.mode} />
              </li>
            )}
          </ul>
        </div>
      </Desktop>,
      <Mobile key="Mobile">
        <Menu
          styles={styles}
          isOpen={this.state.mobileMenuOpened}
          onStateChange={state => this.handleStateChange(state)}
          customBurgerIcon={
            <img src={this.props.mode ? FastlabIconLR : FastlabIconLW} alt="" />
          }
        >
          <MobileMenu>
            <FastlabIconImgSmall
              src={this.props.mode ? FastlabIconLR : FastlabIconLW}
            />
            <Spacer height="20px" />
            <MobileLink to="/" onClick={() => this.closeMenu()}>
              <FormattedMessage {...messages.about} />
            </MobileLink>
            <MobileLink to="/staff" onClick={() => this.closeMenu()}>
              <FormattedMessage {...messages.researchers} />
            </MobileLink>
            <MobileLink to="/projects" onClick={() => this.closeMenu()}>
              <FormattedMessage {...messages.research} />
            </MobileLink>
            <MobileLink to="/programs" onClick={() => this.closeMenu()}>
              <FormattedMessage {...messages.programs} />
            </MobileLink>
            <MobileLink to="/rapid" onClick={() => this.closeMenu()}>
              <FormattedMessage {...messages.rapid} />
            </MobileLink>
            <MobileLink to="/contact" onClick={() => this.closeMenu()}>
              <FormattedMessage {...messages.contact} />
            </MobileLink>
            {!loggedIn ? (
              <MobileLink to="/login" onClick={() => this.closeMenu()}>
                <FormattedMessage {...messages.login} />
              </MobileLink>
            ) : (
              <LoggedInLinks />
            )}
            <Footer>
              <UoNMobile src={this.props.mode ? UoNLogoBlack : UoNLogoWhite} />
              <FormattedMessage {...messages.version} />
            </Footer>
          </MobileMenu>
        </Menu>
      </Mobile>,
    ];
  }
}

const ProgramsSubMenu = () => [
  <ul key="SubMenu" className="nav__submenu">
    <li>
      <DropLink to="/rapid">Rapid</DropLink>
    </li>
    <li>
      <DropLink to="/transmission">Transmission</DropLink>
    </li>
    <li>
      <DropLink to="/accelerators">Accelerators</DropLink>
    </li>
  </ul>,
];

const LoggedInLinks = () => [
  <MobileLink to="/admin/bio" onClick={() => this.closeMenu()}>
    <FormattedMessage {...messages.bio} />
  </MobileLink>,
  <MobileLink to="/admin/projects" onClick={() => this.closeMenu()}>
    <FormattedMessage {...messages.admin} />
  </MobileLink>,
  <UserWidget />,
];

Header.propTypes = {
  mode: PropTypes.bool,
  loggedIn: PropTypes.bool,
};

export default Header;
