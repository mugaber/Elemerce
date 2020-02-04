import styled, { css } from "styled-components";

const NormalStyles = css`
  color: white;
  background-color: black;

  &:hover {
    color: black;
    border: 1px solid black;
    background-color: white;
  }
`;

const GoogleStyles = css`
  color: white;
  background-color: #4285f4;

  &:hover {
    border: none;
    background-color: #357ae8;
  }
`;

const InvertedStyles = css`
  color: black;
  border: 1px solid black;
  background-color: white;

  &:hover {
    color: white;
    border: none;
    background-color: black;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogle) {
    return GoogleStyles;
  }

  return props.inverted ? InvertedStyles : NormalStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: none;

  ${getButtonStyles}
`;
