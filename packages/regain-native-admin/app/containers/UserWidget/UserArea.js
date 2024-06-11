import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export function UserArea(props) {
  const UserAreaSpan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
    font-family: brother-1816, sans-serif;
    font-weight: 100;
    color: #000000;
    font-size: 0.8em;
  `;

  return <UserAreaSpan>{props.children}</UserAreaSpan>;
}

UserArea.propTypes = {
  children: PropTypes.node,
};

export function UserAreaMobile(props) {
  const UserAreaMobileSpan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
    font-family: brother-1816, sans-serif;
    font-weight: 100;
    color: #000000;
    font-size: 0.8em;
  `;

  return <UserAreaMobileSpan>{props.children}</UserAreaMobileSpan>;
}

UserAreaMobile.propTypes = {
  children: PropTypes.node,
};
