import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
    outline: none !important;
    border: 0px;
    user-drag: none;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100vh;
    width: 100vw;
    -webkit-overflow-scrolling: touch;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: rigid-square, sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  p,
  label {
    font-family: rigid-square, sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  .p-toolbar .p-component {
    border: 0px !important;
    box-shadow: 0px 1px 10px #888888;
  }

  .p-dataview .p-dataview-content {
    border: 0px !important;
    background: rgba(0, 0, 0, 0) !important;
  }
  
  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: black;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  .slide-enter {
    transform: translateY(-100%);
    transition: .3s cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-active {
    transform: translateY(0%);
  }

  .slide-leave {
    transform: translateY(0%);
    transition: .3s ease-in-out;
  }

  .slide-leave-active {
    transform: translateY(-100%);
  }

  .submenu-container {
    height: 300px;
    min-width: 200px;
    position: absolute;
    overflow: hidden;
    pointer-events: none;
  }

  nav {
    ul {
      li {
        list-style: none;
      }
    }
  }

  .nav {
    display: inline-block;  
    padding: 7.4vh 16.6vw 0px 0px;
    z-index: 2;
  }
  
  .nav__menu {
    float: right;
    line-height: 45px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .nav__submenu {
    width: auto;
    display: none;
    list-style: none;
    padding: 0px 0px 0px 15px;
    position: relative;
    pointer-events: all;
  }
    
  .nav__menu-item {
    display: inline-block;
    position: relative;

    &:hover .nav__submenu {
      display: block;
    }
  }
`;

export default GlobalStyle;
