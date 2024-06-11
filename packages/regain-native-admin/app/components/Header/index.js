import React from 'react';
import { FormattedMessage } from 'react-intl';

import Spacer from 'components/Spacer';

import Responsive from 'react-responsive';
import { slide as Menu } from 'react-burger-menu';

import UserWidget from 'containers/UserWidget';

import regain from 'images/regain.png';
import { RegainImage } from './RegainImage';

import { HeaderMenuDiv } from './Divs';
import { MobileMenu } from './MobileMenu';
import { Footer } from './Footer';
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
        <HeaderMenuDiv>
          <RegainImage src={regain} />
          <UserWidget />
        </HeaderMenuDiv>
      </Desktop>,
      <Mobile key="Mobile">
        <Menu
          styles={styles}
          isOpen={this.state.mobileMenuOpened}
          onStateChange={state => this.handleStateChange(state)}
          customBurgerIcon={<img src={regain} alt="" />}
        >
          <MobileMenu>
            <RegainImage src={regain} />
            <Spacer height="20px" />
            <UserWidget />
            <Footer>
              <RegainImage src={regain} />
              <FormattedMessage {...messages.version} />
            </Footer>
          </MobileMenu>
        </Menu>
      </Mobile>,
    ];
  }
}

export default Header;
