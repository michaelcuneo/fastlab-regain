import React from 'react';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import Spacer from 'components/Spacer';

import Responsive from 'react-responsive';

import { FooterDiv } from './Divs';
import messages from './messages';

function Footer() {
  const Desktop = props => <Responsive {...props} minWidth={992} />;

  return (
    <Desktop>
      <FooterDiv>
        <LocaleToggle />
        <Spacer height="0px" width="15px" />
        <FormattedMessage {...messages.copyMessage} />
      </FooterDiv>
    </Desktop>
  );
}

export default Footer;
