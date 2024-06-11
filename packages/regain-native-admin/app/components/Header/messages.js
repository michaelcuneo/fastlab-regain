/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

import { VERSION } from 'containers/App/constants';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  about: {
    id: `${scope}.about`,
    defaultMessage: 'ABOUT',
  },
  researchers: {
    id: `${scope}.researchers`,
    defaultMessage: 'RESEARCHERS',
  },
  research: {
    id: `${scope}.research`,
    defaultMessage: 'RESEARCH',
  },
  programs: {
    id: `${scope}.programs`,
    defaultMessage: 'PROGRAMS',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'CONTACT',
  },
  rapid: {
    id: `${scope}.rapid`,
    defaultMessage: 'RAPID',
  },
  login: {
    id: `${scope}.login`,
    defaultMessage: 'LOGIN',
  },
  bio: {
    id: `${scope}.bio`,
    defaultMessage: 'BIO',
  },
  admin: {
    id: `${scope}.admin`,
    defaultMessage: 'ADMIN',
  },
  version: {
    id: `${scope}.version`,
    defaultMessage: `v${VERSION}`,
  },
});
