/**
 *
 * Spacer.js
 *
 * A spacer.
 * Props -
 * margin,
 * padding,
 * width,
 * height,
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Spacer(props) {
  const SpacerDiv = styled.div`
    width: ${props.width};
    height: ${props.height};
    content: '';
    margin: ${parseInt(props.margin, 10)};
    padding: ${parseInt(props.padding, 10)};
  `;

  return <SpacerDiv />;
}

Spacer.propTypes = {
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Spacer;
