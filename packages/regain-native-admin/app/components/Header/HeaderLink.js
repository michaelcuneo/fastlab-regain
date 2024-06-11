import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export function HeaderLink(props) {
  const color = 'black';
  const transparentColor = '';
  const borderColor = '';

  const ThisLink = styled(Link)`
    display: block;
    text-decoration: none;
    user-select: none;
    outine: 0;
    user-drag: none;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    font-family: brother-1816, sans-serif;
    font-weight: 600;
    font-size: 8pt;
    color: ${color}
    text-transform: uppercase;
    margin: 0px 15px 0px 15px;
    padding: 0.8vh 1.6vw 0.8vh 1.6vw;

    &:link {
      color: ${color};
      border: 1px solid transparent;
      border-bottom: 1px solid;
    }

    &:visited {
      color: ${color};
      border: 1px solid ${borderColor};
    }

    &:hover {
      color: ${transparentColor};
      border: 1px solid ${borderColor};
    }

    &:active {
      color: ${transparentColor};
      border: 1px solid ${borderColor};
    }

    &:focus {
      color: ${transparentColor};
      border: 1px solid ${borderColor};
    }
  `;

  return [
    <ThisLink
      to={props.to}
      key="Header"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </ThisLink>,
  ];
}

HeaderLink.props = {
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  mode: PropTypes.string,
};

export function MobileLink(props) {
  const color = '';
  const transparentColor = '';
  const borderColor = '';

  const ThisLink = styled(Link)`
    text-decoration: none;
    user-select: none;
    outine: 0;
    user-drag: none;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    font-family: brother-1816, sans-serif;
    font-weight: 600;
    font-size: 1.2vh;
    color: ${color}
    text-transform: uppercase;
    margins: 15px;
    padding: 0.8vh 1.6vw 0.8vh 1.6vw;

    &:link {
      color: ${color};
      border: 1px solid transparent;
      border-bottom: 1px solid;
    }

    &:visited {
      color: ${color};
      border: 1px solid ${borderColor};
    }

    &:hover {
      color: ${transparentColor};
      border: 1px solid ${borderColor};
    }

    &:active {
      color: ${transparentColor};
      border: 1px solid ${borderColor};
    }

    &:focus {
      color: ${transparentColor};
      border: 1px solid ${borderColor};
    }
  `;

  return [
    <ThisLink to={props.to} key="Header">
      {props.children}
    </ThisLink>,
  ];
}

MobileLink.props = {
  mode: PropTypes.string,
};
