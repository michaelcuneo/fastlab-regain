/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';
import { VERSION } from 'containers/App/constants';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  copyMessage: {
    id: `${scope}.license.message`,
    defaultMessage: `© REGAIN | THE SCHOOL OF CREATIVE INDUSTRIES | THE UNIVERSITY OF NEWCASTLE. v${VERSION}`,
  },
});
