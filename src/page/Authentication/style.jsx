import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const Banner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  
`;

const FormBody = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
   
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: normal;
  ${({theme}) => css`
    color: ${theme.colors.titleMenuHover}  
  `}
`;

const Text = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
  
   ${({theme}) => css`
    color: ${theme.colors.titleLogo}  
  `}
`;

const Fieldset = styled.div`
  padding: 7px;
  display: flex;
  justify-content: flex-end;
  
  input{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #AAAAAA;
    border-radius: 5px;
    padding: 10px 15px;
    }
  
  button{
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    padding: 10px 25px;
    border: none;
    border-radius: 5px;
    
    ${({theme}) => css`
      background: ${theme.colors.titleLogo};
      color: ${theme.colors.titleWhite};
    `}
  }
`;

export {
    Banner,
    FormBody,
    Title,
    Text,
    Fieldset
}