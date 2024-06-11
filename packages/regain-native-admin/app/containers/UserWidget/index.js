import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MediaQuery from 'react-responsive';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';

import UserBadge from 'components/UserBadge';
import UserModal from 'components/UserModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Box } from 'rebass';

import { Auth } from 'aws-amplify';

import { makeSelectUser } from 'containers/User/selectors';

import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { UserName, UserNameMobile } from './UserName';
import { UserArea, UserAreaMobile } from './UserArea';
import {
  DropDown,
  DropDownButton,
  DropDownContent,
  DropDownLink,
} from './Dropdown';
import { SignOutDiv, SignOutDivMobile } from './SignOutDiv';

import messages from './messages';

class UserWidget extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {};
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  handleSignOut() {
    Auth.signOut();
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
  }

  render() {
    const { user } = this.props;

    if (user) {
      return [
        <MediaQuery key="widgetDesktop" minWidth={992}>
          {matches => {
            if (matches) {
              return [
                <UserArea key="userArea">
                  <UserBadge key="userBadge" picture={user.picture} />
                  <UserName key="userName">{user.username} </UserName>
                  <DropDown key="dropDown">
                    <DropDownButton
                      onMouseDown={this.show}
                      onFocus={this.close}
                    />
                    <UserModal
                      closeOnOuterClick
                      show={this.state.show}
                      onClose={this.close}
                      transitionSpeed={50}
                    >
                      <DropDownContent key="content">
                        <DropDownLink to="/adminbio" onClick={this.close}>
                          <FormattedMessage {...messages.bio} />
                        </DropDownLink>
                        <DropDownLink to="/adminprojects" onClick={this.close}>
                          <FormattedMessage {...messages.admin} />
                        </DropDownLink>
                        <hr />
                        <SignOutDiv
                          role="link"
                          tabIndex={0}
                          onClick={this.handleSignOut}
                          onKeyDown={this.handleSignOut}
                        >
                          <div>Sign Out</div>
                          <div style={{ padding: '0px 10px 0px 10px' }}>
                            <FontAwesomeIcon icon={faSignOutAlt} />
                          </div>
                        </SignOutDiv>
                      </DropDownContent>
                    </UserModal>
                  </DropDown>
                </UserArea>,
              ];
            }
            if (!matches) {
              return [
                <UserAreaMobile key="userArea">
                  <Box>
                    <SignOutDivMobile
                      role="link"
                      tabIndex={0}
                      onClick={this.handleSignOut}
                      onKeyDown={this.handleSignOut}
                    >
                      Sign Out
                    </SignOutDivMobile>
                  </Box>
                  <Box>
                    <UserNameMobile>{user.username}</UserNameMobile>
                    <UserBadge picture={user.picture} />
                  </Box>
                </UserAreaMobile>,
              ];
            }
            return null;
          }}
        </MediaQuery>,
      ];
    }
    return null;
  }
}

UserWidget.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(UserWidget);
