import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: #2497B2;
    :hover {
      color: #30C3FC;
    }
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }
  h3 {
    text-align: left;
    font-family: 'Source Sans Pro';
    font-size: 26px;
    font-weight: semibold;
    line-height: 32px;
    letter-spacing: 0.6;
    margin-bottom: 10px;
    color: #170C3A;
  }
  input, textarea {
    background: #F5F4F6 0% 0% no-repeat padding-box;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;
    padding: 13px 21px 12px;
  }
  p {
    text-align: left;
    font-family: 'Source Sans Pro';
    font-size: 20px;
    font-weight: normal;
    line-height: 26px;
    letter-spacing: 0.6;
    margin-bottom: 10px;
    color: #8f8a9b;
  }
  label {
    text-align: left;
    font-family: 'Source Sans Pro';
    font-size: 20px;
    font-weight: semibold;
    line-height: 25px;
    letter-spacing: 0;
    color: #170C3A;
    opacity: 1;
  }
  .button {
    height: 50px;
    background: #365DF0 0% 0% no-repeat padding-box;
    border-radius: 5px;
    text-align: center;
    font: Semibold 18px/24px Source Sans Pro;
    letter-spacing: 0.36px;
    color: #FFFFFF;
    opacity: 1;
  }
  .IconMostSmallest { width: 10px;}
  .IconSmallest { width: 12px;}
  .IconSmaller { width: 15px;}
  .IconSmall {  width: 20px;}
  .Modal {
    position: relative;
  }
  .Overlay {
    background-color: #170C3A;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .closeButton {
    background-color: transparent;
    border: none;
    position: absolute;
    right: 15px;
    top: 15px;
  }
  .removeButton {
    background-color: #F95E5A;
    border-radius: 5px;
    border: none;
    text-align: center;
    font: Semibold 18px/24px 'Source Sans Pro';
    letter-spacing: 0.36px;
    color: #FFFFFF;
    padding: 12px 22px;
    cursor: pointer;
    :hover {
      background-color: #CC4C4C;
    }
    :active {
      background-color: #A53F3F;
    }
  }
  .cancelButton {
    background-color: #E1E7FD;
    border-radius: 5px;
    border: none;
    text-align: center;
    font: Semibold 18px/24px 'Source Sans Pro';
    letter-spacing: 0.36px;
    color: #365DF0;
    padding: 12px 22px;
    cursor: pointer;
    :hover {
      background-color: #CAD6FC;
    }
    :active {
      background-color: #B9C6FA;
    }
  }
  .tag + .tag {
    margin-left: 10px;
  }
`;
