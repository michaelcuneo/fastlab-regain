import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DropDown = styled.div`
  display: inline-flex;
  align-items: right;
  align-content: right;
  position: relative;
`;

export function DropDownButton(props) {
  const Button = styled.button`
    padding: 0px 15px 0px 0px;
    outline: none !important;
    color: #000000;
  `;

  return (
    <Button onMouseDown={props.onMouseDown} onFocus={props.onFocus}>
      &#9660;
    </Button>
  );
}

DropDownButton.propTypes = {
  onMouseDown: PropTypes.func,
  onFocus: PropTypes.func,
};

export function DropDownContent(props) {
  const Content = styled.div`
    width: 240px;
    height: auto;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    border-radius: 5px;
    background: #000000;
    z-index: 999999;
  `;

  return <Content>{props.children}</Content>;
}

DropDownContent.propTypes = {
  children: PropTypes.node,
};

export const DropDownLink = styled(Link)`
  display: flex;
  text-align: end;
  width: 240px;
  text-decoration: none;
  padding: 10px 10px 10px 10px;

  -webkit-touch-callout: none;
  user-select: none;
  user-drag: none;
  cursor: pointer;
  outline: 0;
  font-family: brother-1816, sans-serif;
  font-weight: 400;
  font-size: 1.4vh;

  &:link {
    color: #000000;
  }

  &:visited {
    color: #000000;
  }

  &:hover {
    color: #ec184a;
    text-decoration: none;
  }

  &:active {
    color: #ec184a;
    text-decoration: none;
  }
`;
